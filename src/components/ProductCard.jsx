import { toast } from "react-toastify";

const ProductCard = ({ product, carts, setCarts }) => {
  const isPurchased = carts.some((item) => item.id === product.id);

  const handlePurchase = () => {
    if (isPurchased) {
      toast.error("Item already in cart!");
      return;
    }
    setCarts([...carts, product]);
    toast.success("Item added to cart!");
  };

  const badgeStyles = {
    New: "badge-success",
    Popular: "badge-primary",
    "Best Seller": "badge-warning",
  };

  return (
    <div className="rounded-2xl overflow-hidden border-2 border-[#F2F2F2] p-5 sm:p-6 space-y-3 sm:space-y-4 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-sm">
      {/* Badge */}
      <div className="flex justify-end">
        <div
          className={`badge badge-soft font-medium rounded-full h-auto px-3 py-1 text-xs sm:text-sm ${badgeStyles[product.badge] || "badge-neutral"}`}
        >
          {product.badge}
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center items-center h-13 w-13 sm:h-15 sm:w-15 border border-[#F2F2F2] rounded-full shrink-0">
        <img
          className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-bold leading-snug">
        {product.title}
      </h2>

      {/* Description */}
      <p className="text-sm sm:text-base">{product.description}</p>

      {/* Price */}
      <div className="capitalize text-sm sm:text-base">
        <span className="text-xl sm:text-2xl font-bold">${product.price}</span>/
        {product.billing}
      </div>

      {/* Features */}
      <div className="space-y-1.5 sm:space-y-2 flex-1">
        {product.features.map((feature, index) => (
          <div
            key={index}
            className="flex items-start gap-2 text-sm sm:text-base leading-5"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#30B868] shrink-0 mt-0.5">
              <use xlinkHref="/icons.svg#icon-check"></use>
            </svg>
            {feature}
          </div>
        ))}
      </div>

      {/* Buy Now */}
      <button
        onClick={handlePurchase}
        className={`btn h-12 sm:h-13 btn-block rounded-full border-0 text-sm sm:text-base mt-auto ${isPurchased ? "btn-success" : "btn-primary bg-linear text-white"}`}
      >
        {isPurchased && (
          <svg className="w-4 h-4 shrink-0">
            <use xlinkHref="/icons.svg#icon-check"></use>
          </svg>
        )}
        {isPurchased ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;
