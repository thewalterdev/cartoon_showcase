import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import GlobalStyle from "./styles/global.ts";
import { CartoonProvider } from "./contexts/CartoonContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <CartoonProvider>
      <App />
    </CartoonProvider>
  </React.StrictMode>
);
