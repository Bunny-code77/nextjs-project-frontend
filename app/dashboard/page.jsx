"use client";

import { useState } from "react";
import { Plus, Trash2, Pencil } from "lucide-react";

export default function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");

  const addPost = () => {
    if (!title) return;
    setPosts([...posts, { id: Date.now(), title }]);
    setTitle("");
  };

  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-5xl mx-auto p-10">
      <h1 className="text-3xl font-bold text-[#287379] mb-6">
        Dashboard
      </h1>

      {/* CREATE */}
      <div className="flex gap-3 mb-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="New Post Title"
          className="flex-1 p-3 border rounded"
        />
        <button
          onClick={addPost}
          className="bg-[#287379] text-white px-5 rounded flex items-center gap-2"
        >
          <Plus size={18} /> Add
        </button>
      </div>

      {/* READ + DELETE */}
      <ul className="space-y-3">
        {posts.map((post) => (
          <li
            key={post.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <span>{post.title}</span>
            <button
              onClick={() => deletePost(post.id)}
              className="text-red-500"
            >
              <Trash2 />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
