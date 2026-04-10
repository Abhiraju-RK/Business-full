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
    <div>
      <h2>Asset Form</h2>
      <h3>{selected ? "Update Asset" : "Add Asset"}</h3>

      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Type"
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      />

      <input
        placeholder="Serial Number"
        value={form.serial_number}
        onChange={(e) => setForm({ ...form, serial_number: e.target.value })}
      />

      {/* 🔥 FIXED */}
      <input
        type="date"
        value={form.purchase_date}
        onChange={(e) => setForm({ ...form, purchase_date: e.target.value })}
      />

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="Available">Available</option>
        <option value="Assigned">Assigned</option>
        <option value="Repair">Repair</option>
      </select>

      <button onClick={() => onSubmit(form)}>
        {selected ? "Update" : "Create"}
      </button>
    </div>
  );
}