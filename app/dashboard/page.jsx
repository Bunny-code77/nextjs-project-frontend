"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const { data } = await axios.get("/api/auth/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(data);
      } catch {
        localStorage.removeItem("token");
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [router]);

  const logout = () => {
    localStorage.removeItem("token");
    router.replace("/login");
  };

  if (loading) {
    return <main className="min-h-screen flex items-center justify-center text-gray-600">Loading...</main>;
  }

  if (!user) return null;

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-purple-600 font-semibold">PostPlanner Dashboard</p>
            <h1 className="text-3xl font-bold text-gray-900 mt-1">Welcome, {user.name}!</h1>
            <p className="text-gray-600 mt-1">{user.email}</p>
          </div>
          <button onClick={logout} className="px-5 py-2 rounded-lg bg-[#287379] text-white font-semibold hover:opacity-90">
            Log out
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Scheduled Posts", "0", "Plan your upcoming social content."],
            ["Drafts", "0", "Keep unfinished posts ready to publish."],
            ["Analytics", "Coming soon", "Track performance from one place."],
          ].map(([title, value, description]) => (
            <div key={title} className="bg-white rounded-2xl shadow p-6 border border-gray-100">
              <h2 className="font-semibold text-gray-700">{title}</h2>
              <p className="text-3xl font-bold text-purple-700 mt-3">{value}</p>
              <p className="text-sm text-gray-500 mt-2">{description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow p-8 mt-8 border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Your workspace</h2>
          <p className="text-gray-600 mt-2">Your account and authentication are connected successfully. Scheduling and analytics can be added here as the next feature.</p>
        </div>
      </div>
    </main>
  );
}
