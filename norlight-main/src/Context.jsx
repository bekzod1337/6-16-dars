import { createContext, useReducer } from "react";

const initialState = {
  products: null,
  wishlist: null,
  carts: [],
};

export const MyContext = createContext();

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_PRODUCTS":
      return { ...state, products: payload };
    case "SET_WISHLIST":
      if (state.wishlist) {
        return { ...state, wishlist: [...state.wishlist, payload] };
      } else {
        return { ...state, wishlist: [payload] };
      }
    case "SET_WISHLIST_FROM_LS":
      return {...state, wishlist: payload}
    case "REMOVE_WISHLIST":
      return {...state, wishlist: state.wishlist.filter(w => w.id != payload)}
    case "REMOVE_CARTS":
      return {...state, carts: state.carts.filter(c => c.id != payload)}
    case "SET_CART":
      return {...state, carts: [...state.carts, payload]}
    case "SET_CARTS_FROM_LS":
      return {...state, carts: payload}
    default:
      return { state };
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

export default Provider;
