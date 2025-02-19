import { useEffect, useState } from "react";

export default function Portfolio() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch(
      "https://script.googleusercontent.com/macros/echo?user_content_key=scC7dLCxxh24pdU_noKdzK4BoYmJ8WlpG81Op66h9sECQ-SZ9k2rodcWdkKE90D_By2pLlP_j8rBKRKmlB2y-l14SJlKmb6mm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKiw5jqq3K-V8DFq9Rc522SEio6mohxiRxZopnbSjjY--u6m0RSlzs4jFjd2i-8cVQ6vfgYAuN2vZjqBVCSOMCBfr2_iWIEtqtz9Jw9Md8uu&lib=MWC0pUN2CFemLimnosWg8fJIaZD05s_g3"
    )
      .then((response) => response.json())
      .then((data) => {
        setImages(data.data.map((item) => item["sumber gambar"].trim()));
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);

  const projects = [
    {
      title: "Summit - Website Design",
      category: "Website Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Mobile App Development",
      category: "Mobile Apps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Mobile App Development",
      category: "Product Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Mobile App Development",
      category: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="bg-[#1a1e29] w-full">
      <div className="text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-center mb-8">Portfolio</h1>
          <h2 className="text-6xl font-bold text-center mb-8">My Latest Project</h2>
          <p className="text-[#b4b4b6] px-64 text-center mb-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            minima exercitationem rerum nesciunt perferendis vel.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="p-6 shadow-lg">
                {images[index] && (
                  <img
                    src={images[index]}
                    alt={project.title}
                    className="mb-4 w-full"
                  />
                )}
                <span className="text-sm text-gray-300 uppercase bg-transparent px-3 py-1 rounded-full inline-block border border-gray-500 mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
