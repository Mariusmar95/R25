import { useState, useEffect } from "react";
import axios from "axios";

export type Product = {
  id: number;
  name: string;
  image_url: string;
  price: number;
  type: string | string[];
  ingredients: string[];
};

const OrderMenu = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  {
    /*Fetching menu items*/
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<Product[]>("http://localhost:3001/menu");
        setProducts(res.data);
        setAllProducts(res.data);
      } catch (err) {
        console.log("Error fetching data", err);
        setError("Failed to load products");
      }
    };
    fetchProducts();
  }, []);
  {
    /*Sidebar filter items*/
  }
  const handleFilter = (type: string) => {
    const filteredProducts = allProducts.filter((product) =>
      Array.isArray(product.type)
        ? product.type.includes(type)
        : product.type === type
    );
    setProducts(filteredProducts);
  };

  return (
    <div className="relative">
      {/* Banner */}
      <div className="w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[50vh]">
        <img
          className="w-full h-full object-cover"
          src="src/assets/banner4.jpg"
          alt="banner"
        />
      </div>

      {/* Menu content container */}
      <div className="container mx-auto px-4 lg:relative">
        {/* Sidebar - with negative margin on lg screens to overlap banner by 5px */}
        <div className="lg:absolute lg:-top-5 lg:left-4 w-full  lg:w-80 lg-h-[1200px]   md:h-[600px]  bg-white p-4 overflow-y-auto z-10">
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

        <div className="flex flex-col lg:flex-row">
          {/* Empty div to maintain space for sidebar on lg screens */}
          <div className="hidden lg:block lg:w-80 lg:flex-shrink-0"></div>

          {/* Menu Items Section */}
          <div className="flex-grow">
            {/* Error fetching products */}
            {error && <p className="my-4 text-red-500">{error}</p>}

            {/* Menu Products */}
            <div className="py-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative aspect-square overflow-hidden w-full"
                >
                  <div className="h-full w-full">
                    <img
                      src={`http://localhost:3001/public${product.image_url}`}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    {/* Product Card */}
                    <div
                      className="absolute bottom-1/4 left-0 right-0 text-white transition-all transform
                               translate-y-8 opacity-0
                               group-hover:opacity-100
                               group-hover:translate-y-0 text-center delay-150 duration-300"
                    >
                      <h3 className="text-cyan text-lg">{product.name}</h3>
                      <h3 className="font-bold text-lg">{product.price}$</h3>
                      <button className="border-2 p-2 mt-4 text-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderMenu;
