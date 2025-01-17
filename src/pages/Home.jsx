import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <div>
      <div className="w-full bg-gradient-to-br from-indigo-700 to-zinc-900">
      <Navbar />
      <MainLayout />
      </div>
      <Footer />
    </div>
  )
}
