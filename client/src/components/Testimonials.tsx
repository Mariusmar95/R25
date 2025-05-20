import { useState } from "react";
import { Testimonial } from "../types/types";

const data: Testimonial[] = [
  {
    id: 1,
    name: "test1",
    image: "/src/assets/test1.jpg",
    text: "jshaflfalkfsaf.",
  },
  {
    id: 2,
    name: "test2",
    image: "/src/assets/test2.jpg",
    text: "gsadjsadklhsda.",
  },
  {
    id: 3,
    name: "test3",
    image: "/src/assets/test3.jpg",
    text: "Thgdsgds",
  },
  {
    id: 4,
    name: "test4",
    image: "/src/assets/test4.jpg",
    text: "This sHighly recommended.",
  },
  {
    id: 5,
    name: "test5",
    image: "/src/assets/test5.jpg",
    text: "This s.",
  },
];

function Testimonials() {
  const [selectedId, setSelectedId] = useState<number>(1);
  const selected = data.find((item) => item.id === selectedId);

  return (
    <div className="flex justify-center items-center bg-gray-50">
      <div className="flex bg-white w-full max-w-4xl">
        {/* Icons column */}
        <div className="flex flex-col gap-4 pr-6">
          {data.map((item) => (
            <img
              key={item.id}
              src={item.image}
              alt={item.name}
              onClick={() => setSelectedId(item.id)}
              className={`w-12 h-12 rounded-full cursor-pointer border-2 transition-all duration-200 ${
                selectedId === item.id
                  ? "border-blue-500 scale-110"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            />
          ))}
        </div>

        {/* Testimonial text */}
        <div className="flex flex-col flex-1 justify-between">
          {selected && (
            <>
              <div className="text-center">
                <h2 className="mb-4 font-semibold text-xl">What people say</h2>
                <p className="text-gray-700 text-lg">{selected.text}</p>
              </div>
              <div className="mt-6 text-right">
                <p className="font-semibold text-gray-500 text-sm">
                  {selected.name}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
