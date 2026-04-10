import { useEffect, useState } from "react";
import API from "../api/Axios";

export default function Dashboard() {
  const [data, setData] = useState({});

  useEffect(() => {
    API.get("dashboard/")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2 style={{ marginBottom: "20px" }}>📊 Dashboard</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        
        <div style={cardStyle("#4CAF50")}>
          <h3>Total Assets</h3>
          <p>{data.total_assets || 0}</p>
        </div>

        <div style={cardStyle("#2196F3")}>
          <h3>Available</h3>
          <p>{data.available || 0}</p>
        </div>

        <div style={cardStyle("#FF9800")}>
          <h3>Assigned</h3>
          <p>{data.assigned || 0}</p>
        </div>

        <div style={cardStyle("#F44336")}>
          <h3>Repair</h3>
          <p>{data.repair || 0}</p>
        </div>

        <div style={cardStyle("#9C27B0")}>
          <h3>Tickets</h3>
          <p>{data.tickets || 0}</p>
        </div>

      </div>
    </div>
  );
}

// 🔥 Card Style Function
const cardStyle = (color) => ({
  background: color,
  color: "white",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
});