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
            <input placeholder="Name" value={form.name}  onChange={(e)=> SetForm({...form,name:e.target.v})}
        </div>
    )

}