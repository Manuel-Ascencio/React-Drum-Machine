import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { NameProvider } from "./context/NameContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NameProvider>
      <App />
    </NameProvider>
  </React.StrictMode>
);
