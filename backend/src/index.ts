import { Hono } from 'hono'
//import { PrismaClient } from '@prisma/client/edge'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { decode, sign, verify } from 'hono/jwt'


type Bindings = {
  DATABASE_URL: string;
  JWT_SECRET: string;
}

const app = new Hono<{ Bindings: Bindings }>()





app.post('/api/v1/user/signup',async (c)=>{

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())

try{

  // expecting body from the post route .
  const body = await c.req.json()

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

app.post('/api/v1/blog',(c)=>{
  
  return c.text("hello")}

)

app.get('/api/v1/blog/bulk', async(c) => {


  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())


  const posts = await prisma.post.findMany()

  return c.json(posts);

}

)

app.put('/api/v1/blog',(c)=>{
  
  return c.text('hello hono')}

)

app.get('/api/v1/blog/:id', async(c) => {
  
})

export default app
