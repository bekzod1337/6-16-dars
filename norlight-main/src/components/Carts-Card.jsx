import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MyContext } from "../Context";

const CartsCard = ({ product }) => {
  const { state, dispatch } = useContext(MyContext);
  const [count, setCount] = useState(1);

  const removeCart = () => {
    dispatch({ type: "REMOVE_CARTS", payload: product.id });
    setIsInCart(false);
  };
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(state.carts));
  }, [state.carts]);

  const decrementHandler = () => {
    if (count == 1) {
      removeCart();
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex justify-between border-b">
      <Link
        className="block flex-shrink-0"
        to={`/product-details/${product.id}`}
      >
        <img
          className="object-contain w-full max-w-24 p-3 rounded-t-lg h-full md:w-48 md:rounded-none md:rounded-s-lg"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div>
        <Link
          to={`/product-details/${product.id}`}
          className="mb-5 max-w-[200px] font-semibold block text-gray-900 dark:text-white"
        >
          {product.title}
        </Link>
        <p className="font-bold text-xl">${product.price}</p>
      </div>
      <div>
        <p className="mb-3 max-w-96 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
          {product.description}
        </p>
      </div>
      <div>
        <p className="mb-3 line-clamp-3 font-normal text-gray-700 dark:text-gray-400">
          {product.category}
        </p>
      </div>
      <div>
        <div className="flex gap-4">
          <button className="text-2xl" onClick={decrementHandler}>
            -
          </button>
          <input
            className="w-16 text-center py-4 border-slate-400 rounded-xl bg-transparent"
            value={count}
            type="number"
          />
          <button className="text-2xl" onClick={() => setCount(count + 1)}>
            +
          </button>
        </div>
      </div>
      <div>
        <button
          className="px-4 py-2 text-2xl"
          onClick={() => removeCart(product.id)}
        >
          <i className="fa fa-trash text-red-500"></i>
        </button>
      </div>
    </div>
  );
};

export default CartsCard;
