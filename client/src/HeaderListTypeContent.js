import React from "react";
import "./HeaderList.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
const HeaderListTypeContent = ({ data }) => {
  let nameElement1 = data[0].name;
  const newName1 = nameElement1.slice(0, 40);
  let nameElement2 = data[0].name;
  const newName2 = nameElement2.slice(0, 40);
  let nameElement3 = data[0].name;
  const newName3 = nameElement3.slice(0, 40);
  let nameElement4 = data[0].name;
  const newName4 = nameElement4.slice(0, 40);
  let nameElement5 = data[0].name;
  const newName5 = nameElement5.slice(0, 40);
  let nameElement6 = data[0].name;
  const newName6 = nameElement6.slice(0, 40);
  let nameElement7 = data[0].name;
  const newName7 = nameElement7.slice(0, 40);
  let nameElement8 = data[0].name;
  const newName8 = nameElement8.slice(0, 40);
  let nameElement9 = data[0].name;
  const newName9 = nameElement9.slice(0, 40);
  let nameElement10 = data[0].name;
  const newName10 = nameElement10.slice(0, 40);

  return (
    <>
      <div className="my-carausaual-effect-items">
        <div
          style={{
            backgroundColor: "#fff",
            padding: "3rem",
            margin: "2rem 0rem",
          }}
        >
          <Carousel responsive={responsive}>
          <NavLink
              to={`${data[0].id}/${data[0].category}/${data[0].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[0].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[0].name.length > 60 ? `${newName9}...` : data[0].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                  
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[0].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[0].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[1].id}/${data[1].category}/${data[1].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[1].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[1].name.length > 60 ? `${newName9}...` : data[1].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                 
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[1].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[1].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[2].id}/${data[2].category}/${data[2].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[2].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[2].name.length > 60 ? `${newName9}...` : data[2].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                 
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[2].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[2].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[3].id}/${data[3].category}/${data[3].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[3].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[3].name.length > 60 ? `${newName9}...` : data[3].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                 
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[3].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[3].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[4].id}/${data[4].category}/${data[4].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[4].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[4].name.length > 60 ? `${newName9}...` : data[4].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                  
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[4].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[4].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[5].id}/${data[5].category}/${data[5].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[5].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[5].name.length > 60 ? `${newName9}...` : data[5].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                  
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[5].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[5].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[6].id}/${data[6].category}/${data[6].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[6].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[6].name.length > 60 ? `${newName9}...` : data[6].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                  
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[6].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[6].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[7].id}/${data[7].category}/${data[7].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[7].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[7].name.length > 60 ? `${newName9}...` : data[7].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                  
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[7].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[7].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[8].id}/${data[8].category}/${data[8].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[8].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[8].name.length > 60 ? `${newName9}...` : data[8].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                  
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[8].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[8].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
            <NavLink
              to={`${data[9].id}/${data[9].category}/${data[9].id}`}
              style={{ textDecoration: "none", color: "black" }}
              className={"navlink-list-carusaual"}
            >
              <figure className="figure-list-type-carusaual">
                <img
                  src={data[9].image}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                />
              </figure>
              <div
                className="name"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  paddingLeft: "1rem",
                  textTransform: "capitalize",
                }}
              >
                {data[9].name.length > 60 ? `${newName9}...` : data[9].name}
              </div>{" "}
              <div
                style={{
                  display: "flex",
                  padding:"1rem",
                  alignItems: "center",
                 
                }}
              >
                <div style={{ fontSize: "2rem", fontWeight: "500" }}>
                  <span> &#8377;</span> {data[9].price}
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "400",
                      textDecoration: "line-through",
                    }}
                  >
                    <span> &#8377;</span> {data[9].cprice}
                  </div>
                  <figure
                    style={{
                      width: "5rem",
                      height: "5rem",
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
              </div>
            </NavLink>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default HeaderListTypeContent;
