import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './pages/Components/Navbar/Navbar';
import HomePage from './pages/homePage/Homepage';

const App = () => {
  return (
   <div className="App">
     <Navbar />
   </div>
  );
}

export default App;
