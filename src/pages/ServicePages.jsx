import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Services from "../layout/Services";
import AOS from "aos";
import "aos/dist/aos.css"

export default function ServicePages() {
  AOS.init();
  return (
    <div>
      <Navbar />
      <div>
        <Services />
      </div>
      <Footer />
    </div>
  )
}
