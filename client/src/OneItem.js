import React, { useContext, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppContext } from "./Context";
import {FaStar,FaStarHalfAlt  } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const OneItem = () => {
  const { name } = useParams();
  const { OneFilterFunction, oneItem } = useContext(AppContext);
  console.log(oneItem);
  useEffect(() => {
    OneFilterFunction(name);
  }, []);
  return (
    <div style={{ marginTop: "5rem" }} className="my-top-one-item-box">

      <div className="my-one-item-box-1 my-one-item-box">hello</div>
      <div className="my-one-item-box-2 my-one-item-box">
        {oneItem.map((curr) => {
          const data = curr.map((current) => {
            const oneItemData = current.map((currData) => {
              const Rating=Number(currData.rating);
             
              const StarData=Array.from({length:5},(c,index)=>{
return <span key={index}>

{
  Rating>=index+1?<FaStar className="icon-star"/>:Rating>=index+0.5?<FaStarHalfAlt className="icon-star"/>:<FiStar className="icon-star"/>
}


</span>

              })
              const myname = currData.name;
              const shortName = myname.slice(0, 60);
              return (
                <NavLink to={`${currData.id}`} style={{textDecoration:"none",color:"black"}} >
                 <div >
                  
                  <div className="box-2">
                    <div className="my-one-item-total-elements">
                      <figure style={{ width: "20rem", height: "20rem" }}>
                        <img
                          src={currData.image}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                        />
                      </figure>

                      <div style={{marginTop:"1.5rem"}}>
                        <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                          {myname.length>60?`${shortName}...`:myname}
                        </div>
                        <div style={{marginTop:"2rem"}}>{StarData}</div>
<div style={{fontSize:"1.5rem",marginTop:"1rem",fontWeight:"500"}}>{`${Rating}`}</div>
<div className="reviews" style={{fontSize:"1.5rem",marginTop:"1rem",fontWeight:"500",textTransform:"capitalize"}}>{`(${currData.reviews} customer reviews)`}</div>

                        <div
                          className="battery"
                          style={{ fontSize: "1.5rem",fontWeight:"400" }}
                        >
                          {currData.battery === undefined || null
                            ? ""
                            : currData.battery}
                        </div>
                        <div
                          className="camera"
                          style={{ fontSize: "1.5rem", fontWeight: "400" }}
                        >
                          {currData.camera === undefined || null
                            ? ""
                            : currData.camera}
                        </div>
                        <div
                          className="ram"
                          style={{ fontSize: "1.5rem", fontWeight: "400" }}
                        >
                          {currData.ram === undefined || null
                            ? ""
                            : currData.ram}
                        </div>
                        <div
                          className="rom"
                          style={{ fontSize: "1.5rem", fontWeight: "400" }}
                        >
                          {currData.rom === undefined || null
                            ? ""
                            : currData.rom}
                        </div>
                        <div
                          className="processor"
                          style={{ fontSize: "1.5rem", fontWeight: "400" }}
                        >
                          {currData.processor === undefined || null
                            ? ""
                            : currData.processor}
                        </div>
                      
                        <div
                          className="weight"
                          style={{ fontSize: "1.5rem", fontWeight: "500",marginTop:"1rem" }}
                        >
                          {currData.weight === undefined || null
                            ? ""
                            : currData.weight}
                        </div>
                      </div>
                      <div>
                        <div style={{display:"flex",alignItems:"center"}}>
                        <div
                          className="price"
                          style={{ fontSize: "2.5rem", fontWeight: "400" }}
                        >
                          <span>&#8377;</span>
                          {currData.price}
                        </div>
                        <figure style={{width:"8rem",height:"8rem",marginLeft:"1rem",marginTop:"1rem"}}><img  src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png" style={{width:"100%",height:"100%",objectFit:"contain",objectPosition:"center"}}/></figure>
                        </div>
                        <div style={{display:"flex",alignItems:"center",marginLeft:"0.2rem"}}>
                        <div
                          className="price"
                          style={{ fontSize: "2rem", fontWeight: "400",textDecoration:"line-through",color:"gray"}}
                        >
                          <span>&#8377;</span>
                          {currData.cprice}
                        </div>
                        <div
                          className="off"
                          style={{ fontSize: "1.5rem", fontWeight: "400",marginLeft:"2rem",color:"green" }}
                        >
                          {currData.off === undefined || null
                            ? ""
                            : `${currData.off} off`}
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  <hr />
                </NavLink>
              );
            });
            return oneItemData;
          });
          return data;
        })}
      </div>
    </div>
  );
};

export default OneItem;
