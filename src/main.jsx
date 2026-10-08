import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./game/VillageApp";
import "./game/game.css";
import './game/panels.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
