import React, { useEffect, useState } from 'react';

import './Lesson5.css';

import BasicModal from '../Components/Modal/Modal';
import OutlinedCard from '../Components/CardReact/CardReact';

const Lesson5 = () => { 
    return ( 
        <>
        <div className="modal-example">
            <BasicModal/>
        </div>      
        <div className="card-example">
            <OutlinedCard/>
        </div>  
        </>
    );
}

export default Lesson5;