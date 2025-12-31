export default function Services() {
  const services = [
    {
      title: "Post Scheduling",
      desc: "Plan and schedule your social media posts in advance with ease.",
    },
    {
      title: "Content Management",
      desc: "Create, edit, and manage posts from a centralized dashboard.",
    },
    {
      title: "Analytics Overview",
      desc: "Track engagement, reach, and performance trends visually.",
    },
    {
      title: "Multi-Platform Support",
      desc: "Manage content for multiple social platforms from one place.",
    },
  ];

  return (
    <div className="min-h-screen max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-[#287379] mb-10">
        Our Services
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-[#287379] mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
