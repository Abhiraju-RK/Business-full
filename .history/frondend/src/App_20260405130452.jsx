import { BrowserRouter, Routes, Route } from "react-router-dom";

import Assets from "./pages/Assets";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/chatpage";

import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assets" element={<Assets />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}