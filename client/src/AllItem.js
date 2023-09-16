import React from "react";
import { NavLink } from "react-router-dom";
import {FaStar,FaStarHalfAlt  } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const AllItem = ({ propsItem }) => {
  return (
    <div>
      <div className="all-items-data" style={{ marginTop: "2rem" }}>
        {propsItem.length === 0
          ? ""
          : propsItem.map((curr) => {
              const data = curr.map((current) => {
                const Rating=Number(current.rating);
             
                const StarData=Array.from({length:5},(c,index)=>{
  return <span key={index}>
  
  {
    Rating>=index+1?<FaStar className="icon-star"/>:Rating>=index+0.5?<FaStarHalfAlt className="icon-star"/>:<FiStar className="icon-star"/>
  }
  
  
  </span>
  
                })
                const newElement = current.name;
                const newName = newElement.slice(0, 30);
                return (
                  <NavLink
                    className="main-all-Elements"
                    to={`${current.category}/${current.id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontWeight: "500",
                      border: "0.5px solid rgba(128, 128, 128, 0.39)",
                      minHeight:"30rem",
                      width:"40rem",
                     
                      
                    
                    }}
                    key={current.id}
                  >
                   <div style={{display:"flex",justifyContent:'space-between',alignItems:"center"}}>
                      <span
                        className="off"
                        style={{display:"inline-block",padding:"0.5rem",fontSize:"1.2rem",borderRadius:"1rem",backgroundColor:"rgba(255, 0, 0, 0.589)",color:"white",margin:"0.5rem 0rem 0rem 1rem"}}
                      >
                        {current.off === undefined || null ? "" : `${current.off}off`}
                      </span>
                      <div>
                        <div style={{display:"flex",alignItems:"center"}}>
                        <div style={{marginTop:"1rem"}}>{StarData}</div>
                      <div style={{fontSize:"1.5rem",fontWeight:"500",marginLeft:"2rem",marginTop:"1rem"}}>{Rating}</div>
                        </div>
                      
                      <div className="reviews" style={{fontSize:"1.5rem",fontWeight:"500",textTransform:"capitalize",margin:"1rem 1rem 0rem 0rem"}}>{`(${current.reviews} customer reviews)`}</div>
                      </div>
                  
                    </div>
                    <div style={{padding:"1rem"}}>
                    

                    <div className="image">
                      <figure  className="figure-all-item">
                        <img
                          src={current.image}
                          alt="images Items Of Elements "
                          style={{ width: "100%", height: "100%",objectFit:"contain",objectPosition:"center" }}
                        />
                      </figure>
                    </div>

                    <div
                      className="name"
                      style={{ fontSize: "1.5rem", fontWeight: "500",textAlign:"center" }}
                    >
                      {current.name.length > 30
                        ? `${newName}...`
                        : current.name}
                    </div>
                    <div style={{ display: "flex", alignItems: "center",marginTop:"3rem",marginBottom:"1rem",justifyContent:"space-around" }}>
                      <div
                        className="price"
                        style={{ fontSize: "2rem", fontWeight: "500" }}
                      >
                        <span>&#8377;</span>
                        {current.price}
                      </div>
                      <div
                        className="price"
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "400",
                          textDecoration:"line-through", 
                        }}
                      >
                        <span>&#8377;</span>
                        {current.cprice}
                      </div>
                    </div>
<div style={{paddingLeft:"5rem"}}>
                    <div
                      className="battery"
                      style={{ fontSize: "2rem", fontWeight: "500" }}
                    >
                      {current.battery === undefined || null
                        ? ""
                        : current.battery}
                    </div>
                    <div
                      className="camera"
                      style={{ fontSize: "1.5rem", fontWeight: "500" }}
                    >
                      {current.camera === undefined || null
                        ? ""
                        : current.camera}
                    </div>
                    <div style={{display:"flex",alignItems:"center",margin:"0.5rem 0rem"}}>
                    <div
                      className="ram"
                      style={{ fontSize: "1.2rem", fontWeight: "500" }}
                    >
                      {current.ram === undefined || null ? "" : current.ram}
                    </div>
                    <div
                      className="rom"
                      style={{ fontSize: "1.2rem", fontWeight: "500",marginLeft:"4rem" }}
                    >
                      {current.rom === undefined || null ? "" : current.rom}
                    </div>
                    </div>
                    <div
                      className="processor"
                      style={{ fontSize: "1.5rem", fontWeight: "500" }}
                    >
                      {current.processor === undefined || null
                        ? ""
                        : `${current.processor.slice(0,30)}...`}
                    </div>
                    </div>
                    </div>
                  </NavLink>
                );
              });
              return data;
            })}
      </div>
    </div>
  );
};

export default AllItem;
