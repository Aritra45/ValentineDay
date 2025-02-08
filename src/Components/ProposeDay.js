import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProposeDay() {
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
      <h1 className="title">Hi Wifey, We are in Propose Day</h1>
      <p className="subtitle">{yesSelected? "Great!!! I didn't Expect That" : "Think From Your Heart and Choose any One Option" }</p>
      {!yesSelected && <h1 className="title">Will You Be My Last Girlfriend?</h1>}
      
      {!yesSelected && (
        <div className="button-group">
          <button className="yes-button" onClick={() => setYesSelected(true)}>Yes</button>
          <button className="no-button" onClick={handleNoClick}>No</button>
        </div>
      )}
      
      {showAlert && (
        <div className="custom-alert">Sorry my jaan, You Can't Choose This Option. Please Choose Yes, It's Mandatory</div>
      )}

      {yesSelected && <h1 className="title">I Love You Too My Jaan 💖</h1>}

      <button 
        className={`next-button ${yesSelected ? 'enabled' : 'disabled'}`} 
        disabled={!yesSelected}
        onClick={() => navigate('/chocolate-day')}
      >
        Let's Move to The Chocolate Day
      </button>
    </div>
  );
}
