import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/"); // Go to home first, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <nav className="bg-[#0A0F24] bg-opacity-80 backdrop-blur-lg shadow-lg fixed top-0 w-full z-50 border-b border-pink-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold text-pink-400 neon-glow">
            AI Diagnostic
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <button onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </button>
          <button onClick={() => scrollToSection("features")} className="nav-link">
            Features
          </button>
          <button onClick={() => scrollToSection("howitworks")} className="nav-link">
            HowItWorks
          </button>

          <button onClick={() => scrollToSection("about")} className="nav-link">
            About Us
          </button>

          <button onClick={() => scrollToSection("testimonials")} className="nav-link">
            Testimonials
          </button>

     

          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
          
          <Link to="/login" className="nav-link px-4 py-2 bg-pink-500 rounded-lg text-white shadow-lg hover:bg-pink-600 transition">
            Sign In
          </Link>
          <Link to="/register" className="nav-link px-4 py-2 bg-pink-500 rounded-lg text-white shadow-lg hover:bg-pink-600 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
