import { useState } from "react";
import Button from "./Button";

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

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
        { name: "Coming Soon", link: "/coming-soon" },
      ],
    },
  ];

  return (
    <nav>
      <div className="container flex justify-between items-center text-lg py-4 text-white">
        {/* Logo */}
        <img src="/logo.png" alt="logo" className="w-26 h-24" />

        {/* Menu */}
        <ul className="flex space-x-6 ">
          {menus.map((menu, index) => (
            <li key={index} className="relative group" onMouseEnter={() => menu.submenu && setDropdownOpen(true)} onMouseLeave={() => menu.submenu && setDropdownOpen(false)}>
              <a href={menu.link || "#"} className="flex items-center gap-1 hover:text-[#4b7dca] transition-ease-in duration-300">
                {menu.name}
                {menu.submenu && (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className={`transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : "rotate-0"}`}>
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                )}
              </a>

              {menu.submenu && (
                <ul className="absolute z-20 hidden p-4 w-52 space-y-2 bg-gray-900 shadow group-hover:block border-2 border-gray-600">
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

        {/* Button */}
        <Button text={"LET'S TALK!"}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55-0.45 1-1 1H4c-0.55 0-1-0.45-1-1V6c0-0.55 0.45-1 1-1zM3 6.5l9 5.5 9-5.5" />
            <path d="M19 13c3.31 0 6 2.69 6 6 0 3.31-2.69 6-6 6s-6-2.69-6-6c0-3.31 2.69-6 6-6zm-3 6h6m-3 3l3-3m-3 3l-3-3" />
          </svg>
        </Button>
      </div>
    </nav>
  );
}
