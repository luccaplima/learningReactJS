import React, { useEffect, useState } from 'react';

import './Lesson3.css'

import api from '../../services/api';
import DataGridMIT from '../Components/DataGrid MIT version/DataGrid';

const Lesson3 = () => { 
    return (
        <>
        <div className="content">
            <DataGridMIT/>
        </div>
        </>
    );
}

export default Lesson3;