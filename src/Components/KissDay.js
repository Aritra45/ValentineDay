import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HugDay() {
  const [yesSelected, setYesSelected] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleNoClick = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  };

  return (
    <div className="rose-day-container">
      <div className="heartbeat-background"></div>
      <h1 className="title">WoW It's Kiss Day</h1>
      <p className="subtitle">{yesSelected ? "Hmm!!! It's Tasty 💖" : "I am Little Bit Nervous Today"}</p>
      {!yesSelected && <h1 className="title">Can I Kiss You?</h1>}
      
      {!yesSelected && (
        <div className="button-group">
          <button className="yes-button" onClick={() => setYesSelected(true)}>Yes</button>
          <button className="no-button" onClick={handleNoClick}>No</button>
        </div>
      )}
      
      {showAlert && (
        <div className="custom-alert">Sorry my jaan, You Can't Choose This Option. Please Choose Yes, It's Mandatory</div>
      )}
      
      {yesSelected && <img src="/Images/kiss.gif" alt="Hug" className="hug-gif" />}
      
      <button 
        className={`next-button ${yesSelected ? 'enabled' : 'disabled'}`} 
        disabled={!yesSelected}
        onClick={() => navigate('/valentine-day')}
      >
        Let's Move to The valentine Day
      </button>
    </div>
  );
}
