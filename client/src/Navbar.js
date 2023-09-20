import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AppContext } from "./Context";

const Navbar = () => {
  const { state } = useContext(AppContext);
  const Menu = () => {
    if (state) {
      return (
        <div style={{display:"flex",justifyContent:"space-around",alignItems:'center'}}>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              margin: "1rem",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.5rem",
              display:"flex",
              justifyContent:"center",
              alignContent:"center",
            }}
          >
            {" "}
            <AiFillHome
              style={{
                fontSize: "2rem",
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                marginRight: "0.3rem",
                marginBottom: "0.5rem",
              }}
            />
            Home
          </NavLink>

          <NavLink
            to={"/about"}
            style={{
              textDecoration: "none",
              margin: "1rem",
              color: "white",
              fontWeight: "bold",
            }}
          >
            About
          </NavLink>
          <NavLink
            to={`/id/name/onenew/cartId`}
            style={{
              textDecoration: "none",
              margin: "1rem",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Cart
          </NavLink>
          <NavLink
            to={"/logout"}
            style={{
              textDecoration: "none",
              margin: "1rem",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Logout
          </NavLink>
        </div>
      );
    } else {
      return (
        <>
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              margin: "1rem",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            {" "}
            <AiFillHome
              style={{
                fontSize: "2rem",
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
                marginRight: "0.3rem",
                marginBottom: "0.5rem",
              }}
            />
            Home
          </NavLink>
        </>
      );
    }
  };
  return (
    <div style={{ fontSize: "1.5rem" }}>
      <Menu />
    </div>
  );
};

export default Navbar;
