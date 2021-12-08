import React from 'react';
import Card from '../Components/layout/Card';

import './Homepage.css'

const HomePage = () => {
    
    return (
   
        <div className="content">
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
            <Card href="/lesson4" titulo="#04 - Pie Chart">
                <h2>Pie Chart</h2>
                <p>Pie Chart Data View ApexCharts</p>
            </Card>
            <Card href="/lesson5" titulo="#05 - Components MUI">
                <h2>Components MUI</h2>
                <p>Basic Modal</p>
                <p>Card</p>
            </Card>
        </div>


    )
}

export default HomePage;