"use client";

import Image from "next/image";

export default function Services() {
  const features = [
    {
      title: "Collaboration & Approvals",
      desc: "Multi-level approvals, comments, and version history to keep your workflow smooth and transparent.",
      img: "/images/ServicesColab.png",
    },
    {
      title: "Post Scheduling & Calendar",
      desc: "Visual calendar, flexible scheduling, and real-time previews for each platform.",
      img: "/images/ServicesPost.png",
    },
    {
      title: "Content Library + Editor",
      desc: "Store, organize, and edit all your content assets in one place — from captions to visuals.",
      img: "/images/ServicesContent.png",
    },
    {
      title: "Analytics & Reporting",
      desc: "Gain insights with exportable reports, post performance tracking, and engagement analytics.",
      img: "/images/ServicesAnalytics.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Header Section */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Our Services
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            From content planning to analytics,{" "}
            <span className="font-semibold text-purple-600">PostPlanner</span> empowers your entire social media journey —
            designed for teams, creators, and agencies who aim for impact.
          </p>
        </header>

        {/* Highlight Section */}
        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl p-12 text-center shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-4">Why Choose PostPlanner?</h2>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            Automate your workflow, collaborate effortlessly, and focus on creativity — 
            while PostPlanner handles the rest.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid gap-12 grid-cols-1 md:grid-cols-2">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-200 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="relative w-full md:w-56 h-48">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="rounded-2xl object-cover"
                  sizes="(max-width: 768px) 100vw, 14rem"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{f.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">{f.desc}</p>
                <a
                  href="/"
                  className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-3xl p-12 shadow-xl">
          <h3 className="text-4xl font-bold mb-4">
            Ready to Simplify Your Social Media Strategy?
          </h3>
          <p className="text-teal-100 text-lg mb-8 max-w-2xl mx-auto">
            Start creating, scheduling, and analyzing — all in one powerful dashboard.
          </p>
          <a
            href="/register"
            className="bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}
