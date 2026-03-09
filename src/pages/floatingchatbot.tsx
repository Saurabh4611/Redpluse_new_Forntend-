import React, { useState } from "react";
import axios from "axios";

interface ChatMessage {
  sender: "user" | "bot";
  text: string;
}

const FloatingChatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<ChatMessage[]>([]);

 
const sendMessage = async () => {

  if (!message.trim()) return;

  const userMsg: ChatMessage = {
    sender: "user",
    text: message
  };

  const newChat = [...chat, userMsg];
  setChat(newChat);

  try {

    const res = await axios.post(
      "http://localhost:8080/Redpluse/chat",
      { message }
    );

    const botMsg: ChatMessage = {
      sender: "bot",
      text: res.data.reply || "No response"
    };

    setChat([...newChat, botMsg]);

  } catch {

    const botMsg: ChatMessage = {
      sender: "bot",
      text: "AI server error"
    };

    setChat([...newChat, botMsg]);
  }

  setMessage("");
};
  return (
    <>
      {/* Floating Button */}
      <div className="chat-button" onClick={() => setOpen(!open)}>
        💬
      </div>

      {/* Chat Window */}
      {open && (
        <div className="chat-window">

          <div className="chat-header">
            RedPluse AI Assistant
            <span onClick={() => setOpen(false)}>✖</span>
          </div>

          <div className="chat-body">
            {chat.map((c, i) => (
              <div
                key={i}
                className={c.sender === "user" ? "user-msg" : "bot-msg"}
              >
                {c.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about blood donation..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>

        </div>
      )}

      <style>{`

.chat-button{
position:fixed;
bottom:25px;
right:25px;
width:60px;
height:60px;
background:#c62828;
color:white;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:28px;
cursor:pointer;
box-shadow:0 6px 15px rgba(0,0,0,0.3);
transition:0.3s;
z-index:999;
}

.chat-button:hover{
transform:scale(1.1);
background:#b71c1c;
}

.chat-window{
position:fixed;
bottom:100px;
right:25px;
width:320px;
height:420px;
background:white;
border-radius:12px;
box-shadow:0 10px 30px rgba(0,0,0,0.3);
display:flex;
flex-direction:column;
overflow:hidden;
z-index:999;
animation:fadeIn 0.3s ease;
}

.chat-header{
background:#c62828;
color:white;
padding:12px;
font-weight:bold;
display:flex;
justify-content:space-between;
}

.chat-body{
flex:1;
padding:10px;
overflow-y:auto;
background:#f5f5f5;
}

.user-msg{
background:#c62828;
color:white;
padding:8px 12px;
border-radius:10px;
margin:6px 0;
align-self:flex-end;
max-width:80%;
}

.bot-msg{
background:#e0e0e0;
padding:8px 12px;
border-radius:10px;
margin:6px 0;
max-width:80%;
}

.chat-input{
display:flex;
border-top:1px solid #ddd;
color:#333;
}

.chat-input input{
flex:1;
border:none;
padding:10px;
outline:none;
color:#333;
}

.chat-input button{
background:#c62828;
color:white;
border:none;
padding:10px 15px;
cursor:pointer;
}

@keyframes fadeIn{
from{opacity:0;transform:translateY(20px);}
to{opacity:1;transform:translateY(0);}
}

`}</style>
    </>
  );
};

export default FloatingChatbot;