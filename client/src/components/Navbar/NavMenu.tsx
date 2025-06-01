import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      <div className="top-4 right-4 z-50 fixed">
        {!open ? (
          <MenuIcon
            onClick={() => setOpen(true)}
            className="text-white cursor-pointer"
            fontSize="large"
          />
        ) : (
          <CloseIcon
            onClick={() => setOpen(false)}
            className="text-white cursor-pointer"
            fontSize="large"
          />
        )}
      </div>

      {open && (
        <div className="top-0 left-0 z-40 fixed flex flex-col justify-center items-center gap-8 bg-blue-500 w-full h-[100vh]">
          <Link to="/" onClick={() => setOpen(false)}>
            Lemon
          </Link>
          <Link to="/menu" onClick={() => setOpen(false)}>
            Menu
          </Link>
          <Link to="/contact" onClick={() => setOpen(false)}>
            Contact
          </Link>
          {!user ? (
            <Link to="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link to="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Cart />
        </div>
      )}
    </div>
  );
};

export default NavMenu;
