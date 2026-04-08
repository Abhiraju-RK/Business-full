import { useEffect, useState } from "react";

export default function AssetForm({ selected, onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    type: "",
    serial_number: "",
    status: "Available",
    purchase_date: "",
  });

  useEffect(() => {
    if (selected) {
      setForm({
        name: selected.name || "",
        type: selected.type || "",
        serial_number: selected.serial_number || "",
        status: selected.status || "Available",
        purchase_date: selected.purchase_date || "",
      });
    }
  }, [selected]);

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={{ marginBottom: "10px" }}>📦 Asset Form</h2>
        <h4 style={{ marginBottom: "20px", color: "#666" }}>
          {selected ? "Update Asset" : "Add New Asset"}
        </h4>

        <input
          style={input}
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          style={input}
          placeholder="Type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        />

        <input
          style={input}
          placeholder="Serial Number"
          value={form.serial_number}
          onChange={(e) => setForm({ ...form, serial_number: e.target.value })}
        />

        <input
          style={input}
          type="date"
          value={form.purchase_date}
          onChange={(e) => setForm({ ...form, purchase_date: e.target.value })}
        />

        <select
          style={input}
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="Available">Available</option>
          <option value="Assigned">Assigned</option>
          <option value="Repair">Repair</option>
        </select>

        <button
          style={button}
          onClick={() => onSubmit(form)}
        >
          {selected ? "Update" : "Create"}
        </button>
      </div>
    </div>
  );
}

/* 🎨 STYLES */

const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "30px",
};

const card = {
  width: "350px",
  padding: "25px",
  borderRadius: "12px",
  background: "#fff",
  boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
};

const input = {
  marginBottom: "12px",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  outline: "none",
};

const button = {
  marginTop: "10px",
  padding: "12px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};