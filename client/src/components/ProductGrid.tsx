import React from "react";
import { Product } from "../types/types";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  error: string | null;
  loading: boolean;
};

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  error,
  loading,
}) => {
  if (error) {
    return <p className="my-4 text-red-500">{error}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="flex-grow">
      <div className="py-6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-2">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
