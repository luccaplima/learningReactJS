import React from 'react';
import Card from '../Components/layout/Card';

import './Homepage.css'

const HomePage = () => {
    
    return (
        <>
            <Card href="/lesson1" titulo="#01 - Column Bar React-ApexCharts">
                <h2>React-ApexCharts</h2>
                <p>Column Bar Example</p>
            </Card>
            <Card href="/lesson2" titulo="#02 - Props e reutilização de componentes">
                <h2 id="card-2">Conceitos de props e reutilização de componentes</h2>
                <p>Utilizando-se do componente criado no Card #01</p>
            </Card>
            <Card href="/lesson3" titulo="#03 - DataGrid + API GET">
            <h2 id="card-2">DataGrid + API GET</h2>
                <p>DataGrid com preenchimento via requisição GET api</p>
            </Card>
        </>

    )
}

export default HomePage;