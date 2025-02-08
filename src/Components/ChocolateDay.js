import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChocolateDay() {
  const [yesSelected, setYesSelected] = useState(false);
  const [roseOpened, setRoseOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="rose-day-container">
      <div className="heartbeat-background"></div>
      <h1 className="title">It's Not Over Yet Mam</h1>
      <p className="subtitle">{yesSelected ? "ohh!!! It's Crunchy..." : "Please Open The Chocolate Packet and Eat It Fast"}</p>
      
      <div 
        className="rose-image" 
        onClick={() => {setRoseOpened(true);
          setYesSelected(true);
        }
      }
      >
        {roseOpened ? (
          <img src="/Images/open-choco.png" alt="Open Rose" />
        ) : (
          <img src="/Images/closed-choco.png" alt="Closed Rose" />
        )}
      </div>
      
      <button 
        className={`next-button ${roseOpened ? 'enabled' : 'disabled'}`} 
        disabled={!roseOpened}
        onClick={() => navigate('/teddy-day')}
      >
        Let's Move to The Teddy Day
      </button>
    </div>
  );
}