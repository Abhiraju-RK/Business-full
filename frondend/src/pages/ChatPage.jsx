import { useState } from "react";
import API from "../api/Axios";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    // add user message
    const newMessages = [...messages, { sender: "user", text: message }];
    setMessages(newMessages);

    try {
      const res = await API.post("chat/", { message });

      // add AI reply
      setMessages([
        ...newMessages,
        { sender: "ai", text: res.data.response }
      ]);

      setMessage("");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={container}>
      
      <h2 style={{ textAlign: "center" }}>💬 AI Chat</h2>

      {/* CHAT BOX */}
      <div style={chatBox}>
        {messages.map((msg, index) => (
          <div
            key={index}
            style={{
              ...bubble,
              alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
              background:
                msg.sender === "user" ? "#4CAF50" : "#e5e5ea",
              color: msg.sender === "user" ? "white" : "black"
            }}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* INPUT AREA */}
      <div style={inputArea}>
        <input
          style={input}
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button style={button} onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

/* 🎨 STYLES */

const container = {
  maxWidth: "600px",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  height: "90vh",
};

const chatBox = {
  flex: 1,
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  padding: "10px",
  overflowY: "auto",
  background: "#f4f4f4",
  borderRadius: "10px",
};

const bubble = {
  padding: "10px 15px",
  borderRadius: "15px",
  maxWidth: "70%",
};

const inputArea = {
  display: "flex",
  marginTop: "10px",
};

const input = {
  flex: 1,
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const button = {
  marginLeft: "10px",
  padding: "10px 15px",
  background: "#4CAF50",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};