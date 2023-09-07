import AllApi from "../AllApi";

const SearchReducer = (state, action) => {
  
  switch (action.type) {
    case "SEARCH_DATA": {
      const name = action.payload.target.name;
      const value = action.payload.target.value;
      return {
        ...state,
        [name]: value,
      };
    }
    case "SEARCH_FILTER": {
      const text = state.text;
      const AllArray = AllApi.map((curr) => {
        const data = curr.array.map((currData) => {
          const myData = currData.filter((current) => {
            return current.name.toLowerCase().includes(text);
          });
          return myData;
        });
        return data;
      });

     
      return {
        ...state,
        searchData: AllArray,
       
      };
    }

    case "SEARCHBY_NAME": {
     

      const value = action.payload;
     
      const data = state.searchData;
      if (value === "min-price") {
        const myData = data.map((curr) => {
          const ElementData = curr.map((current) => {
            const itemData = current.sort((a, b) => {
              return a.price - b.price;
            });
            return itemData;
          });
          return ElementData;
        });

        return {
          ...state,
          searchData: myData,
         
        };
      }
      if (value === "max-price") {
        const myData = data.map((curr) => {
          const ElementData = curr.map((current) => {
            const itemData = current.sort((a, b) => {
              return b.price - a.price;
            });
            return itemData;
          });
          return ElementData;
        });

        return {
          ...state,
          searchData: myData,
        
        };
      }
      if (value === "a-z") {
        const myData = data.map((curr) => {
          const ElementData = curr.map((current) => {
            const itemData = current.sort((a, b) => {
              return a.name.localeCompare(b.name);
            });
            return itemData;
          });
          return ElementData;
        });

        return {
          ...state,
          searchData: myData,
          
        };
      }
      if (value === "z-a") {
        const myData = data.map((curr) => {
          const ElementData = curr.map((current) => {
            const itemData = current.sort((a, b) => {
              return b.name.localeCompare(a.name);
            });
            return itemData;
          });
          return ElementData;
        });

        return {
          ...state,
          searchData: myData,
         
        
        };
      }
    }

    case "MOBLIE_FILTER":{
      const value=action.payload
      if(value==="mi"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="mi";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="vivo"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="vivo";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="infix"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="infix";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="oppo"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="oppo";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="realme"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="realme";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="samsung"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="samsung";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="camera"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="camera";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="laptop"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="laptop";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="monitor"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="monitor";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="speaker"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="speaker";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="causaulman"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="causaulman";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="formalman"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="formalman";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="mantshirt"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="mantshirt";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="mansuit"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="mansuit";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="womandress"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="womandress";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="womanparty"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="womanparty";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="womansort"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="womansort";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="winterwoman"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="winterwoman";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="womantop"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="womantop";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="casual shoes"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="casual shoes";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="formal shoes"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="formal shoes";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="sandal"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="sandal";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="sports shoes"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="sports shoes";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="boot women"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="boot women";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="casual women"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="casual women";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="heel"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="heel";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="sleeper women"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="sleeper women";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="ac"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="ac";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="home appliances"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="home appliances";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="microwave"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="microwave";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="rafigrator"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="rafigrator";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="tv"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="tv";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="washing Machine"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="washing Machine";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="diary"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="diary";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="detergent"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="detergent";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="vegetables"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="vegetables";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }

      if(value==="kitchen"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="kitchen";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="packagefood"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="packagefood";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      if(value==="personalhome"){
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category==="personalhome";
            });
            return myData;
          });
          return data;
        });
        return{
          ...state,
          searchData: AllArray,
  
        }
      }
      }
    
    
  
 


  }
  return state;
};

export default SearchReducer;
