import { createContext, useReducer } from "react";
import reducer from "./Reducers/reducer";
import apiReducer from "./Reducers/apiReducer";
import cartReducer from "./Reducers/cartReducer";
const initialApiData={
item:[],
oneItem:[],
oneNewItem:[],


}
const initialCart={
    cartItem:[],
    totalItem:0,
    totalPrice:0,
}

const AppContext=createContext();
const AppProvider=({children})=>{
    const [apiState,apiDispatch]=useReducer(apiReducer,initialApiData)
    const [state,dispatch]=useReducer(reducer,null);
    const [cartState,cartDtspatch]=useReducer(cartReducer,initialCart);
    const filterFunctionData=(itemId)=>{
apiDispatch({type:"FILTER_DATA",payload:itemId})
    }
    const OneFilterFunction=(name)=>{
        apiDispatch({type:"ONE_FILTER",payload:name});

    }
    const onewNewFilterData=(id)=>{
        apiDispatch({type:"ONE_NEW_FILTER_DATA",payload:id})
    }
    const cartItemData=(id)=>{
 return cartDtspatch({type:"CART_DATA",payload:id})
    }
    const cartDeleteFunction=(id)=>{
return cartDtspatch({type:"DELETE_CART",payload:id})
    }
    const clearAllCartFunction=()=>{
        return cartDtspatch({type:"CLEAR_ALL_CART"})
    }
    const additionFunction=(id)=>{
return cartDtspatch({type:"ADDTION_FUNCTION",payload:id})
    }
    const minusFunction=(id)=>{
        return cartDtspatch({
            type:"MINUS_FUNCTION",
            payload:id
        })
    }
    const totalItemFunction=()=>{
        return cartDtspatch({
            type:"TOTAL_ITEM_FUNCTION",
            
        })
    }
    const totalPriceValue=()=>{
        return cartDtspatch({type:"TOTAL_PRICE_VALUE"})
    }
 console.log(cartState.totalPrice)

return <AppContext.Provider value={{state,dispatch,...apiState,...apiDispatch,filterFunctionData,OneFilterFunction,onewNewFilterData,cartItemData,...cartState,cartDtspatch,cartDeleteFunction,clearAllCartFunction,additionFunction,minusFunction,totalItemFunction,totalPriceValue}}>
    {children}
</AppContext.Provider>
}
export {AppContext,AppProvider};