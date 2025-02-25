import { useState } from "react";
import { Upload, FileText, Check, AlertTriangle, Loader, X } from "lucide-react";

const Diagnosis = () => {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setReport(file);
    }
  };

  const handleDiagnosis = () => {
    if (!report) {
      alert("Please upload a report first!");
      return;
    }
    setLoading(true);
    setResult(null);

    // Simulate AI processing
    setTimeout(() => {
      const results = {
        status: "normal",
        confidence: 92,
        findings: [
          "No abnormalities detected in lung tissue",
          "Heart size and shape appear normal",
          "No signs of inflammation"
        ],
        recommendation: "No further action required. Schedule routine follow-up in 12 months."
      };
      setResult(results);
      setLoading(false);
    }, 2000);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setReport(e.dataTransfer.files[0]);
    }
  };

  const clearFile = () => {
    setReport(null);
    setResult(null);
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar placeholder - in a real app this would be a shared component */}
      <div className="w-64 bg-gray-800 h-screen p-4 hidden md:flex flex-col">
        <div className="mb-8 flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="ml-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            MediSync
          </span>
        </div>
        
        {/* Menu items would be here in a real app */}
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">AI Diagnosis</h1>
              <p className="text-gray-400">
                Upload your medical reports for instant AI-powered analysis
              </p>
            </div>
            
            <div className="flex items-center space-x-3">
              <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                <span className="material-icons-round">notifications</span>
              </button>
              <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors">
                <span className="material-icons-round">message</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-xl font-medium flex items-center">
                  <FileText size={20} className="mr-2 text-blue-400" />
                  Upload Medical Report
                </h2>
              </div>
              
              <div className="p-6">
                <div 
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-8 transition-all duration-200 flex flex-col items-center justify-center ${
                    dragActive 
                      ? "border-blue-500 bg-blue-500/10" 
                      : "border-gray-600 hover:border-blue-400 hover:bg-gray-800/30"
                  }`}
                >
                  {!report ? (
                    <>
                      <Upload size={40} className="text-gray-400 mb-4" />
                      <h3 className="text-lg font-medium text-white mb-2">Drag and drop your file here</h3>
                      <p className="text-gray-400 text-sm mb-4 text-center">
                        Supported formats: PDF, JPG, DICOM, PNG
                      </p>
                      <p className="text-gray-500 text-xs mb-6">Maximum file size: 50MB</p>
                      <label className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-6 rounded-lg transition duration-300 hover:shadow-lg hover:shadow-blue-500/30">
                        Browse Files
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileUpload}
                          accept=".pdf,.jpg,.jpeg,.png,.dcm"
                        />
                      </label>
                    </>
                  ) : (
                    <div className="w-full">
                      <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                        <div className="flex items-center">
                          <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                            <FileText size={20} className="text-blue-400" />
                          </div>
                          <div className="truncate">
                            <p className="text-white font-medium truncate">
                              {report.name}
                            </p>
                            <p className="text-gray-400 text-xs">
                              {(report.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                          </div>
                        </div>
                        <button 
                          onClick={clearFile}
                          className="p-1 bg-gray-600 rounded-full hover:bg-gray-500 transition duration-200"
                        >
                          <X size={16} className="text-gray-300" />
                        </button>
                      </div>
                      
                      <button
                        onClick={handleDiagnosis}
                        disabled={loading}
                        className={`w-full mt-4 py-3 rounded-lg transition duration-300 flex items-center justify-center ${
                          loading 
                            ? "bg-gray-700 cursor-not-allowed" 
                            : "bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/30"
                        }`}
                      >
                        {loading ? (
                          <>
                            <Loader size={18} className="animate-spin mr-2" />
                            Analyzing Report...
                          </>
                        ) : (
                          <>
                            Run AI Diagnosis
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="mt-6">
                  <h3 className="text-white font-medium mb-2">About AI Diagnosis</h3>
                  <p className="text-gray-300 text-sm">
                    Our advanced AI analyzes your medical reports to provide instant insights. 
                    The system has been trained on millions of medical reports and can detect 
                    patterns that might indicate various conditions.
                  </p>
                  <div className="mt-4 bg-gray-700/50 p-3 rounded-lg border border-gray-600">
                    <p className="text-xs text-gray-300 flex items-start">
                      <AlertTriangle size={16} className="text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                      AI diagnosis is meant to assist, not replace professional medical advice. 
                      Always consult with a healthcare provider for proper diagnosis and treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-xl font-medium">Diagnosis Results</h2>
              </div>
              
              <div className="p-6">
                {result ? (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-white">Analysis Complete</h3>
                        <p className="text-gray-300 text-sm">Report analyzed with {result.confidence}% confidence</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full flex items-center ${
                        result.status === "normal" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-yellow-500/20 text-yellow-400"
                      }`}>
                        {result.status === "normal" ? (
                          <>
                            <Check size={16} className="mr-1" /> Normal
                          </>
                        ) : (
                          <>
                            <AlertTriangle size={16} className="mr-1" /> Attention Needed
                          </>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-medium mb-2">Findings</h4>
                      <ul className="space-y-2">
                        {result.findings.map((finding, index) => (
                          <li key={index} className="bg-gray-700/50 p-3 rounded-lg flex items-start">
                            <Check size={16} className="text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{finding}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/30">
                      <h4 className="text-white font-medium mb-2">Recommendation</h4>
                      <p className="text-gray-300">{result.recommendation}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-700">
                      <div className="flex justify-between">
                        <button className="text-blue-400 hover:text-blue-300 transition duration-200 text-sm flex items-center">
                          <FileText size={16} className="mr-1" /> Download Report
                        </button>
                        <button className="text-blue-400 hover:text-blue-300 transition duration-200 text-sm flex items-center">
                          Share with Doctor
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-64 text-center">
                    <FileText size={48} className="text-gray-600 mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">No Results Yet</h3>
                    <p className="text-gray-300 text-sm">
                      Upload a medical report and run AI diagnosis to see results here
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diagnosis;