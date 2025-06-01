import { useProductsDetails } from "../hooks/useProductDetails";
import ProductDetailPage from "../components/ProductDetailsPage";

const Product = () => {
  const { product, error } = useProductsDetails();

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading...</p>;

  return <ProductDetailPage product={product} />;
};

export default Product;
