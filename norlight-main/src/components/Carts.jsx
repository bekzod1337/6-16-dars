import { useContext, useEffect, useState } from "react";
import { MyContext } from "../Context";
import CartsCard from "./Carts-Card";
import { useLocation } from "react-router-dom";

const Carts = () => {
  const { state, dispatch } = useContext(MyContext);
  const [products, setProducts] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setProducts(state.carts);
  }, [state.carts]);

  return (
    <div className="container  px-10 mt-10">
      <p>{location.pathname}</p>
      <h2 className="text-5xl font-bold mt-3 mb-10">Корзина</h2>
      <div className="bg-first p-10 rounded-3xl">
        <div className="flex mb-5 border-b pb-3 text-slate-400">
          <span className="w-[13%]">Фото</span>
          <span className="w-[20.5%]">Товары</span>
          <span className="w-[34%]">Описание</span>
          <span className="w-[14%]">Артикул</span>
          <span>Количество</span>
          <span></span>
        </div>
        <div className="flex flex-col gap-5">
          {products && products.length != 0 ? (
            products.map((w) => <CartsCard key={w.id} product={w} />)
          ) : (
            <tr className="w-full flex text-center">
              <td colSpan={6} className="w-full block text-center">
                <h2 className="text-gray-500 w-full text-center mt-10 text-2xl opacity-70">
                  You don't have liked products{" :("}
                </h2>
              </td>
            </tr>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carts;
