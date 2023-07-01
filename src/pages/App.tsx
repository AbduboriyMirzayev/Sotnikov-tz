import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "styles/global.css";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
