import { Products } from "../productsMenu";
import { useState } from "react";

const OrderMenu = () => {
  const [products, setProducts] = useState(Products);

  const handleFilter = (type: string) => {
    const filteredProducts = Products.filter((product) =>
      product.type.includes(type)
    );
    setProducts(filteredProducts);
  };

  return (
    <>
      <div className="relative w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh] ">
        <img
          className="w-full h-full object-cover"
          src="src/assets/banner4.jpg"
          alt="banner"
        />
      </div>

      <div className="flex">
        {/* Sidebar */}
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

        {/* Products */}

        <div className="m-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {products.map((product) => (
            <div
              key={product.id}
              className="group-hover:opacity-30 delay-150 duration-300 w-{350px} h-{350px}   relative group bg-red-600"
            >
              <img
                src={product.image}
                alt="product"
                loading="lazy"
                width={250}
                height={250}
              />

              <div
                className="absolute bottom-28 left-0 right-0 text-white transition-all transform 
                            translate-y-8 opacity-0 
                            group-hover:opacity-100 
                            group-hover:translate-y-0 text-center delay-150 duration-300"
              >
                <h3 className="text-cyan text-lg">{product.name}</h3>
                <h3 className="font-bold text-lg">{product.price}$</h3>
                <button className="border-2 p-2 mt-6 text-lg">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrderMenu;
