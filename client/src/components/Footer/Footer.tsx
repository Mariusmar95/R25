import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-bl px-4 py-10 md:py-32 text-white">
      <div className="flex md:flex-row flex-col justify-center items-start gap-16 md:gap-40 mx-auto w-full max-w-6xl">
        {/*Links column*/}
        <div className="flex flex-col gap-2 w-full md:w-auto md:text-left text-center">
          <Link className="hover:text-sky-700" to="/">
            Home
          </Link>
          <Link className="hover:text-sky-700" to="/menu">
            Menu
          </Link>
          <Link className="hover:text-sky-700" to="/booking">
            Booking
          </Link>
          <Link className="hover:text-sky-700" to="/contact">
            Contact
          </Link>
          <Link className="hover:text-sky-700" to="/terms">
            Terms of Use
          </Link>
          <Link className="hover:text-sky-700" to="/confidentiality">
            Confidentiality Policy
          </Link>
          <Link className="hover:text-sky-700" to="/cookies">
            Cookies
          </Link>
        </div>

        {/*Order button and social*/}
        <div className="flex flex-col items-center md:items-start gap-4 w-full md:w-auto md:text-left text-center">
          <Link to="/menu">
            <button className="flex-shrink-0 px-4 py-2 border border-blu rounded min-w-[10rem] text-blu">
              Order Now
            </button>
          </Link>
          <h4 className="w-full text-center">Follow us at</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.facebook.com/">
              <img className="w-10" src="/facebook.svg" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img className="w-10" src="/instagram.svg" alt="Instagram" />
            </a>
            <a href="https://www.tripadvisor.com/">
              <img className="w-10" src="/trip.svg" alt="TripAdvisor" />
            </a>
          </div>
        </div>

        {/*Contact Info*/}
        <div className="flex flex-col items-center md:items-start gap-2 w-full md:w-auto md:text-left text-center">
          <h4 className="text-blu">+73218942102418</h4>
          <h4>Str. Huston bac nr.213</h4>
          <h4>Boston, Ocean</h4>
        </div>
      </div>

      {/* TripAdvisor Logo */}
      <div className="flex justify-center mx-auto mt-16 max-w-6xl">
        <a href="https://www.tripadvisor.com/">
          <img className="w-48" src="/trip.svg" alt="TripAdvisor logo" />
        </a>
      </div>

      {/*Footer Text*/}
      <div className="flex justify-center mx-auto mt-8 max-w-6xl text-sm text-center">
        © Lemon 2025. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
