import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaCheck } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Store user data in localStorage (for demonstration purposes)
    try {
      // Check if email already exists
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      if (users.some(user => user.email === formData.email)) {
        setError("Email already registered");
        return;
      }

      // Add new user to users array
      users.push({
        name: formData.name,
        email: formData.email,
        password: formData.password, // In a real app, you should NEVER store passwords in plain text
      });

      localStorage.setItem("users", JSON.stringify(users));
      
      // Set current user
      localStorage.setItem("currentUser", JSON.stringify({
        name: formData.name,
        email: formData.email
      }));

      setSuccess("Signup successful! Redirecting...");
      
      // Redirect after success
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      setError("Something went wrong. Please try again.");
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