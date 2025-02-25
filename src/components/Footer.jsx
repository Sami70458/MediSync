const Footer = () => {
    return (
      <footer className="bg-opacity-10 backdrop-blur-lg border-t border-pink-500 text-white text-center p-6 mt-10 shadow-lg">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg font-semibold text-pink-400">&copy; 2025 AI Diagnostic Assistant</p>
          <p className="text-gray-300 text-sm">All rights reserved.</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-gray-400 hover:text-pink-400 transition duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition duration-300">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-pink-400 transition duration-300">Contact</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  