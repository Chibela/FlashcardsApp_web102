import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./stylesApp.css";
import "./styles/Flashcard.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
