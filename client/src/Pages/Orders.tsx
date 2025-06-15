import { useCart } from "../hooks/cartContext";
import DeleteIcon from "@mui/icons-material/Delete";
import DeleteSweepOutlinedIcon from "@mui/icons-material/DeleteSweepOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";

const Orders = () => {
  const { cart, getTotalPrice, updateQuantity, removeFromCart, clearCart } =
    useCart();

  return (
    <div className="bg-gray-50 py-40">
      <div className="mx-auto mt-20 px-4 sm:px-6 max-w-4xl">
        {/*Header*/}
        <div className="mb-8">
          <h1 className="mb-2 font-bold text-gray-900 text-3xl sm:text-4xl text-center">
            Your Order
          </h1>
          <div className="bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full w-20 h-1"></div>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white shadow-lg p-8 sm:p-12 border border-gray-200 rounded-2xl">
            <div className="flex flex-col justify-center items-center space-y-6 text-center">
              {/*Empty cart icon*/}
              <div className="flex justify-center items-center bg-gray-100 rounded-full w-24 h-24">
                <ProductionQuantityLimitsOutlinedIcon
                  style={{ fontSize: 60 }}
                />
              </div>
              <div>
                <p className="mb-2 font-semibold text-gray-600 text-xl">
                  Your cart is empty
                </p>
                <p className="text-gray-500">
                  Add some delicious items to your order!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {/*Cart Items*/}
            <div className="bg-white shadow-lg border border-gray-200 rounded-2xl overflow-hidden">
              <div className="p-6">
                <h2 className="flex items-center gap-2 mb-6 font-bold text-gray-900 text-2xl">
                  <div className="bg-blue-500 rounded-full w-2 h-2"></div>
                  Cart Items
                </h2>

                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={item.id}
                      className={`p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-all duration-200 ${
                        index !== cart.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }`}
                    >
                      <div className="flex sm:flex-row flex-col sm:justify-between sm:items-center gap-4">
                        {/*Item Info*/}
                        <div className="flex-1">
                          <h3 className="mb-1 font-semibold text-gray-900 text-lg">
                            {item.name}
                          </h3>
                          <div className="flex items-center gap-4 text-gray-600">
                            <span className="font-medium">${item.price}</span>
                            <span>×</span>
                            <span>{item.quantity}</span>
                            <span className="font-semibold text-green-600">
                              = ${(item.price * item.quantity).toFixed(2)}
                            </span>
                          </div>
                        </div>

                        {/*Quantity*/}
                        <div className="flex items-center gap-2">
                          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-lg">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="hover:bg-gray-100 p-2 rounded-l-lg transition-colors duration-200"
                            >
                              -
                            </button>
                            <span className="px-4 py-2 min-w-[3rem] font-medium text-gray-900 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="hover:bg-gray-100 p-2 rounded-r-lg transition-colors duration-200"
                            >
                              +
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="hover:bg-red-50 p-2 rounded-lg text-red-500 transition-colors duration-200"
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-lg p-6 border border-gray-200 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold text-gray-900 text-xl">Order Total</h3>
                <div className="text-right">
                  <div className="font-bold text-green-600 text-3xl">
                    ${getTotalPrice().toFixed(2)}
                  </div>
                </div>
              </div>

              {/*Clear Proceed Buttons*/}
              <div className="flex sm:flex-row flex-col gap-4">
                <button
                  onClick={clearCart}
                  className="flex flex-1 justify-center items-center gap-2 bg-gray-100 hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold text-gray-700 transition-colors duration-200"
                >
                  <DeleteSweepOutlinedIcon />
                  Clear Cart
                </button>

                <button className="flex flex-1 justify-center items-center gap-2 bg-gradient-to-r from-blue-600 hover:from-blue-700 to-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-1 active:translate-y-0 duration-300 transform">
                  <CreditCardOutlinedIcon />
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
