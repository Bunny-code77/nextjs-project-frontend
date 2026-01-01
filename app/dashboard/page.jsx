
"use client"; // enable client-side rendering for hooks like useState/useEffect

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import {
  CalendarDays,
  Clock,
  Hash,
  TrendingUp,
  Bell,
  Settings,
  BarChart3,
  PlusCircle,
  Filter,
} from "lucide-react";
import img3 from "../images/Dashboard.png";

// Small hook for animated counters
const useCountUp = (target, duration = 600) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const current = Math.round(start + (target - start) * progress);
      setValue(current);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [target, duration]);

  return value;
};

export default function Dashboard() {
  const [showTips, setShowTips] = useState(true);
  const [showHashtagTip, setShowHashtagTip] = useState(true);
  const [showTimingTip, setShowTimingTip] = useState(true);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [platformFilter, setPlatformFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    title: "",
    content: "",
    platform: "",
    scheduledAt: "",
    status: "Draft",
  });
  const [editingId, setEditingId] = useState(null);

  const router = useRouter();

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { Authorization: `Bearer ${token}` };
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      return;
    }

    const headers = getAuthHeaders();

    // current user
    axios
      .get("http://localhost:5000/api/auth/me", { headers })
      .then((res) => setUser(res.data))
      .catch(() => {
        localStorage.removeItem("token");
        router.push("/login");
      });

    // posts
    axios
      .get("http://localhost:5000/api/posts", { headers })
      .then((res) => setPosts(res.data))
      .catch((err) =>
        setError(err.response?.data?.message || "Failed to load posts")
      )
      .finally(() => setLoading(false));
  }, [router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      title: "",
      content: "",
      platform: "",
      scheduledAt: "",
      status: "Draft",
    });
    setEditingId(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const headers = getAuthHeaders();

    try {
      if (editingId) {
        const res = await axios.put(
          `http://localhost:5000/api/posts/${editingId}`,
          form,
          { headers }
        );
        setPosts((prev) =>
          prev.map((p) => (p._id === editingId ? res.data : p))
        );
      } else {
        const res = await axios.post("http://localhost:5000/api/posts", form, {
          headers,
        });
        setPosts((prev) => [...prev, res.data]);
      }
      resetForm();
      setError("");
    } catch (err) {
      setError(err.response?.data?.message || "Save failed");
    }
  };

  const handleEdit = (post) => {
    setEditingId(post._id);
    setForm({
      title: post.title || "",
      content: post.content || "",
      platform: post.platform || "",
      scheduledAt: post.scheduledAt ? post.scheduledAt.slice(0, 16) : "",
      status: post.status || "Draft",
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this post?")) return;
    const headers = getAuthHeaders();

    try {
      await axios.delete(`http://localhost:5000/api/posts/${id}`, { headers });
      setPosts((prev) => prev.filter((p) => p._id !== id));
    } catch (err) {
      setError(err.response?.data?.message || "Delete failed");
    }
  };

  // stats
  const totalPosts = posts.length;
  const scheduledCount = posts.filter((p) => p.status === "Scheduled").length;
  const draftCount = posts.filter((p) => p.status === "Draft").length;
  const publishedCount = posts.filter((p) => p.status === "Published").length;

  const totalAnimated = useCountUp(totalPosts);
  const scheduledAnimated = useCountUp(scheduledCount);
  const draftsAnimated = useCountUp(draftCount);
  const publishedAnimated = useCountUp(publishedCount);

  const cards = [
    {
      title: "Total Posts",
      value: totalAnimated,
      icon: BarChart3,
      description: "All posts you have created.",
    },
    {
      title: "Scheduled",
      value: scheduledAnimated,
      icon: CalendarDays,
      description: "Posts scheduled for future publishing.",
    },
    {
      title: "Drafts",
      value: draftsAnimated,
      icon: Clock,
      description: "Posts you are still working on.",
    },
    {
      title: "Published",
      value: publishedAnimated,
      icon: TrendingUp,
      description: "Posts already published.",
    },
  ];

  const uniquePlatforms = Array.from(
    new Set(posts.map((p) => p.platform).filter(Boolean))
  );

  const filteredPosts = posts.filter((post) => {
    const statusOk =
      statusFilter === "All" ? true : post.status === statusFilter;
    const platformOk =
      platformFilter === "All" ? true : post.platform === platformFilter;
    return statusOk && platformOk;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600 mb-2">
              Welcome{user ? `, ${user.name}` : ""}! Plan, schedule and manage
              your social media posts from one place.
            </p>
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Stay consistent on every platform with scheduled content.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src={img3}
              alt="Dashboard overview"
              className="w-full max-w-sm rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* Stat cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="relative overflow-hidden rounded-2xl bg-white shadow-md border border-purple-100 px-4 py-5 flex flex-col gap-2
                           transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="absolute inset-0 opacity-70 pointer-events-none bg-gradient-to-br from-purple-100 to-purple-500" />
                <div className="relative flex items-center justify-between">
                  <h2 className="text-sm font-semibold text-gray-900">
                    {card.title}
                  </h2>
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-700">
                    <Icon className="w-4 h-4" />
                  </span>
                </div>
                <p className="relative text-2xl font-bold text-gray-900">
                  {card.value}
                </p>
                <p className="relative text-xs text-gray-600">
                  {card.description}
                </p>
              </div>
            );
          })}
        </section>

        {/* Filters summary bar */}
        {/* ... keep rest of the JSX as-is ... */}
      </main>
    </div>
  );
}
