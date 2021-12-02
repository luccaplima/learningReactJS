import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

import { render } from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import About from './pages/About/About';
import Lesson1 from './pages/Lesson1/Lesson1';
import Lesson2 from './pages/Lesson2/Lesson2';
import Lesson3 from './pages/Lesson3/Lesson3';
import Contact from './pages/ContactPage/Contact';
import Page404 from './pages/notFound/404';
import Navbar from './pages/Components/Navbar/Navbar';
import HomePage from './pages/homePage/Homepage';

ReactDOM.render(
  <Router>
    <App />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/lesson1' element={<Lesson1 />} />
      <Route path='/lesson2' element={<Lesson2 />} />
      <Route path='/lesson3' element={<Lesson3 />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Page404 />} />
    </Routes>
  </Router>,

  document.getElementById("root")
);