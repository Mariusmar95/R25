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
  const handleFilter = (filterType: string) => {
    const filteredProducts = allProducts.filter((product) => {
      let productTypes: string[] = [];
      if (typeof product.type === "string") {
        productTypes = product.type.split(",").map((item) => item.trim());
      } else if (Array.isArray(product.type)) {
        productTypes = product.type;
      }
      return productTypes.includes(filterType);
    });

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
