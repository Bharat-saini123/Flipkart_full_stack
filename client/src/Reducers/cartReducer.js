import React from "react";
import AllApi from "../AllApi";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "CART_DATA": {
      const blanarray = [];
      const data = state.cartItem.map((curr) => {
        const myData = curr.map((current) => {
          const itemData = current.map((currData) => {
            const totalItemData = currData.filter((currentElement) => {
              if (Number(currentElement.id) === Number(action.payload)) {
                blanarray.push("yesbabe");
                return Number(currentElement.id) === Number(action.payload);
              }
            });
            return totalItemData;
          });
          return itemData;
        });
        return myData;
      });

      if (blanarray[0] === "yesbabe") {
        blanarray.length = 0;

        const updatedProduct = state.cartItem.map((curr) => {
          const myData = curr.map((current) => {
            const itemData = current.map((currData) => {
              const totalItemData = currData.map((currentElement) => {
                if (Number(currentElement.id) === Number(action.payload)) {
                  blanarray.length = 0;
                  return {
                    ...currentElement,
                    quantity: currentElement.quantity + 1,
                  };
                } else {
                  blanarray.length = 0;
                  return currentElement;
                }
              });
              return totalItemData;
            });
            return itemData;
          });
          return myData;
        });
        return {
          ...state,
          cartItem: updatedProduct,
        };
      } else {
        blanarray.length = 0;

        return {
          ...state,
          cartItem: [
            ...state.cartItem,
            AllApi.map((curr) => {
              const data = curr.array.map((current) => {
                const myData = current.filter((myCurrent) => {
                  return myCurrent.id === parseInt(action.payload);
                });
                return myData;
              });
              return data;
            }),
          ],
        };
      }
    }
    case "DELETE_CART": {
      const data = state.cartItem;

      return {
        ...state,
        cartItem: data.map((curr) => {
          const arrayData = curr.map((current) => {
            const itemData = current.map((currData) => {
              const FilterData = currData.filter((ElementData) => {
                return Number(ElementData.id) !== Number(action.payload);
              });
              return FilterData;
            });
            return itemData;
          });
          return arrayData;
        }),
      };
    }
    case "CLEAR_ALL_CART": {
      return {
        ...state,
        cartItem: [],
      };
    }
    case "ADDTION_FUNCTION": {
      return {
        ...state,
        cartItem: state.cartItem.map((curr) => {
          const arrayData = curr.map((current) => {
            const itemData = current.map((currData) => {
              const FilterData = currData.map((currentElement) => {
                if (Number(currentElement.id) === Number(action.payload)) {
                  return {
                    ...currentElement,
                    quantity: currentElement.quantity + 1,
                  };
                }
                return currentElement;
              });
              return FilterData;
            });
            return itemData;
          });
          return arrayData;
        }),
      };
    }
    case "MINUS_FUNCTION": {
      return {
        ...state,
        cartItem: state.cartItem.map((curr) => {
          const data = curr.map((current) => {
            const myData = current.map((currData) => {
              const FilterData = currData
                .map((currentElement) => {
                  if (Number(currentElement.id) === Number(action.payload)) {
                    return {
                      ...currentElement,
                      quantity: currentElement.quantity - 1,
                    };
                  }
                  return currentElement;
                })
                .filter((currentElementData) => {
                  return currentElementData.quantity !== 0;
                });
              return FilterData;
            });
            return myData;
          });
          return data;
        }),
      };
    }
    case "TOTAL_ITEM_FUNCTION": {
      const item = state.cartItem.map((curr) => {
        const data = curr.map((current) => {
          const myData = current.map((currentElement) => {
            const totalItem = currentElement.reduce((acc, currData) => {
              acc += currData.quantity;
              return acc;
            }, 0);
            return totalItem;
          });
          return myData;
        });
        return data;
      });

      const blankarray = [];
      const a = item.map((curr) => {
        if (typeof curr === "number") {
          return blankarray.push(curr);
        } else {
          const b = curr.map((current) => {
            if (typeof current === "number") {
              return blankarray.push(current);
            } else {
              const c = current.map((currData) => {
                if (typeof currData === "number") {
                  return blankarray.push(currData);
                }
              });
            }
          });
        }
      });
      const myReducer = blankarray.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0);
      return {
        ...state,
        totalItem: myReducer,
      };
    }

    case "TOTAL_PRICE_VALUE": {
      const item = state.cartItem.map((curr) => {
        const data = curr.map((current) => {
          const myData = current.map((currentElement) => {
            const totalItem = currentElement.reduce((acc, currData) => {
              acc += currData.price * currData.quantity;
              return acc;
            }, 0);
            return totalItem;
          });
          return myData;
        });
        return data;
      });

      const blankarray = [];
      const a = item.map((curr) => {
        if (typeof curr === "number") {
          return blankarray.push(curr);
        } else {
          const b = curr.map((current) => {
            if (typeof current === "number") {
              return blankarray.push(current);
            } else {
              const c = current.map((currData) => {
                if (typeof currData === "number") {
                  return blankarray.push(currData);
                }
              });
            }
          });
        }
      });
      const myReducer = blankarray.reduce((acc, curr) => {
        acc += curr;
        return acc;
      }, 0);

      return {
        ...state,
        totalPrice: myReducer,
      };
    }
    case "LOGOUT_DATA":{
      return{
        ...state,
        cartItem:[],
      }
    }
   
  }

  return state;
};

export default cartReducer;
