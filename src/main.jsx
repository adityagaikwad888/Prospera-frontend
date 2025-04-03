import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./dashboard/components/Home";
import Info from "./landing_page/Info";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/frontend/*" element={<Info />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
