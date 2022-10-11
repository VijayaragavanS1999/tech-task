import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="login" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
