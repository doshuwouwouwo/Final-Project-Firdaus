import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonialspage from "./pages/Testimonialspage";
import ServicePages from "./pages/ServicePages";
import PortofolioPages from "./pages/PortofolioPages";
import FaqPages from "./pages/FaqPages";
import ScrollToTop from "./layout/ScrollToTop";



export default function App() {
  return (
   <BrowserRouter>
   <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} /> 
      <Route path="/testimonialspage" element={<Testimonialspage />} />
      <Route path="/servicepages" element = {<ServicePages />} />
      <Route path="/portofoliopages" element = {<PortofolioPages />} />
      <Route path="/faqpages" element = {<FaqPages />} />
    </Routes>
   </BrowserRouter> 
  )
}