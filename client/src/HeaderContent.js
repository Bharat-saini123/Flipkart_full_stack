import React, { useState } from 'react';
import miHead from './MiHead';

const HeaderContent = () => {
    const [item,setItem]=useState(miHead);
  return (
    <div className='main-header-content-items' style={{margin:"2rem 0rem"}}>
 <div
          id="carouselExampleRide"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={`${item[0].image}`}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={`${item[1].image}`}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={`${item[2].image}`}
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={`${item[3].image}`}
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: "100%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={`${item[4].image}`}
                className="d-block w-100"
                alt="..."
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleRide"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>


    </div>
  )
}

export default HeaderContent