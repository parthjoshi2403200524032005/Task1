'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { API_BASE_URL } from '../utils/api';
import axios from 'axios';

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios .post(`${API_BASE_URL}/api/auth/signup`, {
        name: form.name,
        email: form.email,
        password: form.password,
      });

     console.log(res.data);

      if (res.status === 201) {
        alert('Signup successful');
        router.push('/login');
      } else {
        alert(res.data.message || 'Signup failed');
      }
    } catch (err) {
      console.error(err);
      alert('Error signing up');
    }
  };

  return (
  <div className="min-h-screen bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSignUp}
        className="w-full max-w-md bg-gray-900 text-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-white">🚀 Create Account</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition duration-200 text-white font-semibold py-3 rounded-lg"
        >
          Sign Up
        </button>

        <p className="text-center text-sm text-gray-300">
          Already have an account?{' '}
          <a href="/login" className="text-blue-300 hover:underline font-medium">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
