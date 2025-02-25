const Button = ({ text, onClick, type = "button", className = "" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-6 py-3 text-lg font-semibold text-white bg-pink-500 bg-opacity-90 rounded-xl shadow-md 
          hover:bg-opacity-100 transition-all duration-300 ease-in-out transform hover:scale-105 
          backdrop-blur-lg border border-pink-400 ${className}`}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  