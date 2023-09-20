import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillFolderSymlinkFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdPayments, MdPermContactCalendar } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";
import { AppContext } from "./Context";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const { state, dispatch, cartDtspatch } = useContext(AppContext);
  const [myName, setMyName] = useState("");
  const [input, setInput] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    img: "",
  });
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);
  const inputRef4 = useRef(null);
  const imageRef = useRef(null);
  const [image, setImage] = useState("");

  const AboutFunction = async () => {
    try {
      const response = await fetch("https://saini-sahab-flipkart-backend-app.onrender.com/about", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
       credentials:"include"
      });
      const data = await response.json();
console.log(data)
      setInput({
        ...input,
        firstname: data.firstname,
        lastname: data.lastname,
        email: data.email,
        phone: data.phone,
        gender: data.gender,
        img: data.image,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const sendData = async () => {
    const { firstname, lastname, email, phone, gender } = input;
    try {
      const response = await fetch("https://saini-sahab-flipkart-backend-app.onrender.com/changeData", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstname,
          lastname,
          phone,
          email,
          gender,
        }), credentials:"include",
      });
      const data = await response.json();

      if (response.status === 200) {
        toast.info("saved sucessfully", {
          autoClose: 1000,
          position: "bottom-center",
        });
        inputRef1.current.disabled = true;
        inputRef2.current.disabled = true;
        inputRef3.current.disabled = true;
        inputRef4.current.disabled = true;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const EditFunction1 = (e) => {
    e.preventDefault();
    inputRef1.current.disabled = false;
    inputRef1.current.focus();
    inputRef2.current.disabled = false;
  };
  const EditFunction2 = (e) => {
    e.preventDefault();
    inputRef3.current.disabled = false;
    inputRef3.current.focus();
  };
  const EditFunction3 = (e) => {
    e.preventDefault();
    inputRef4.current.disabled = false;
    inputRef4.current.focus();
  };
  const imageChange = (e) => {
    e.preventDefault();
    setImage(e.target.files[0]);
  };
  const imageFunction = (e) => {
    e.preventDefault();
    imageRef.current.click();
  };
  const sendImage = async () => {
    const formData = new FormData();
    formData.append("image", image);
    try {
      const response = await fetch("https://saini-sahab-flipkart-backend-app.onrender.com/profile", {
        method: "put",
        body: formData,
     
      })
      
      const data = await response.json();

      if (response.status === 200) {
        toast.info("saved image saved", {
          autoClose: 1000,
          position: "bottom-center",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const userGetData = async () => {
    try {
      const response = await fetch("https://saini-sahab-flipkart-backend-app.onrender.com/getData", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials:"include"
      });
      const data = await response.json();
      setMyName(data);
    } catch (error) {
      console.log(error);
    }
  };
  const myLogout = async () => {
    try {
      const response = await fetch("https://saini-sahab-flipkart-backend-app.onrender.com/logout", {
        method: "get",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      if (response.status === 200) {
        toast.success("you successful logout", {
          position: "top-left",
          autoClose: 1000,
        });
        dispatch({ type: "USER", payload: false });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteAccountFunction = async () => {
    try {
      const response = await fetch("https://saini-sahab-flipkart-backend-app.onrender.com/deleteAccount", {
        method: "delete",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await response.json();
      console.log(data);
      console.log(response.status);

      toast.warning("your account has been deleteed", {
        position: "top-left",
        autoClose: 1000,
      });
      dispatch({ type: "USER", payload: false });
      cartDtspatch({ type: "LOGOUT_DATA" });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userGetData();
  }, [myName]);
  useEffect(() => {
    AboutFunction();
  }, []);

  return (
    <div className="main-about-page">
      <ToastContainer
        style={{
          fontSize: "1.5rem",
          textTransform: "uppercase",
          fontWeight: "500",
        }}
      />
      <div className="main-box-about-page main-grid-box-about-page">
        <div className="box-1-about-page about-page-grid-boxes">
          <div
            className="box-1-about-page-abouts"
            style={{ position: "relative" }}
          >
            <input
              type="file"
              ref={imageRef}
              style={{ display: "none" }}
              onChange={imageChange}
            />
            <div
              style={{ width: "10rem", height: "10rem", margin: "auto" }}
              onClick={imageFunction}
            >
              <img
                src={"./images/user.jpg"}
                alt=""
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: "50%",
                  cursor: "pointer",
                  objectFit: "contain",
                  objectPosition: "center",
                }}
              />
            </div>

            <div>
              {input.img === null ||
              input.img === "" ||
              input.img === undefined ? (
                <div className="img-div-box"
                  
                  onClick={imageFunction}
                >
                  <img 
                    src="./images/user.jpg"
                   
                    style={{ borderRadius: "50%", cursor: "pointer",height:"13rem",width:"13rem" }}
                  />
                </div>
              ) : (
                <div className="img-div-box"
                
                  onClick={imageFunction}
                >
                  <img
                    src={require(`../../server/src/images/${input.img}`)}
                    alt=""
                   
                    style={{ borderRadius: "50%", cursor: "pointer",height:"13rem",width:"13rem" }}
                  />
                </div>
              )}
              <div style={{ textAlign: "center", marginTop: "5rem" }}>
                {" "}
                <button
                  className="upload btn btn-primary"
                  style={{
                    textAlign: "center",
                    fontSize: "1.3rem",
                    cursor: "pointer",
                    border: "none",
                    padding: "0.5rem 1.5rem",
                    borderRadius: "5rem",
                  }}
                  onClick={sendImage}
                >
                  Upload
                </button>
              </div>
            </div>
            <div
              style={{
                fontSize: "1.5rem",
                fontWeight: "500",
                textAlign: "center",
                marginTop: "2rem",
                textTransform: "capitalize",
              }}
            >
              hello {myName.firstname}
            </div>
          </div>
          <div className="box-2-about-page-abouts">
            <div style={{ padding: "3rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.2fr 1fr",
                  gap: "1rem",
                  marginLeft: "3rem",
                  alignItems: "center",
                }}
              >
                <BsFillFolderSymlinkFill
                  style={{ fontSize: "2rem", marginRight: "2rem" }}
                  className="text-primary"
                />
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  My order
                </span>
              </div>
            </div>
            <hr />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "0.25fr 1fr",
                padding: "3rem",
              }}
            >
              <FaUserAlt
                style={{ fontSize: "2rem",display:"inline-block" }}
                className="text-primary"
              />

              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  Account Setting
                </div>

                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  Profile information
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  Manage Address
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  Pan card information
                </div>
              </div>
            </div>
            <hr />
            <div
              style={{
               
                display: "grid",
                gridTemplateColumns: "0.25fr 1fr",
                padding: "3rem",
              }}
            >
              <MdPayments
                style={{ fontSize: "2rem",display:"inline-block" }}
                className="text-primary"
              />

              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                    My order
                </div>

                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  Gift Cards
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  Saved UPI
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  saved cards
                </div>
              </div>
            </div>
            <hr />
            <div
              style={{
               
                display: "grid",
                gridTemplateColumns: "0.25fr 1fr",
                padding: "3rem",
              }}
            >
              <MdPermContactCalendar
                style={{ fontSize: "2rem",display:"inline-block"  }}
                className="text-primary"
              />

              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                    MY STUFF
                </div>

                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                   my coupon
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                    my reviews and rating
                </div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    fontWeight: "400",
                  }}
                >
                  all notification
                </div>
              </div>
            </div>
            <hr />
            <div style={{ padding: "3rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.2fr 1fr",
                  gap: "1rem",
                  marginLeft: "3rem",
                  alignItems: "center",
                }}
              >
                <AiOutlineLogout
                  style={{ fontSize: "3rem", cursor: "pointer" }}
                  className="text-primary"
                  onClick={myLogout}
                />
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  log out
                </span>
              </div>
            </div>

            <hr />
            <div style={{padding:"2rem"}} >
              {" "}
              <button
                className="btn btn-primary"
                style={{ fontSize: "1.5rem",marginLeft:"6rem" }}
                onClick={deleteAccountFunction}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>

        <div
          className="box-2-about-page about-page-grid-boxes"
          style={{ paddingBottom: "5rem" }}
        >
          <div className="box-1-about" style={{ padding: "3rem" }}>
            <div className="heading-box-about">
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  marginRight: "2rem",
                }}
              >
                Personal Information
              </span>
              <NavLink
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                to={"#"}
                onClick={EditFunction1}
              >
                Edit
              </NavLink>
            </div>
            <div
              className="user-names-about"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "3rem",
                margin: "3rem 0rem",
              }}
              id="user-items-about"
            >
              <div
                className="input-1 inputs-about-page"
                
              >
                <input
                  type="text"
             
                  name="firstname"
                  value={input.firstname}
                  onChange={handleInput}
                  ref={inputRef1}
                  disabled
                />
              </div>
              <div
                className="input-2 inputs-about-page"
               
                id="input-2"
              >
                <input
                  type="text"
              
                  name="lastname"
                  value={input.lastname}
                  onChange={handleInput}
                  ref={inputRef2}
                  disabled
                />
              </div>
            </div>
          </div>
          <div
            className="box-2-about"
            style={{ padding: "0rem 3rem 3rem 3rem" }}
          >
            <div
              className="heading-box-about "
              style={{ fontSize: "1.5rem", textTransform: "capitalize" }}
            >
              your gender
            </div>
            <div
              className="gender-boxes"
              style={{
                display: "flex",
                alignItems: "center",
                margin: "2rem 0rem",
              }}
            >
              <div className="radio-box-1" style={{ marginRight: "2rem" }}>
                <label
                  htmlFor="male"
                  style={{
                    fontSize: "1.5rem",
                    textTransform: "capitalize",
                    marginRight: "1rem",
                    cursor: "pointer",
                    color: "gray",
                  }}
                >
                  male
                </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  style={{
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    color: "gray",
                  }}
                  value="male"
                  onChange={handleInput}
                />
              </div>
              <div className="radio-box-2">
                <label
                  htmlFor="female"
                  style={{
                    fontSize: "1.5rem",
                    textTransform: "capitalize",
                    marginRight: "1rem",
                    cursor: "pointer",
                    color: "gray",
                  }}
                >
                  female
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  style={{
                    fontSize: "1.5rem",
                    cursor: "pointer",
                    color: "gray",
                  }}
                  value="female"
                  onChange={handleInput}
                />
              </div>
            </div>
          </div>
          <div className="box-3-about" style={{ padding: "3rem" }} >
            <div className="heading-box-about">
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  marginRight: "2rem",
                }}
              >
                Email Address
              </span>
              <NavLink
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                to={"#"}
                onClick={EditFunction2}
              >
                Edit
              </NavLink>
            </div>
            <div className="user-names-about" style={{ margin: "3rem 0rem" }}>
              <div
                className="input-1 inputs-about-page"
               
                id="user-email-about"
              >
                <input
                  type="email"
                
                  value={input.email}
                  onChange={handleInput}
                  name="email"
                  ref={inputRef3}
                  disabled
                  id="email"
                />
              </div>
            </div>
          </div>
          <div className="box-4-about" style={{ padding: "3rem" }}>
            <div className="heading-box-about">
              <span
                style={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  textTransform: "capitalize",
                  marginRight: "2rem",
                }}
              >
                Phone Number
              </span>
              <NavLink
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
                  textDecoration: "none",
                }}
                to={"#"}
                onClick={EditFunction3}
              >
                Edit
              </NavLink>
            </div>
            <div className="user-names-about" style={{ margin: "3rem 0rem" }}>
              <div
                className="input-1 inputs-about-page"
              
                id="user-phone-about"
              >
                <input
                  type="number"
            
                  value={input.phone}
                  onChange={handleInput}
                  name="phone"
                  ref={inputRef4}
                  disabled
                  id="phone"
                />
              </div>
            </div>
          </div>
          <div className="box-5-about" style={{ padding: "3rem" }}>
            <div
              className="heading-box-about"
              style={{ fontSize: "2rem", fontWeight: "500" }}
            >
              FAQs
            </div>
            <div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "1.3rem",
                  margin: "1rem 0rem",
                }}
              >
                What happens when I update my email address (or mobile number)?
              </div>
              <p style={{ fontSize: "1.3rem" }}>
                Your login email id (or mobile number) changes, likewise. You'll
                receive all your account related communication on your updated
                email address (or mobile number).
              </p>
            </div>
            <div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "1.3rem",
                  margin: "1rem 0rem",
                }}
              >
                When will my Flipkart account be updated with the new email
                address (or mobile number)?
              </div>
              <p style={{ fontSize: "1.3rem" }}>
                It happens as soon as you confirm the verification code sent to
                your email (or mobile) and save the changes.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "1.3rem",
                  margin: "1rem 0rem",
                }}
              >
                What happens to my existing Flipkart account when I update my
                email address (or mobile number)?
              </div>
              <p style={{ fontSize: "1.3rem" }}>
                Updating your email address (or mobile number) doesn't
                invalidate your account. Your account remains fully functional.
                You'll continue seeing your Order history, saved information and
                personal details.
              </p>
            </div>
            <div>
              <div
                style={{
                  fontWeight: "500",
                  fontSize: "1.3rem",
                  margin: "1rem 0rem",
                }}
              >
                Does my Seller account get affected when I update my email
                address?
              </div>
              <p style={{ fontSize: "1.3rem" }}>
                Flipkart has a 'single sign-on' policy. Any changes will reflect
                in your Seller account also.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "20rem",
              fontSize: "2rem",
              marginLeft: "5.5rem",
              marginTop: "2rem",
            }}
            onClick={sendData}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
