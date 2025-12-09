import React, { useState } from "react";
import BackHome from "../../components/BackHome";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    alert("Member login placeholder — Firebase Auth to be added.");
  }

  return (
    <>
      <BackHome />

      <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow rounded-xl">
        <h1 className="text-2xl font-bold text-[#1E3A8A] mb-4">
          Member Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">

          <input
            type="email"
            placeholder="Email"
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
            className="w-full py-2 bg-[#1E3A8A] text-white rounded-md hover:bg-[#0b2458]"
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}
