import axios from "axios";
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config";



interface blogs{
    title:string;
    content:string,
    id:string,
    author: {
            name:string
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