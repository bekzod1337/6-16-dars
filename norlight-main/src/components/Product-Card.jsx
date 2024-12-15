import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";
import { Link, useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const array = [1, 2, 3, 4, 5];
  const { state, dispatch } = useContext(MyContext);
  const [isLiked, setIsLiked] = useState(false);
  const [isInCart, setIsInCart] = useState(false);
  const navigate = useNavigate();

  const favHandler = async () => {
    if (isLiked) {
      await dispatch({ type: "REMOVE_WISHLIST", payload: product.id });
      setIsLiked(false);
    } else {
      setIsLiked(true);
      await dispatch({ type: "SET_WISHLIST", payload: product });
    }
  };

  useEffect(() => {
    localStorage.setItem("liked", JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const cartHandler = () => {
    if (isInCart) {
      navigate("/carts");
    } else {
      dispatch({ type: "SET_CART", payload: product });
      setIsInCart(true);
    }
  };

  return (
    <div className="w-full relative pb-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/product-details/${product.id}`}>
        <img
          className="p-8 rounded-t-lg h-[300px] w-full object-contain"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {product.title}
        </h5>
        <div className="flex items-center mt-2.5 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {product.rating.rate}
          </span>
        </div>
        <div className="flex items-center justify-between absolute px-5 pb-5 bottom-0 start-0 end-0">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={() => favHandler(product)}
              className="font-medium rounded-lg px-2 transition-all py-1.5 text-center text-2xl"
            >
              {isLiked ? (
                <i className="fa text-red-500 fa-heart"></i>
              ) : (
                <i className="fa-regular fa-heart"></i>
              )}
            </button>
            <button
              onClick={cartHandler}
              className="text-white bg-black font-medium rounded-lg px-5 py-2.5 text-center"
            >
              {isInCart ? "Go to Carts" : <i className="fa fa-shopping-cart"></i>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
