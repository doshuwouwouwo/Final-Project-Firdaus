import Navbar from "../components/Navbar";

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
        <div className="grid grid-cols-2 gap-8 items-center">
          {/* section text */}
          <div></div>
          {/* section image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-green-400 to-green-600 mt-24 mr-32 ml-32 rounded-3xl"></div>
            <img src="/firdaus.png" alt="image" className="relative z-10 max-w-xs mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
