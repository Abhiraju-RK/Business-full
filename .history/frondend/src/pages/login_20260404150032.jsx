import { useState } from "react";


export default function Login(){
    const [data, SetData]=useState({username:"",password:""});

    const login=async()=>{
        try{
            const res=await axios.post(
                http://127.0.0.1:8000/ 
                data
            );
            localStorage.setItem("token",res.data.access);
            window.location.href="/dashboard";
        }catch(err){
            alert("Invalid Credentials")
        }
    };
    return(
        <div>
            <h2>Login Page</h2>
            <input placeholder="Enter Ur Username" onChange={(e)=> SetData({...data,username:e.target.value})} />
            <input placeholder="Enter Ur Password" onChange={(e)=> SetData({...data,password:e.target.value})} />
            <button onClick={login}>Login</button>
        </div>

    );
}