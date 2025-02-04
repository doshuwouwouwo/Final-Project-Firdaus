import Button from "../components/Button";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mark Nelson",
      title: "Founder Summit",
      image: "https://picsum.photos/50",
      text: "Working with Zhack on our latest project was an absolute pleasure. Their attention to detail, creative problem-solving, and dedication to delivering results.",
    },
    {
      name: "Janice Salazar",
      title: "Founder TechNova",
      image: "https://picsum.photos/50",
      text: "I'm thrilled with the results of the project that Zhack led. Their leadership skills, strategic thinking, and ability to motivate the team were instrumental.",
    },
    {
      name: "Shana Madron",
      title: "Founder Zenify",
      image: "https://picsum.photos/50",
      text: "It was a pleasure to work alongside Zhack on our recent project. Their strong communication skills, proactive approach, and ability to collaborate effectively.",
    },
    {
      name: "Gerry Ferguson",
      title: "Founder Helder",
      image: "https://picsum.photos/50",
      text: "I had the opportunity to collaborate with Zhack on a challenging project, and I was thoroughly impressed by their expertise and professionalism.",
    },
  ];
  return (
    <section className="container bg-gray-900 text-white py-16">
      <div className="flex gap-8">
        <div className="w-[40%] mt-12">
          <h3 className="text-lg text-white">Testimonials</h3>
          <h2 className="text-7xl my-4">Amazing Reviews From My Clients</h2>
          <p className="text-gray-400 mt-4 mb-12 max-w-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Button text={"View All Reviews"} link={"/pages"} />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-[60%]">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 border-2 border-gray-400 border-opacity-25 shadow-lg">
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">` {testimonial.text} `</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
