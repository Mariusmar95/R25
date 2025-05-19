import React from "react";
import { Product } from "../types/types";

type MenuFilterProps = {
  allProducts: Product[];
  setProducts: (products: Product[]) => void;
  handleFilter: (type: string) => void;
};

const MenuFilter: React.FC<MenuFilterProps> = ({
  allProducts,
  setProducts,
  handleFilter,
}) => {
  return (
    <div className="lg:absolute lg:-top-5 lg:left-4 w-full lg:w-80 lg:h-[1000px] md:h-[600px] h-auto bg-white p-4 overflow-y-auto z-10">
      <h2 className="flex justify-center p-5">Menu</h2>
      <div className="flex flex-col justify-between lg:justify-start">
        <div
          onClick={() => setProducts(allProducts)}
          className="cursor-pointer text-black hover:text-blue-700 mr-4 lg:mb-1"
        >
          All
        </div>
        <div>
          <div
            onClick={() => handleFilter("Main")}
            className="cursor-pointer text-black mr-4 lg:mr-0 lg:mb-1"
          >
            Main
          </div>
          <ul className="flex flex-col ml-6">
            {["Salads", "Pasta", "Burgers & Wraps", "Fish"].map(
              (item, index) => (
                <li
                  key={index}
                  className="relative pl-6 mb-2 cursor-pointer hover:text-blue-700"
                  onClick={() => handleFilter(item)}
                >
                  <span className="absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-black bg-white"></span>
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        <div
          onClick={() => handleFilter("Specialties")}
          className="cursor-pointer text-black hover:text-blue-700 mr-4 lg:mb-1"
        >
          Specialties
        </div>
        <div
          onClick={() => handleFilter("Desserts")}
          className="cursor-pointer text-black hover:text-blue-700 mr-4 lg:mb-1"
        >
          Desserts
        </div>
        <div
          onClick={() => handleFilter("Drinks")}
          className="cursor-pointer text-black hover:text-blue-700 lg:mb-1"
        >
          Drinks
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
