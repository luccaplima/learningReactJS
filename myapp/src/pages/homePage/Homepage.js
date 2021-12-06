import React from 'react';
import Card from '../Components/layout/Card';

const HomePage = () => {
    
    return (
        <>
            <Card href="/lesson1" titulo="Lesson 1">
                <h2>React-ApexCharts</h2>
                <p>Column Bar Example</p>
            </Card>
            <Card href="/lesson2" titulo="Lesson 2">
                Card 2
            </Card>
            <Card href="/lesson3" titulo="Lesson 3">
                Card 3
            </Card>
        </>

    )
}

export default HomePage;