import React, { createContext, useState } from "react";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [soundName, setSoundName] = useState("");
  const [sounds, setSounds] = useState([
    {
      name: "boom",
      sound: require("../sounds/boom.wav"),
      key: "Q",
    },
    {
      name: "clap",
      sound: require("../sounds/clap.wav"),
      key: "W",
    },
    {
      name: "hihat",
      sound: require("../sounds/hihat.wav"),
      key: "E",
    },
    {
      name: "kick",
      sound: require("../sounds/kick.wav"),
      key: "A",
    },
    {
      name: "openhat",
      sound: require("../sounds/openhat.wav"),
      key: "S",
    },
    {
      name: "ride",
      sound: require("../sounds/ride.wav"),
      key: "D",
    },
    {
      name: "snare",
      sound: require("../sounds/snare.wav"),
      key: "Z",
    },
    {
      name: "tink",
      sound: require("../sounds/tink.wav"),
      key: "X",
    },
    {
      name: "tom",
      sound: require("../sounds/tom.wav"),
      key: "C",
    },
  ]);

  return (
    <NameContext.Provider
      value={{ soundName, setSoundName, sounds, setSounds }}
    >
      {children}
    </NameContext.Provider>
  );
};
