import { useState, useEffect, useRef } from "react";

export function SoundButton() {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/Music/song.mp3");
      audioRef.current.loop = true;

      const playAudio = () => {
        audioRef.current.play().catch(() => console.log("Autoplay blocked"));
        document.removeEventListener("click", playAudio);
      };

      document.addEventListener("click", playAudio);
    }
  }, []);

  const toggleSound = () => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
<button className="sound-button" onClick={toggleSound} style={{ background: "transparent", border:"none", paddingLeft: "80%", paddingTop: "50px" }}>
  {muted ? "🔇" : "🔊"} 
</button>

  );
}
