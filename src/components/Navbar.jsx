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
      <div className="container flex justify-between items-center py-8 text-lg text-white">
        {/* gambar logo dari folder assets */}
        <img src="" alt="logo" />

        {/* Menu */}
        <ul className="flex gap-10">
          {/* pengulangan array atau list menus */}
          {menus.map((menu, index) => (
            <li key={index}>
              <Link to={menu.link} className="hover:opacity-50 transition-all">
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
