'use client';

import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../../utils/api';

export default function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/leaderboard`)
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">📊 Leaderboard</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4">Rank</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Referral</th>
            <th className="py-2 px-4">Raised (₹)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((intern, idx) => (
            <tr key={intern.referralCode} className="text-center">
              <td className="py-2">{idx + 1}</td>
              <td className="py-2">{intern.name}</td>
              <td className="py-2">{intern.referralCode}</td>
              <td className="py-2">₹{intern.totalRaised}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
