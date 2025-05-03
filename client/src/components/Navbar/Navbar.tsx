import { useState, useEffect } from "react";
import NavMenu from "./NavMenu";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const user = true;
  const [navbarSolid, setNavbarSolid] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);

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
      <div className=" h-22  text-white font-medium  text-xl flex justify-between items-center ">
        <div className="flex items-center pl-4 relative w-32 h-28 ">
          <a href="/">
            <img src="/src/assets/logo2.png" alt="logo" />
          </a>
        </div>
        <div className="hidden md:flex items-center gap-16 p-4">
          <a className="hover:text-yellow-500" href="/">
            Home
          </a>
          <a className="hover:text-yellow-500" href="Menu">
            Menu
          </a>
          <a className="hover:text-yellow-500" href="contact">
            Contact
          </a>
          <a className="hover:text-yellow-500" href="booking">
            Booking
          </a>
        </div>

        <div className="md:hidden">
          <NavMenu />
        </div>
        <div className="hidden  pr-4 md:flex gap-4 items-center">
          {!user ? <a href="login">Login</a> : <a href="orders">Orders</a>}
          <div>
            <ShoppingCartIcon />
            <span>Cart(0)</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
