import { Product } from "../types/types";

type ProductDetailsProps = {
  product: Product;
};

const ProductDetail: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="flex mx-auto mt-28 p-6 max-w-2xl">
      <div className="w-[600px] h-[600px]">
        <img
          src={`http://localhost:3001/public${product.image_url}`}
          alt={product.name}
          className="mb-6 w-full h-auto"
        />
      </div>
      <div>
        <h1 className="font-bold text-2xl">{product.name}</h1>
        <h2 className="mb-2 font-semibold text-lg">${product.price}</h2>
        <p className="text-gray-500 text-sm">
          Ingredients: {product.ingredients}
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
