import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("welcome", (msg) => {
      console.log(msg);
    });

    socket.on("message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.off("connect");
      socket.off("welcome");
      socket.off("message");
    };
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;
    socket.emit("message", message);
    setMessage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Chat App</h2>
      
      <div style={{ 
        border: '1px solid #ccc', 
        padding: 10, 
        margin: '10px 0', 
        height: 300, 
        overflowY: 'scroll' 
      }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ margin: '5px 0' }}>
            {msg}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <input
          style={{ flex: 1, padding: 8 }}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;