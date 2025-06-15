import React from "react";
import { Product } from "../types/types";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/cartContext";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Link
      to={`/menu/${product.id}`}
      className="group block relative shadow-lg hover:shadow-2xl rounded-2xl w-full aspect-square overflow-hidden transition-all hover:-translate-y-2 duration-500 transform"
    >
      {/* Image Container with Gradient Overlay */}
      <div className="relative w-full h-full">
        <img
          src={`http://localhost:3001/public${product.image_url}`}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

        {/* Animated Border */}
        <div className="absolute inset-0 border-2 group-hover:border-cyan-400/50 border-transparent rounded-2xl transition-colors duration-500" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        {/*Info*/}
        <div className="transition-transform translate-y-4 group-hover:translate-y-0 duration-500 transform">
          <h3 className="mb-2 font-bold text-white group-hover:text-cyan-400 text-xl transition-colors duration-300">
            {product.name}
          </h3>
          <div className="flex justify-between items-center mb-4">
            <span className="font-bold text-cyan-400 text-2xl">
              ${product.price}
            </span>
          </div>
        </div>

        {/*Add to Cart Button*/}
        <button
          onClick={handleAddToCart}
          className="bg-white/10 hover:bg-cyan-400 opacity-0 group-hover:opacity-100 hover:shadow-cyan-400/25 hover:shadow-lg backdrop-blur-md px-6 py-3 border border-white/20 hover:border-cyan-400 rounded-xl w-full font-semibold text-white hover:text-black transition-all translate-y-8 group-hover:translate-y-0 duration-500 ease-out transform"
        >
          Add to Cart
        </button>
      </div>

      {/*Price Tag*/}
      <div className="top-4 right-4 absolute bg-cyan-400 px-3 py-1 rounded-full font-bold text-black text-sm scale-0 group-hover:scale-100 transition-transform duration-300 delay-200 transform">
        ${product.price}
      </div>
    </Link>
  );
};

export default ProductCard;
