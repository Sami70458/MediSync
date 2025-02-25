import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";

const DiagnosisResult = () => {
  const location = useLocation();
  const diagnosisData = location.state?.result || null;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-black text-white px-6">
      {loading ? (
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>
          <p className="mt-4 text-lg">Analyzing Results...</p>
        </div>
      ) : (
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-2xl shadow-lg text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-pink-400 mb-4">Diagnosis Report</h2>
          
          {diagnosisData ? (
            <>
              <p className="text-lg text-gray-300 mb-2">Condition: <span className="text-white font-semibold">{diagnosisData.condition}</span></p>
              <p className="text-lg text-gray-300 mb-2">Severity: <span className="text-white font-semibold">{diagnosisData.severity}</span></p>
              <p className="text-lg text-gray-300 mb-2">Recommendations:</p>
              <ul className="text-gray-300 list-disc list-inside">
                {diagnosisData.recommendations.map((rec, index) => (
                  <li key={index} className="text-white">{rec}</li>
                ))}
              </ul>

              <div className="mt-6">
                <Button text="Download Report" className="bg-blue-500 border-blue-400" />
                <Button text="Back to Dashboard" className="ml-4 bg-gray-700 border-gray-500" />
              </div>
            </>
          ) : (
            <p className="text-lg text-gray-300">No diagnosis data available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default DiagnosisResult;
