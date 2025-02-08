import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PromiseDay() {
  const [yesSelected, setYesSelected] = useState(false);
  const [noteOpened, setNoteOpened] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="rose-day-container">
      <div className="heartbeat-background"></div>
      <h1 className="title">Welcome Again Wifey</h1>
      <p className="subtitle">{yesSelected ? "This is My Life Time Promise To You" : "I Want to Promise Something to You"}</p>

      {!noteOpened && (
        <button 
          className="promise-button" 
          onClick={() => {
            setNoteOpened(true);
            setYesSelected(true);
          }}
        >
          Open My Promise Note
        </button>
      )}

      {noteOpened && (
        <p className="promise-note">I may not be able to solve all your problems, 
        but I promise today that I will be by your side in the fight against all those problems, in your happiness, 
        in your sorrow, in your joy and in your pain 💖</p>
      )}
      
      <button 
        className={`next-button ${noteOpened ? 'enabled' : 'disabled'}`} 
        disabled={!noteOpened}
        onClick={() => navigate('/hug-day')}
      >
        Let's Move to The Hug Day
      </button>
    </div>
  );
}