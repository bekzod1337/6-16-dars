import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets";
import SearchForm from "./Search-Form";
import { MyContext } from "../Context";
const Navbar = () => {
  const [wishCount, setWishCount] = useState(0);
  const [cartsCount, setCartsCount] = useState(0);
  const [nav, setNav] = useState(false)
  const {state} = useContext(MyContext)
  useEffect(() => {
    if(state.wishlist){
      if(state.wishlist.length > 9){
        setWishCount("9+")
      }else{
        setWishCount(state.wishlist.length)
      }
    }
  }, [state.wishlist])

  useEffect(() => {
    if(state.carts){
      if(state.carts.length > 9){
        setCartsCount("9+")
      }else{
        setCartsCount(state.carts.length)
      }
    }
  }, [state.carts])
  return (
    <nav className="container navbar py-3 max-md:px-5 2xl:px-40 overflow-x-hidden">
      <div className="flex justify-between">
        <ul className={`${nav ? "open" : "max-md:hidden"} flex md:items-center max-md:p-5 max-md:min-w-56 max-md:border-s border-second max-md:fixed end-0 top-0 bottom-0 z-50 max-md:flex-col max-md:bg-first gap-5 text-sm text-second`}>
          <li className="text-end md:hidden pe-2">
            <button onClick={() => setNav(false)}>
              <i className="fa fa-times text-2xl"></i>
            </button>
          </li>
          <li>
            <NavLink to={"/about"}>О компании</NavLink>
          </li>
          <li>
            <NavLink to={"/delivery"}>Доставка и оплата</NavLink>
          </li>
          <li>
            <NavLink to={"/ages"}>Возврат</NavLink>
          </li>
          <li>
            <NavLink to={"/warranty"}>Гарантии</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Контакты</NavLink>
          </li>
          <li>
            <NavLink to={"/blog"}>Блог</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-5 text-sm">
          <p>8 (800) 890-46-56</p>
          <a href="tel: 88008904656">Заказать звонок</a>
        </div>
      </div>
      <div className="mt-5 flex justify-between items-center gap-7">
        <Link to="/">
          <img className="w-52" src={Logo} alt="logo" />
        </Link>
        <button onClick={() => setNav(true)} className="md:hidden">
          <i className="fa fa-bars fa-2x"></i>
        </button>
        <SearchForm classes={"max-md:hidden"}/>
        <ul className="flex gap-3 max-md:bg-first z-50 max-md:py-3 max-md:border border-second items-center max-md:w-full max-md:justify-around max-md:fixed bottom-0 left-0 right-0">
          <li className="md:hidden">
            <Link to={"/"}>
              <i className="fa text-2xl fa-home"></i>
            </Link>
          </li>
          <li className="md:hidden">
            <Link to={"/search"}>
              <i className="fa text-2xl fa-magnifying-glass"></i>
            </Link>
          </li>
          <li>
            <Link to={"/favorites"} className="flex items-center text-sm justify-center flex-col">
              <div className="relative w-min h-min">
                <i className="fa-regular text-2xl fa-heart"></i>
                <div className="absolute p-0.5 -top-2 -end-3 bg-red-500 rounded-full h-5 flex items-center justify-center text-white text-sm min-w-5">
                  {wishCount}
                </div>
              </div>
              <span className="max-md:hidden">Избранное</span>
            </Link>
          </li>
          <li>
            <Link className="flex items-center text-sm justify-center flex-col">
              <i className="fa text-2xl fa-signal"></i>
              <span className="max-md:hidden">Сравнение</span>
            </Link>
          </li>
          <li>
            <Link to={"/carts"} className="flex items-center text-sm justify-center flex-col">
              <div className="relative w-min h-min">
                <i className="fa text-2xl fa-shopping-cart"></i>
                <div className="absolute p-0.5 -top-2 -end-3 bg-red-500 rounded-full h-5 flex items-center justify-center text-white text-sm min-w-5">
                  {cartsCount}
                </div>
              </div>
              <span className="max-md:hidden">Korzinka</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
