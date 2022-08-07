import React, { useContext, useEffect, useState } from "react";
import { NameContext } from "../context/NameContext";

function Drum(props) {
  const [playing, setPlaying] = useState(false);

  const { setSoundName } = useContext(NameContext);

  const playSound = () => {
    setPlaying(true);
    setSoundName(props.name);
    new Audio(props.sound).play();
    setTimeout(() => {
      setPlaying(false);
    }, 150);
  };
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toLowerCase() === props.letter.toLowerCase()) {
        playSound();
      }
    });
  }, []);
  return (
    <div className={`drum ${playing ? "playing" : ""}`} onClick={playSound}>
      <div className="key">{props.letter}</div>
    </div>
  );
}

export default Drum;
