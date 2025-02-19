import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Portofolio from "../layout/Portofolio";
import AOS from "aos";
import "aos/dist/aos.css"


export default function PortofolioPages() {
    AOS.init();
  return (
    <div className="bg-[#1a1e29]">
      <Navbar />
      <div>
        <Portofolio />
      </div>
      <Footer />
    </div>
  );
}
