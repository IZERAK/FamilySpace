import { BrowserRouter, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";
import "./style/main.css";
import Auth from "./pages/Auth.tsx";
import Reg from "./pages/Reg.tsx";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/reg" element={<Reg />} />
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  </BrowserRouter>,
);
