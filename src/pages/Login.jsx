import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Simply store the current user info without verification
    localStorage.setItem("currentUser", JSON.stringify({
      email: email
    }));
    
    // Set a dummy auth token
    localStorage.setItem("authToken", `token-${Date.now()}`);
    
    // Immediately redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#0a0a1a] to-[#1b1b3a]">
      <div className="bg-black bg-opacity-50 backdrop-blur-lg p-8 rounded-xl shadow-2xl w-96 text-white border-2 border-pink-500">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-pink-400 mb-2" style={{ textShadow: "0 0 10px rgba(236, 72, 153, 0.7)" }}>
            Welcome Back
          </h2>
          <p className="text-sm text-center text-gray-300">Login to continue</p>
        </div>

        <form onSubmit={handleLogin} className="mt-6 space-y-5">
          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 group-focus-within:text-pink-300">
              <FaUser />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 focus:border-pink-400 rounded-lg py-3 px-10 outline-none transition duration-300 placeholder-gray-500 focus:shadow-lg focus:shadow-pink-500/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="relative group">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 group-focus-within:text-pink-300">
              <FaLock />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 bg-opacity-50 text-white border border-gray-700 focus:border-pink-400 rounded-lg py-3 px-10 outline-none transition duration-300 placeholder-gray-500 focus:shadow-lg focus:shadow-pink-500/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-gray-600 bg-gray-700 focus:ring-pink-500 text-pink-500"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember" className="ml-2 text-gray-300">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-pink-400 hover:text-pink-300 transition duration-300">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50 focus:outline-none"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 pt-4 border-t border-gray-700">
          <p className="text-center text-sm text-gray-300">
            Don't have an account?{" "}
            <Link to="/register" className="text-pink-400 hover:text-pink-300 transition duration-300 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;