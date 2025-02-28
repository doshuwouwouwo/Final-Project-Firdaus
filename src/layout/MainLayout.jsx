import { Link } from "react-router";
import AOS from "aos";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainLayout() {
  const linkedInURL = "https://www.linkedin.com/in/firdaus-ramadhana-46b32b338/";

  const handleRedirectLinkedIn = () => {
    window.open(linkedInURL, "_blank");
  };

  const handleInstagramRedirect = () => {
    window.open("https://www.instagram.com/lhodoss/", "_blank");
  };

  const handleTikTokRedirect = () => {
    window.open("https://www.tiktok.com/@frrrrr.d", "_blank");
  };

  const handlePinterestRedirect = () => {
    window.open("https://www.pinterest.com/firdausramadhana02/", "_blank");
  };

  const [changingText, setChangingText] = useState("WEB");
  const textOptions = ["WEB", "APP", "FRONT END"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setChangingText(textOptions[index]);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      index = (index + 1) % textOptions.length;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  AOS.init();
  return (
    <section className="container mt-12 px-4 md:px-8 lg:px-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-white">
          <h1 data-aos="fade-right" data-aos-duration="200" className="text-xl md:text-2xl">
            HELLO EVERYONE!👋
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="200" className="text-white text-[2rem] md:text-[4rem] font-bold">
            I Am Firdaus
          </h1>
          <div className="flex text-[2rem] md:text-[4rem] font-bold">
            <span className="overflow-hidden text-center inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={changingText}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 1, type: "spring", stiffness: 500, damping: 20 }}
                  className="block bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text px-2"
                >
                  {changingText}
                </motion.span>
              </AnimatePresence>
            </span>
            <span className="text-white">Developer</span>
          </div>
          <div data-aos="fade-right" data-aos-duration="500" className="flex flex-col gap-4 md:gap-8 ml-1 md:pl-[40px] md:border-l-2 border-gray-400">
            <p className="text-md md:text-lg">I strive to build immersive and beautiful web applications through carefully crafted user-centric design.</p>
            <Link className="pt-4 md:pt-[52px] w-24 md:w-32 h-24 md:h-32 text-center md:text-center rounded-full bg-[#4b7dca] text-white hover:outline outline-1 outline-gray-400 ease-in duration-300 hover:bg-transparent ">
              HIRE ME!
            </Link>
          </div>

          <div data-aos="fade-right" data-aos-duration="600" className="flex pt-6 gap-4">
            <button onClick={handlePinterestRedirect} className="bg-transparent outline outline-1 outline-gray-400 hover:bg-[#4b7dca] py-2 px-2 rounded-full items-center transition ease-in duration-100">
              <img src="/logos--pinterest.svg" alt="Pinterest" className="w-6 h-6" />
            </button>
            <button onClick={handleRedirectLinkedIn} className="bg-transparent outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100">
              <img src="/skill-icons--linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
            </button>
            <button onClick={handleInstagramRedirect} className="bg-transparent outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100">
              <img src="/skill-icons--instagram.svg" alt="Instagram" className="w-6 h-6" />
            </button>
            <button onClick={handleTikTokRedirect} className="bg-transparent outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100">
              <img src="/logos--tiktok-icon.svg" alt="TikTok" className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div data-aos="fade-left" className="relative flex justify-center md:justify-end">
          <div>
            <img src="/blob.png" alt="background" className="absolute max-w-xs md:max-w-lg mt-12 md:mt-24 ml-8 md:ml-16" />
          </div>
          <img src="/firdaus.png" alt="profile" className="relative z-10 max-w-sm md:max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}
