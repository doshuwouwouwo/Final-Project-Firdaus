import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button from "../components/Button";

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const testimonials = [
    {
      name: "Mark Nelson",
      title: "Founder Summit",
      image: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      text: "Working with Zhack on our latest project was an absolute pleasure. Their attention to detail, creative problem-solving, and dedication to delivering results.",
    },
    {
      name: "Janice Salazar",
      title: "Founder TechNova",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww",
      text: "I'm thrilled with the results of the project that Zhack led. Their leadership skills, strategic thinking, and ability to motivate the team were instrumental.",
    },
    {
      name: "Shana Madron",
      title: "Founder Zenify",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8fDB8fHww",
      text: "It was a pleasure to work alongside Zhack on our recent project. Their strong communication skills, proactive approach, and ability to collaborate effectively.",
    },
    {
      name: "Gerry Ferguson",
      title: "Founder Helder",
      image: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      text: "I had the opportunity to collaborate with Zhack on a challenging project, and I was thoroughly impressed by their expertise and professionalism.",
    },
  ];

  return (
    <section className="container bg-gray-900 text-white py-16">
      <div className="flex gap-8">
        {/* Bagian Kiri */}
        <div className="w-[40%] mt-12" data-aos="fade-up">
          <h3 className="text-lg text-white">Testimonials</h3>
          <h2 className="text-7xl my-4">Amazing Reviews From My Clients</h2>
          <p className="text-gray-400 mt-4 mb-12 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Button text={"View All Reviews"} link={"/pages"} />
        </div>

        {/* Bagian Testimonial Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-[60%]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 border-2 border-gray-400 border-opacity-25 shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Delay bertahap untuk animasi berurutan
            >
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
