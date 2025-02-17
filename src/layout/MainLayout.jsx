import { Link } from "react-router";
import AOS from "aos";

export default function MainLayout() {
  AOS.init();
  return (
    // section hero
    <section className="container">
      <div className=" grid grid-cols-2 gap-8 items-center">
        {/* section text */}
        <div className="text-white grow-0">
          <h1 className="text-2xl">HELLO EVERYONE!👋</h1>
          <h1 className="text-[4rem]">I AM FIRDAUS</h1>
          <h1 className="text-[4rem]">WEB DEVELOPER</h1>
          <div className="flex flex-col gap-8 ml-1 pl-[80px] border-l-2 border-gray-400">
            <p className="text-md">I strives to build immersive and beautiful web applications through carefully crafted user-centric design.</p>
            <Link className="pt-[52px] w-32 h-32 text-center rounded-full bg-[#4b7dca] text-white hover:outline outline-1 outline-gray-400 ease-in duration-300 hover:bg-transparent ">HIRE ME!</Link>
          </div>
          <div className="flex pt-16 gap-4">
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
          </div>
        </div>
        {/* section image */}
        <div className="relative">
          <div className="">
            <img src="/blob.png" alt="image" className="absolute z-10 max-w-lg mt-24 mr-12 ml-16" />
          </div>
          <img src="/firdaus.png" alt="image" className="relative z-10 max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}
