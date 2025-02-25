import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("upcoming");
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample user data
  const user = {
    name: "Alex Johnson",
    lastLogin: "Feb 24, 2025",
    profileImage: "/api/placeholder/100/100"
  };
  
  // Sample appointment data
  const [appointments, setAppointments] = useState([
    // Upcoming appointments
    {
      id: 1,
      doctorName: "Dr. Sarah Williams",
      specialty: "Pulmonologist",
      date: "March 2, 2025",
      time: "10:30 AM",
      location: "Medical Center, Room 305",
      status: "Confirmed",
      type: "Follow-up",
      notes: "Discuss recent respiratory test results",
      virtual: false,
      upcoming: true
    },
    {
      id: 2,
      doctorName: "Dr. James Chen",
      specialty: "Neurologist",
      date: "March 15, 2025",
      time: "2:15 PM",
      location: "Neurology Clinic",
      status: "Pending",
      type: "Consultation",
      notes: "Initial consultation for recurring headaches",
      virtual: false,
      upcoming: true
    },
    {
      id: 3,
      doctorName: "Dr. Lisa Martinez",
      specialty: "General Practitioner",
      date: "March 5, 2025",
      time: "9:00 AM",
      location: "Virtual Appointment",
      status: "Confirmed",
      type: "Routine Check-up",
      notes: "Annual physical examination",
      virtual: true,
      upcoming: true
    },
    
    // Past appointments
    {
      id: 4,
      doctorName: "Dr. Robert Garcia",
      specialty: "Cardiologist",
      date: "February 10, 2025",
      time: "11:45 AM",
      location: "Heart Center, Building B",
      status: "Completed",
      type: "Follow-up",
      notes: "Blood pressure monitoring, medication adjustment",
      virtual: false,
      upcoming: false
    },
    {
      id: 5,
      doctorName: "Dr. Sarah Williams",
      specialty: "Pulmonologist",
      date: "January 15, 2025",
      time: "3:30 PM",
      location: "Medical Center, Room 305",
      status: "Completed",
      type: "Diagnostic",
      notes: "Respiratory function tests performed",
      virtual: false,
      upcoming: false
    },
    {
      id: 6,
      doctorName: "Dr. Lisa Martinez",
      specialty: "General Practitioner",
      date: "December 20, 2024",
      time: "10:00 AM",
      location: "Virtual Appointment",
      status: "Missed",
      type: "Routine Check-up",
      notes: "Patient did not attend",
      virtual: true,
      upcoming: false
    }
  ]);

  // Filter appointments based on search query and active tab
  const filteredAppointments = appointments.filter(appointment => {
    const matchesSearch = 
      appointment.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      appointment.type.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === "upcoming") return matchesSearch && appointment.upcoming;
    if (activeTab === "past") return matchesSearch && !appointment.upcoming;
    return matchesSearch;
  });

  // Handle navigation back to dashboard
  const handleBackToDashboard = () => {
    navigate("/home");
  };

  // Status color mapping
  const getStatusColor = (status) => {
    switch(status) {
      case "Confirmed": return "text-green-400 bg-green-400/10";
      case "Pending": return "text-yellow-400 bg-yellow-400/10";
      case "Completed": return "text-blue-400 bg-blue-400/10";
      case "Missed": return "text-red-400 bg-red-400/10";
      case "Cancelled": return "text-gray-400 bg-gray-400/10";
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
            <h1 className="text-3xl font-bold">Your Appointments</h1>
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
        
        {/* Search and Tabs */}
        <div className="bg-gray-800 rounded-xl p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search appointments..."
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
                className={`px-4 py-2 rounded-lg ${activeTab === 'upcoming' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setActiveTab('upcoming')}
              >
                Upcoming
              </button>
              <button 
                className={`px-4 py-2 rounded-lg ${activeTab === 'past' 
                  ? 'bg-pink-500 text-white' 
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                onClick={() => setActiveTab('past')}
              >
                Past
              </button>
            </div>
          </div>
        </div>
        
        {/* Calendar View */}
        {activeTab === 'upcoming' && (
          <div className="bg-gray-800 rounded-xl p-4 mb-6">
            <h2 className="text-xl font-medium mb-4">Your Schedule</h2>
            <div className="overflow-x-auto">
              <div className="min-w-max grid grid-cols-7 gap-2">
                {/* Days of the week */}
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-gray-400 text-sm font-medium p-2">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days (simplified for demo) */}
                {Array.from({ length: 35 }).map((_, index) => {
                  const day = index - 5; // Offset to start month on correct day
                  const hasAppointment = filteredAppointments.some(
                    apt => apt.upcoming && apt.date.includes(`March ${day}, 2025`)
                  );
                  
                  return (
                    <div 
                      key={index} 
                      className={`p-2 text-center rounded-lg ${
                        day <= 0 || day > 31 
                          ? 'text-gray-600' 
                          : hasAppointment
                            ? 'bg-pink-500/20 border border-pink-500/50'
                            : 'bg-gray-700'
                      }`}
                    >
                      {day > 0 && day <= 31 ? day : ''}
                      {hasAppointment && day > 0 && day <= 31 && (
                        <div className="w-2 h-2 bg-pink-500 rounded-full mx-auto mt-1"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        
        {/* Appointments List */}
        <div className="grid grid-cols-1 gap-4">
          {filteredAppointments.length > 0 ? (
            filteredAppointments.map(appointment => (
              <div key={appointment.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-medium">{appointment.doctorName}</h2>
                      <p className="text-gray-400 text-sm">{appointment.specialty}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(appointment.status)}`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="material-icons-round text-gray-400 mr-2">
                          calendar_today
                        </span>
                        <div>
                          <div className="font-medium">{appointment.date}</div>
                          <div className="text-sm text-gray-400">{appointment.time}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="material-icons-round text-gray-400 mr-2">
                          location_on
                        </span>
                        <div>
                          <div className="font-medium">
                            {appointment.virtual ? "Virtual Appointment" : appointment.location}
                          </div>
                          {appointment.virtual && (
                            <div className="text-sm text-blue-400">Video call link will be sent via email</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <span className="material-icons-round text-gray-400 mr-2">
                          label
                        </span>
                        <div className="font-medium">{appointment.type}</div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-gray-400 mb-2">Notes</h3>
                      <p className="text-sm">{appointment.notes}</p>
                    </div>
                  </div>
                </div>
                
                {appointment.upcoming && (
                  <div className="p-4 border-t border-gray-700 flex justify-end space-x-3">
                    {appointment.status !== "Confirmed" ? (
                      <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors">
                        Confirm
                      </button>
                    ) : (
                      <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition-colors">
                        Reschedule
                      </button>
                    )}
                    <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors">
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="bg-gray-800 rounded-xl p-8 text-center">
              <span className="material-icons-round text-gray-400 text-4xl mb-2">
                event_busy
              </span>
              <h2 className="text-xl font-medium mb-1">No appointments found</h2>
              <p className="text-gray-400">
                {searchQuery 
                  ? `No results match your search "${searchQuery}"`
                  : activeTab === "upcoming" 
                    ? "You have no upcoming appointments scheduled" 
                    : "You have no past appointments on record"
                }
              </p>
            </div>
          )}
        </div>
        
        {/* Schedule Appointment Button */}
        <div className="fixed bottom-6 right-6">
          <button className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
            <span className="material-icons-round">add</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appointments;