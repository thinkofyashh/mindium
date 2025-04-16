import { Hono } from 'hono'
//import { PrismaClient } from '@prisma/client/edge'
import { PrismaClient } from './generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'


type Bindings = {
  DATABASE_URL: string;
}

const app = new Hono<{ Bindings: Bindings }>()





app.post('/api/v1/user/signup',(c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
}).$extends(withAccelerate())


  
  return c.text("hello")}

)

app.post('/api/v1/user/signin',(c)=>{
  
  return c.text("hello")}

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
