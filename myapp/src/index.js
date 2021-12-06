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
import Card from './pages/Components/layout/Card';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);
