import { useState } from 'react';
import {Link} from 'react-router-dom'
import { SignupInput } from '@yashrawatechnologies/mindium-commons';
export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const [postInputs,setPostinputs]=useState<SignupInput>({
        name: '',
        email: '',
        password: '',
    })

    return (
      <div className="h-screen flex flex-col justify-center items-center bg-gray-200 px-4">
        <div className="text-4xl font-bold mb-6">{type === "signup" ? "Welcome Back" : "Create an Account"}</div>
  
        <div className="text-base text-gray-600 mb-8">
          {type === "signup" ? "Don't have an account?" : "Already have an account?"} <Link to={"/signin"} className="text-blue-600 cursor-pointer underline">Login</Link>
        </div>
  
        <div className="w-full max-w-sm flex flex-col gap-4">
        <LabelledInput label="Username" placeholder="Enter Username" onChange={(e)=>{setPostinputs({...postInputs,name:e.target.value})}} />
        <LabelledInput label="Email Address" placeholder="Enter Your Email Address" onChange={(e)=>{setPostinputs({...postInputs,email:e.target.value})}} />  
        <LabelledInput label="Password" type='password' placeholder="Enter Your Password" onChange={(e)=>{setPostinputs({...postInputs,password:e.target.value})}} />   

  
          
  
         
  
          <button className="mt-6 bg-black text-white font-semibold py-2 rounded hover:bg-gray-800 transition">
            {type === "signup" ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </div>
    );
  }

  interface labelledInputTypes{
    label: string;
    placeholder:string;
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
    type?:string
  }
  function LabelledInput({label,placeholder,onChange,type}:labelledInputTypes){
    return <>
    <div className="flex flex-col items-start">
            <label className="text-sm font-semibold mb-1">{label}</label>
            <input  onChange={onChange}
              placeholder={placeholder}
              type={type || "text" } 
              className="w-full p-2 border border-black rounded focus:outline-none focus:ring-2 focus:ring-black" 
            />
          </div>
    
    
    </>

  }
  
  
  