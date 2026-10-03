"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in both fields");
      return;
    }

    try {
      const res = await axios.post("/api/auth/login", { email, password });

      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        router.push("/dashboard");
      } else {
        setError("Login failed — please try again.");
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err);
      setError(err.response?.data?.message || "Incorrect email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative py-10">
      <div className="absolute inset-0">
        <Image
          src="/images/Dashboard.png"
          alt="Dashboard Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 bg-white/95 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-purple-100">
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-2">
          Welcome Back 👋
        </h2>
        <p className="text-center text-gray-500 mb-6">
          Login to continue to <span className="font-semibold">PostPlanner</span>
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError(""); }}
            className="w-full mb-4 p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            autoComplete="email"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            className="w-full mb-4 p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            required
            autoComplete="current-password"
          />

          {error && <p className="text-red-600 text-sm text-center mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#287379] text-white font-semibold py-3 rounded-lg shadow-lg hover:opacity-90 transition duration-300"
          >
            Log In
          </button>
        </form>

        <div className="flex justify-between items-center text-sm text-gray-600 mt-4">
          <span className="text-gray-400 cursor-not-allowed">Forgot Password?</span>
          <a href="/register" className="text-purple-700 font-semibold hover:underline">
            Create Account
          </a>
        </div>

        <div className="mt-6 flex items-center justify-center">
          <div className="h-px bg-gray-300 flex-grow" />
          <span className="mx-3 text-gray-500 text-sm">or</span>
          <div className="h-px bg-gray-300 flex-grow" />
        </div>

        <div className="mt-4 w-full flex items-center justify-center gap-2 border border-gray-200 py-3 rounded-lg bg-gray-50 text-gray-500 text-sm">
          Google sign-in is not configured yet
        </div>
      </div>
    </div>
  );
}
