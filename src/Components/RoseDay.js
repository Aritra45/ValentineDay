import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RoseDay() {
  const [yesSelected, setYesSelected] = useState(false);
  const [roseOpened, setRoseOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="rose-day-container">
      <div className="heartbeat-background"></div>
      <h1 className="title">Let's Start From Rose Day</h1>
      <p className="subtitle">{yesSelected ? "Wow!!! You are Good at This" : "Touch The Rose With Your Beautiful Fingers"}</p>
      
      <div 
        className="rose-image" 
        onClick={() => {setRoseOpened(true);
          setYesSelected(true);
        }
        }
      >
        {roseOpened ? (
          <img src="/Images/open-rose.png" alt="Open Rose" />
        ) : (
          <img src="/Images/closed-rose.png" alt="Closed Rose" />
        )}
      </div>
      
      <button 
        className={`next-button ${roseOpened ? 'enabled' : 'disabled'}`} 
        disabled={!roseOpened}
        onClick={() => navigate('/propose-day')}
      >
        Let's Move to The Propose Day
      </button>
    </div>
  );
}