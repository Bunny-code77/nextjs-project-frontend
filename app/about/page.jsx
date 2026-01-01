import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-8">
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-16">
        {/* Header */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            About{" "}
            <span className="text-purple-600">
              PostPlanner
            </span>
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed">
            Empowering creators, brands, and teams to simplify and elevate their
            social media presence — one post at a time.
          </p>
        </header>

        {/* Mission Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-gray-900">
              ✨ Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-purple-600">
                PostPlanner
              </span>
              , we believe managing your social media should be effortless,
              collaborative, and impactful. Our platform helps you plan,
              schedule, and analyze content seamlessly — whether you're a solo
              creator or a full-scale agency.
            </p>

            <ul className="space-y-4 text-gray-700">
              <li className="flex items-center gap-3">
                <span className="text-purple-600 text-2xl">✅</span>
                <span className="text-lg">Streamlined collaboration & approvals</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-600 text-2xl">✅</span>
                <span className="text-lg">Smart scheduling & publishing tools</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-purple-600 text-2xl">✅</span>
                <span className="text-lg">Deep analytics for better engagement</span>
              </li>
            </ul>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/images/About.png"
              alt="Team working together"
              width={600}
              height={450}
              className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              priority
            />

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-300 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-40"></div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="text-center space-y-8 bg-gradient-to-r from-teal-600 to-teal-700 py-16 px-12 rounded-3xl shadow-xl">
          <h3 className="text-4xl font-bold text-white">
            🚀 Our Vision
          </h3>
          <p className="max-w-4xl mx-auto text-teal-100 text-lg leading-relaxed">
            To build a community where social media is not just a task — but a
            creative journey. We envision a world where every brand, creator,
            and marketer can express their voice with clarity, creativity, and
            confidence.
          </p>
        </section>

        {/* Values Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Innovation",
              desc: "We continuously evolve to keep you ahead of the social curve.",
            },
            {
              title: "Simplicity",
              desc: "Every feature is designed to make your workflow intuitive.",
            },
            {
              title: "Community",
              desc: "Together, we create a more connected social ecosystem.",
            },
          ].map((value) => (
            <div
              key={value.title}
              className="p-10 bg-gray-50 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-4">
                {value.title}
              </h4>
              <p className="text-gray-600 text-lg">{value.desc}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
