"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#287379] font-serif italic">
          PostPlanner
        </h1>

        <div className="flex gap-6 text-sm font-medium">
          <Link 
            href="/" 
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive('/') 
                ? 'bg-purple-100 text-purple-800 border border-purple-300' 
                : 'text-purple-600 hover:text-purple-800'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/services" 
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive('/services') 
                ? 'bg-purple-100 text-purple-800 border border-purple-300' 
                : 'text-purple-600 hover:text-purple-800'
            }`}
          >
            Services
          </Link>
          <Link 
            href="/about" 
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive('/about') 
                ? 'bg-purple-100 text-purple-800 border border-purple-300' 
                : 'text-purple-600 hover:text-purple-800'
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive('/contact') 
                ? 'bg-purple-100 text-purple-800 border border-purple-300' 
                : 'text-purple-600 hover:text-purple-800'
            }`}
          >
            Contact
          </Link>
          <Link 
            href="/login" 
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive('/login') 
                ? 'bg-purple-100 text-purple-800 border border-purple-300' 
                : 'text-purple-600 hover:text-purple-800'
            }`}
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className={`px-3 py-1 rounded-lg transition-colors ${
              isActive('/register') 
                ? 'bg-purple-100 text-purple-800 border border-purple-300' 
                : 'text-purple-600 hover:text-purple-800'
            }`}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
