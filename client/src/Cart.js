import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
} from "react-icons/ai";

const Cart = () => {
  const { cartId } = useParams();
const navigate=useNavigate()
  const {
    cartItemData,
    cartItem,
    cartDeleteFunction,
    clearAllCartFunction,
    additionFunction,
    minusFunction,
    totalItemFunction,
    totalItem,
    totalPriceValue,
    totalPrice,
    paymentAddFunction
   
  } = useContext(AppContext);



 const userAuthenticateFunction=async()=>{
try{
const response=await fetch("https://bhai-flipkart.onrender.com/getData",{
  method:"GET",
  headers:{
    Accept:"application/json",
    "Content-Type":"application/json"

  },
  credentials:"include"
})
const data= await response.json();

console.log(response.status)
if(response.status===408){
  toast.error("please login before enter the cart page",{
    autoClose: 2000,
})
  navigate('/login')
 
}
else{
  cartItemData(cartId);
}
}catch(error){
  console.log(error);
  
}
 }


 useEffect(()=>{
  userAuthenticateFunction()
    },[])
useEffect(() => {
  totalItemFunction();
}, [cartItem]);
useEffect(() => {
  totalPriceValue();
}, [cartItem]);


 
  return (
    <div style={{ backgroundColor: "#fff", padding: "5rem 0rem" }}>
       
      <div className="container">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "3rem", fontWeight: "500" }}>
              Shopping-Cart
            </div>

            <div className="cart-icons">
              <span
                style={{ display: "inline-block", padding: "2rem" }}
                className="shopping-cart-icon"
              >
                <AiOutlineShoppingCart
                  style={{ fontSize: "3rem", fontWeight: "500" }}
                />
                <span
                  className="total-item-cart"
                  style={{ display: "inline-block" }}
                >
                  {totalItem}
                </span>
              </span>
            </div>
          </div>
         <div style={{fontSize:"1.5rem",fontWeight:"300",margin:"2rem 0rem"}}>There are total <span style={{fontSize:"1.5rem",fontWeight:"500"}}>{totalItem}</span> items in the cart</div>
        </div>
        {
          cartItem.length===0||cartItem===undefined?"":
          <div  className="head-cart-items" style={{padding:" 0rem 5rem"}}>
          <div className="box-1 cart-box-div" >
Items
          </div>
          <div className="box-2 cart-box-div">
            name
            </div>
            <div className="box-3 cart-box-div">
            quantity
            </div>
            <div className="box-4 cart-box-div" >
            price
            </div>
            <div className="box-5 total-price-cart cart-box-div">
            Total Price
            </div>
            <div className="box-6 cart-box-div delete-icon" >
            Remove
            </div>
            
        </div>
        }
  
    
        <div style={{ padding: "1rem 5rem", height: "30rem", overflowY: "scroll" }}>
          <hr />
          <div className="my-cart-top-box">
            { cartItem.length === 0 || cartItem === undefined
              ? ""
              : cartItem.map((curr) => {
                  const data = curr.map((current) => {
                    const arrayData = current.map((currData) => {
                      const myData = currData.map((ElementData) => {
                        const elementName = ElementData.name;
                        const NewName = elementName.slice(0, 20);

                        return (
                          <div key={ElementData.id}>
                            <div
                              className="main-shopping-item-card"
                              key={ElementData.id}
                            >
                              <div className="image">
                                <figure
                                  style={{ height: "3rem", width: "3rem" }}
                                >
                                  <img
                                    src={
                                      ElementData.image === undefined
                                        ? ""
                                        : ElementData.image
                                    }
                                    alt=""
                                    style={{
                                      width: "100%",
                                      height: "100%",
                                      objectFit: "contain",
                                      objectPosition: "center",
                                    }}
                                  />
                                </figure>
                              </div>
                              <div
                                className="name cart-box-div"
                              
                              >
                                {ElementData.name === undefined
                                  ? ""
                                  : elementName.length > 20
                                  ? `${NewName}...`
                                  : elementName}
                              </div>
                              <div className="total-items-data-cart">
                                <div
                                  className="plus"
                                  style={{
                                    fontSize: "2rem",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                  }}
                                >
                                  <AiOutlinePlus
                                    onClick={() =>
                                      additionFunction(ElementData.id)
                                    }
                                  />
                                </div>
                                <div
                                  style={{
                                   
                                    margin: "0rem 0.5rem",
                                  }}
                                  className="cart-box-div"
                                >
                                  {ElementData.quantity === undefined
                                    ? ""
                                    : ElementData.quantity}
                                </div>
                                <div
                                  className="minus"
                                  style={{
                                    fontSize: "2rem",
                                    fontWeight: "500",
                                    cursor: "pointer",
                                  }}
                                >
                                  <AiOutlineMinus
                                    onClick={() =>
                                      minusFunction(ElementData.id)
                                    }
                                  />
                                </div>
                              </div>
                              <div
                              className="cart-box-div"
                                
                              >
                                <span> &#8377;</span>{" "}
                                { ElementData.price ===
                                undefined
                                  ? ""
                                  :  ElementData.price}
                              </div>
                              <div
                                className="cart-box-div"
                              >
                                <span> &#8377;</span>{" "}
                                {ElementData.quantity * ElementData.price ===
                                undefined
                                  ? ""
                                  : ElementData.quantity * ElementData.price}
                              </div>
                          
                              <div
                                className="delete-icon cart-box-div"
                              
                              >
                                <AiOutlineDelete
                                  style={{ color: "red", cursor: "pointer" }}
                                  onClick={() =>
                                    cartDeleteFunction(ElementData.id)
                                  }
                                />{" "}
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      });
                      return myData;
                    });
                    return arrayData;
                  });
                  return data;
                })}
          </div>
        </div>
      </div>
      <div className="buttons-cart container" style={{ display:"flex",justifyContent:"space-between" ,alignItems:"center"}}>

      <div style={{marginLeft:"5rem",padding:"5rem",width:"50rem"}}>
        <div
          className="total-price container-md total-price-cart-total-items"
          style={{
           
            fontWeight: "500",
            textTransform: "capitalize",
            
          }}
        >
          {`Total-price = ${totalPrice}`}
        </div>
      </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            textAlign: "right",
            justifyContent: "flex-end",
            gap: "2rem",
            width: "105rem",
          }}
        >
          <button
            type="button"
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
            className="btn btn-primary"
            onClick={paymentAddFunction}
          >
            Payment
          </button>
          <button
            type="button"
            style={{
              fontSize: "1.5rem",
              fontWeight: "500",
              textTransform: "capitalize",
            }}
            className="btn btn-danger"
            onClick={clearAllCartFunction}
          >
            Clear cart
          </button>
        </div>
      </div>
     
    </div>
  );
};

export default Cart;
