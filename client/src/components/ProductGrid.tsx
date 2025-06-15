import React from "react";
import { Product } from "../types/types";
import ProductCard from "./ProductCard";
import LoadingProducts from "./ErrorsAndConfirmation/LoadingProducts";
import ErrorLoadingProducts from "./ErrorsAndConfirmation/ErrorLoadingProducts";

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
    return <ErrorLoadingProducts error={error} />;
  }

  if (loading) {
    return (
      <div className="flex-grow">
        <div className="gap-x-2 gap-y-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <LoadingProducts key={index} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex-grow">
      <div className="gap-x-2 gap-y-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 py-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
