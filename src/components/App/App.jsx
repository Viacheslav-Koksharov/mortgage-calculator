import React from "react";
import { CalcProvider } from "../../context/CalcContextProvider.js";
import { Routes, Route } from "react-router-dom";
import Container from "../Container";
import HomePage from "../../views/HomePage";
import CalculatorPage from "../../views/CalculatorPage";
import "./App.css";

function App() {
  return (
    <CalcProvider>
      <Container>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
        </Routes>
      </Container>
    </CalcProvider>
  );
}

export default App;
