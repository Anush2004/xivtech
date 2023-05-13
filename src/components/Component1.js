import React from 'react';
import '../App.css';
import arrow from './Arrow.svg';


function Component1() {
    return (
        <div className="component1-container fade-in-up already-on-page">
            <div className="component1-content">
                <h2>AI + RPA is what we do</h2>
                <p>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience.</p>
                <a href="https://www.xivtech.io./services/AIandRPAautomation" className="component1-link">AI + RPA Automation <span className="arrow"><img src={arrow}></img></span></a>
            </div>
            <img src="https://www.xivtech.io./rp2.jpg" alt="AI and RPA" className="component1-image" />
        </div>
    );
}

export default Component1;
