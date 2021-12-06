import React from 'react';
import Lesson1 from '../Lesson1/Lesson1';
import './Lesson2.css';

const Lesson2 = () => {
    
    return (
        <div className="container">
            <Lesson1 categories={['Shampoo', 'Pomada', 'Condicionador', 'Pastilhas', 'Remédios']}
                        data={[80, 37, 21, 90, 132]}
                        width={400}
                        height={250}/>
            <Lesson1 categories={['Gasolina', 'Etanol', 'Diesel']}
                        data={[500, 470, 220]}
                        width={400}
                        height={250}/>
            <Lesson1 categories={[1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]}
                        data={[30, 40, 35, 50, 49, 60, 70, 91, 125]}
                        width={400}
                        height={250}/>
            <Lesson1 categories={['Placa de vídeo', 'Processador', 'Memória RAM', 'Cooler FAN', 'SSD']}
                        data={[30, 40, 35, 50, 49]}
                        width={400}
                        height={250}/>
        </div>
    )
}

export default Lesson2;