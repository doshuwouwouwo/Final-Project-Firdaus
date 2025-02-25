import Button from "../components/Button";
import SkillsSection from "./SkillSection";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Resume() {
  AOS.init();
  return (
    <div data-aos="fade-up" className="container py-28 bg-[#1a1e29]">
      {/* judul */}
      <div>
        <h1 className="text-2xl text-white">My Resume</h1>
      </div>
      {/* resume */}
      <div className="flex items-center text-white py-8 border-b-2 border-gray-400">
        <div className=" pr-8 py-8 w-2/3">
          <p className="text-6xl">All Over My Personal Details Find Here</p>
        </div>
        {/* lorem */}
        <div className=" w-1/3">
          <p className="pb-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et eum recusandae, optio nesciunt rerum beatae.</p>
          <Button>Download CV</Button>
        </div>
      </div>

      {/* skills */}
      <div className="gap-8 w-full">
        {/* card */}
        <SkillsSection />
      </div>
    </div>
  );
}
