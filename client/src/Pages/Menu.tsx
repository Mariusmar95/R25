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
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar */}
          <div className="w-full lg:w-80 lg:flex-shrink-0 bg-gray-800 text-white p-4 h-48 lg:h-96 overflow-y-auto">
            <div className="flex lg:flex-col justify-between lg:justify-start">
              <span
                onClick={() => setProducts(allProducts)}
                className="cursor-pointer text-blue-500 hover:text-blue-700 mr-4 lg:mr-0 lg:mb-4"
              >
                All
              </span>
              <span
                onClick={() => handleFilter("Main")}
                className="cursor-pointer text-blue-500 hover:text-blue-700 mr-4 lg:mr-0 lg:mb-4"
              >
                Main
              </span>
              <span
                onClick={() => handleFilter("Specialties")}
                className="cursor-pointer text-blue-500 hover:text-blue-700 mr-4 lg:mr-0 lg:mb-4"
              >
                Specialties
              </span>
              <span
                onClick={() => handleFilter("Desserts")}
                className="cursor-pointer text-blue-500 hover:text-blue-700 mr-4 lg:mr-0 lg:mb-4"
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

          {/* Menu Items Section */}
          <div className="flex-grow">
            {/* Error fetching products */}
            {error && <p className="my-4 text-red-500">{error}</p>}

            {/* Menu Products  */}
            <div className="py-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group relative aspect-square overflow-hidden  w-full"
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
