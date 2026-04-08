import { useEffect, useState } from 'react'
import API from '../api/axios'


export default function Assets(){
    const [assets,setAssets]=useState([]);
    const [name,setName]=useState("");
    const fetchAsset=()=>{
        API.get("assets/").then(res => setAssets(res.data.result));
    };
    useEffect(() =>{
        fetchAsset();
    },[]);
    const AddAssets= async()=>{
        await API.post('assets/',{name});
        fetchAsset();
    };

    return(
        <div>
            <h2>Asset Page</h2>
            <input placeholder='Add your Assets' onChange={e=>se}
        </div>
    )
}