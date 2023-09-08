import React from "react";
import HeaderContent from "./HeaderContent";
import HeaderItemContent from "./HeaderItemContent";
import OppopApi from "./Phone/OppopApi";
import HeaderListTypeContent from "./HeaderListTypeContent";
import VivoApi from "./Phone/VivoApi";
import SamsungApi from "./Phone/SamsungApi";
import MonitorApi from "./Electronics/MonitorApi";
import Laptop from "./Electronics/Laptop";
import Dress from "./fashion/women/Dress";
import PartyApi from "./fashion/women/PartyApi";
import SuitApi from "./fashion/men/SuitApi";
import WinterApi from "./fashion/women/WinterApi";
import CausaualShirtApi from "./fashion/men/CausaualShirtApi";
import Refrigrator from "./Appliances/Refrigrator";
import TvApi from "./Appliances/TvApi";
import RealmeApi from "./Phone/RealmeApi";
import Washing from "./Appliances/Washing";
import Microwave from "./Appliances/Microwave";
import CarusaualEffect from "./CarusaualEffect";
import SportsShoesApi from "./FootWear/Man/SportsShoesApi";
import CaualShoesApi from "./FootWear/Man/CaualShoesApi";
import Slipper from "./FootWear/Man/Slipper";
import HeelsApi from "./FootWear/woman/HeelsApi";
import FlatSleeper from "./FootWear/woman/FlatSleeper";
import CasualWoman from "./FootWear/woman/CasualWoman";
import Remote from "./Toys/Remote";
import Fitness from "./Sports/Fitness";
import Cricket from "./Sports/Cricket";
import lamp from "./Furniture/lamp";
import Tools from "./Furniture/Tools"
import Clock from "./Furniture/Clock";
import Security from "./Furniture/Security";
import Light from "./Furniture/Light"

const BottomHeader = () => {
  return (
    <div className="bottom-header-main">
      <CarusaualEffect/>
      
      <HeaderItemContent data={OppopApi} />
      <HeaderListTypeContent data={VivoApi} />
      <div className="header-content">
        <HeaderContent />
      </div>
      <HeaderListTypeContent data={SamsungApi} />

      <div style={{margin:"2rem 0rem"}}>
        <figure style={{ width: "100vw", height: "95vh" }}>
          <img
            src="./images/flip6.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>
      </div>
      <HeaderListTypeContent data={MonitorApi} />
      <HeaderListTypeContent data={Laptop} />
      <div style={{margin:"2rem 0rem"}}>
        <figure style={{ width: "100vw", height: "95vh" }}>
          <img
            src="./images/flip4.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>
      </div>
      <HeaderItemContent data={Dress} />
      <HeaderListTypeContent data={PartyApi} />
      <HeaderListTypeContent data={WinterApi} />
      <HeaderListTypeContent data={SuitApi} />
      <HeaderListTypeContent data={CausaualShirtApi} />
      <div style={{margin:"2rem 0rem"}}>
        <figure style={{ width: "100vw", height: "95vh" }}>
          <img
            src="./images/flip9.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>
      </div>

      <HeaderListTypeContent data={TvApi} />
      <HeaderListTypeContent data={RealmeApi} />
      <HeaderListTypeContent data={Refrigrator} />
      <HeaderListTypeContent data={Washing} />
      <HeaderListTypeContent data={Microwave} />
      <figure style={{ width: "100vw", height: "90vh" }} >
          <img
            src="./images/flip11.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </figure>
        <HeaderListTypeContent data={SportsShoesApi} />
        <HeaderListTypeContent data={CaualShoesApi} />
        <HeaderListTypeContent data={Slipper} />
        <HeaderListTypeContent data={HeelsApi} />
        <HeaderListTypeContent data={FlatSleeper} />
        <HeaderListTypeContent data={CasualWoman} />
        <figure style={{ width: "100vw", height: "95vh" }}>
          <img
            src="./images/flip13.jpg"
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "cover",objectPosition:"top" }}
          />
        </figure>
        <HeaderListTypeContent data={Remote} />
        <HeaderListTypeContent data={Cricket} />
        <HeaderListTypeContent data={Fitness} />
        <figure style={{ width: "100vw", height: "130vh" }}>
          <img
            src="./images/flip7.jpg"
            alt=""
            style={{ width: "100%", height: "100%" ,objectFit: "cover",objectPosition:"top" }}
          />
        </figure>
        <HeaderListTypeContent data={Tools} />
        <HeaderItemContent data={lamp} />
        <HeaderItemContent data={Clock} />
        <HeaderListTypeContent data={Security} />
        <HeaderListTypeContent data={Light} />
        
    </div>
  );
};

export default BottomHeader;
