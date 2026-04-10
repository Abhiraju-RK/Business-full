import { useEffect, useState } from "react";
import API from '../api/axios';

export default function Dashboard(){
    const [data,SetData]=useState({});

    useEffect(()=>{
        API.get("dashboard/").then(res=>SetData(res.data));
    },[]);

    return(
        <div>
            <h2>Dashboard Page</h2>
            <p>Total Asset:{data.total_assets}</p>
            <p>Available:{data.available}</p>
            <p>Assigned:{data.assigned}</p>
            <p>Ticket:{data.tickets}</p>
            <p>Repair:{data.repair}</p>
        </div>
    );
}