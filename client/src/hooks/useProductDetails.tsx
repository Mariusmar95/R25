import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../types/types";

export const useProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/menu/${id}`);
        console.log("Product data received:", res.data);
        console.log(
          "Product data received:",
          console.log("key in product:", Object.keys(res.data)),
          res.data.image_url
        );
        setProduct(res.data);
        console.log("Current product ID:", id);
        setError(null);
      } catch (err) {
        console.log("Error fetching data", err);
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return {
    product,
    setProduct,
    error,
    setError,
    loading,
    setLoading,
  };
};
