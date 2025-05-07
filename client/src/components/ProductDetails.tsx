import { Product } from "../types/types";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetail: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={`http://localhost:3001/public${product.image_url}`}
        alt={product.name}
        className="w-full h-auto mb-6"
      />

      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-lg font-semibold mb-2">${product.price}</p>
      <p className="text-sm text-gray-500">
        Ingredients: {product.ingredients}
      </p>
    </div>
  );
};

export default ProductDetail;
