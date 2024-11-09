import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { UserContextProvider } from "./context/userContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <UserContextProvider>
          <main className="dark text-foreground bg-background">
            <App />
          </main>
        </UserContextProvider>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
