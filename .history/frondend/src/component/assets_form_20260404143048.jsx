import { useState } from "react";

export default function AssetForm(){
    const[form,SetForm]=useState({
        name:"",
        type:"",
        serial_number:"",
        status:"Available",
        
    });

}