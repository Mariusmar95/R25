import { Products } from "../productsMenu";
import { useState } from "react";

interface Products {
  id: number;
  type: string;
  image: HTMLImageElement;
  price: number;
  name: string;
  ingredients: string;
}

function SidebarMenu() {
  const [products, setProducts] = useState(Products);

  const handleFilter = (type: string) => {
    const filteredProducts = Products.filter((product) =>
      product.type.includes(type)
    );
    setProducts(filteredProducts);
  };

  return (
    <div>
      <div className="w-80 bg-gray-800 text-white p-4 flex flex-col justify-start">
        <span
          onClick={() => setProducts(Products)}
          className="cursor-pointer text-blue-500 hover:text-blue-700 mr-4"
        >
          All
        </span>
        <span
          onClick={() => handleFilter("Main")}
          className="cursor-pointer text-blue-500 hover:text-blue-700 mr-4"
        >
          Main
        </span>
        <span
          onClick={() => handleFilter("Specialties")}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
        >
          Specialties
        </span>
        <span
          onClick={() => handleFilter("Desserts")}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
        >
          Desserts
        </span>
        <span
          onClick={() => handleFilter("Drinks")}
          className="cursor-pointer text-blue-500 hover:text-blue-700"
        >
          Drinks
        </span>
      </div>
    </div>
  );
}

export default SidebarMenu;
