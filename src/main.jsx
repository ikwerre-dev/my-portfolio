import React from "react";
import App from "./App.jsx";
import "./styles/index.css";
import ReactDOM from "react-dom/client";
import { inject } from "@vercel/analytics";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);

inject();
