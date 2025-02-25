import { FaUpload, FaMicroscope, FaCheckCircle, FaFileDownload } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#0A0F24] text-white text-center">
      <h2 className="text-4xl font-bold neon-glow">How It Works</h2>
      <p className="text-gray-400 mt-2">Follow these simple steps to get your AI-driven diagnosis</p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-pink-500 hover:scale-105 transition">
          <FaUpload className="text-5xl text-pink-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Upload Report</h3>
          <p className="text-gray-300 mt-2">Choose your medical report & upload securely.</p>
        </div>

        {/* Step 2 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-blue-500 hover:scale-105 transition">
          <FaMicroscope className="text-5xl text-blue-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">AI Analysis</h3>
          <p className="text-gray-300 mt-2">AI processes your report with deep learning.</p>
        </div>

        {/* Step 3 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-purple-500 hover:scale-105 transition">
          <FaCheckCircle className="text-5xl text-purple-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Instant Diagnosis</h3>
          <p className="text-gray-300 mt-2">Get AI-generated medical insights instantly.</p>
        </div>

        {/* Step 4 */}
        <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-xl shadow-lg border border-green-500 hover:scale-105 transition">
          <FaFileDownload className="text-5xl text-green-400 mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Save & View</h3>
          <p className="text-gray-300 mt-2">Download or save your AI-generated report.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
