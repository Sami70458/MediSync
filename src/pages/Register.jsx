import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    const response = await fetch("http://127.0.0.1:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (response.ok) {
      setSuccess("Signup successful! Redirecting...");
      setTimeout(() => {
        window.location.href = "/login"; // Redirect after success
      }, 2000);
    } else {
      setError(data.error || "Signup failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0a1a] to-[#1b1b3a]">
      <div className="w-full max-w-md bg-black bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-2xl border-2 border-pink-500 text-white">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-pink-400 mb-2" style={{ textShadow: "0 0 10px rgba(236, 72, 153, 0.7)" }}>
            Create an Account
          </h2>
          <p className="text-sm text-center text-gray-300">Join us today!</p>
        </div>

        {error && <p className="text-red-400 text-center mb-3">{error}</p>}
        {success && <p className="text-green-400 text-center mb-3">{success}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 group-focus-within:text-pink-300">
              <FaUser />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 focus:border-pink-400 rounded-lg py-3 px-10 outline-none transition duration-300 placeholder-gray-500 focus:shadow-lg focus:shadow-pink-500/30"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 group-focus-within:text-pink-300">
              <FaEnvelope />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 focus:border-pink-400 rounded-lg py-3 px-10 outline-none transition duration-300 placeholder-gray-500 focus:shadow-lg focus:shadow-pink-500/30"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 group-focus-within:text-pink-300">
              <FaLock />
            </div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 focus:border-pink-400 rounded-lg py-3 px-10 outline-none transition duration-300 placeholder-gray-500 focus:shadow-lg focus:shadow-pink-500/30"
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 group-focus-within:text-pink-300">
              <FaCheck />
            </div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 focus:border-pink-400 rounded-lg py-3 px-10 outline-none transition duration-300 placeholder-gray-500 focus:shadow-lg focus:shadow-pink-500/30"
              required
            />
          </div>

          <button 
            type="submit" 
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg mt-2 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 focus:outline-none"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-300 mt-6">
          Already have an account?{" "}
          <Link to="/login" className="text-pink-400 hover:text-pink-300 transition duration-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
