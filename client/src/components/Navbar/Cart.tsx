import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../../hooks/cartContext";

const Cart = () => {
  const { cart, getTotalItems } = useCart();

  const totalItems = getTotalItems();

  console.log("Cart component - cart:", cart);
  console.log("Cart component - totalItems:", totalItems);

  return (
    <Link
      to="/orders"
      className="flex items-center gap-2 hover:text-sky-700 transition-colors"
    >
      <ShoppingCartIcon />
      <span>Cart({totalItems})</span>
      {totalItems > 0 && (
        <div className="flex justify-center items-center bg-red-500 rounded-full w-5 h-5 text-white text-xs">
          {totalItems}
        </div>
      )}
    </Link>
  );
};
export default Cart;
