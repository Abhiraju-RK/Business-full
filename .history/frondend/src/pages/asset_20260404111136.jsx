import { useEffect, useState } from 'react'
import API from '../api/axios'


const [assets,setAssets]=useState([]);
const [name,setName]=useState("");

const fetchAsset=()=>{
    API.get("assets/").then(res => setAssets(res.data.result));
};
useEffect(() =>{
    fetchAsset();
},[]);

const AddAssets= async()=>{
    await 
}