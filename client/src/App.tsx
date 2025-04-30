import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import Footer from "./components/Footer/Footer";
import Contact from "./Pages/Contact";
import Booking from "./Pages/Booking";
import Image from "./Pages/Image";

function App() {
  // const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Booking" element={<Booking />} />
          <Route path="/Image" element={<Image />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
