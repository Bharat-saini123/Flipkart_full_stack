import { createContext, useEffect, useReducer } from "react";
import reducer from "./Reducers/reducer";
import apiReducer from "./Reducers/apiReducer";
import cartReducer from "./Reducers/cartReducer";
import SearchReducer from "./Reducers/SearchReducer";
import { loadStripe } from "@stripe/stripe-js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialApiData = {
  item: [],
  oneItem: [],
  oneNewItem: [],
};
const initialCart = {
  cartItem: [],
  totalItem: 0,
  totalPrice: 0
  
};
const initialSearch = {
  searchData: [],
  text: "",
  maxPrice: 0,
  minPrice: 0,
  price: 0,
  
};
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [apiState, apiDispatch] = useReducer(apiReducer, initialApiData);
  const [state, dispatch] = useReducer(reducer, null);

  const [cartState, cartDtspatch] = useReducer(cartReducer, initialCart);

  const [searchState, searchDispatch] = useReducer(
    SearchReducer,
    initialSearch
  );

  
  const filterFunctionData = (itemId) => {
    apiDispatch({ type: "FILTER_DATA", payload: itemId });
  };
  const OneFilterFunction = (name) => {
    apiDispatch({ type: "ONE_FILTER", payload: name });
  };
  const onewNewFilterData = (id) => {
    apiDispatch({ type: "ONE_NEW_FILTER_DATA", payload: id });
  };
  
  const cartItemData = (id) => {
 cartDtspatch({ type: "CART_DATA", payload: id }) 
  };
 
  


  const cartDeleteFunction = (id) => {
    toast.info("you remove cart item", {
      position: "top-center",
      autoClose: 1000,
      });
    return cartDtspatch({ type: "DELETE_CART", payload: id });
  };
  const clearAllCartFunction = () => {
    toast.info("you remove all cart item", {
      position: "top-center",
      autoClose: 1000,
      });
    return cartDtspatch({ type: "CLEAR_ALL_CART" });
  };
  const additionFunction = (id) => {
    toast.success("you added cart item", {
      position: "top-center",
      autoClose: 1000,
      });
    return cartDtspatch({ type: "ADDTION_FUNCTION", payload: id });
  };
  const minusFunction = (id) => {
    toast.info("you remove cart item", {
      position: "top-center",
      autoClose: 1000,
      });
    return cartDtspatch({
      type: "MINUS_FUNCTION",
      payload: id,
    });
  };
  const totalItemFunction = () => {
    return cartDtspatch({
      type: "TOTAL_ITEM_FUNCTION",
    });
  };
  const totalPriceValue = () => {
    return cartDtspatch({ type: "TOTAL_PRICE_VALUE" });
  };

  const SearchChangeFunction = (event) => {
    searchDispatch({ type: "SEARCH_DATA", payload: event });
  };

  const searchFilterData = () => {
    searchDispatch({ type: "SEARCH_FILTER" });
  };
  const filterBySection = (event) => {
    const value = event.target.value;

    searchDispatch({ type: "SEARCHBY_NAME", payload: value });
  };

  const MobileFilter = (e) => {
    const value = e.target.value;
    searchDispatch({ type: "MOBLIE_FILTER", payload: value });
  };


  const paymentAddFunction = async () => {
    
    const blankarray = [];
    const data = cartState.cartItem.map((curr) => {
      const myData = curr.map((current) => {
        const ElementData = current.map((currData) => {
          if (currData.length === 1) {
            return blankarray.push(...currData);
          }

          return currData;
        });
        return ElementData;
      });
      return myData;
    });
   
   
  
    const stripe = await loadStripe(
      "pk_test_51NnjjuSIrhr3xwAM9fjpcaGIPWleNNg5mYWcurzJaP3qrWW6Z8l9iyHDD3BErBILjb4qEB9PEMSHUW7XADbWVVaR00Fe5ZvDOL"
    );
    const response = await fetch(
      "https://saini-back-flipkart.onrender.com/api/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: blankarray,
        }),
      }
    );
    const session = await response.json();
    console.log(session);
    const result = stripe.redirectToCheckout({ sessionId: session.id });
    console.log(result);
  };
 
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        ...apiState,
        ...apiDispatch,
        filterFunctionData,
        OneFilterFunction,
        onewNewFilterData,
        cartItemData,
        ...cartState,
        cartDtspatch,
        cartDeleteFunction,
        clearAllCartFunction,
        additionFunction,
        minusFunction,
        totalItemFunction,
        totalPriceValue,
        ...searchState,
        SearchChangeFunction,
        searchFilterData,
        filterBySection,
        MobileFilter,
        paymentAddFunction,
      }}
    >
      <ToastContainer style={{fontSize:"1.5rem",fontWeight:"500"}}/>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext, AppProvider };
