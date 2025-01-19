import { Link } from "react-router";
import Button from "./Button";



export default function Navbar() {
  const menus = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Services", link: "/services" },
    { name: "Pages", link: "/pages" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <nav>
      <div className="container flex justify-between items-center text-lg py-4 text-white mb-8">
        {/* gambar logo dari folder assets */}
        <img src="/logo.png" alt="logo" className="w-26 h-24" />

        {/* Menu */}
        <ul className="flex gap-10">
          {/* pengulangan array atau list menus */}
          {menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.link} className="hover:opacity-50 transition-all p-[20px]">
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* button login */}
        <Button text={"Let's Talk!"} />
      </div>
    </nav>
  );
}
