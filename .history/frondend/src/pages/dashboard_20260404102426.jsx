import { useEffect, useState } from "react";
import API from '../api/axios'

export default function Dashboard(){
    const [data,SetData]=useState({});

    useEffect(()=>{
        API.get("dashboard/").then(res=>SetData)
    })

}