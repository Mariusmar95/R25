import { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import RestaurantMenuOutlinedIcon from "@mui/icons-material/RestaurantMenuOutlined";
import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import { useCart } from "../../hooks/cartContext";

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <div>
      {/*Hamburger Button*/}
      <div className="top-6 right-6 z-50 fixed">
        <button
          onClick={() => setOpen(!open)}
          className={`relative w-12 h-12 rounded-full backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300 ease-out hover:scale-110 ${
            open ? "bg-white/10 rotate-180" : "bg-black/20 hover:bg-white/10"
          }`}
        >
          <div className="absolute inset-0 flex justify-center items-center">
            {!open ? (
              <MenuIcon className="text-white transition-all duration-300" />
            ) : (
              <CloseIcon className="text-white transition-all duration-300" />
            )}
          </div>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-all duration-500 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpen(false)}
      />

      {/*Menu Panel*/}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] z-40 transition-all duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-white/10 border-l h-full">
          {/*Menu Link*/}
          <nav className="space-y-2 px-6 py-8">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 hover:bg-white/10 px-4 py-4 rounded-xl text-white/90 hover:text-white transition-all hover:translate-x-2 duration-300 ease-out transform"
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-500/20 group-hover:from-blue-500/30 to-purple-500/20 group-hover:to-purple-500/30 rounded-lg w-10 h-10 transition-all duration-300">
                <HomeOutlinedIcon className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <span className="font-medium text-lg">Home</span>
            </Link>

            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 hover:bg-white/10 px-4 py-4 rounded-xl text-white/90 hover:text-white transition-all hover:translate-x-2 duration-300 ease-out transform"
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-500/20 group-hover:from-blue-500/30 to-purple-500/20 group-hover:to-purple-500/30 rounded-lg w-10 h-10 transition-all duration-300">
                <RestaurantMenuOutlinedIcon className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <span className="font-medium text-lg">Menu</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 hover:bg-white/10 px-4 py-4 rounded-xl text-white/90 hover:text-white transition-all hover:translate-x-2 duration-300 ease-out transform"
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-500/20 group-hover:from-blue-500/30 to-purple-500/20 group-hover:to-purple-500/30 rounded-lg w-10 h-10 transition-all duration-300">
                <LocalPhoneOutlinedIcon className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <span className="font-medium text-lg">Contact</span>
            </Link>

            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="group flex items-center gap-4 hover:bg-white/10 px-4 py-4 rounded-xl text-white/90 hover:text-white transition-all hover:translate-x-2 duration-300 ease-out transform"
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-500/20 group-hover:from-blue-500/30 to-purple-500/20 group-hover:to-purple-500/30 rounded-lg w-10 h-10 transition-all duration-300">
                <BookOutlinedIcon className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
              </div>
              <span className="font-medium text-lg">Booking</span>
            </Link>
          </nav>

          {/*Cart*/}
          <div className="mt-auto px-6 py-6 border-white/10 border-t">
            <Link
              to="/orders"
              className="flex items-center gap-4 bg-gradient-to-r from-blue-600/20 hover:from-blue-600/30 to-purple-600/20 hover:to-purple-600/30 px-4 py-4 border border-blue-500/20 rounded-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-center items-center bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-lg w-10 h-10">
                <ShoppingCartIcon />
              </div>
              <div className="flex-1">
                <div className="font-medium text-white">Shopping Cart</div>
              </div>
              <div className="flex justify-center items-center bg-blue-500 rounded-full w-6 h-6">
                <span className="font-bold text-white text-xs">
                  {totalItems}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
