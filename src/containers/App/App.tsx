import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../MainPage";
import RegistrationPage from "../RegistrationPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
    </Routes>
  );
};

export default App;
