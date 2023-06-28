import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Game from "./components/Game";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Game />
    </StrictMode>
  );
}