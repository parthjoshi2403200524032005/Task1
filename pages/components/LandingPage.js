'use client';

import { useRouter } from 'next/navigation';

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex flex-col items-center justify-center text-gray-800 px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-5xl font-bold leading-tight mb-4">
          🌟 Welcome to Intern Rewards Dashboard
        </h1>
        <p className="text-lg mb-8">
          Track your progress, monitor referrals, and earn amazing rewards while supporting great causes. Log in to get started!
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => router.push('/login')}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition"
          >
            Login
          </button>
          <button
            onClick={() => router.push('/signup')}
            className="px-6 py-3 bg-white border border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition"
          >
            Sign Up
          </button>
        </div>
      </div>

    </main>
  );
}
