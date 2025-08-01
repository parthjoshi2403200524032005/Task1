"use client";

import { useEffect, useState } from "react";
import { API_BASE_URL } from "../utils/api";
import Rewards from "./components/Rewards";
import axios from "axios";

export default function Dashboard() {
  const [intern, setIntern] = useState(null);

  console.log(intern, " dashboard");

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("id"));
    if (id) {
      axios
        .get(`${API_BASE_URL}/api/auth/user/${id}`)
        .then((res) => setIntern(res.data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl p-8 transition-transform duration-300 transform hover:scale-[1.01]">
        <h1 className="text-4xl font-extrabold text-blue-800 mb-6 text-center">
          🎯 Intern Dashboard
        </h1>

        {intern ? (
          <div className="space-y-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-blue-800">Name:</span>{" "}
                {intern.name}
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-blue-800">
                  Referral Code:
                </span>{" "}
                {intern.referralCode}
              </p>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <p className="text-lg text-gray-700">
                <span className="font-semibold text-blue-800">
                  Total Donations:
                </span>{" "}
                ₹9000
              </p>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">Loading...</p>
        )}

        <div className="mt-10">
          <Rewards />
        </div>
      </div>
    </main>
  );
}
