export default function Contact() {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-extrabold text-[#287379] mb-6">
        Contact Us
      </h1>

      <p className="text-gray-700 mb-8">
        Have questions or feedback? Feel free to reach out to us.
      </p>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg"
          />

          <button
            type="button"
            className="bg-[#287379] text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>

        <div className="mt-6 text-sm text-gray-600">
          <p>
            Email:{" "}
            <a
              href="mailto:zimbunny@gmail.com"
              className="text-[#287379] font-medium"
            >
              zimbunny@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
