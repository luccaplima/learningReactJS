import React, { useEffect, useState } from 'react';

import './Lesson3.css'

import api from '../../services/api';
import DataGridDemo from '../Components/DataGrid MIT version/DataGrid';

const Lesson3 = () => {

    const [Dados, setDados] = useState([]);

    useEffect(() => {
        api
        .get("/posts")
        .then((response) =>  setDados(response.data))
        .catch((error) => {
            console.error("Ocorreu um erro! " + error)
        });
        

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    console.log(Dados);
    
    return (
        <>
            <DataGridDemo/>
            {/* <p>userId: {Dados[0]?.userId}</p> */}
        </>
    );
}

export default Lesson3;