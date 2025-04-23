import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";



export interface blogs{
    title:string;
    content:string,
    id:string,
    author: {
            name:string
        }
}


export const useBlog=({id}:{id:string})=>{
    const [loading,setloading]=useState(true);
    const [blogs,setBlog]=useState<blogs>();

    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{headers:{
            Authorization:`Bearer ${token}`
        }}).then(res=>{
            setBlog(res.data)
            setloading(false)
        })
    },[id])
    return {
        blogs,
        loading
    }



}
export const useBlogs=()=>{
    const [loading,setloading]=useState(true);
    const [blogs,setBlog]=useState<blogs[]>([]);

    useEffect(()=>{
        const token = localStorage.getItem('token');
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{headers:{
            Authorization:`Bearer ${token}`
        }}).then(res=>{
            setBlog(res.data)
            setloading(false)
        })
    },[])
    return {
        blogs,
        loading
    }

}