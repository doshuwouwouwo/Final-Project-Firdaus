import { Link } from "react-router";

export default function MainLayout() {
  return (
    // section hero
    <section className="container ">
      <div className=" grid grid-cols-2 gap-8 items-center">
        {/* section text */}
        <div className="text-white">
          <h1 className="text-2xl">HELLO EVERYONE!👋</h1>
          <h1 className="text-[4rem]">I AM FIRDAUS</h1>
          <h1 className="text-[4rem]">WEB DEVELOPER</h1>
          <div className="flex flex-col gap-8 ml-1 pl-[80px] border-l-2 border-gray-400">
            <p className="text-md">I strives to build immersive and beautiful web applications through carefully crafted user-centric design.</p>
            <Link className="pt-[52px] w-32 h-32 text-center rounded-full bg-[#4b7dca] text-white hover:outline outline-1 outline-white ease-in duration-300 hover:bg-transparent ">HIRE ME!</Link>
          </div>
          <div className="flex">
            <h1>1</h1>
            <h1>2</h1>
            <h1>3</h1>
          </div>
        </div>
        {/* section image */}
        <div className="relative">
          <img src="/firdaus.png" alt="image" className="max-w-md mx-auto" />
        </div>
      </div>
    </section>
  );
}
