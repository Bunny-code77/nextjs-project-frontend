export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6 text-center text-sm text-gray-600">
        <p>
          Contact:{" "}
          <a
            href="mailto:zimbunny@gmail.com"
            className="text-[#287379] font-medium"
          >
            zimbunny@gmail.com
          </a>
        </p>
        <p>© {new Date().getFullYear()} PostPlanner</p>
      </div>
    </footer>
  );
}
