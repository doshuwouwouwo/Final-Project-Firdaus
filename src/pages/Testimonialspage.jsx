import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../layout/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css"


export default function Testimonialspage() {
  AOS.init();
  return (
    <div>
      <Navbar />
      <div>
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}
