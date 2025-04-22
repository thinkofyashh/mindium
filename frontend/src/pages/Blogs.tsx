import React from 'react';
import { BlogCard } from '../components/BlogCard';
import { AppBar } from '../components/AppBar';

export const Blogs = () => {
    return (
        
        <div className="">
            <AppBar></AppBar>
            <BlogCard 
            authorName={"yash Rawat"}
            title={"how to reduce fat"}
            content={"eat calorie deficit diet and also eat very clean diet and have a good protien intake .it should be equal to wieght of your body ."}
            publishedDate={"2 feb 2024"}
            ></BlogCard>
            <BlogCard 
            authorName={"yash Rawat"}
            title={"how to reduce fat"}
            content={"eat calorie deficit diet and also eat very clean diet and have a good protien intake .it should be equal to wieght of your body ."}
            publishedDate={"2 feb 2024"}
            ></BlogCard>
            <BlogCard 
            authorName={"yash Rawat"}
            title={"how to reduce fat"}
            content={"eat calorie deficit diet and also eat very clean diet and have a good protien intake .it should be equal to wieght of your body ."}
            publishedDate={"2 feb 2024"}
            ></BlogCard>
        </div>
    )
}