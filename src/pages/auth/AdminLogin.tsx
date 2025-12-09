import React, { useState } from "react";
import BackHome from "../../components/BackHome";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Admin login placeholder — Firebase Auth to be added.");
  }

  return (
    <>
      <BackHome />

      <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded-xl">
        <h1 className="text-2xl font-bold text-[#B91C1C] mb-4">
          Admin Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Admin Email"
            className="w-full px-4 py-2 border rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            className="w-full py-2 bg-[#B91C1C] text-white rounded-md hover:bg-[#7a1010]"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
