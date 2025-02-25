import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Medications = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample user data
  const user = {
    name: "Alex Johnson",
    lastLogin: "Feb 24, 2025",
    profileImage: "/api/placeholder/100/100"
  };
  
  // Sample medication data
  const [medications, setMedications] = useState([
    {
      id: 1,
      name: "Loratadine",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "Jan 15, 2025",
      endDate: "Ongoing",
      status: "Active",
      prescribedBy: "Dr. Sarah Williams",
      instructions: "Take in the morning with food",
      refillsRemaining: 3,
      nextRefillDate: "Mar 15, 2025",
      sideEffects: ["Drowsiness", "Dry mouth"],
      category: "Antihistamine"
    },
    {
      id: 2,
      name: "Fluticasone",
      dosage: "50mcg",
      frequency: "Twice daily",
      startDate: "Feb 1, 2025",
      endDate: "Ongoing",
      status: "Active",
      prescribedBy: "Dr. Sarah Williams",
      instructions: "Two sprays in each nostril morning and evening",
      refillsRemaining: 2,
      nextRefillDate: "Mar 1, 2025",
      sideEffects: ["Nasal irritation", "Headache"],
      category: "Corticosteroid"
    },
    {
      id: 3,
      name: "Amoxicillin",
      dosage: "500mg",
      frequency: "Three times daily",
      startDate: "Jan 5, 2025",
      endDate: "Jan 12, 2025",
      status: "Completed",
      prescribedBy: "Dr. James Chen",
      instructions: "Take with food. Complete full course of treatment.",
      refillsRemaining: 0,
      nextRefillDate: null,
      sideEffects: ["Diarrhea", "Nausea"],
      category: "Antibiotic"
    },
    {
      id: 4,
      name: "Lisinopril",
      dosage: "10mg",
      frequency: "Once daily",
      startDate: "Dec 10, 2024",
      endDate: "Ongoing",
      status: "Active",
      prescribedBy: "Dr. Robert Garcia",
      instructions: "Take in the morning. Monitor blood pressure regularly.",
      refillsRemaining: 5,
      nextRefillDate: "Mar 10, 2025",
      sideEffects: ["Dizziness", "Cough"],
      category: "ACE Inhibitor"
    }
  ]);

  // Filter medications based on search query and active filter
  const filteredMedications = medications.filter(medication => {
    const matchesSearch = 
      medication.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      medication.prescribedBy.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === "all") return matchesSearch;
    if (activeFilter === "active") return matchesSearch && medication.status === "Active";
    if (activeFilter === "completed") return matchesSearch && medication.status === "Completed";
    return matchesSearch;
  });

  // Handle navigation back to dashboard
  const handleBackToDashboard = () => {
    navigate("/home");
  };

  // Status color mapping
  const getStatusColor = (status) => {
    switch(status) {
      case "Active": return "text-green-400 bg-green-400/10";
      case "Completed": return "text-blue-400 bg-blue-400/10";
      case "Discontinued": return "text-red-400 bg-red-400/10";
      default: return "text-gray-400 bg-gray-400/10";
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button 
              onClick={handleBackToDashboard}
              className="flex items-center text-gray-400 hover:text-white transition-colors mb-2"
            >
              <span className="material-icons-round mr-1">arrow_back</span>
              <span>Back to Dashboard</span>
            </button>
            <h1 className="text-3xl font-bold">Your Medications</h1>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors mr-2">
              <span className="material-icons-round">notifications</span>
            </button>
            <img 
              src={user.profileImage} 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-pink-500"
            />
          </div>
        </div>
        
        {/* Search and Filters */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search medications..."
                className="bg-gray-700 rounded-lg py-2 pl-10 pr-4 w-full md:w-80 focus:outline-none focus:ring-2 focus:ring-pink-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="material-icons-round absolute left-3 top-2 text-gray-400">
                search
              </span>
            </div>
            
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded-lg ${activeFilter === 'all' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setActiveFilter('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeFilter === 'active' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setActiveFilter('active')}
              >
                Active
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeFilter === 'completed' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setActiveFilter('completed')}
              >
                Completed
              </button>
            </div>
          </div>
        </div>
        
        {/* Medications List */}
        <div className="grid grid-cols-1 gap-4">
          {filteredMedications.length > 0 ? (
            filteredMedications.map(medication => (
              <div key={medication.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-medium">{medication.name}</h2>
                      <p className="text-gray-400 text-sm">{medication.category}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(medication.status)}`}>
                      {medication.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-gray-400 mb-2">Prescription Details</h3>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="w-32 text-gray-400">Dosage:</span>
                          <span>{medication.dosage}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 text-gray-400">Frequency:</span>
                          <span>{medication.frequency}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 text-gray-400">Start Date:</span>
                          <span>{medication.startDate}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 text-gray-400">End Date:</span>
                          <span>{medication.endDate}</span>
                        </div>
                        <div className="flex">
                          <span className="w-32 text-gray-400">Prescribed By:</span>
                          <span>{medication.prescribedBy}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-gray-400 mb-2">Additional Information</h3>
                      <div className="space-y-2">
                        <div className="flex">
                          <span className="w-32 text-gray-400">Instructions:</span>
                          <span>{medication.instructions}</span>
                        </div>
                        {medication.status === "Active" && (
                          <>
                            <div className="flex">
                              <span className="w-32 text-gray-400">Refills:</span>
                              <span>{medication.refillsRemaining} remaining</span>
                            </div>
                            <div className="flex">
                              <span className="w-32 text-gray-400">Next Refill:</span>
                              <span>{medication.nextRefillDate}</span>
                            </div>
                          </>
                        )}
                        <div className="flex">
                          <span className="w-32 text-gray-400">Side Effects:</span>
                          <span>{medication.sideEffects.join(", ")}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {medication.status === "Active" && (
                  <div className="p-4 border-t border-gray-700 flex justify-end space-x-3">
                    <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                      Request Refill
                    </button>
                    <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                      Set Reminder
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <span className="material-icons-round text-gray-400 text-4xl mb-2">
                medication
              </span>
              <h2 className="text-xl font-medium mb-1">No medications found</h2>
              <p className="text-gray-400">
                {searchQuery 
                  ? `No results match your search "${searchQuery}"`
                  : "You have no medications in this category"
                }
              </p>
            </div>
          )}
        </div>
        
        {/* Add Medication Button */}
        <div className="fixed bottom-6 right-6">
          <button className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
            <span className="material-icons-round">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Medications;