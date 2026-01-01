import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#287379] font-serif italic">
          PostPlanner
        </h1>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="text-purple-600 hover:text-purple-800 transition-colors">Home</Link>
          <Link href="/services" className="text-purple-600 hover:text-purple-800 transition-colors">Services</Link>
          <Link href="/about" className="text-purple-600 hover:text-purple-800 transition-colors">About</Link>
          <Link href="/contact" className="text-purple-600 hover:text-purple-800 transition-colors">Contact</Link>
          <Link href="/login" className="text-purple-600 hover:text-purple-800 transition-colors">Login</Link>
          <Link href="/register" className="text-purple-600 hover:text-purple-800 transition-colors">Register</Link>
        </div>
      </div>
    </nav>
  );
}
