import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Carts, Favorites, Home, Navbar } from "./components";
import ProductDetails from "./components/ProductDetails";
import { MyContext } from "./Context";

const App = () => {
  const { state, dispatch } = useContext(MyContext);

  useEffect(() => {
    let ls = localStorage.getItem("liked");
    if (ls) {
      dispatch({ type: "SET_WISHLIST_FROM_LS", payload: JSON.parse(ls) });
    }
    let lsC = localStorage.getItem("carts");
    if (lsC) {
      dispatch({ type: "SET_CARTS_FROM_LS", payload: JSON.parse(lsC) });
    }
  }, []);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/carts" element={<Carts />} />
        <Route path="/product-details/:id" element={<ProductDetails />} /> {/* Product Details sahifasiga yo'naltirish */}
      </Routes>
    </div>
  );
};

export default App;
