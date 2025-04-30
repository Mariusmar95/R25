import { useState } from "react";
import Cart from "./Cart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavMenu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <MenuIcon onClick={() => setOpen(true)} />
      ) : (
        <CloseIcon onClick={() => setOpen(false)} />
      )}
      {open && (
        <div className="bg-blue-500 absolute left-0 top-0 w-full h-[100vh] flex justify-center items-center flex-col gap-8 z-10 ">
          <a href="/" onClick={() => setOpen(false)}>
            Lemon
          </a>
          <a href="menu" onClick={() => setOpen(false)}>
            Menu
          </a>
          <a href="contact" onClick={() => setOpen(false)}>
            Contact
          </a>
          {!user ? (
            <a href="login" onClick={() => setOpen(false)}>
              Login
            </a>
          ) : (
            <a href="orders" onClick={() => setOpen(false)}>
              Order
            </a>
          )}
          <a href="cart" onClick={() => setOpen(false)}>
            <Cart />
          </a>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
