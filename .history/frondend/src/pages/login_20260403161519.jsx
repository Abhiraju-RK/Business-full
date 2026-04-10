import { useState } from "react";


export default function Login(){
    const [data, SetData]=useState({username:"",password:""});

    const login=async()=>{
        try{
            const res=await axios.post(
                //add url
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
            <input pl
        </div>

    );
}