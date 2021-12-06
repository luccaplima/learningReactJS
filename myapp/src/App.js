import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/homePage/Homepage';
import About from './pages/About/About';
import Lesson1 from './pages/Lesson1/Lesson1';
import Lesson2 from './pages/Lesson2/Lesson2';
import Lesson3 from './pages/Lesson3/Lesson3';
import Contact from './pages/ContactPage/Contact';
import Page404 from './pages/notFound/404';
import Navbar from './pages/Components/Navbar/Navbar';
import Card from './pages/Components/layout/Card';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
          <Route path='/lesson1' element={<Lesson1 
                                          categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]}
                                          data={[30, 40, 35, 50, 49, 60, 70, 91, 125]}
                                          width={500}
                                          height={320}
                                                  
          />} />
          <Route path='/lesson2' element={<Lesson2 />} />
          <Route path='/lesson3' element={<Lesson3 />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
