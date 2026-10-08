import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex flex-wrap justify-between items-center gap-4 px-6 md:px-10 py-5 bg-green-700 text-white shadow-lg">
      <Link to="/" className="text-2xl font-bold">🌾 KrishiMind AI</Link>
      <div className="flex gap-5 text-sm md:text-base">
        <a href="#services">Services</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
      </div>
      <div className="flex gap-3">
        <Link to="/login" className="px-4 py-2 border border-white rounded-lg">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-white text-green-700 rounded-lg font-semibold">Sign Up</Link>
      </div>
    </nav>
  );
}