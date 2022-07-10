import React from "react";
import "./Services.css";
import ui from "./ui.png";
import react from "./react.png";
import gd from "./gd.png"

export default function Services() {
  return (
    <div id="Services1">
      <div className="heading">Tech Skills</div>

      <div className="boxes">
      <div classsName="carousel-container">
      <div classsName="carousel">
       
      </div>
    </div>
    <div classsName="video-card-container">
      <div classsName="video-card">
        {/* <img className="image" src={ui} classsName="video-card-image" alt="" /> */}
        <p className="uitext" style={{ backgroundImage: `url(${ui})` , height: 790 , width: 1520}}>UI/UX Design</p>
      </div>
      <div classsName="video-card">
        {/* <img src={react} classsName="video-card-image" alt="" /> */}
        <p className="reacttext" style={{ backgroundImage: `url(${react})` , height: 790, width:1520}}>MERN Developer</p>
      </div>
      <div classsName="video-card">
        <img src="images/marvel.png" classsName="video-card-image" alt="" />
        <p className="gdtext" style={{ backgroundImage: `url(${gd})`, height: 790 , width:1520}}>GRAPHIC DESIGNER</p>
      </div>
    </div>
    </div>
        {/* <div className="div1">
          <img className="" src={ui} alt="Error loading" />
          <p className="uitext">UI/UX Design</p>
        </div>
        <div className="div2">
          <img className="div2" src={react} />
          <p className="reacttext">MERN Developer</p>
        </div>
        <div className="div3">
          <p className="graphic">GRAPHIC DESIGNER</p>
        </div>
      </div> */}
    </div>
  );
}
