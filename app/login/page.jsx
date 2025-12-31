export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#287379] mb-6">
          Login
        </h2>

        <input
          placeholder="Email"
          className="w-full p-3 border rounded mb-4"
        />
        <input
          placeholder="Password"
          type="password"
          className="w-full p-3 border rounded mb-4"
        />

        <button className="w-full bg-[#287379] text-white py-3 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
}
