// src/pages/Chat.jsx
import { useState } from "react";
import API from "../api/Axiosxios";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");

  const sendMessage = async () => {
    const res = await API.post("chat/", { message });
    setReply(res.data.response);
  };

  return (
    <div>
      <h2>AI Chat</h2>

      <input
        placeholder="Ask something..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={sendMessage}>Send</button>

      <p><b>AI:</b> {reply}</p>
    </div>
  );
}