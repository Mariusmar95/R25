import React from "react";
import { Product } from "../types/types";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="group relative aspect-square overflow-hidden w-full">
        <div className="h-full w-full">
          <img
            src={`http://localhost:3001/public${product.image_url}`}
            alt={product.name}
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div
            className="absolute bottom-1/4 left-0 right-0 text-white transition-all transform
                   translate-y-8 opacity-0
                   group-hover:opacity-100
                   group-hover:translate-y-0 text-center delay-150 duration-300"
          >
            <h3 className="text-cyan text-lg">{product.name}</h3>
            <h3 className="font-bold text-lg">{product.price}$</h3>
            <button className="border-2 p-2 mt-4 text-lg">Add to Cart</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
