import { Link } from "react-router";
import AOS from "aos";

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

  AOS.init();
  return (
    // section hero
    <section className="container mt-12">
      <div className=" grid grid-cols-2 gap-8 items-center">
        {/* section text */}
        <div className="text-white grow-0">
          <h1 data-aos="fade-right" data-aos-duration="200" className="text-2xl">
            HELLO EVERYONE!👋
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="300" className="text-[4rem]">
            I AM FIRDAUS
          </h1>
          <h1 data-aos="fade-right" data-aos-duration="400" className="text-[4rem]">
            WEB DEVELOPER
          </h1>
          <div data-aos="fade-right" data-aos-duration="500" className="flex flex-col gap-8 ml-1 pl-[80px] border-l-2 border-gray-400">
            <p className="text-md">I strives to build immersive and beautiful web applications through carefully crafted user-centric design.</p>
            <Link className="pt-[52px] w-32 h-32 text-center rounded-full bg-[#4b7dca] text-white hover:outline outline-1 outline-gray-400 ease-in duration-300 hover:bg-transparent ">HIRE ME!</Link>
          </div>
          <div data-aos="fade-right" data-aos-duration="600" className="flex pt-16 gap-4">
            <button onClick={handlePinterestRedirect} className="bg-transparent outline outline-1 outline-gray-400 hover:bg-[#4b7dca] py-2 px-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7z"
                ></path>
              </svg>
            </button>
            <button onClick={handleRedirectLinkedIn} className="bg-transparent  outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <circle cx={4} cy={4} r={2} fill="currentColor" fillOpacity={0}>
                  <animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;1"></animate>
                </circle>
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
                  <path strokeDasharray={12} strokeDashoffset={12} d="M4 10v10">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="12;0"></animate>
                  </path>
                  <path strokeDasharray={12} strokeDashoffset={12} d="M10 10v10">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.45s" dur="0.2s" values="12;0"></animate>
                  </path>
                  <path strokeDasharray={24} strokeDashoffset={24} d="M10 15c0 -2.76 2.24 -5 5 -5c2.76 0 5 2.24 5 5v5">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.2s" values="24;0"></animate>
                  </path>
                </g>
              </svg>
            </button>
            <button onClick={handleInstagramRedirect} className="bg-transparent  outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <circle cx={17} cy={7} r={1.5} fill="currentColor" fillOpacity={0}>
                  <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"></animate>
                </circle>
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                  <path strokeDasharray={72} strokeDashoffset={72} d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
                    <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></animate>
                  </path>
                  <path strokeDasharray={28} strokeDashoffset={28} d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
                    <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"></animate>
                  </path>
                </g>
              </svg>
            </button>
            <button onClick={handleTikTokRedirect} className="bg-transparent  outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <mask id="lineMdTiktok0">
                  <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                    <path
                      fill="#fff"
                      stroke="none"
                      d="M16.6 5.82c-0.68 -0.78 -1.06 -1.78 -1.06 -2.82h-3.09v12.4c-0.02 0.67 -0.31 1.31 -0.79 1.77c-0.48 0.47 -1.13 0.73 -1.8 0.73c-1.42 0 -2.6 -1.16 -2.6 -2.6c0 -1.72 1.66 -3.01 3.37 -2.48v-3.16c-3.45 -0.46 -6.47 2.22 -6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69 -2.55 5.69 -5.7v-6.29c1.25 0.9 2.76 1.38 4.3 1.38v-3.09c0 0 -1.88 0.09 -3.24 -1.48Z"
                    ></path>
                    <path stroke="#000" strokeDasharray={36} strokeDashoffset={72} strokeWidth={4} d="M11 11h-1c-2.21 0 -4.5 1.79 -4.5 4c0 2.21 1.5 4.5 4.5 4.5c2.21 0 4 -2.29 4 -4.5v-12.5">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;36"></animate>
                    </path>
                    <path stroke="#000" strokeDasharray={10} strokeDashoffset={20} strokeWidth={4} d="M18 2.5v8">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.1s" values="20;10"></animate>
                    </path>
                  </g>
                </mask>
                <rect width={24} height={24} fill="currentColor" mask="url(#lineMdTiktok0)"></rect>
              </svg>
            </button>
            <button className="bg-transparent  outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M3.42 12c0-1.24.27-2.42.74-3.5l4.1 11.22A8.56 8.56 0 0 1 3.42 12m14.37-.43c0 .73-.29 1.58-.65 2.77l-.86 2.86l-3.1-9.2l.98-.1c.47-.06.41-.74-.05-.71c0 0-1.39.11-2.29.11l-2.26-.11c-.46-.03-.51.68-.06.71l.91.1l1.34 3.64l-1.88 5.63L6.74 8l.99-.1c.46-.06.4-.74-.06-.71c0 0-1.39.11-2.29.11l-.55-.01C6.37 4.96 9 3.42 12 3.42c2.23 0 4.27.86 5.79 2.25h-.11c-.84 0-1.44.73-1.44 1.52c0 .71.41 1.31.84 2.01c.33.57.71 1.3.71 2.37m-5.64 1.18l2.64 7.22l.06.12c-.89.32-1.85.49-2.85.49c-.84 0-1.65-.12-2.42-.35zm7.38-4.87A8.55 8.55 0 0 1 20.58 12c0 3.16-1.72 5.93-4.27 7.41l2.62-7.57c.49-1.22.66-2.2.66-3.07zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 19.54c5.26 0 9.54-4.28 9.54-9.54S17.26 2.46 12 2.46S2.46 6.74 2.46 12s4.28 9.54 9.54 9.54"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* section image */}
        <div data-aos="fade-left" className="relative">
          <div className="">
            <img src="/blob.png" alt="image" className="absolute max-w-lg mt-24 ml-20" />
          </div>
          <img src="/firdaus.png" alt="image" className="relative z-10 max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}
