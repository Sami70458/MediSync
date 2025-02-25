const testimonials = [
    {
      name: "Amit Sharma",
      feedback: "The AI diagnostic system provided accurate results and helped me understand my symptoms better.",
      designation: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Priya Verma",
      feedback: "A revolutionary tool that makes healthcare more accessible and efficient!",
      designation: "Doctor",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Rahul Gupta",
      feedback: "Highly recommended! The diagnosis was quick, and the interface is user-friendly.",
      designation: "Student",
      image: "https://randomuser.me/api/portraits/men/50.jpg"
    }
  ];
  
  const Testimonials = () => {
    return (
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-opacity-20 backdrop-blur-lg border border-pink-500 text-white p-6 rounded-xl shadow-lg w-80">
              <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-pink-400" />
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <h3 className="font-semibold text-pink-400 mt-2">{testimonial.name}</h3>
              <p className="text-sm">{testimonial.designation}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;
  