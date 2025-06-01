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
      className="group block relative w-full aspect-square overflow-hidden"
    >
      <img
        src={`http://localhost:3001/public${product.image_url}`}
        alt={product.name}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition">
        <h3 className="text-cyan-400 text-lg">{product.name}</h3>
        <h3 className="font-bold text-lg">${product.price}</h3>
        <button
          onClick={handleAddToCart}
          className="hover:bg-white mt-4 p-2 border-2 border-white hover:text-black text-lg transition-colors duration-200"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
