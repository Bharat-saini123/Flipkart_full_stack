import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "./Context";
import {
  AiOutlineShoppingCart,
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlineDelete,
} from "react-icons/ai";
//
//

const Cart = () => {
  const { cartId } = useParams();
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
  } = useContext(AppContext);
  useEffect(() => {
    totalItemFunction();
  }, [cartItem]);
  useEffect(() => {
    totalPriceValue();
  }, [cartItem]);
  useEffect(() => {
    cartItemData(cartId);
  }, []);
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
          <hr />
        </div>
        <div style={{ padding: "5rem", height: "30rem", overflowY: "scroll" }}>
          <div className="my-cart-top-box">
            {cartItem === [] || cartItem.length === 0 || cartItem === undefined
              ? ""
              : cartItem.map((curr) => {
                  const data = curr.map((current) => {
                    const arrayData = current.map((currData) => {
                      const myData = currData.map((ElementData) => {
                        const elementName = ElementData.name;
                        const NewName = elementName.slice(0, 20);

                        return (
                          <div>
                            <div
                              className="main-shopping-item-card"
                              key={ElementData.id}
                            >
                              <div className="image">
                                <figure
                                  style={{ height: "5rem", width: "5rem" }}
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
                                className="name"
                                style={{
                                  fontSize: "1.5rem",
                                  fontWeight: "500",
                                  textTransform: "capitalize",
                                }}
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
                                    fontSize: "3rem",
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
                                    fontSize: "1.5rem",
                                    fontWeight: "500",
                                    padding: "0.4rem 1.2rem",
                                    border:
                                      "0.5px solid rgba(128, 128, 128, 0.39)",
                                    margin: "0rem 0.5rem",
                                  }}
                                >
                                  {ElementData.quantity === undefined
                                    ? ""
                                    : ElementData.quantity}
                                </div>
                                <div
                                  className="minus"
                                  style={{
                                    fontSize: "3rem",
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
                                style={{ fontSize: "2rem", fontWeight: "500" }}
                              >
                                <span> &#8377;</span>{" "}
                                {ElementData.price === undefined
                                  ? ""
                                  : ElementData.price}
                              </div>
                              <div
                                className="delete-icon"
                                style={{ fontSize: "3rem", fontWeight: "500" }}
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
      <div className="buttons-cart container" style={{ marginTop: "2rem" }}>
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
          >
            Add cart
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
<div >
      <div className="total-price container-md" style={{fontSize:"3rem",fontWeight:"500",textTransform:"capitalize"}}>
      {`Total-price = ${totalPrice}`}
      </div>
    </div>
    </div>
  );
};

export default Cart;
