import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Product } from "../types/types";

export const useProductsDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/menu/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log("Error fetching data", err);
        setError("Failed to load products");
      }
    };

    fetchProduct();
  }, [id]);

  return {
    product,
    setProduct,
    error,
  };
};
