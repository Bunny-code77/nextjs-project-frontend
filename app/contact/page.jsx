"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-gray-700 text-xl max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative w-full h-[500px]">
            <Image 
              src="/images/Contact.png" 
              alt="Contact us" 
              fill 
              className="object-cover rounded-3xl shadow-lg" 
            />
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-12 rounded-3xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Send us a message
            </h2>

            <form className="space-y-6">
              <input 
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg" 
                placeholder="Your Name" 
                type="text"
              />
              <input 
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg" 
                placeholder="Your Email" 
                type="email"
              />
              <textarea 
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg" 
                rows="5" 
                placeholder="Your Message"
              />

              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl flex justify-center items-center gap-3 font-semibold text-lg transition-colors">
                <Send size={20} /> Send Message
              </button>
            </form>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <Mail size={20} className="text-purple-600" /> 
                <span className="text-lg">support@postplanner.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <Phone size={20} className="text-purple-600" /> 
                <span className="text-lg">+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <MapPin size={20} className="text-purple-600" /> 
                <span className="text-lg">Lahore, Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
