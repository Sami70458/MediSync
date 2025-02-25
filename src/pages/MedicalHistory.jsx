import React, { useState } from "react";

const MedicalHistory = () => {
  const [reports] = useState([
    { id: 1, name: "Blood Test Report", date: "2025-02-10", status: "Normal", doctor: "Dr. Johnson", department: "Hematology" },
    { id: 2, name: "X-Ray Report", date: "2025-01-25", status: "Minor Issue", doctor: "Dr. Williams", department: "Radiology" },
    { id: 3, name: "MRI Scan", date: "2024-12-15", status: "Requires Attention", doctor: "Dr. Chen", department: "Neurology" },
    { id: 4, name: "Physical Examination", date: "2024-11-30", status: "Normal", doctor: "Dr. Garcia", department: "General" },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [expandedReport, setExpandedReport] = useState(null);

  const filteredReports = reports.filter((report) => {
    const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.doctor.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = selectedFilter === "all" || 
                         (selectedFilter === "attention" && report.status === "Requires Attention") ||
                         (selectedFilter === "normal" && report.status === "Normal") ||
                         (selectedFilter === "minor" && report.status === "Minor Issue");
    
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case "Requires Attention": return "text-red-400";
      case "Minor Issue": return "text-yellow-400";
      case "Normal": return "text-green-400";
      default: return "text-white";
    }
  };

  const toggleReportDetails = (id) => {
    setExpandedReport(expandedReport === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-6">
        Medical History
      </h2>
      
      <div className="w-full max-w-4xl px-4">
        <div className="bg-gray-800 bg-opacity-80 backdrop-blur-lg p-6 rounded-xl shadow-lg border border-purple-500 mb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search reports..."
                className="w-full bg-gray-700 text-white px-4 py-2 rounded-lg border border-gray-600 focus:outline-none focus:border-pink-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2">
              <button 
                className={`px-3 py-1 rounded-lg ${selectedFilter === 'all' ? 'bg-purple-500' : 'bg-gray-700'}`}
                onClick={() => setSelectedFilter("all")}
              >
                All
              </button>
              <button 
                className={`px-3 py-1 rounded-lg ${selectedFilter === 'attention' ? 'bg-red-500' : 'bg-gray-700'}`}
                onClick={() => setSelectedFilter("attention")}
              >
                Attention
              </button>
              <button 
                className={`px-3 py-1 rounded-lg ${selectedFilter === 'minor' ? 'bg-yellow-500' : 'bg-gray-700'}`}
                onClick={() => setSelectedFilter("minor")}
              >
                Minor
              </button>
              <button 
                className={`px-3 py-1 rounded-lg ${selectedFilter === 'normal' ? 'bg-green-500' : 'bg-gray-700'}`}
                onClick={() => setSelectedFilter("normal")}
              >
                Normal
              </button>
            </div>
          </div>
          
          {filteredReports.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-white">
                <thead>
                  <tr className="border-b border-purple-400">
                    <th className="p-3">Report Name</th>
                    <th className="p-3 hidden md:table-cell">Date</th>
                    <th className="p-3">Status</th>
                    <th className="p-3 hidden md:table-cell">Department</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <React.Fragment key={report.id}>
                      <tr 
                        className="border-b border-gray-600 hover:bg-gray-700 transition cursor-pointer"
                        onClick={() => toggleReportDetails(report.id)}
                      >
                        <td className="p-3 font-medium">{report.name}</td>
                        <td className="p-3 hidden md:table-cell">{report.date}</td>
                        <td className={`p-3 font-bold ${getStatusColor(report.status)}`}>
                          {report.status}
                        </td>
                        <td className="p-3 hidden md:table-cell">{report.department}</td>
                        <td className="p-3 text-right">
                          <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-sm">
                            {expandedReport === report.id ? "Hide" : "View"}
                          </button>
                        </td>
                      </tr>
                      {expandedReport === report.id && (
                        <tr className="bg-gray-800">
                          <td colSpan="5" className="p-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div>
                                <p><span className="text-gray-400">Report ID:</span> #{report.id}</p>
                                <p><span className="text-gray-400">Date:</span> {report.date}</p>
                                <p><span className="text-gray-400">Doctor:</span> {report.doctor}</p>
                              </div>
                              <div>
                                <p><span className="text-gray-400">Department:</span> {report.department}</p>
                                <p><span className="text-gray-400">Status:</span> <span className={getStatusColor(report.status)}>{report.status}</span></p>
                                <div className="mt-2">
                                  <button className="bg-purple-500 hover:bg-purple-600 px-3 py-1 rounded text-sm mr-2">
                                    Download PDF
                                  </button>
                                  <button className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded text-sm">
                                    Share
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              No reports match your search criteria
            </div>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <button className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg font-medium">
            Request Records
          </button>
          <p className="text-gray-400 text-sm">
            Showing {filteredReports.length} of {reports.length} reports
          </p>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;