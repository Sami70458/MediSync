import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0a0a2a] to-[#1a1a4f] text-white min-h-[90vh] flex flex-col items-center justify-center text-center px-6">
      <div className="bg-opacity-20 backdrop-blur-lg border border-pink-500 p-10 rounded-2xl shadow-lg max-w-3xl">
        <h1 className="text-5xl font-extrabold text-pink-400 animate-pulse">
          AI Diagnostic Assistant
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          Revolutionizing medical diagnosis with AI-powered precision.
        </p>
        <div className="mt-6 flex space-x-6">
          <Link to="/dashboard">
            <button className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl shadow-md transition duration-300 hover:bg-pink-400">
              Try Now
            </button>
          </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
