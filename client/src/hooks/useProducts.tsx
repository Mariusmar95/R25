import { useState, useEffect } from "react";
import axios from "axios";
import { Product } from "../types/types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  {
    /* Fetch menu products*/
  }
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get<Product[]>("http://localhost:3001/menu");
        setProducts(res.data);
        setAllProducts(res.data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  {
    /* Filter sidebar menu items*/
  }
  const handleFilter = (type: string) => {
    const filteredProducts = allProducts.filter((product) =>
      Array.isArray(product.type)
        ? product.type.includes(type)
        : product.type === type
    );
    setProducts(filteredProducts);
  };

  return {
    products,
    setProducts,
    allProducts,
    error,
    setError,
    handleFilter,
    loading,
    setLoading,
  };
};
