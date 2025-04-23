import { useState } from "react";
import { AppBar } from "../components/AppBar";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
export const Publish=()=>{

    return (

        <div>
            <AppBar></AppBar>
            <BlogEditor></BlogEditor>



        </div>
    )
}



export const BlogEditor = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const  navigate=useNavigate()

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <input
        type="text"
        placeholder="Title"
        className="w-full p-4 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows={10}
        placeholder="Write your content here..."
        className="w-full p-4 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button onClick={async()=>{
        try{
            const token = localStorage.getItem('token');
            const res=await axios.post(`${BACKEND_URL}/api/v1/blog`,{title,content},{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            });
            navigate(`/blog/${res.data.id}`)

        }catch(e){
            alert('Error publishing the blog post. Please try again');
        }

       
      }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-md transition-colors"
      >
        Publish Post
      </button>
    </div>
  );
};
