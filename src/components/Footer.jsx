import { Link } from "react-router";

export default function Footer() {
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
  return (
    <div className="container pt-24 pb-8 h-full">
      {/* button contact me */}
      <div className="flex items-center justify-between border-b-2 text-white border-gray-400 border-opacity-20 py-8">
        <div className="py-8 w-1/2">
          <p className="pb-6">Do You Have A Project In Mind?</p>
          <h1 className="text-6xl">Lets Talk About Next Big Things </h1>
        </div>
        {/* contact me */}
        <div className="">
          <div>
            <button className="bg-[#4b7dca] py-16 px-8 rounded-full flex items-center gap-4 hover-bg-transparent transition ease-in duration-300 hover:bg-transparent hover:outline outline-1 outline-white">Contact Me!</button>
          </div>
        </div>
      </div>
      {/*section info*/}
      <div className="flex text-white border-b-2 border-gray-400 border-opacity-20 pt-8 pb-14 w-full ">
        {/* section newsletter */}
        <div className="flex flex-col items-start w-[40%]">
          <img src="/logo.png" alt="logo" className="w-26 h-24 mb-2" />
          <p className="py-4 pr-24">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, ducimus!</p>
          <h1 className="py-4 text-xl">Join Our Newsletter</h1>
          <div className="w-full pb-2">
            <form>
              <input className="border-gray-400 border-2 rounded-full w-[75%] px-4 py-3 focus:outline-1 focus:shadow-outline" type="email" placeholder="Your Email Address" />
            </form>
          </div>
          <div className="w-[75%]">
            <button className="bg-[#4b7dca] text-white font-size-md w-full py-3 px-4 rounded-full items-center transition ease-in duration-300 hover:outline outline-1 hover:outline-gray-400 hover:bg-transparent ">Subscribe</button>
          </div>
        </div>
        {/* section pages link */}
        <div className="flex flex-col items-start w-[20%] pl-8">
          <h1 className="text-xl pb-8">Pages</h1>
          <div className="flex flex-col items-start w-full gap-2">
            <Link to={"/"}>Home</Link>
            <Link to={"/about"}>About Me</Link>
            <Link to={"/servicepages"}>My Services</Link>
            <Link to={"/portofoliopages"}>My Portofolio</Link>
            <Link to={"/contact"}>Contact Me</Link>
          </div>
        </div>
        {/* section quick links */}
        <div className="flex flex-col items-start w-[20%]">
          <h1 className="text-xl pb-8">Quick Links</h1>
          <div className="flex flex-col items-start w-full gap-2">
            <Link to={"/#"}>Privacy Policy</Link>
            <Link to={"/#"}>Terms Of Service</Link>
            <Link to={"/#"}>Credits</Link>
            <Link to={"/faqpages"}>FAQ</Link>
            <Link to={"/testimonialspage"}>Testimonials</Link>
          </div>
        </div>
        {/* section social links */}
        <div className="flex flex-col items-start w-[20%]">
          <h1 className="text-xl pb-8">Follow Me On</h1>
          <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ducimus!</p>
          <div className="flex gap-2 py-2">
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
          </div>
          <div className="flex gap-2">
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
            <button className="bg-transparent  outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path fill="currentColor" fillOpacity={0} d="M12 11L12 12L12 13z">
                  <animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 11L12 12L12 13z;M10 8.5L16 12L10 15.5z"></animate>
                  <set fill="freeze" attributeName="fill-opacity" begin="0.6s" to={1}></set>
                </path>
                <path fill="none" stroke="currentColor" strokeDasharray={64} strokeDashoffset={64} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5c9 0 9 0 9 7c0 7 0 7 -9 7c-9 0 -9 0 -9 -7c0 -7 0 -7 9 -7Z">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                </path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* section all rights */}
      <div className="flex items-center justify-between w-full pt-8">
        <div className="flex gap-12">
          <div className="flex flex-col space-y-4">
            <h1>MY EMAIL</h1>
            <p className="text-white">firdausramadhana02@gmail.com</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-md">MY PHONE</h1>
            <p className="text-white">+62 813 2813 2515</p>
          </div>
        </div>
        <p className="text-center text-gray-400 text-md">All rights reserved © 2025 Firdaus</p>
      </div>
    </div>
  );
}
