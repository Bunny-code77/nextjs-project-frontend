"use client";

import Navbar from "../../components/Navbar";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Navbar />

      <section className="py-24 bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <div className="relative w-full h-[420px]">
            <Image src="/images/Contact.png" alt="Contact 1" fill className="object-cover rounded-xl" />
          </div>

          {/* Form */}
          <div className="bg-white p-10 rounded-3xl shadow-xl">
            <h2 className="text-4xl font-bold text-purple-700 mb-6 text-center">
              Contact Us
            </h2>

            <form className="space-y-4">
              <input className="w-full p-3 border rounded-lg" placeholder="Your Name" />
              <input className="w-full p-3 border rounded-lg" placeholder="Your Email" />
              <textarea className="w-full p-3 border rounded-lg" rows="4" />

              <button className="w-full bg-purple-600 text-white py-3 rounded-lg flex justify-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>

            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p><Mail size={16} /> support@postplanner.com</p>
              <p><Phone size={16} /> +92 300 1234567</p>
              <p><MapPin size={16} /> Lahore, Pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
