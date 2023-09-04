import React from "react";
import { NavLink } from "react-router-dom";


const HeaderItemContent = ({ data }) => {
  console.log(data);
  return (
    <div className="main-item-content-header-box" style={{ gap: "1rem" }}>
      {data.map((currElement, index) => {
        let Name=currElement.name;
        const newName=Name.slice(0,50);

        return (
          <NavLink to={`${currElement.id}/${currElement.category}/${currElement.id}`} style={{textDecoration:"none",color:"black",border: "0.5px solid rgba(128, 128, 128, 0.39)",
          borderRadius: "1rem",}}>
          <div
            className="header-content-items"
            key={currElement.id}
           
          >
            <span className="off" style={{display:"inline-block",padding:"0.5rem",fontSize:"1.2rem",margin:"0.5rem 0rem 0rem 1rem",borderRadius:"1rem",backgroundColor:"rgba(255, 0, 0, 0.589)",color:"white"}}>{currElement.off}off</span>
            <div style={{padding:"3rem"}}>
              
              <div className="images">
                <figure  className="figure-header-item-component">
                  <img
                    src={currElement.image}
                    alt=""
                    style={{ width: "100%", height: "100%",objectFit:"contain",objectPosition:"center" }}
                  />
                </figure>
              </div>
              <div style={{ fontSize: "1.5rem", fontWeight: "500"}}>
                {currElement.name.length>50?`${newName}...`:currElement.name}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding:"2rem"
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                <span>	&#8377;</span> {currElement.price}
                </div>
                <div
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "400",
                    textDecoration:'line-through'
                    
                   
                  }}
                >
                 <span>	&#8377;</span><span >{`${currElement.cprice}`}</span> 
                </div>
              </div>
            </div>
          </div>
          </NavLink>
        );
      })}
    </div>
  );
};

export default HeaderItemContent;
