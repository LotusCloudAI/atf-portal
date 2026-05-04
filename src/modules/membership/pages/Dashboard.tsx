import React, { useEffect, useState } from "react";
import BackHome from "../../../components/BackHome";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../../../services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function MemberDashboard() {
  const [user, setUser] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        navigate("/login");
      } else {
        setUser(u);

        try {
          // 🔥 Fetch member profile from Firestore
          const ref = doc(db, "members", u.uid);
          const snap = await getDoc(ref);

          if (snap.exists()) {
            setProfile(snap.data());
          } else {
            console.warn("No member profile found in Firestore");
          }
        } catch (err) {
          console.error("Error fetching profile:", err);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div className="p-10 text-center">Loading...</div>;
  }

  return (
    <>
      <BackHome />

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-[#1E3A8A]">
          Member Dashboard
        </h1>

        <p className="text-gray-700 mt-2">
          Welcome to your ATF Member Portal.
          {user && (
            <span className="ml-2 font-semibold text-[#B91C1C]">
              ({user.email})
            </span>
          )}
        </p>

        {/* 🔥 Show profile data */}
        {profile && (
          <p className="text-gray-600 mt-2">
            Name: <span className="font-semibold">{profile.name}</span>
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <Link
            to="/member/events"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#B91C1C]">
              My Events
            </h2>
            <p className="text-gray-700 text-sm mt-2">
              View registered events.
            </p>
          </Link>

          <Link
            to="/member/profile"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#1E3A8A]">
              My Profile
            </h2>
            <p className="text-gray-700 text-sm mt-2">
              Update member details.
            </p>
          </Link>

          <Link
            to="/member/donations"
            className="p-6 rounded-xl shadow bg-white hover:bg-gray-100"
          >
            <h2 className="text-xl font-semibold text-[#9B1C6C]">
              My Donations
            </h2>
            <p className="text-gray-700 text-sm mt-2">
              View your contribution history.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
}