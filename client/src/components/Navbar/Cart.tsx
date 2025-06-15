import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../hooks/cartContext";

const Cart = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Link
      to="/orders"
      className="flex items-center gap-2 hover:text-sky-700 transition-colors"
    >
      <ShoppingCartIcon />
      {totalItems > 0 && (
        <div className="flex justify-center items-center bg-red-500 rounded-full w-5 h-5 text-white text-xs">
          {totalItems}
        </div>
      )}
    </Link>
  );
};
export default Cart;
