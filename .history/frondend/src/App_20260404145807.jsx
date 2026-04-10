import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/"
import Dashboard from "./pages/Dashboard";
import Assets from "./pages/Assets";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </BrowserRouter>
  );
}