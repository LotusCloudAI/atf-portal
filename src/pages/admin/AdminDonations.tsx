import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../services/firebase"; // adjust if needed
import BackHome from "../../components/BackHome";

export default function AdminDonations() {
  const [donorName, setDonorName] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
      await addDoc(collection(db, "donations"), {
        donorName,
        amount: Number(amount),
        paymentMethod,
        date,
        purpose,
        createdAt: serverTimestamp(),
      });

      setSuccess("Donation recorded successfully.");

      // Reset form
      setDonorName("");
      setAmount("");
      setPaymentMethod("Cash");
      setDate("");
      setPurpose("");

    } catch (err) {
      console.error("Error saving donation:", err);
      setSuccess("Error recording donation.");
    }

    setLoading(false);
  }

  return (
    <>
      <BackHome />

      <div className="max-w-3xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A]">Record Donation</h1>
        <p className="text-gray-700 mt-2">
          Add a donation entry to the official ATF donation records.
        </p>

        {success && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            {success}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="mt-8 bg-white shadow-md rounded-xl p-6 space-y-6"
        >
          {/* DONOR NAME */}
          <div>
            <label className="block font-medium text-gray-800">Donor Name</label>
            <input
              type="text"
              value={donorName}
              required
              onChange={(e) => setDonorName(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md"
              placeholder="Enter donor's full name"
            />
          </div>

          {/* AMOUNT */}
          <div>
            <label className="block font-medium text-gray-800">Amount (USD)</label>
            <input
              type="number"
              value={amount}
              min="1"
              required
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md"
              placeholder="Enter donation amount"
            />
          </div>

          {/* PAYMENT METHOD */}
          <div>
            <label className="block font-medium text-gray-800">Payment Method</label>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md"
            >
              <option>Cash</option>
              <option>Check</option>
              <option>Online</option>
              <option>Zelle</option>
              <option>Bank Transfer</option>
              <option>Other</option>
            </select>
          </div>

          {/* DATE */}
          <div>
            <label className="block font-medium text-gray-800">Donation Date</label>
            <input
              type="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md"
            />
          </div>

          {/* PURPOSE */}
          <div>
            <label className="block font-medium text-gray-800">Purpose</label>
            <select
              value={purpose}
              required
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full mt-1 px-4 py-2 border rounded-md"
            >
              <option value="">Select Purpose</option>
              <option>Charity</option>
              <option>Education</option>
              <option>NRI Services</option>
              <option>Medical Support</option>
              <option>Community Programs</option>
              <option>General Fund</option>
            </select>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-[#1E3A8A] text-white rounded-lg hover:bg-[#142966]"
          >
            {loading ? "Saving..." : "Save Donation"}
          </button>
        </form>
      </div>
    </>
  );
}
