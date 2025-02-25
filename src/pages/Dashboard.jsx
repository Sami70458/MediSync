import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState("home");
  const [appointments, setAppointments] = useState([]);
  
  // Sample user data
  const user = {
    name: "Alex Johnson",
    lastLogin: "Feb 24, 2025",
    profileImage: "/api/placeholder/100/100"
  };
  
  // Sample diagnostic data
  const recentDiagnostics = [
    {
      id: 1,
      date: "Feb 20, 2025",
      type: "Blood Analysis",
      result: "Normal",
      summary: "All parameters within normal range",
      aiConfidence: 96
    },
    {
      id: 2,
      date: "Feb 15, 2025",
      type: "Respiratory Function",
      result: "Minor Issue",
      summary: "Slightly reduced lung capacity, follow-up recommended",
      aiConfidence: 89
    },
    {
      id: 3,
      date: "Feb 5, 2025",
      type: "Neurological Assessment",
      result: "Normal",
      summary: "Cognitive functions and reflexes normal",
      aiConfidence: 94
    }
  ];
  
  // Sample appointment data - normally would be fetched from an API
  useEffect(() => {
    // Simulating data fetch
    const fetchedAppointments = [
      {
        id: 1,
        doctorName: "Dr. Sarah Williams",
        specialty: "Pulmonologist",
        date: "March 2, 2025",
        time: "10:30 AM",
        location: "Medical Center, Room 305"
      },
      {
        id: 2,
        doctorName: "Dr. James Chen",
        specialty: "Neurologist",
        date: "March 15, 2025",
        time: "2:15 PM",
        location: "Neurology Clinic"
      }
    ];
    
    setAppointments(fetchedAppointments);
  }, []);

  // Update active menu item based on current route
  useEffect(() => {
    const path = location.pathname;
    if (path === "/" || path === "/home") {
      setActiveMenuItem("home");
    } else if (path === "/diagnosis") {
      setActiveMenuItem("ai-diagnosis");
    } else if (path === "/history") {
      setActiveMenuItem("medical-history");
    } else if (path === "/medications") {
      setActiveMenuItem("medications");
    } else if (path === "/appointments") {
      setActiveMenuItem("appointments");
    }
  }, [location]);

  // Handle navigation
  const handleNavigate = (route) => {
    setActiveMenuItem(route);
    
    // Navigate to the corresponding page
    switch(route) {
      case "home":
        navigate("/home");
        break;
      case "ai-diagnosis":
        navigate("/diagnosis");
        break;
      case "medical-history":
        navigate("/history");
        break;
      case "medications":
        navigate("/medications");
        break;
      case "appointments":
        navigate("/appointments");
        break;
      default:
        navigate("/dashboard");
    }
  };

  // Status color mapping
  const getStatusColor = (status) => {
    switch(status) {
      case "Normal": return "text-green-400";
      case "Minor Issue": return "text-yellow-400";
      case "Requires Attention": return "text-red-400";
      default: return "text-white";
    }
  };

  const MenuItem = ({ icon, label, value }) => (
    <button
      className={`flex items-center w-full p-3 rounded-lg transition-colors ${
        activeMenuItem === value
          ? "bg-gradient-to-r from-pink-500/20 to-purple-500/20 border-l-4 border-pink-500"
          : "hover:bg-gray-800"
      }`}
      onClick={() => handleNavigate(value)}
    >
      <span className={`material-icons-round mr-3 ${
        activeMenuItem === value ? "text-pink-500" : "text-gray-400"
      }`}>
        {icon}
      </span>
      <span className={activeMenuItem === value ? "text-white" : "text-gray-300"}>
        {label}
      </span>
    </button>
  );

  return (
    <div className="min-h-screen flex bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 h-screen p-4 flex flex-col">
        <div className="mb-8 flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="ml-3 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            MediSync
          </span>
        </div>
        
        <div className="flex-1 space-y-2">
          <MenuItem icon="home" label="Home" value="home" />
          <MenuItem icon="psychology" label="AI Diagnosis" value="ai-diagnosis" />
          <MenuItem icon="history" label="Medical History" value="medical-history" />
          <MenuItem icon="medication" label="Medications" value="medications" />
          <MenuItem icon="event_available" label="Appointments" value="appointments" />
        </div>
        
        <div className="pt-4 border-t border-gray-700">
          <div className="flex items-center p-3">
            <img 
              src={user.profileImage} 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-pink-500"
            />
            <div className="ml-3">
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-400">Patient</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">
                Welcome back, {user.name.split(' ')[0]}
              </h1>
              <p className="text-gray-400">
                Last login: {user.lastLogin}
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
          
          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div 
              onClick={() => handleNavigate("medical-history")}
              className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/50 p-6 rounded-xl hover:translate-y-1 transition-transform cursor-pointer"
            >
              <span className="material-icons-round text-blue-400 text-3xl mb-3">
                upload_file
              </span>
              <h3 className="text-xl font-medium mb-2">Upload New Report</h3>
              <p className="text-gray-300 text-sm">
                Upload medical documents for AI analysis and record keeping
              </p>
            </div>
            
            <div 
              onClick={() => handleNavigate("medical-history")}
              className="bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/50 p-6 rounded-xl hover:translate-y-1 transition-transform cursor-pointer"
            >
              <span className="material-icons-round text-purple-400 text-3xl mb-3">
                description
              </span>
              <h3 className="text-xl font-medium mb-2">Past Reports</h3>
              <p className="text-gray-300 text-sm">
                Access your complete medical history and test results
              </p>
            </div>
            
            <div 
              onClick={() => handleNavigate("ai-diagnosis")}
              className="bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-pink-500/50 p-6 rounded-xl hover:translate-y-1 transition-transform cursor-pointer"
            >
              <span className="material-icons-round text-pink-400 text-3xl mb-3">
                healing
              </span>
              <h3 className="text-xl font-medium mb-2">AI Diagnosis</h3>
              <p className="text-gray-300 text-sm">
                Get instant analysis of your medical reports and symptoms
              </p>
            </div>
          </div>
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Diagnostics */}
            <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden">
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <h2 className="text-xl font-medium">Recent Diagnostic Results</h2>
                <button 
                  onClick={() => handleNavigate("ai-diagnosis")}
                  className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View All
                </button>
              </div>
              
              <div className="divide-y divide-gray-700">
                {recentDiagnostics.map(diagnostic => (
                  <div key={diagnostic.id} className="p-4 hover:bg-gray-700/50 transition-colors">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-medium">{diagnostic.type}</h3>
                      <span className="text-gray-400 text-sm">{diagnostic.date}</span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`font-bold ${getStatusColor(diagnostic.result)}`}>
                        {diagnostic.result}
                      </span>
                      <span className="text-sm bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                        AI Confidence: {diagnostic.aiConfidence}%
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm">{diagnostic.summary}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Side Content */}
            <div className="space-y-6">
              {/* Health Stats */}
              <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                <h2 className="text-xl font-medium mb-4">Health Overview</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Overall Health</span>
                      <span className="text-sm text-green-400">92%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" 
                        style={{ width: "92%" }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Respiratory</span>
                      <span className="text-sm text-yellow-400">78%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-yellow-400 to-yellow-500 h-2 rounded-full" 
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">Cardiovascular</span>
                      <span className="text-sm text-green-400">95%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-green-500 h-2 rounded-full" 
                        style={{ width: "95%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Upcoming Appointments */}
              <div className="bg-gray-800 p-4 rounded-xl shadow-lg">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium">Upcoming Appointments</h2>
                  <button 
                    onClick={() => handleNavigate("appointments")}
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    View All
                  </button>
                </div>
                
                {appointments.length > 0 ? (
                  <div className="space-y-3">
                    {appointments.slice(0, 2).map(appointment => (
                      <div 
                        key={appointment.id} 
                        className="bg-gray-700/50 p-3 rounded-lg border border-gray-600"
                      >
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{appointment.doctorName}</span>
                          <span className="text-sm text-blue-400">{appointment.specialty}</span>
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <span className="material-icons-round text-gray-400 mr-1 text-sm">
                            calendar_today
                          </span>
                          {appointment.date}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm">
                          <span className="material-icons-round text-gray-400 mr-1 text-sm">
                            schedule
                          </span>
                          {appointment.time}
                        </div>
                        <div className="flex items-center text-gray-300 text-sm mt-1">
                          <span className="material-icons-round text-gray-400 mr-1 text-sm">
                            location_on
                          </span>
                          {appointment.location}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center p-4 text-gray-400">
                    <span className="material-icons-round text-3xl mb-2">event_busy</span>
                    <p>No upcoming appointments</p>
                    <button 
                      onClick={() => handleNavigate("appointments")}
                      className="mt-2 text-sm text-blue-400 hover:text-blue-300"
                    >
                      Schedule an appointment
                    </button>
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

export default Dashboard;