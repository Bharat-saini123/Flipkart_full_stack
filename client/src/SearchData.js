import React, { useContext, useEffect } from "react";
import { AppContext } from "./Context";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiStar } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const SearchData = () => {
  const {
    searchFilterData,
    text,
    searchData,
    filterBySection,
    MobileFilter,
    VivoMobileFilter,
  } = useContext(AppContext);
  useEffect(() => {
    searchFilterData();
  }, [text]);

  return (
    <div className="main-search-data">
      <div className="search-data" >
        <div
          className="box-1 search-box"
          style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
        >
          <select
            name=""
            id=""
            style={{
              fontSize: "1.5rem",
              textTransform: "capitalize",
              outline: "none",
              marginBottom: "8rem",
            }}
            onClick={filterBySection}
          >
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="min-price">min-price</option>
            <option value="max-price">max-price</option>
          </select>
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "2rem",
            }}
          >
            Mobiles
          </p>
          <button
            className="btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"mi"}
          >
            Mi Mobiles
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"vivo"}
          >
            Vivo Mobiles
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"infix"}
          >
            Infix Mobiles
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"oppo"}
          >
            Oppo Mobiles
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"realme"}
          >
            Realme Mobiles
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"samsung"}
          >
            Samsung Mobiles
          </button>
          <hr />
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "2rem",
            }}
          >
            Electronics
          </p>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"camera"}
          >
            Camera{" "}
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"laptop"}
          >
            Laptop{" "}
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"monitor"}
          >
            Monitor
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"speaker"}
          >
            Speaker
          </button>
          <hr />
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "2rem",
            }}
          >
            Fashion
          </p>
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.5rem",
            }}
          >
            For Man
          </p>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"causaulman"}
          >
            Casaual Man
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"formalman"}
          >
            Formal Man{" "}
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"mantshirt"}
          >
            Man T-shirt
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"mansuit"}
          >
            Man Suit
          </button>
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.5rem",
              marginTop: "2rem",
            }}
          >
            For Woman
          </p>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"womandress"}
          >
            Dress
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"womanparty"}
          >
            Party Woman{" "}
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"womansort"}
          >
            Sort
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"winterwoman"}
          >
            Winter Dress
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"womantop"}
          >
            Top
          </button>
          <hr />
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "2rem",
            }}
          >
            FootWear
          </p>
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.5rem",
            }}
          >
            For Man
          </p>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"casual shoes"}
          >
            Casaual Shoes
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"formal shoes"}
          >
            Formal Shoes{" "}
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"sandal"}
          >
            Sandal
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"sports shoes"}
          >
            Sports Shoes
          </button>
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "1.5rem",
              marginTop: "2rem",
            }}
          >
            For Woman
          </p>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"boot women"}
          >
            Boot
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"casual women"}
          >
            Casual Woman{" "}
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"heel"}
          >
            Heel
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"sleeper women"}
          >
            Sleeper
          </button>
          <hr />
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "2rem",
            }}
          >
            Appliances
          </p>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"ac"}
          >
            AC{" "}
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"home appliances"}
          >
            Home Appliances
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"microwave"}
          >
            Microwave
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"rafigrator"}
          >
            Rafigrator
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"tv"}
          >
            Tv
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"washing Machine"}
          >
            Washing Machine
          </button>
          <hr />
          <p
            style={{
              textTransform: "capitalize",
              textAlign: "center",
              fontWeight: "500",
              fontSize: "2rem",
            }}
          >
            Grocery
          </p>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"diary"}
          >
            Diary
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"detergent"}
          >
            Detergent
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"vegetables"}
          >
            Vegetables
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"kitchen"}
          >
            Kitchen
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"packagefood"}
          >
            Pacakege food
          </button>
          <button
            className="btn-info btn btn-light bounce-top"
            style={{ fontSize: "1.5rem" }}
            onClick={MobileFilter}
            value={"personalhome"}
          >
            Personal Home
          </button>
        </div>

        <div className="my-one-item-box-2 my-one-item-box">
          {searchData.map((curr) => {
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
                const myname = currData.name;
                const shortName = myname.slice(0, 60);
                return (
                  <div>
                    <NavLink
                      to={`${currData.name}/${currData.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div>
                        <div className="box-2">
                          <div className="my-one-item-total-elements">
                            <div>
                              <figure
                                style={{
                                  width: "20rem",
                                  height: "20rem",
                                  marginTop: "4rem",
                                }}
                              >
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
                            </div>
                            <div style={{ marginTop: "1.5rem" }}>
                              <div
                                style={{ fontSize: "2rem", fontWeight: "500" }}
                              >
                                {myname.length > 60
                                  ? `${shortName}...`
                                  : myname}
                              </div>
                              <div style={{ marginTop: "2rem" }}>
                                {StarData}
                              </div>
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

                              <div
                                className="battery"
                                style={{
                                  fontSize: "1.5rem",
                                  fontWeight: "400",
                                }}
                              >
                                {currData.battery === undefined || null
                                  ? ""
                                  : currData.battery}
                              </div>
                              <div
                                className="camera"
                                style={{
                                  fontSize: "1.5rem",
                                  fontWeight: "400",
                                }}
                              >
                                {currData.camera === undefined || null
                                  ? ""
                                  : currData.camera}
                              </div>
                              <div
                                className="ram"
                                style={{
                                  fontSize: "1.5rem",
                                  fontWeight: "400",
                                }}
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
                                }}
                              >
                                {currData.rom === undefined || null
                                  ? ""
                                  : currData.rom}
                              </div>
                              <div
                                className="processor"
                                style={{
                                  fontSize: "1.5rem",
                                  fontWeight: "400",
                                }}
                              >
                                {currData.processor === undefined || null
                                  ? ""
                                  : currData.processor}
                              </div>

                              <div
                                className="weight"
                                style={{
                                  fontSize: "1.5rem",
                                  fontWeight: "500",
                                  marginTop: "1rem",
                                }}
                              >
                                {currData.weight === undefined || null
                                  ? ""
                                  : currData.weight}
                              </div>
                            </div>
                            <div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                }}
                              >
                                <div
                                  className="price"
                                  style={{
                                    fontSize: "2.5rem",
                                    fontWeight: "400",
                                  }}
                                >
                                  <span>&#8377;</span>
                                  {currData.price}
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
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginLeft: "0.2rem",
                                }}
                              >
                                <div
                                  className="price"
                                  style={{
                                    fontSize: "2rem",
                                    fontWeight: "400",
                                    textDecoration: "line-through",
                                    color: "gray",
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </NavLink>
                  </div>
                );
              });
              return oneItemData;
            });
            return data;
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchData;
