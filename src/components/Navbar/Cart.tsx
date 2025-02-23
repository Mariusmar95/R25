import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  return (
    <div className="flex items-center ">
      <a href="cart">
        <ShoppingCartIcon />
      </a>
      <span>Cart(2)</span>
    </div>
  );
};

export default Cart;
