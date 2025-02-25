import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import HowItWorks from "../components/HowItWorks";
import AboutUs from "../components/AboutUs";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#0a0a1a] text-white min-h-screen">

    <Navbar />

      {/* Hero Section */}
      <section id="home">
        <HeroSection />
      </section>

      {/* Features Section */}
      <section id="features">
        <Features />
      </section>

      <section id="howitworks">
        <HowItWorks />
      </section>

      {/* Testimonials Section */}
      <section id="about">
        <AboutUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>


      {/* Contact Section */}
      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
