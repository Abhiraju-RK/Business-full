import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

 const register = async () => {
  try {
    await axios.post("http://127.0.0.1:8000/api/register/", data);
    alert("User created");
    window.location.href = "/login";   // 🔥 redirect
  } catch (err) {
    console.log(err);
    alert("Error");
  }
};

  return (
    <div>
      <h2>Register</h2>

      <input placeholder="Username" onChange={(e)=>setData({...data, username:e.target.value})}/>
      <input type="password" placeholder="Password" onChange={(e)=>setData({...data, password:e.target.value})}/>

      <select value={data.role}
  onChange={(e) => setData({ ...data, role: e.target.value })}
>
  <option value="Employee">Employee</option>
  <option value="Admin">Admin</option>
</select>

      <button onClick={register}>Register</button>
    </div>
  );
}