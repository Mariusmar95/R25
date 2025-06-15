import { useState, useEffect } from "react";

const data = [
  {
    id: 1,
    name: "Emily Rose",
    image: "/src/assets/test1.jpg",
    text: "The food was simply amazing! I loved every bite.",
  },
  {
    id: 2,
    name: "James Carter",
    image: "/src/assets/test2.jpg",
    text: "Exceptional service and a lovely atmosphere.",
  },
  {
    id: 3,
    name: "Ava Thompson",
    image: "/src/assets/test3.jpg",
    text: "One of the best dining experiences I’ve ever had.",
  },
  {
    id: 4,
    name: "Liam Johnson",
    image: "/src/assets/test4.jpg",
    text: "A perfect spot for a family dinner. Highly recommend!",
  },
  {
    id: 5,
    name: "Sophia Lee",
    image: "/src/assets/test5.jpg",
    text: "Fresh ingredients, friendly staff, and quick service.",
  },
];

function Testimonials() {
  const [selectedId, setSelectedId] = useState(1);
  const selected = data.find((item) => item.id === selectedId);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedId((prev) => (prev === data.length ? 1 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-4 sm:px-6 lg:px-8 py-12 w-full min-h-[500px] text-white">
      <div className="flex flex-col items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl p-6 sm:p-8 lg:p-10 rounded-lg w-full max-w-6xl text-white">
        <h1 className="mb-8 lg:mb-10 font-bold text-white text-3xl sm:text-4xl lg:text-5xl text-center">
          TESTIMONIALS
        </h1>
        <div className="flex lg:flex-row flex-col items-center gap-8 lg:gap-0 w-full">
          <div className="flex flex-row lg:flex-col justify-center lg:justify-start items-center gap-3 sm:gap-4 order-2 lg:order-1 lg:pr-6">
            <div className="flex flex-row lg:flex-col gap-3 sm:gap-4">
              {data.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.name}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
                    selectedId === item.id
                      ? "border-cyan-400 scale-110 shadow-lg shadow-cyan-400/50"
                      : "border-transparent opacity-60 hover:opacity-100 hover:border-cyan-400/30"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-center items-center order-1 lg:order-2 px-4 lg:px-8 text-center">
            {selected && (
              <>
                <h2 className="mb-4 sm:mb-6 max-w-xl lg:max-w-2xl font-semibold text-cyan-400 text-lg sm:text-xl lg:text-2xl leading-relaxed">
                  "{selected.text}"
                </h2>
                <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg lg:text-xl">
                  — {selected.name}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
