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
    <div className="lg:top-6 lg:sticky bg-white shadow-lg border border-gray-200 rounded-lg w-full lg:w-80 h-fit">
      <div className="p-6">
        <h2 className="mb-6 font-semibold text-gray-800 text-xl text-center">
          Menu
        </h2>

        <nav className="space-y-4">
          {/*All Items*/}
          <div
            onClick={() => setProducts(allProducts)}
            className="hover:bg-blue-50 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            All Items
          </div>

          {/*Main Category*/}
          <div>
            <div
              onClick={() => handleFilter("Main")}
              className="hover:bg-blue-50 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
            >
              Main Dishes
            </div>

            {/*Subcategories*/}
            <ul className="space-y-2 mt-2 ml-4">
              {["Salads", "Pasta", "Burgers & Wraps", "Fish"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="flex items-center hover:bg-blue-50 px-3 py-2 rounded-md hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                    onClick={() => handleFilter(item)}
                  >
                    <div className="flex-shrink-0 bg-white mr-3 border-2 border-gray-400 rounded-full w-2 h-2"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/*Other Categories*/}
          <div
            onClick={() => handleFilter("Specialties")}
            className="hover:bg-blue-50 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            Specialties
          </div>

          <div
            onClick={() => handleFilter("Desserts")}
            className="hover:bg-blue-50 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            Desserts
          </div>

          <div
            onClick={() => handleFilter("Drinks")}
            className="hover:bg-blue-50 px-3 py-2 rounded-md font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
          >
            Drinks
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MenuFilter;
