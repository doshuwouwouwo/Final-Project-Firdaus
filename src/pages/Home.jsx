import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";
import Services from "../layout/Services";
import AOS from "aos";
import "aos/dist/aos.css"

export default function Home() {
  AOS.init();
  return (
    <div>
      <div className="w-full bg-gradient-to-br from-indigo-700 to-zinc-900">
      <Navbar />
      <MainLayout />
      </div>
      <div className="w-full bg-[#1a1e29] py-8">
        <Logo />
        <Services />
      </div>
      <Footer />
    </div>
  )
}
