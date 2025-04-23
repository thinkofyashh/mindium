import { Hono } from 'hono'
//import { PrismaClient } from '@prisma/client/edge'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'
import { cors } from 'hono/cors'
import { signupInput,signInInput,createBlogInput,updateBlogInput } from '@yashrawatechnologies/mindium-commons'



type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;

}
type context={
  userId: string
}



const app = new Hono<{ Bindings: Bindings,Variables:context }>()


//app.route('/api/v1/user',userRouter);
//app.route('/api/v1/blog',blogRouter);


app.use('/api/*', cors())
app.post('/api/v1/user/signup',async (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{

  

  // expecting body from the post route .
  const body = await c.req.json()

  // checking it (by zod validation)
  const {success}= signupInput.safeParse(body);

  // if it doesnt have correct structure which is specified in the zod schema
  if(!success){
    return c.json({msg:"Invalid Credentials .Please check the credentials !!"})
  }

  // checking if email,name and password is there in the body or not .
  if (!body.email || !body.password || !body.name) {
    return c.json({ error: "Email, password and name are required" }, 400)
  }

  // creating the user in the data base 
  const user =await prisma.user.create({
    data:{
      name:body.name,
      email:body.email,
      password:body.password
    }
  })

  // checking if the user successfully created or not . if created wheather it has  user id or not .
  if (!user || !user.id) {
    return c.json({ error: "Failed to create user properly" }, 500)
  }

  // creating the valid JWT token for the user .
  const token=await sign({id:user.id},c.env.JWT_SECRET)



  return c.json({token});
}catch(e){
  return c.json({error:e instanceof Error ? e.message : String(e)})
}

}

)

app.post('/api/v1/user/signin',async(c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{

  // getting email id from the user 

  const body=await c.req.json()

  const {success}=signInInput.safeParse(body)

  if(!success){
    return c.json({error:"Invalid input"},400)
  }
  // checking if the email id is present or not in the db

  const user =await prisma.user.findUnique({
    where:{
      email:body.email,
      password:body.password

    }
  })
  // if the email id dont exists .

  if(!user){
    return c.json({error:"User not found"},401)
  }
  // if the email id exists token is sent to the user .

  const token=await sign({user:user.id},c.env.JWT_SECRET)

  return c.json({token})

}catch(e){

  return c.json({error:e instanceof Error ? e.message : String(e)})


}
  
  }

)

app.use('/api/v1/blog/*',async(c,next)=>{

  // expecting the token from headers in authorization 
  const response = c.req.header("Authorization") || "";

  // spliting the token since it is in the format Bearer kjbfjhabfa
  const tokenToBeVerify=response.split(" ")[1];

  try{

    // verifying the token if it is ok or not (if it is ok it will return us the user object)
    const isValid=await verify(tokenToBeVerify,c.env.JWT_SECRET)

    // if the token is not ok then we will send the user in this check 
    if(!isValid.id){
      return c.json({error:"Invalid token"},401)
    }

    // if all good then it can accesss the route .

   if(isValid){
    c.set("userId",String(isValid.id))
   }

   await  next();

  }catch(e){
    return c.json({error:e instanceof Error ? e.message : String(e)},401)
  }

})


app.post('/api/v1/blog',async (c)=>{
  

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{
  const body= await c.req.json();

  const {success}=createBlogInput.safeParse(body);

  if(!success){
    return c.json({error:"Invalid input"},400)
  }
  const authorId=c.get("userId")

const res=await prisma.post.create({
  data:{
    title:body.title,
    content:body.content,
    authorId:authorId
    }
})

return c.json({id:res.id})
}catch(e){
  return c.json({error:e instanceof Error ? e.message : String(e)},500)
}
  
 // return c.text("hello")}
}

)

app.get('/api/v1/blog/bulk', async(c) => {


  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())


  try{
    const posts = await prisma.post.findMany(
      {
        select:{
          title:true,
          content:true,
          id:true,
          author:{
            select:{
              name:true
            }
          }
        }
      }
    )
  
    return c.json(posts);
  }catch(e){
    return c.json({error:e instanceof Error ? e.message : String(e)},401)
  }

}

)

app.put('/api/v1/blog',async (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{
  const body= await c.req.json();

  const {success}=updateBlogInput.safeParse(body);

  if(!success){
    return c.json({error:"Invalid request"},400)
  }

const res=await prisma.post.update({
  where:{
    id:body.id
  },
  data:{
    title:body.title,
    content:body.content,
    }
})

return c.json({msg:"Updated Successfully "})
}catch(e){
  return c.json({error:e instanceof Error ? e.message : String(e)},401)
}
  

}

)

app.get('/api/v1/blog/:id', async(c) => {

  // route is working correctly 
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

const id = c.req.param('id')

try{

const post=await prisma.post.findUnique({
  where:{
    id:id
  },select:{
    title:true,
    content:true,
    id:true,
    author:{
      select:{
        name:true
      }
    }
  }
})

if(!post){
  return c.json({msg:"Post not found"})
}
return c.json(post)
}catch(e){
  return c.json({error:e instanceof Error ? e.message : String(e)},401)
}
  
})

export default app
