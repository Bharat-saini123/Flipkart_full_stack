import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { AppContext } from "./Context";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

const OneNewItems = () => {
  const { onenew } = useParams();
  const [change, setChange] = useState(0);
  const { oneNewItem, onewNewFilterData } = useContext(AppContext);

  useEffect(() => {
    onewNewFilterData(onenew);
  }, []);

  return (
    <div style={{ padding: "5rem 0rem", backgroundColor: "#fff" }}>
      <div>
        {oneNewItem.map((curr) => {
          const data = curr.map((current) => {
            const oneItemData = current.map((currData) => {
              const Rating = Number(currData.rating);

              const StarData = Array.from({ length: 5 }, (c, index) => {
                return (
                  <span key={index}>
                    {Rating >= index + 1 ? (
                      <FaStar className="icon-star" />
                    ) : Rating >= index + 0.5 ? (
                      <FaStarHalfAlt className="icon-star" />
                    ) : (
                      <FiStar className="icon-star" />
                    )}
                  </span>
                );
              });

              return (
                <div key={currData.id}>
                  <div className="all-images main-image-hover-effect">
                    <div className="figure-my-hover-effect">
                      {currData.images.map((imageData, i) => {
                        return (
                          <figure className="image-hovers-figures" key={i}>
                            <img
                              src={
                                imageData.image === undefined
                                  ? ""
                                  : imageData.image
                              }
                              alt=""
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain",
                                objectPosition: "center",
                              }}
                              onMouseOver={() => setChange(i)}
                            />
                          </figure>
                        );
                      })}
                    </div>

                    <div
                      className="image-hover-one-image"
                      style={{ padding: "5rem" }}
                    >
                      <figure className="hover-image-figure">
                        <img
                          src={currData.images[change].image}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                          className="img-one-image"
                        />
                      </figure>
                      <div style={{ alignSelf: "center" }}>
                        <div
                          style={{
                            fontWeight: "400",
                            fontSize: "1.5rem",
                            textTransform: "capitalize",
                          }}
                        >
                          {currData.name}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            height: "5rem",
                          }}
                        >
                          <div
                            className="price"
                            style={{ fontSize: "2rem", fontWeight: "400" }}
                          >
                            <span>&#8377;</span>
                            {currData.price}
                          </div>
                          <div
                            className="price"
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "300",
                              marginLeft: "2rem",
                              textDecoration: "line-through",
                            }}
                          >
                            <span>&#8377;</span>
                            {currData.cprice}
                          </div>
                          <div
                            className="off"
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "400",
                              marginLeft: "2rem",
                              color: "green",
                            }}
                          >
                            {currData.off === undefined || null
                              ? ""
                              : `${currData.off} off`}
                          </div>
                          <figure
                            style={{
                              width: "8rem",
                              height: "8rem",
                              marginLeft: "1rem",
                              marginTop: "1rem",
                            }}
                          >
                            <img
                              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
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
                          className="battery"
                          style={{ fontSize: "1.5rem", fontWeight: "400" }}
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
                          style={{
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
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
                            style={{
                              fontSize: "1.5rem",
                              fontWeight: "400",
                              marginLeft: "2rem",
                            }}
                          >
                            {currData.rom === undefined || null
                              ? ""
                              : currData.rom}
                          </div>
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
                          style={{ fontSize: "1.5rem", fontWeight: "400" }}
                        >
                          {currData.weight === undefined || null
                            ? ""
                            : `Weight=${currData.weight}`}
                        </div>

                        <div style={{ marginTop: "2rem" }}>{StarData}</div>
                        <div
                          style={{
                            fontSize: "1.5rem",
                            marginTop: "1rem",
                            fontWeight: "500",
                          }}
                        >{`${Rating}`}</div>
                        <div
                          className="reviews"
                          style={{
                            fontSize: "1.5rem",
                            marginTop: "1rem",
                            fontWeight: "500",
                            textTransform: "capitalize",
                          }}
                        >{`(${currData.reviews} customer reviews)`}</div>
                        <NavLink to={`${currData.id}`}>
                          {" "}
                          <button
                            className="btn btn-primary"
                            style={{ fontSize: "1.5rem", margin: "2rem" }}
                          >
                            Buy Now
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
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

export default OneNewItems;
