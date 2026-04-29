import { useState } from "react";

export default function JoinPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    console.log("Submitting:", form);

    alert("Member Registered (temporary)");
    
    // Later: Firebase save
    window.location.href = "/member";
  };

  return (
    <div className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Join ATF Membership</h1>

      <input
        name="name"
        placeholder="Full Name"
        onChange={handleChange}
        className="w-full p-2 border mb-3"
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
        className="w-full p-2 border mb-3"
      />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
        className="w-full p-2 border mb-3"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded"
      >
        Join Now
      </button>
    </div>
  );
}