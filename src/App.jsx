import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Banner from "./components/Banner";
import Stats from "./components/Stats";
import Products from "./components/Products";
import Steps from "./components/Steps";
import Pricing from "./components/Pricing";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

const getProducts = async () => {
  const res = await fetch("/products.json");
  return res.json();
};

const productPromise = getProducts();

function App() {
  const [carts, setCarts] = useState([]);

  return (
    <>
      <Banner />
      <Stats />
      <Products
        productPromise={productPromise}
        carts={carts}
        setCarts={setCarts}
      />
      <Steps />
      <Pricing />
      <Cta />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
