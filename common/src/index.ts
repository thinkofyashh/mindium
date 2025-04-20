import z from "zod";


// this is what our backend needs .
export const signupInput=z.object({
    name:z.string().optional(),
    email:z.string(),
    password:z.string(),
})

export const signInInput=z.object({
    email:z.string(),
    password:z.string(),
})

export const createBlogInput=z.object({
    title:z.string(),
    content:z.string(),
})

export const updateBlogInput=z.object({
    title:z.string(),
    content:z.string(),
    id:z.number()
})

// this is what our frontend needs .
export type SignupInput=z.infer<typeof signupInput> 
export type SignInInput=z.infer<typeof signInInput> 
export type CreateBlogInput=z.infer<typeof createBlogInput>
export type UpdateBlogInput=z.infer<typeof updateBlogInput>





