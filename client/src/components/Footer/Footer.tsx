import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-16 lg:py-24 overflow-hidden text-white">
      <div className="top-0 right-0 left-0 absolute bg-gradient-to-r from-cyan-400 via-yellow-400 to-blue-400 h-1"></div>

      <div className="gap-12 lg:gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto max-w-7xl">
        {/* Brand Section */}
        <div className="space-y-6 lg:col-span-1">
          <div className="flex items-center gap-3">
            <h3 className="bg-clip-text bg-gradient-to-r from-white to-cyan-400 font-bold text-transparent text-2xl">
              Lemon
            </h3>
          </div>
          <p className="text-gray-300">
            Where the geometry of taste meets good will. Experience culinary
            excellence in every bite.
          </p>
        </div>

        {/*Navigation Links*/}
        <div className="space-y-6">
          <h4 className="flex items-center gap-2 font-semibold text-cyan-400 text-lg">
            <div className="bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full w-1 h-6"></div>
            Quick Links
          </h4>
          <nav className="space-y-3">
            <Link
              className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300"
              to="/"
            >
              <div className="bg-gray-600 group-hover:bg-cyan-400 rounded-full w-2 h-2 transition-colors duration-300"></div>
              <span className="transition-transform group-hover:translate-x-1 duration-300">
                Home
              </span>
            </Link>

            <Link
              className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300"
              to="/menu"
            >
              <div className="bg-gray-600 group-hover:bg-cyan-400 rounded-full w-2 h-2 transition-colors duration-300"></div>
              <span className="transition-transform group-hover:translate-x-1 duration-300">
                Menu
              </span>
            </Link>

            <Link
              className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300"
              to="/booking"
            >
              <div className="bg-gray-600 group-hover:bg-cyan-400 rounded-full w-2 h-2 transition-colors duration-300"></div>
              <span className="transition-transform group-hover:translate-x-1 duration-300">
                Booking
              </span>
            </Link>

            <Link
              className="group flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-all duration-300"
              to="/contact"
            >
              <div className="bg-gray-600 group-hover:bg-cyan-400 rounded-full w-2 h-2 transition-colors duration-300"></div>
              <span className="transition-transform group-hover:translate-x-1 duration-300">
                Contact
              </span>
            </Link>
          </nav>
        </div>

        {/*Legal Links*/}
        <div className="space-y-6">
          <h4 className="flex items-center gap-2 font-semibold text-yellow-400 text-lg">
            <div className="bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full w-1 h-6"></div>
            Legal
          </h4>
          <nav className="space-y-3">
            <Link
              className="group flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-300"
              to="/terms"
            >
              <div className="bg-gray-600 group-hover:bg-yellow-400 rounded-full w-2 h-2 transition-colors duration-300"></div>
              <span className="transition-transform group-hover:translate-x-1 duration-300">
                Terms of Use
              </span>
            </Link>

            <Link
              className="group flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-300"
              to="/confidentiality"
            >
              <div className="bg-gray-600 group-hover:bg-yellow-400 rounded-full w-2 h-2 transition-colors duration-300"></div>
              <span className="transition-transform group-hover:translate-x-1 duration-300">
                Privacy Policy
              </span>
            </Link>

            <Link
              className="group flex items-center gap-3 text-gray-300 hover:text-yellow-400 transition-all duration-300"
              to="/cookies"
            >
              <div className="bg-gray-600 group-hover:bg-yellow-400 rounded-full w-2 h-2 transition-colors duration-300"></div>
              <span className="transition-transform group-hover:translate-x-1 duration-300">
                Cookie Policy
              </span>
            </Link>
          </nav>
        </div>

        {/*Contact & Social*/}
        <div className="space-y-6">
          <h4 className="flex items-center gap-2 font-semibold text-blue-400 text-lg">
            <div className="bg-gradient-to-b from-blue-400 to-purple-500 rounded-full w-1 h-6"></div>
            Get in Touch
          </h4>

          {/*Contact Info*/}
          <div className="space-y-4">
            <a
              href="tel:+73218942102418"
              className="group flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              <div className="flex justify-center items-center bg-blue-500/20 group-hover:bg-blue-500/30 rounded-lg w-10 h-10 transition-colors duration-300">
                <LocalPhoneOutlinedIcon />
              </div>
              <span className="font-medium">+73218942102418</span>
            </a>

            <div className="flex items-start gap-3 text-gray-300">
              <div className="flex justify-center items-center bg-gray-500/20 rounded-lg w-10 h-10">
                <LocationOnOutlinedIcon />
              </div>
              <div>
                <p>Str. Huston bac nr.213</p>
                <p>Boston, Ocean</p>
              </div>
            </div>
          </div>

          {/* Order Button */}
          <Link to="/menu" className="block">
            <button className="bg-gradient-to-r from-cyan-500 hover:from-cyan-600 to-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl px-6 py-3 border hover:border-white/20 border-transparent rounded-xl w-full font-semibold text-white transition-all hover:-translate-y-1 duration-300 transform">
              Order Now
            </button>
          </Link>

          {/*Social buttons*/}
          <div className="space-y-4">
            <h5 className="font-medium text-gray-400 text-sm uppercase tracking-wider">
              Follow Us
            </h5>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/"
                className="group flex justify-center items-center bg-white/10 hover:bg-blue-600 hover:bg-white/20 hover:shadow-lg rounded-xl w-12 h-12 hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>

              <a
                href="https://www.instagram.com/"
                className="group flex justify-center items-center bg-white/10 hover:bg-pink-600 hover:bg-white/20 hover:shadow-lg rounded-xl w-12 h-12 hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </a>

              <a
                href="https://www.tripadvisor.com/"
                className="group flex justify-center items-center bg-white/10 hover:bg-green-600 hover:bg-white/20 hover:shadow-lg rounded-xl w-12 h-12 hover:scale-110 transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                  src="/trip.svg"
                  alt="TripAdvisor"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/*TripAdvisor*/}
      <div className="mt-16 pt-12 border-gray-700/50 border-t">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-300">
              Rated 4.9/5 on TripAdvisor
            </span>
          </div>
          <a
            href="https://www.tripadvisor.com/"
            className="hover:scale-105 transition-transform duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="opacity-80 hover:opacity-100 w-40 transition-opacity duration-300"
              src="/trip.svg"
              alt="TripAdvisor logo"
            />
          </a>
        </div>
      </div>

      {/*Reserved Rights*/}
      <div className="mt-12 pt-8 border-gray-700/50 border-t">
        <div className="flex justify-between items-center gap-6 text-gray-400 text-sm">
          <span>© 2025 Lemon Restaurant. All rights reserved.</span>
          <span>Made with ❤️ for food lovers</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
