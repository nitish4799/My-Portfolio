import React from "react";
import me from "./img.jpg";
import "./Aboutme.css";

export default function () {
  return (
    <div className="about d-flex">
      <div id="aboutme1">
        <div className="bigletters">FULL STACK DESIGNER</div>
        <div className="aboutme">
          Hi, My name is Nitish, I'm a full stack UI/UX designer.I'm a full
          stack web developer.I work with businesses, brands and agencies of all
          sizes on projects covering the full design spectrum including: mobile
          design, web design, accessibility design, responsive design, marketing
          design, advertising, branding and presentation design.
        </div>
      </div>
      <div className="photo">
        <img className="photo aliign-right" src={me} alt="Erroe loading" />
      </div>
    </div>
  );
}
