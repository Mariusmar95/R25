import { useEffect, useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const data = [
  {
    id: 1,
    name: "slide1",
    image: "/src/assets/slide1.jpg",
  },

  {
    id: 2,
    name: "slide2",
    image: "/src/assets/slide2.jpg",
  },
  {
    id: 3,
    name: "slide3",
    image: "/src/assets/slide3.jpg",
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
    <div className="w-full h-screen relative">
      <div className="w-full h-full relative flex-1">
        <img
          className="object-cover w-full h-full"
          src={data[slide].image}
          alt="slide"
        />
        <div className="absolute flex flex-col justify-center items-end top-0 bottom-0 right-0 mr-6">
          <button
            className="bg-black text-white w-10 h-10 mb-4 flex items-center justify-center opacity-70 rounded-full"
            onClick={handleNextSlide}
          >
            <ArrowForwardIosIcon />
          </button>
          <button
            className="bg-black text-white w-10 h-10 flex items-center justify-center opacity-70 rounded-full"
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
