import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const data = [
  {
    id: 1,
    name: "slide1",
    image: "/slide1.jpg",
  },

  {
    id: 2,
    name: "slide2",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    name: "slide3",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [slide, setSlide] = useState(0);

  const handleNextSlide = () => {
    setSlide((prev) => (prev + 1) % data.length);
  };

  const handlePreviousSlide = () => {
    setSlide((prev) => (prev - 1 + data.length) % data.length);
  };

  useEffect(() => {
    const change = setInterval(
      () => setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      3000
    );
    return () => clearInterval(change);
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="z-10 absolute inset-0 bg-gradient-to-t from-transparent via-slate-900/20 to-slate-900/60 pointer-events-none"></div>
      <div className="relative flex-1 w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={data[slide].image}
          alt="slide"
        />
        <div className="top-0 right-0 bottom-0 absolute flex flex-col justify-center items-end mr-6">
          <button
            className="flex justify-center items-center bg-black opacity-70 mb-4 rounded-full w-10 h-10 text-white"
            onClick={handleNextSlide}
          >
            <ArrowForwardIosIcon />
          </button>
          <button
            className="flex justify-center items-center bg-black opacity-70 rounded-full w-10 h-10 text-white"
            onClick={handlePreviousSlide}
          >
            <ArrowBackIosIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
