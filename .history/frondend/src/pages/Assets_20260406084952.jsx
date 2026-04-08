import { useEffect, useState } from 'react'
import API from '../api/Axios';
import AssetForm from "../component/Assets_form";

export default function Assets(){
    const [assets,setAssets]=useState([]);
    const [selected,SetSelected]=useState(null);
    const fetchAsset=()=>{
        API.get("asset/").then(res => setAssets(res.data.results))
        .catch(() =>alert("Error Fetch"));
    };
    useEffect(() =>{
        fetchAsset();
    },[]);
    
    const handleSubmit= async (form) =>{
        try{
            if(selected){
                await API.put(`assets ${selected.id}/`,form)
            }else{
                await API.post(`assets/`,form)
            }

            SetSelected(null);
            fetchAsset();
        }catch (err){
            console.log(err.response.data);
            alert("Error Saving Asset")
        }
    };

    const deleteAssets =async (id)=>{
        await API.delete(`assets/${id}`);
        fetchAsset();
    };


    return(
        <div>
            <h2>Asset Page</h2>
            <AssetForm onSubmit={handleSubmit} selected={selected} />

            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((a) => (
                        <tr key={a.id}>
                            <td>{a.name}</td>
                            <td>{a.type}</td>
                            <td>{a.status}</td>
                            <td>
                                <button onClick={() => SetSelected(a)}>Edit</button>
                                <button onClick={() => deleteAssets(a.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}