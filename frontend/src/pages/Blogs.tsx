import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { AppBar } from '../components/AppBar';
import { useBlogs } from '../hooks';

export const Blogs = () => {
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            loading...
        </div>
    }
    return (
        
        <div className="">

            <AppBar></AppBar>
            {blogs.map((blog)=>{


                return <BlogCard authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate='2 feb 2024'></BlogCard>
            })}
           
        </div>
    )
}