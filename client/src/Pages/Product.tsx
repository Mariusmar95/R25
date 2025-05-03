import { useProductsDetails } from "../hooks/useProductDetails";
import ProductDetail from "../components/ProductDetails";

const Product = () => {
  const { product, error } = useProductsDetails();

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return <ProductDetail product={product} />;
};

export default Product;
