import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppContext } from "./Context";
import AllItem from "./AllItem";

const Item = () => {
  const { id } = useParams();
  const { filterFunctionData, item } = useContext(AppContext);
  useEffect(() => {
    filterFunctionData(id);
  }, []);
console.log(item)

  return (
    <div className="top-items" style={{ marginTop: "2rem" }}>
      <div className="all-item">
        <div
          className="item-box"
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            backgroundColor:"#fff",
            padding:"2rem"
          }}

        >
          {item === undefined || null || item.length === 0
            ? ""
            : item[0].array.map((curr) => {
              const myname=curr[0].category;
              const shortName=myname.slice(0,15)
             
                return (
                  <NavLink to={`${curr[0].category}`} style={{textDecoration:"none",color:"black",fontWeight:"500"}}>
                    <div>
                      <figure style={{ width: "10rem", height: "10rem" }}>
                        <img
                          src={curr[0].image}
                          alt=""
                          style={{ width: "100%", height: "100%",objectFit:"contain",objectPosition:"center" }}
                        />
                      </figure>
                      <div  style={{
                      textTransform: "capitalize",
                      fontSize: "1.5rem",
                      textAlign: "center",
                      fontWeight:"500"
                    }}>{myname.length>12?`${shortName}...`:myname}</div>
                    </div>
                  </NavLink>
                );
              })}
        </div>
      </div>


      <div>


        <AllItem propsItem={item===undefined||null||item.length===0?"":item[0].array}/>
      </div>
    </div>
  );
};

export default Item;
