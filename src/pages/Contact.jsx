import Button from "../components/Button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div className="bg-[#13161f]">
      <Navbar />
      <section className="bg-gray-900 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-6">Contact</h2>
          <h2 className="text-6xl font-bold text-center mb-12">Get In Touch With Me!</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Form Section */}
            <div className="md:col-span-2 bg-gray-800 p-8 shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="text" placeholder="Your Phone" className="w-full p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <textarea placeholder="Your Message" className="w-full p-3 h-32 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <Button>Send Message</Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 text-white">
              <div className="bg-[#292f3c] p-8 flex items-center gap-4">
                <div className="bg-gray-800 p-4 w-14 h-14 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                </div>

                <div>
                  <p className="text-gray-300">zhack@support.com</p>
                  <p className="text-lg font-semibold">My Email</p>
                </div>
              </div>

              <div className="bg-[#292f3c] p-8  flex items-center gap-4">
                <div className="bg-gray-800 p-4 w-14 h-14 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
                </div>
                <div>
                  <p className="text-gray-300">+0 (555) 123 45 67</p>
                  <p className="text-lg font-semibold">My Phone</p>
                </div>
              </div>

              <div className="bg-[#292f3c] p-8  flex items-center gap-4">
                <div className="bg-gray-800 p-4 w-14 h-14 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>

                <div>
                  <p className="text-gray-300">Building W 13th Parks, Suite 559, Denver</p>
                  <p className="text-lg font-semibold">My Address</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
