import { useEffect, useState } from "react";

export default function AssetForm({selected,onSubmit}){
    const[form,SetForm]=useState({
        name:"",
        type:"",
        serial_number:"",
        status:"Available",
        purchase_date:"",
    });

    useEffect(() =>{
        if(selected)SetForm(selected);
    },[selected]);


    return(
        <div>
            <h2>Asset Form</h2>

            <h3>{selected ? "updated form" :"Add Asset"}</h3>
            <input placeholder="Name" value={form.name}  onChange={(e)=> SetForm({...form,name:e.target.value})}/>

            <input placeholder="type" value={form.type} onChange={(e)=> SetForm({...form,type:e.target.value})}/>

            <input placeholder="Serial Number" value={form.serial_number} onChange={(e)=> SetForm({...form,serial_number:e.target.value})}/>

            <input placeholder="Date" value={form.purchase_date} onChange={(e)=> SetForm({...form,purchase_date:e.target.value})}/>

            <select value={form.status} onChange={(e)=> SetForm({...form,status:e.target.value})}>
                <op

            </select>

            
        </div>
    )

}