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
    <div className="bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 pt-36 pb-20 min-h-screen">
      <div className="z-10 relative">
        {/* Back to Menu Button */}
        <div className="mx-auto mb-10 px-6 max-w-7xl">
          <Link
            to="/menu"
            className="group inline-flex items-center gap-3 bg-white/80 hover:bg-white shadow-lg hover:shadow-xl backdrop-blur-sm px-6 py-3 border border-white/50 hover:border-blue-200 rounded-full text-gray-700 hover:text-blue-600 transition-all hover:-translate-y-0.5 duration-300 transform"
          >
            <div className="bg-gray-100 group-hover:bg-blue-100 p-1 rounded-full transition-colors duration-300">
              <ChevronLeftIcon />
            </div>
            <span className="font-semibold text-sm tracking-wide">
              Back to Menu
            </span>
          </Link>
        </div>

        {/*Top Border*/}
        <div className="relative mx-auto mb-16 px-6 max-w-7xl">
          <div className="bg-gradient-to-r from-transparent via-gray-300/50 to-transparent h-px"></div>
          <div className="top-1/2 left-1/2 absolute px-4 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="bg-blue-400 rounded-full w-2 h-2"></div>
          </div>
        </div>

        {/*Card*/}
        <div className="mx-auto px-6 max-w-7xl">
          <div className="bg-white/90 shadow-2xl backdrop-blur-sm mx-auto border border-white/30 rounded-3xl max-w-6xl overflow-hidden">
            <div className="flex lg:flex-row flex-col">
              {/*Image*/}
              <div className="relative lg:w-1/2 overflow-hidden">
                <div className="group relative h-[400px] lg:h-[700px]">
                  <img
                    src={`http://localhost:3001/public${product.image_url}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
              {/*Details*/}
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12 lg:w-1/2">
                <div className="space-y-8">
                  {/*Header*/}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full w-16 h-1"></div>
                      <div className="font-semibold text-gray-500 text-xs uppercase tracking-wider">
                        Featured Dish
                      </div>
                    </div>
                    <h1 className="font-bold text-gray-900 text-4xl lg:text-5xl xl:text-6xl leading-tight">
                      {product.name}
                    </h1>
                  </div>
                  {/*Price*/}
                  <div className="relative">
                    <div className="group inline-block relative">
                      <div className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 shadow-2xl hover:shadow-3xl px-8 py-4 rounded-2xl group-hover:scale-105 transition-all duration-300 transform">
                        <div className="flex items-center gap-3">
                          <span className="font-bold text-white text-3xl lg:text-4xl">
                            ${product.price}
                          </span>
                          <div className="text-green-100 text-sm">
                            <div className="font-medium">Per serving</div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  {/*Ingredients*/}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full w-8 h-8">
                        <WorkspacePremiumIcon />
                      </div>
                      <h3 className="font-bold text-gray-800 text-xl lg:text-2xl">
                        Premium Ingredients
                      </h3>
                    </div>

                    <div className="group relative">
                      <div className="bg-gradient-to-br from-gray-50 to-blue-50/50 p-8 border-2 border-gray-100 hover:border-blue-200 rounded-2xl transition-all duration-300">
                        <p className="font-medium text-gray-700 text-lg leading-relaxed">
                          {product.ingredients}
                        </p>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>
                  {/*Action Buttons*/}
                  <div className="flex sm:flex-row flex-col gap-4 pt-8">
                    <button
                      onClick={handleAddToCart}
                      className="group relative flex-1 bg-gradient-to-r from-blue-600 hover:from-blue-700 via-indigo-600 hover:via-indigo-700 to-purple-600 hover:to-purple-700 shadow-2xl hover:shadow-3xl px-8 py-4 rounded-2xl font-bold text-white text-lg transition-all hover:-translate-y-1 duration-300 transform"
                    >
                      <span className="z-10 relative flex justify-center items-center gap-3">
                        <ShoppingCartIcon />
                        Add to Cart
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 rounded-2xl -skew-x-12 transition-transform -translate-x-full group-hover:translate-x-full duration-1000 transform"></div>
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
