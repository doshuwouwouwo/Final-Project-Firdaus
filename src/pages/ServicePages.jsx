import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../layout/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from "../layout/Testimonials";

export default function ServicePages() {
  AOS.init();
  return (
    <div className="w-full">
      <div className="bg-[#1a1e29]">
        <Navbar />
        <Services />
      </div>
      <div className="bg-gray-900">
      <Testimonials />
      </div>
      <div className="bg-[#13161f]">
      <Footer />
      </div>
    </div>
  );
}
