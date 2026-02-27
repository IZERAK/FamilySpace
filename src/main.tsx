import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./style/main.css";
import Auth from "./pages/Auth.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  </BrowserRouter>,
);
