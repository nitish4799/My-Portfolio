import React from "react";
import get from "./get.jpg";
import "./Getintouch.css";
import mail from "./mail.png";
import call from "./call.jfif";


export default function () {
  

  
  return (
    <div className="getdiv" id="get1">
      <div className="getimage">
        <img className="getimage" src={get} alt="erroe loading" />
      </div>
      <div className="getdet">
        <div className="gettext">Get in Touch</div>
        <div className="context">
          Hey there, I'm currently persuing B.Tech from National Institute of
          Kurukshetra, India. If you find anything interesting about my work you
          can contact me.
        </div>
        <div className="mail">
            
            <img className="mail"src={mail} />
          
            
           
            <a className="bton" href="mailto:nitishagarwal1737@gmail.com" >Mail me</a>
        </div>
        <div >
            <img className="call" src={call}/>
            <a className="btn1" href="https://wa.me/7737389719" target="_blank">Contact me</a>
        </div>
      </div>
    </div>
  );
}
