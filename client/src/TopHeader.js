import React, { useState } from "react";
import HomeApi from "./HomeApi";
import { NavLink } from "react-router-dom";

const TopHeader = () => {
  const [homeItem, setHomeItem] = useState(HomeApi);
  return (
    <div className="main-top-header" style={{marginTop:"2rem",backgroundColor:"#fff"}}>
      <div className="main-grid-box-top-header">
        {homeItem.map((curr) => {
          const myName = curr.name;
          const newName = myName.slice(0, 20);

          return (
            <div key={curr.itemid} >
              <div className="box-1" >
                <NavLink
                  to={`/${curr.itemid}`}
                  style={{ textDecoration: "none", color: "black" }}
                  className={"top-header-navlink"}
                >
                  <figure  className="top-header-figure">
                    <img
                      src={curr.image}
                      alt="homeImage"
                      style={{ width: "100%", height: "100%",objectFit:"contain",objectPosition:"center" }}
                    />
                  </figure>
                  <div
                    style={{
                      textTransform: "capitalize",
                      fontSize: "1.2rem",
                      textAlign: "center",
                    }}
                  >
                    {curr.category}
                  </div>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopHeader;
