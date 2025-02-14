import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import GarudaSolution from "./GarudaSolution.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GarudaSolution />
  </StrictMode>,
)