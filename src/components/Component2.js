import React from 'react';
import '../App.css';
import arrow from './Arrow.svg';

function Component2() {
    return (
        <div className="component1-container fade-in-up already-on-page">
            <div className="component1-content ">
                <h2>Make Bolder Choices</h2>
                <p>Digital focused strategies to realize market-changing ideas</p>
                <a href="https://www.xivtech.io./services/enterprise-apps" className="component1-link">Build Better Apps <span className="arrow"><img src={arrow}></img></span></a>
            </div>
            <img src="https://www.xivtech.io./p1.png" alt="Bolder Choices" className="component1-image" />
        </div>
    );
}

export default Component2;
