import { useEffect, useState } from "react";
import API from "../api/Axios";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    API.get("dashboard/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div style={container}>
      
      {/* 🔥 SIDEBAR */}
      <div style={sidebar}>
        <h2 style={{ color: "white" }}>⚙️ AssetSys</h2>
        <p style={menuItem}>📊 Dashboard</p>
        <p style={menuItem}>📦 Assets</p>
        <p style={menuItem}>🛠️ Repairs</p>
        <p style={menuItem}>👤 Profile</p>
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div style={main}>
        
        {/* TOP BAR */}
        <div style={topbar}>
          <h2>Dashboard</h2>
          <button onClick={logout} style={logoutBtn}>Logout</button>
        </div>

        {/* CARDS */}
        <div style={grid}>
          <Card title="Total Assets" value={data.total_assets} color="#4CAF50" />
          <Card title="Available" value={data.available} color="#2196F3" />
          <Card title="Assigned" value={data.assigned} color="#FF9800" />
          <Card title="Repair" value={data.repair} color="#F44336" />
          <Card title="Tickets" value={data.tickets} color="#9C27B0" />
        </div>

      </div>
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div style={{ ...card, background: color }}>
      <h3>{title}</h3>
      <h1>{value || 0}</h1>
    </div>
  );
}

/* 🔥 STYLES */

const container = {
  display: "flex",
  height: "100vh",
  fontFamily: "Arial",
};

const sidebar = {
  width: "220px",
  background: "#1e1e2f",
  padding: "20px",
};

const menuItem = {
  color: "#ccc",
  margin: "15px 0",
  cursor: "pointer",
};

const main = {
  flex: 1,
  padding: "20px",
  background: "#f4f6f9",
};

const topbar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "20px",
};

const logoutBtn = {
  padding: "8px 15px",
  background: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "20px",
};

const card = {
  color: "white",
  padding: "25px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
  transition: "0.3s",
};