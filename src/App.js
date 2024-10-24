import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import PortfolioTracker from "./Components/PortfolioTracker";
import Visualizer from "./Components/Visualizer";
import LoginPage from "./Components/LoginPage";
// import SecureTransaction from "./Components/SecureTransaction";


function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/portfoliotracker" element={<PortfolioTracker/>} />
      <Route path="/visualizer" element={<Visualizer/>} />
      <Route path="/loginpage" element={<LoginPage/>} />
    </Routes>
  </Router>
  );
}

export default App;
