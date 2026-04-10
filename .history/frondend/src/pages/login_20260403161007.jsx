import { useState } from "react";


export default function Login(){
    const [data, SetData]=useState({username:"",password:""});

    const login=async()=>{
        try{
            const res=await axios.post(
                //add url
                data
            );
        }
    }
}