import Navbar from "../components/Navbar";
import Resume from "../layout/Resume";

export default function About() {
  return (
    <div className="bg-[#1a1e29]">
      <Navbar />
      <div className="container min-h-screen">
        {/* heading */}
        <div className="flex flex-col items-center justify-center w-full text-white pt-8 pb-24">
          <h1 className="text-2xl">ABOUT ME</h1>
          <h1 className="text-[4rem] pb-4">Did U Know Me?</h1>
          <p className="text-xl px-64 text-center">
            As the saying goes, who dont know, then dont love. Its a proverb from the Indonesian language, which means{" "}
            <span className="bg-gradient-to-r from-red-500 via--500 to-pink-500 text-transparent bg-clip-text">Tak kenal maka tak sayang</span>😙{" "}
          </p>
        </div>
        {/* section hero */}
        <div className="grid grid-cols-2 gap-8 ">
          {/* section text */}
          <div className=" text-white">
            <h1 className="pt-16 pb-4">About Me!</h1>
            <h1 className="py-4 text-4xl">I Am Front End Developer</h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque id, impedit itaque ratione voluptatum sunt adipisci earum veritatis beatae cumque inventore officiis ducimus mollitia? Nam quos similique reprehenderit, quibusdam
              architecto aut aliquid reiciendis quae veniam mollitia asperiores molestias dolor, soluta adipisci earum eius fugit provident exercitationem, molestiae natus perspiciatis? Blanditiis?
            </p>
            <button></button>
          </div>
          {/* section image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-600 mt-24 mr-32 ml-32 rounded-3xl"></div>
            <img src="/firdaus.png" alt="image" className="relative z-10 max-w-xs mx-auto" />
          </div>
        </div>
      </div>
      <div className="pt-8 pb-16 text-white">
        <div className=" bg-transparent rounded-3xl flex">
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="sm:border-r border-gray-200 px-8">
              <p className="text-gray-400 mb-2 text-center">Projects Completed</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-center">150+</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="lg:border-r border-gray-200 px-8">
              <p className="text-gray-400 mb-2 text-center">Users Satisfied</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-center">10K+</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="md:border-r border-gray-200 px-8">
              <p className="text-gray-400 mb-2 text-center">Years Experience</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-center">50+</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 py-8">
            <div className="px-12">
              <p className="text-gray-400 mb-2 text-center">Awards Done</p>
              <h2 className="text-4xl lg:text-5xl font-semibold text-center">30+</h2>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Resume />
      </div>
    </div>
  );
}
