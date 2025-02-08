import { useState } from "react";
import "./../../src/ValentineDay.css";

export default function ValentineDay() {
    const [yesSelected, setYesSelected] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="valentine-day-container">
        <h1 className="title1">And Finally!!! Valentine Day 💖</h1>
        <p className="subtitle1" style={{color : "darkgreen", fontSize: "18px"}}>{yesSelected ? "We Are Looking Gorgeous Together!!!" : "Let's Celebrate Valentine Day Vertually. Click On The Envelope"}</p>
        <div
          className="container"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          onClick={()=> setYesSelected(true)}
        >
          <div className="valentines">
            <div className="envelope"></div>
            <div className="front"></div>
            <div className={`card ${isOpen ? "open" : ""}`}>
              <div className="text">Happy<br />Valentine's<br />Day!</div>
              <div className="heart-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                <div className="heart"></div>
              </div>
            </div>
            <div className="hearts">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
              <div className="four"></div>
              <div className="five"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }