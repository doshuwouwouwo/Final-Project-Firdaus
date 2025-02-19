import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import FAQSection from "../layout/Faq";
import AOS from "aos";
import "aos/dist/aos.css"

export default function FaqPages() {
  AOS.init();
  return (
    <div className="bg-[#13161f]">
      <Navbar />
      <div>
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}
