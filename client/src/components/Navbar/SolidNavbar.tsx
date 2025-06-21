import NavMenu from "./NavMenu";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="z-50 fixed bg-black w-full">
      <div className="flex justify-between items-center h-22 font-montserrat font-medium text-white text-xl">
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
