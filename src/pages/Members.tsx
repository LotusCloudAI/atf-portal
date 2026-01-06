import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import BackHome from "../components/BackHome";
import { motion } from "framer-motion";

interface Member {
  id: string;
  fullName: string;
  role: string;
  email: string;
  phone?: string;
  bio?: string;
  photoUrl?: string;
}

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);

  /* LOAD MEMBERS FROM FIRESTORE */
  useEffect(() => {
    const q = query(collection(db, "members"), orderBy("fullName", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as Member[];

      setMembers(list);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <BackHome />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-[#1E3A8A] mb-6">
          ATF Leadership & Members
        </h1>
        <p className="text-gray-700 mb-10">
          Meet the leaders and volunteers serving the American Telugu Federation.
        </p>

        {/* If no members */}
        {members.length === 0 && (
          <div className="text-center text-gray-500 py-20">
            Members will appear here soon.
          </div>
        )}

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white dark:bg-gray-900 shadow rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              {/* PROFILE PHOTO */}
              {member.photoUrl ? (
                <img
                  src={member.photoUrl}
                  alt={member.fullName}
                  className="h-56 w-full object-cover"
                />
              ) : (
                <div className="h-56 w-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-gray-600">
                  No Photo
                </div>
              )}

              <div className="p-6">
                {/* NAME */}
                <h2 className="text-xl font-bold text-[#B91C1C] mb-1">
                  {member.fullName}
                </h2>

                {/* ROLE */}
                <p className="text-sm text-gray-800 dark:text-gray-300 mb-2">
                  {member.role}
                </p>

                {/* EMAIL */}
                {member.email && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Email:</strong> {member.email}
                  </p>
                )}

                {/* PHONE */}
                {member.phone && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Phone:</strong> {member.phone}
                  </p>
                )}

                {/* BIO */}
                {member.bio && (
                  <p className="text-sm mt-3 text-gray-700 dark:text-gray-300 line-clamp-3">
                    {member.bio}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
