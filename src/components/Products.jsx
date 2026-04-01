import { use, useState } from "react";
import ProductCard from "./ProductCard";
import Cart from "./Cart";

const Products = ({ productPromise, carts, setCarts }) => {
  const products = use(productPromise);
  const [activeTab, setActiveTab] = useState("product");

  return (
    <div
      id="products"
      className="max-w-7xl mx-auto py-16 sm:py-20 lg:py-30 px-4"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Premium Digital Tools
        </h2>
        <p className="mt-4 text-sm sm:text-base max-w-xl sm:max-w-3xl mx-auto">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>

        <div className="tabs tabs-box justify-center bg-transparent gap-1 sm:gap-2 border border-[#F6F6F6] w-max mx-auto rounded-full p-1">
          <button
            onClick={() => setActiveTab("product")}
            className={`w-32 sm:w-40 h-11 sm:h-13 rounded-full font-medium text-sm sm:text-base ${activeTab === "product" ? "btn btn-primary bg-linear text-white border-0" : "btn bg-transparent text-gray-500 border-0 hover:bg-gray-100"}`}
          >
            Products
          </button>
          <button
            onClick={() => setActiveTab("cart")}
            className={`w-32 sm:w-40 h-11 sm:h-13 rounded-full font-medium text-sm sm:text-base ${activeTab === "cart" ? "btn btn-primary bg-linear text-white border-0" : "btn bg-transparent text-gray-500 border-0 hover:bg-gray-100"}`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {activeTab === "product" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7.5 mt-8 sm:mt-10">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              carts={carts}
              setCarts={setCarts}
            />
          ))}
        </div>
      )}

      {activeTab === "cart" && (
        <div className="mt-8 sm:mt-10">
          <Cart carts={carts} setCarts={setCarts} />
        </div>
      )}
    </div>
  );
};

export default Products;
