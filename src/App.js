import React, { useContext } from "react";
import Drum from "./components/Drum";
import { NameContext } from "./context/NameContext";

function App() {
  const { soundName, sounds } = useContext(NameContext);

  return (
    <div className="App">
      <div className="container">
        <div className="drums">
          {sounds.map((sound, index) => (
            <Drum
              letter={sound.key}
              sound={sound.sound}
              key={index}
              name={sound.name}
            />
          ))}
        </div>
        <div className="drums-info">
          <h1>Drum Machine</h1>
          <div className="soundName">{soundName}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
