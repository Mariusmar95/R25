import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import SolidNavbar from "./components/Navbar/SolidNavbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Product from "./Pages/Product";
import Orders from "./Pages/Orders";

function App() {
  const location = useLocation();
  const isMenuProduct =
    /^\/menu\/\d+$/.test(location.pathname) || location.pathname === "/orders";

  return (
    <div className="flex flex-col min-h-screen">
      {isMenuProduct ? <SolidNavbar /> : <Navbar />}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
