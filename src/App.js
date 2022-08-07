import React, { useContext, useState } from "react";
import Drum from "./components/Drum";
import { NameContext } from "./context/NameContext";

function App() {
  const { soundName } = useContext(NameContext);
  const [sounds, setSounds] = useState([
    {
      name: "boom",
      sound: require("./sounds/boom.wav"),
      key: "Q",
    },
    {
      name: "clap",
      sound: require("./sounds/clap.wav"),
      key: "W",
    },
    {
      name: "hihat",
      sound: require("./sounds/hihat.wav"),
      key: "E",
    },
    {
      name: "kick",
      sound: require("./sounds/kick.wav"),
      key: "A",
    },
    {
      name: "openhat",
      sound: require("./sounds/openhat.wav"),
      key: "S",
    },
    {
      name: "ride",
      sound: require("./sounds/ride.wav"),
      key: "D",
    },
    {
      name: "snare",
      sound: require("./sounds/snare.wav"),
      key: "Z",
    },
    {
      name: "tink",
      sound: require("./sounds/tink.wav"),
      key: "X",
    },
    {
      name: "tom",
      sound: require("./sounds/tom.wav"),
      key: "C",
    },
  ]);

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
