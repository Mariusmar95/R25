import { useCart } from "../hooks/cartContext";

const Orders = () => {
  const { cart, getTotalPrice, updateQuantity, removeFromCart, clearCart } =
    useCart();

  if (cart.length === 0) {
    return <p>Your cart is empty.</p>;
  }

  return (
    <div className="mx-auto mt-28 p-6 max-w-2xl">
      <h2 className="mb-4 font-bold text-2xl">Your Order</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <div>
              <strong>{item.name}</strong> - ${item.price} x {item.quantity}
            </div>
            <div>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">Total: ${getTotalPrice().toFixed(2)}</p>
      <button
        onClick={clearCart}
        className="bg-red-500 mt-4 px-4 py-2 rounded text-white"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Orders;
