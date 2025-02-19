import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Testimonials from "../layout/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css"


export default function Testimonialspage() {
  AOS.init();
  return (
    <div className="bg-gray-900">
      <Navbar />
      <div>
        <Testimonials />
      </div>
      <Footer />
    </div>
  )
}
