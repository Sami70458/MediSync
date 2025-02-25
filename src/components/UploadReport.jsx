import { useState } from "react";

const UploadReport = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
      alert("Report uploaded successfully!");
      setSelectedFile(null);
    } else {
      alert("Please select a file first.");
    }
  };

  return (
    <div className="flex flex-col items-center bg-opacity-20 backdrop-blur-lg border border-pink-500 p-6 rounded-xl shadow-lg w-96 mx-auto">
      <h2 className="text-xl font-bold text-white mb-4">Upload Your Report</h2>
      <input 
        type="file" 
        onChange={handleFileChange} 
        className="text-white cursor-pointer mb-4"
      />
      {selectedFile && (
        <p className="text-sm text-pink-400">{selectedFile.name}</p>
      )}
      <button 
        onClick={handleUpload} 
        className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-pink-600 transition">
        Upload
      </button>
    </div>
  );
};

export default UploadReport;
