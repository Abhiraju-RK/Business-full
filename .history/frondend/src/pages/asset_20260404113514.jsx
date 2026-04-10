import { useEffect, useState } from 'react'
import API from '../api/axios'


export default function Assets(){
    const [assets,setAssets]=useState([]);
    const [selected,SetSelected]=useState(null);
    const fetchAsset=()=>{
        API.get("assets/").then(res => setAssets(res.data.results))
        .catch(() =>alert("Error F"));
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
            <input placeholder='Add your Assets' onChange={e=>setName(e.target.value)}/>
            <button onClick={AddAssets}>Add Asset</button>
            <ul>
                {assets.map(a =>(
                    <li key={a.id}>{a.name}</li>
                ))}
            </ul>
        </div>
    );
}