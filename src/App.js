import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>
  );
}

export default App;
