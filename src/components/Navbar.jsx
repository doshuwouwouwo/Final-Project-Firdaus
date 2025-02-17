
import Button from "./Button";

export default function Navbar() {
  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Services", link: "/servicepages" },
    {
      name: "Pages",
      submenu: [
        { name: "Portofolio", link: "/portofoliopages" },
        { name: "Testimonials", link: "/testimonialspage" },
        { name: "FAQ", link: "/faqpages" },
        { name: "404 Page", link: "/404" },
        { name: "Coming Soon", link: "/coming-soon" }
      ]
    }
  ];

  return (
    <nav>
      <div className="container flex justify-between items-center text-lg py-4 text-white bg-gray-900 z-10">
      {/* gambar logo dari folder assets */}
      <img src="/logo.png" alt="logo" className="w-26 h-24" />

        {/* Menu */}
        <ul className="flex space-x-6">
        {menus.map((menu, index) => (
          <li key={index} className="relative group">
            <a href={menu.link || "#"} className="hover:text-[#4b7dca] transition-ease-in duration-300">
              {menu.name}
            </a>

            {menu.submenu && (
              <ul className="absolute hidden p-4 w-52 space-y-2 bg-gray-900 shadow group-hover:block border-2  border-gray-600">
                {menu.submenu.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <a href={sub.link} className="block hover:bg-[#4b7dca] rounded-full p-2">
                      {sub.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>


        {/* button login */}
        <Button text={"LET'S TALK!"}>
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <mask id="lineMdEmailArrowRight0">
              <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
                <path strokeDasharray={64} strokeDashoffset={64} d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></animate>
                </path>
                <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5l9 5.5l9 -5.5">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></animate>
                </path>
                <path fill="#000" fillOpacity={0} stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z">
                  <set fill="freeze" attributeName="fill-opacity" begin="0.8s" to={1}></set>
                </path>
                <path strokeDasharray={6} strokeDashoffset={6} d="M16 19h5">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></animate>
                </path>
                <path strokeDasharray={4} strokeDashoffset={4} d="M21 19l-2 2M21 19l-2 -2">
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></animate>
                </path>
              </g>
            </mask>
            <rect width={24} height={24} fill="currentColor" mask="url(#lineMdEmailArrowRight0)"></rect>
          </svg>
        </Button>
      </div>
    </nav>
  );
}
