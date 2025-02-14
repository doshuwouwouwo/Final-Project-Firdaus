import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./layout/Services";
// import ServicePage from "./pages/ServicePage";
// import Testimonialspage from "./pages/Testimonialspage";


export default function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/testimonialspage" element={<Testimonialspage />} />
      <Route path="/servicepages" element={<ServicePage />} /> */}
      
    </Routes>
   </BrowserRouter> 
  )
}