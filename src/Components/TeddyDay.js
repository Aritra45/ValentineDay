import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TeddyDay() {
  const [yesSelected, setYesSelected] = useState(false);
  const [roseOpened, setRoseOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="rose-day-container">
      <div className="heartbeat-background"></div>
      <h1 className="title">Haa Meri Jaan, It's Taddy Day</h1>
      <p className="subtitle">{yesSelected ? "I Know You Love It, hehe!!!" : "You Received a Gift from Your Future Husband, Open It"}</p>
      
      <div 
        className="rose-image" 
        onClick={() => {setRoseOpened(true);
          setYesSelected(true);
        }
        }
      >
        {roseOpened ? (
          <img src="/Images/open-teddy.png" alt="Open Rose" />
        ) : (
          <img src="/Images/closed-teddy.png" alt="Closed Rose" />
        )}
      </div>
      
      <button 
        className={`next-button ${roseOpened ? 'enabled' : 'disabled'}`} 
        disabled={!roseOpened}
        onClick={() => navigate('/promise-day')}
      >
        Let's Move to The Promise Day
      </button>
    </div>
  );
}