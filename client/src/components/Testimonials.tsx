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
    <div className="flex justify-center items-center bg-shade mb-40 px-8 w-full h-[500px]">
      <div className="flex flex-col items-center bg-[#1c1f24] p-10 rounded-lg w-full max-w-6xl text-white">
        <h1 className="mb-10 font-bold text-white text-5xl text-center">
          TESTIMONIALS
        </h1>

        <div className="flex items-center w-full">
          {/* Images column */}
          <div className="flex flex-col items-center gap-4 pr-6">
            <div className="flex flex-col gap-4">
              {data.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.name}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-20 h-20 rounded-full cursor-pointer border-2 transition-all duration-200 ${
                    selectedId === item.id
                      ? "border-cyan-400 scale-110"
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col flex-1 justify-center items-center text-center">
            {selected && (
              <>
                <h2 className="mb-4 max-w-xl font-semibold text-cyan-400 text-2xl">
                  “{selected.text}”
                </h2>
                <p className="mt-6 text-gray-400 text-lg">— {selected.name}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
