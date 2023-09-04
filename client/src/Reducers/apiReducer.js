import AllApi from "../AllApi";
const apiReducer = (state, action) => {
  switch (action.type) {
    case "FILTER_DATA": {
      return {
        ...state,
        item: AllApi.filter((curr) => {
          return curr.itemid === parseInt(action.payload);
        }),
      };
    }
    case "ONE_FILTER": {
      return {
        ...state,
        oneItem: AllApi.map((curr) => {
          const data = curr.array.map((current) => {
            const myData = current.filter((myCurrent) => {
              return myCurrent.category === action.payload;
            });
            return myData;
          });
          return data;
        }),
      };
    }
    case "ONE_NEW_FILTER_DATA":{
        return{
            ...state,
            oneNewItem:AllApi.map((curr) => {
                const data = curr.array.map((current) => {
                  const myData = current.filter((myCurrent) => {
                    return myCurrent.id === parseInt(action.payload);
                  });
                  return myData;
                });
                return data;
            }),
            
        }
    }
   
  }

  return state;
};

export default apiReducer;
