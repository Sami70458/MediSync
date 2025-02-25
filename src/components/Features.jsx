import { FaBrain, FaClock, FaShieldAlt, FaUserCheck } from "react-icons/fa";

const Features = () => {
  return (
    <section className="py-20 bg-[#0A0F24] text-white text-center">
      <h2 className="text-4xl font-bold neon-glow">Key Features</h2>
      <p className="text-gray-400 mt-2">Discover what makes our AI Diagnostic Assistant stand out</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Feature 1 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-pink-500 hover:scale-105 transition">
          <FaBrain className="text-5xl text-pink-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">AI-Powered Analysis</h3>
          <p className="text-gray-300 mt-2">Uses deep learning to analyze reports accurately.</p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-500 hover:scale-105 transition">
          <FaClock className="text-5xl text-blue-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Fast Diagnosis</h3>
          <p className="text-gray-300 mt-2">Get instant AI-generated medical insights.</p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-purple-500 hover:scale-105 transition">
          <FaShieldAlt className="text-5xl text-purple-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Secure & Private</h3>
          <p className="text-gray-300 mt-2">Your medical data remains encrypted & confidential.</p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-green-500 hover:scale-105 transition">
          <FaUserCheck className="text-5xl text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">User-Friendly</h3>
          <p className="text-gray-300 mt-2">Simple, intuitive interface for seamless experience.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
