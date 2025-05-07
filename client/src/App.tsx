import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Image from "./Pages/Image";
import Product from "./Pages/Product";

function App() {
  // const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/menu/:id" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/image" element={<Image />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
