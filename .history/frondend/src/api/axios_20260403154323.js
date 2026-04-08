import axios from "axios";

const API=axios.create({
    baseURL:""
});

API.interceptors.request.use((req)=>{
    const token=localStorage.getItem("token");
    if(token)
})