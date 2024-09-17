import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Context/AuthProvider.jsx";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SocketContextProvider from "./Context/SocketContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
        <Toaster />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
