import { Link } from "react-router";

export default function Footer() {
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
            <Link to={"/contact"}>My Services</Link>
            <Link to={"/contact"}>My Portofolio</Link>
            <Link to={"/contact"}>Contact Me</Link>
          </div>
        </div>
        {/* section quick links */}
        <div className="flex flex-col items-start w-[20%]">
          <h1 className="text-xl pb-8">Quick Links</h1>
          <div className="flex flex-col items-start w-full gap-2">
            <Link to={"/"}>Privacy Policy</Link>
            <Link to={"/about"}>Terms Of Service</Link>
            <Link to={"/contact"}>Credits</Link>
            <Link to={"/contact"}>FAQ</Link>
          </div>
        </div>
        {/* section social links */}
        <div className="flex flex-col items-start w-[20%]">
          <h1 className="text-xl pb-8">Follow Me On</h1>
          <p className="pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, ducimus!</p>
          <div className="flex gap-2 py-2">
            <button className="bg-transparent outline outline-1 outline-gray-400 hover:bg-[#4b7dca] py-2 px-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9.04 21.54c.96.29 1.93.46 2.96.46a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12c0 4.25 2.67 7.9 6.44 9.34c-.09-.78-.18-2.07 0-2.96l1.15-4.94s-.29-.58-.29-1.5c0-1.38.86-2.41 1.84-2.41c.86 0 1.26.63 1.26 1.44c0 .86-.57 2.09-.86 3.27c-.17.98.52 1.84 1.52 1.84c1.78 0 3.16-1.9 3.16-4.58c0-2.4-1.72-4.04-4.19-4.04c-2.82 0-4.48 2.1-4.48 4.31c0 .86.28 1.73.74 2.3c.09.06.09.14.06.29l-.29 1.09c0 .17-.11.23-.28.11c-1.28-.56-2.02-2.38-2.02-3.85c0-3.16 2.24-6.03 6.56-6.03c3.44 0 6.12 2.47 6.12 5.75c0 3.44-2.13 6.2-5.18 6.2c-.97 0-1.92-.52-2.26-1.13l-.67 2.37c-.23.86-.86 2.01-1.29 2.7z"
                ></path>
              </svg>
            </button>
            <button className="bg-transparent  outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                ></path>
              </svg>
            </button>
            <button className="bg-transparent  outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7.5 11a2 2 0 1 0 0-4H3v4zm1 2H3v4h5.5a2 2 0 1 0 0-4m2.063-1.428A4 4 0 0 1 8.5 19H1V5h6.5a4 4 0 0 1 3.063 6.573M15.5 6H21v1.5h-5.5zm7.5 8.5h-7.5v.25A2.75 2.75 0 0 0 20.7 16h2.134a4.752 4.752 0 0 1-9.334-1.25v-1.5a4.75 4.75 0 1 1 9.5 0zm-2.104-2a2.751 2.751 0 0 0-5.292 0z"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex gap-2">
            <button className="bg-transparent  outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 48 48">
                <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={4}>
                  <path d="M44 24a19.94 19.94 0 0 1-5.889 14.173A19.94 19.94 0 0 1 24 44C12.954 44 4 35.046 4 24a19.93 19.93 0 0 1 5.5-13.775A19.94 19.94 0 0 1 24 4a19.94 19.94 0 0 1 14.111 5.827A19.94 19.94 0 0 1 44 24"></path>
                  <path d="M44 24c-2.918 0-10.968-1.1-18.173 2.063C18 29.5 12.333 34.832 9.863 38.147"></path>
                  <path d="M16.5 5.454C19.63 8.343 26.46 15.698 29 23s3.48 16.28 4.06 18.835"></path>
                  <path d="M4.154 21.5c3.778.228 13.779.433 20.179-2.3s11.907-7.76 13.796-9.355M5.5 31.613a20.08 20.08 0 0 0 9 9.991"></path>
                  <path d="M4 24a19.93 19.93 0 0 1 5.5-13.775M24 4a19.94 19.94 0 0 0-14.5 6.225M32 5.664a20 20 0 0 1 6.111 4.163A19.94 19.94 0 0 1 44 24c0 2.462-.445 4.821-1.26 7M24 44a19.94 19.94 0 0 0 14.111-5.827"></path>
                </g>
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
            <p className="text-white">hello@firdaus.com</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h1 className="text-md">MY PHONE</h1>
            <p className="text-white">+62 888 888 888</p>
          </div>
        </div>
        <p className="text-center text-gray-400 text-md">All rights reserved © 2025 Firdaus</p>
      </div>
    </div>
  );
}
