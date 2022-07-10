import React from "react";
import "./Work.css";
import disney from "./disney.png";
import news from "./news.png"

export default function Work() {
  return (
    <div id="work1">
      <div className="worktext">Work</div>
      <div className="slide">
        <div classsName="carousel-container">
          <div classsName="carousel"></div>
        </div>
        <div classsName="video-card-container">
          <div classsName="video-card">
            <img src={disney} classsName="video-card-image" alt="" />
          </div>
          <div classsName="video-card">
            <img src={news} classsName="video-card-image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
