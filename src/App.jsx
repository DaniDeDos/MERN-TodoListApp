import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// imports components
import Login from "./Components/auth/Login.jsx";
import NuevaCuenta from "./Components/auth/NuevaCuenta.jsx";

const App = () => {
  return (
    <Router>
      <>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/nueva-cuenta" element={<NuevaCuenta />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
