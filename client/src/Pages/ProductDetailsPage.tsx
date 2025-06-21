import { Product } from "../types/types";
import { useCart } from "../hooks/cartContext";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="bg-gray-50 pt-36 pb-20 min-h-screen">
      <div className="z-10 relative">
        {/*Back to Menu Button*/}
        <div className="mx-auto mb-10 px-6 max-w-7xl">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 bg-white hover:bg-gray-50 shadow-md hover:shadow-lg px-6 py-3 border border-gray-200 hover:border-gray-300 rounded-xl text-gray-600 hover:text-gray-800 transition-all duration-200"
          >
            <div className="bg-gray-100 group-hover:bg-gray-200 p-1.5 rounded-lg transition-colors duration-200">
              <ChevronLeftIcon className="w-4 h-4" />
            </div>
            <span className="font-medium text-sm">Back to Menu</span>
          </Link>
        </div>

        {/*Top Border*/}
        <div className="relative mx-auto mb-12 px-6 max-w-7xl">
          <div className="bg-gray-200 h-px"></div>
          <div className="top-1/2 left-1/2 absolute px-4 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="bg-gray-800 rounded-full w-2 h-2"></div>
          </div>
        </div>

        {/*Card*/}
        <div className="mx-auto px-6 max-w-7xl">
          <div className="bg-white shadow-lg mx-auto border border-gray-100 rounded-2xl max-w-6xl overflow-hidden">
            <div className="flex lg:flex-row flex-col">
              {/*Image*/}
              <div className="relative lg:w-1/2">
                <div className="group relative h-[400px] lg:h-[600px]">
                  <img
                    src={`http://localhost:3001/public${product.image_url}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/*Details*/}
              <div className="flex flex-col justify-center p-8 lg:p-12 lg:w-1/2">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gray-800 rounded-full w-12 h-0.5"></div>
                      <span className="font-medium text-gray-500 text-xs uppercase tracking-wide">
                        Featured Dish
                      </span>
                    </div>
                    <h1 className="font-bold text-gray-900 text-3xl lg:text-4xl xl:text-5xl leading-tight">
                      {product.name}
                    </h1>
                  </div>

                  {/*Price*/}
                  <div className="relative">
                    <div className="inline-block">
                      <div className="bg-gray-900 hover:bg-gray-800 shadow-lg px-6 py-3 rounded-xl transition-colors duration-200">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white text-2xl lg:text-3xl">
                            ${product.price}
                          </span>
                          <span className="text-gray-300 text-sm">
                            per serving
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/*Ingredients*/}
                  {product.ingredients && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex justify-center items-center bg-gray-800 rounded-lg w-8 h-8">
                          <WorkspacePremiumIcon className="w-4 h-4 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-800 text-lg lg:text-xl">
                          Premium Ingredients
                        </h3>
                      </div>

                      <div className="bg-gray-50 hover:bg-gray-100 p-6 border border-gray-100 rounded-xl transition-colors duration-200">
                        <p className="font-normal text-gray-700 text-base leading-relaxed">
                          {product.ingredients}
                        </p>
                      </div>
                    </div>
                  )}

                  {/*Add to Cart button */}
                  <div className="pt-6">
                    <button
                      onClick={handleAddToCart}
                      className="group bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl w-full sm:w-auto font-semibold text-white text-base transition-all hover:-translate-y-0.5 duration-200 transform"
                    >
                      <span className="flex justify-center items-center gap-3">
                        <ShoppingCartIcon className="w-5 h-5" />
                        Add to Cart
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
