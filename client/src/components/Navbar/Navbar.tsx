import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navbarSolid, setNavbarSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavbarSolid(true);
      } else {
        setNavbarSolid(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 ${
        navbarSolid ? "bg-black" : "bg-transparent"
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center mr-5 ml-5 h-22 font-montserrat text-white text-xl">
        <div className="relative flex items-center pl-4 w-32 h-28">
          <Link to="/">
            <img src="/logo2.png" alt="logo" />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-16 p-4">
          <Link className="hover:text-sky-800" to="/">
            Home
          </Link>
          <Link className="hover:text-sky-800" to="/menu">
            Menu
          </Link>
          <Link className="hover:text-sky-800" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-sky-800" to="/booking">
            Booking
          </Link>
        </div>
        <div className="md:hidden">
          <NavMenu />
        </div>
        <div className="hidden md:flex items-center gap-16 p-4">
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
