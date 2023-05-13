import React from 'react';
import '../App.css';
import arrow from './Arrow.svg';

function Component3() {
    return (
        <div className="component1-container fade-in-up already-on-page">
            <div className="component1-content ">
                <h2>Innovate with Speed</h2>
                <p>Create higher quality software, deliver on customer expectations and business goals</p>
                <a href="https://www.xivtech.io./services/delivery-pipeline-automation" className="component1-link">DevOps <span className="arrow"><img src={arrow}></img></span></a>
            </div>
            <img src="https://www.xivtech.io./p2.jpg" alt="DevOps" className="component1-image" />
        </div>
    );
}

export default Component3;
