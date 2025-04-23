import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { AppBar } from '../components/AppBar';
import { useBlogs } from '../hooks';
import { BlogSkeleton } from '../components/BlogSkeleton';

export const Blogs = () => {
    const {loading,blogs}=useBlogs();
    if(loading){
        return <div>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
            <BlogSkeleton></BlogSkeleton>
        </div>
    }
    return (
        
        <div className="">

            <AppBar></AppBar>
            {blogs.map((blog)=>{


                return <BlogCard id={blog.id} authorName={blog.author.name} title={blog.title} content={blog.content} publishedDate='2 feb 2024'></BlogCard>
            })}
           
        </div>
    )
}