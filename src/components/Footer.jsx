import { Link } from "react-router";

export default function Footer() {
  return (
    <div className="container pt-24 pb-4 h-full">
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
      <div className="flex text-white border-b-2 border-gray-400 border-opacity-20 py-8 w-full ">
        {/* section newsletter */}
        <div className="flex flex-col items-start w-1/4">
          <img src="/logo.png" alt="logo" className="w-26 h-24 mb-2" />
          <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit, ducimus!</p>
          <h1 className="py-4 text-xl">Join Our Newsletter</h1>
          <div className="w-full pb-2">
            <form>
              <input className="border-gray-400 border-2 rounded-full w-full px-4 py-3 focus:outline-1 focus:shadow-outline" type="email" placeholder="Your Email Address" />
            </form>
          </div>
          <div className="w-full">
          <button className="bg-[#4b7dca] text-white font-size-md w-full py-3 px-4 rounded-full items-center transition ease-in duration-300 hover:outline outline-1 hover:outline-gray-400 hover:bg-transparent ">Subscribe</button>
          </div>
        </div>
        {/* section pages link */}
        <div className="flex flex-col items-start px-24 w-1/4 bg-green-400">
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
        <div className="flex flex-col items-start px-24 w-1/4 bg-blue-400">
        <h1 className="text-xl pb-8">Quick Links</h1>
          <div className="flex flex-col items-start w-full gap-2">
          <Link to={"/"}>Privacy Policy</Link>
          <Link to={"/about"}>Terms Of Service</Link>
          <Link to={"/contact"}>Credits</Link>
          <Link to={"/contact"}>FAQ</Link>
          </div>
        </div>
        {/* section social links */}
        <div className="flex flex-col items-center justify-center w-1/4 bg-red-400">
          <button className="bg-transparent outline outline-1 outline-gray-400 hover:bg-[#4b7dca] px-2 py-2 rounded-full items-center transition ease-in duration-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
      {/* section all rights */}
      <div>
        <p className="text-center text-gray-400 text-sm">All rights reserved © 2023 Firdaus</p>
      </div>
    </div>
  );
}
