import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../layout/Services";
import AOS from "aos";
import "aos/dist/aos.css"
import Testimonials from "../layout/Testimonials";

export default function ServicePages() {
  AOS.init();
  return (
    <div>
      <Navbar />
      <div>
        <Services />
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}
