import { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here (API call, email service, etc.)
  };

  return (
    <section id="contact" className="bg-[#0A0F24] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-pink-500 neon-text">Get in Touch</h2>
        <p className="text-gray-400 mt-2">We'd love to hear from you. Fill out the form below or reach out to us directly.</p>
      </div>

      <div className="mt-10 flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <div className="flex items-center space-x-4">
            <FaPhone className="text-pink-500 text-xl" />
            <span className="text-gray-300">+123 456 7890</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-pink-500 text-xl" />
            <span className="text-gray-300">contact@aidiagnostic.com</span>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-pink-500 text-xl" />
            <span className="text-gray-300">123 AI Street, Tech City, TX</span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6 mt-6">
            <a href="#" className="text-pink-500 hover:text-pink-400 transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-400 transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-400 transition">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 bg-[#11162B] p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-300">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-300">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-gray-300">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 rounded-lg transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
