import React from 'react';

import './About.css'
import Avatars from '../Components/Avatar/Avatar';

const About = () => {
    
    return (
        <div className="App">
            <div className="main">
                <div className="center">
                    <div className="menu">
                        <div className="logo">
                            <h3>Lucca Lima</h3>
                            <Avatars/>
                        </div>
                        <div className="item-menu">
                            <a href="https://www.linkedin.com/in/lucca-lima/" target="_blank">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;