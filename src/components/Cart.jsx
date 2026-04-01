import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    setCarts([]);
    toast.success("Payment successful!");
  };

  const handleDelete = (item) => {
    const filteredArray = carts.filter((c) => c.id !== item.id);
    setCarts(filteredArray);
    toast.success("Item deleted!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 space-y-5 sm:space-y-6">
      <h1 className="text-xl sm:text-2xl font-bold">Your Cart</h1>

      {carts.length === 0 ? (
        <p className="flex items-center justify-center text-base sm:text-xl bg-[#F9FAFC] rounded-2xl px-5 py-16 sm:py-20 lg:py-25">
          Cart is empty
        </p>
      ) : (
        <>
          <div className="space-y-3 sm:space-y-4">
            {carts.map((item) => (
              <div
                className="flex items-center justify-between bg-[#F9FAFC] rounded-2xl p-4 sm:p-5 gap-3"
                key={item.id}
              >
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div className="flex shrink-0 justify-center items-center h-12 w-12 sm:h-15 sm:w-15 bg-base-100 border border-[#F2F2F2] rounded-full">
                    <img
                      className="h-6 w-6 sm:h-8 sm:w-8 object-contain"
                      src={item.image}
                      alt={item.title}
                    />
                  </div>
                  <div className="space-y-1 sm:space-y-2 min-w-0">
                    <h2 className="text-base sm:text-xl font-semibold truncate">
                      {item.title}
                    </h2>
                    <div className="text-sm sm:text-base font-medium">
                      ${item.price}
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDelete(item)}
                  className="btn btn-ghost shrink-0 font-bold text-[#FF3980] rounded-full text-sm sm:text-base px-3 sm:px-4"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center gap-6 pt-2">
            <div className="text-base sm:text-lg font-medium">Total:</div>
            <div className="text-xl sm:text-2xl font-bold">${totalPrice}</div>
          </div>

          <button
            onClick={handlePayment}
            className="btn btn-primary bg-linear btn-block text-white rounded-full border-0 h-12 sm:h-13"
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
