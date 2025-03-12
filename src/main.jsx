import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Import all CSS files directly in JS
import "./styles/base.css";
import "./styles/colors.css";
import "./styles/typography.css";
import "./styles/components.css";
import "./styles/layout.css";
// You can keep this import too, if it contains any unique styles not in the above files
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
