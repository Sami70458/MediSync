import { Link } from "react-router-dom";
import { FaHome, FaClipboardList, FaCog, FaSignOutAlt, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-opacity-20 backdrop-blur-lg border-r border-pink-500 text-white p-6 fixed left-0 top-0 flex flex-col space-y-6 shadow-xl">
      <h2 className="text-2xl font-bold text-pink-400">AI Diagnostic</h2>
      <nav className="flex flex-col space-y-4">
        <Link to="/dashboard" className="flex items-center space-x-3 hover:text-pink-400 transition">
          <FaHome /> <span>Dashboard</span>
        </Link>
        <Link to="/diagnosis" className="flex items-center space-x-3 hover:text-pink-400 transition">
          <FaClipboardList /> <span>Diagnosis</span>
        </Link>
        <Link to="/medical-history" className="flex items-center space-x-3 hover:text-pink-400 transition">
          <FaUser /> <span>Medical History</span>
        </Link>
        <Link to="/settings" className="flex items-center space-x-3 hover:text-pink-400 transition">
          <FaCog /> <span>Settings</span>
        </Link>
        <Link to="/logout" className="flex items-center space-x-3 hover:text-pink-400 transition mt-auto">
          <FaSignOutAlt /> <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
