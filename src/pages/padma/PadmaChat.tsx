import React, { useState } from "react";
import BackHome from "../../components/BackHome";
import { sendPadmaQuery } from "../../services/PadmaService";

export default function PadmaChat() {
  const [messages, setMessages] = useState([
    { sender: "padma", text: "Hello! I am PADMA. How may I assist you today?" }
  ]);

  const [query, setQuery] = useState("");

  async function handleSend() {
    if (!query.trim()) return;

    const userMessage = { sender: "user", text: query };
    setMessages((prev) => [...prev, userMessage]);

    const reply = await sendPadmaQuery(query);

    const botMessage = { sender: "padma", text: reply };
    setMessages((prev) => [...prev, botMessage]);

    setQuery("");
  }

  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-6">
          PADMA Interactive Assistant
        </h1>

        <div className="border rounded-xl p-4 h-[500px] overflow-y-auto bg-gray-50">
          {messages.map((msg, i) => (
            <div key={i} className={`mb-4 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
              <span
                className={`inline-block px-4 py-2 rounded-xl ${
                  msg.sender === "user"
                    ? "bg-[#B91C1C] text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {msg.text}
              </span>
            </div>
          ))}
        </div>

        <div className="flex mt-4">
          <input
            className="flex-1 px-4 py-2 border rounded-l-xl text-gray-800"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask PADMA anything…"
          />
          <button
            onClick={handleSend}
            className="bg-[#1E3A8A] text-white px-6 rounded-r-xl"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}
