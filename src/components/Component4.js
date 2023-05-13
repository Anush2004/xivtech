import React from 'react';
import '../App.css';
import arrow from './Arrow.svg';

function Component4() {
    return (
        <div className="component1-container fade-in-up already-on-page">
            <div className="component1-content ">
                <h2>Embrace Cloud</h2>
                <p>With Cloud-First accelerate innovation and optimize performance</p>
                <a href="https://www.xivtech.io./services/cloud" className="component1-link">Cloud Services <span className="arrow"><img src={arrow}></img></span></a>
            </div>
            <img src="https://www.xivtech.io./p3.jpg" alt="Cloud Services" className="component1-image" />
        </div>
    );
}

export default Component4;
