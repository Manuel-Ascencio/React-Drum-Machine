import React, { createContext, useState } from "react";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [soundName, setSoundName] = useState("");
  return (
    <NameContext.Provider value={{ soundName, setSoundName }}>
      {children}
    </NameContext.Provider>
  );
};
