const AboutUs = () => {
    return (
      <section className="py-20 bg-[#0A0F24] text-white text-center">
        <h2 className="text-4xl font-bold neon-glow">About Us</h2>
        <p className="text-gray-400 mt-2">Empowering healthcare with AI-driven diagnostics</p>
  
        <div className="mt-10 max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-xl shadow-lg border border-pink-500">
          <p className="text-lg text-gray-300 leading-relaxed">
            Our AI-powered diagnostic assistant helps users analyze medical reports with cutting-edge technology. 
            By leveraging deep learning and natural language processing, we aim to provide fast, accurate, 
            and reliable insights, empowering users with better healthcare decisions.
          </p>
  
          <div className="mt-6 flex justify-center gap-4">
            <span className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
              AI-Powered
            </span>
            <span className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg">
              Trusted by Experts
            </span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full shadow-lg">
              Secure & Private
            </span>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutUs;
  