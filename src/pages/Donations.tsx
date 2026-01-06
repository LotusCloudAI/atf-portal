import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import BackHome from "../components/BackHome";

interface Donation {
  id: string;
  donorName: string;
  amount: number;
  paymentMethod: string;
  date: string;
  purpose: string;
}

export default function Donations() {
  const [donations, setDonations] = useState<Donation[]>([]);
  const [total, setTotal] = useState(0);

  /* LOAD DONATIONS FROM FIRESTORE */
  useEffect(() => {
    const q = query(collection(db, "donations"), orderBy("date", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Donation[];

      setDonations(list);

      // Calculate total amount
      const sum = list.reduce((acc, item) => acc + (item.amount || 0), 0);
      setTotal(sum);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <BackHome />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-4">
          Donations Transparency
        </h1>

        <p className="text-gray-700 mb-8">
          ATF maintains complete transparency of contributions received from the community.
        </p>

        {/* TOTAL DONATIONS CARD */}
        <div className="bg-[#1E3A8A] text-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold">Total Contributions</h2>
          <p className="text-3xl font-bold mt-2">${total.toLocaleString()}</p>
        </div>

        {/* IF NO DONATIONS */}
        {donations.length === 0 && (
          <div className="text-center text-gray-500 py-16">
            Donation records will appear here as they are added.
          </div>
        )}

        {/* DONATIONS TABLE */}
        {donations.length > 0 && (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-900 shadow rounded-xl overflow-hidden">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold">Donor</th>
                  <th className="px-4 py-3 text-left font-semibold">Amount</th>
                  <th className="px-4 py-3 text-left font-semibold">Method</th>
                  <th className="px-4 py-3 text-left font-semibold">Purpose</th>
                  <th className="px-4 py-3 text-left font-semibold">Date</th>
                </tr>
              </thead>

              <tbody>
                {donations.map((d) => (
                  <tr
                    key={d.id}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-3">{d.donorName}</td>
                    <td className="px-4 py-3 font-semibold text-[#B91C1C]">
                      ${d.amount.toLocaleString()}
                    </td>
                    <td className="px-4 py-3">{d.paymentMethod}</td>
                    <td className="px-4 py-3">{d.purpose}</td>
                    <td className="px-4 py-3">
                      {new Date(d.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
