import React, { useEffect, useState } from 'react';


import api from '../../services/api';
import PieChart from '../Components/PieChart/PieChart.jsx';
import './Lesson4.css';

const Lesson4 = () => { 
    return (
        <>
        <div className="fullPage">
            <div className="title">
                <h2>Pie Chart</h2>
            </div>
            <div className='chart'>
                <PieChart/>
            </div>
        </div>
        </>
    );
}

export default Lesson4;