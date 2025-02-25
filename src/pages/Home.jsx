import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";
import Services from "../layout/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "../layout/Testimonials";
import Resume from "../layout/Resume";
import Portofolio from "../layout/Portofolio";


export default function Home() {
  AOS.init();
  return (
    <div data="true">
      <div className="w-full bg-gray-900">
        <Navbar />
        <MainLayout />
      </div>
      <div className="w-full bg-[#1a1e29] ">
        <Logo />
        <Services />
        <Resume />
        <Portofolio />
      </div>
        <div className="w-full bg-gray-900">
        <Testimonials />
        </div>
      <div className="w-full bg-[#13161f]">
        <Footer />
      </div>
    </div>
  );
}
