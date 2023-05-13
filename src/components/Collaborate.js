import React from 'react';
import '../App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';


function FirstPage() {
  return (
    <div className="collaborate-section">
      <div className="collaborate-content-wrapper">
        <p className="collaborate-heading">Let's Collaborate</p>
        <ul className="collaborate-list">
          <li className="collaborate-item"><Component1 /></li>
          <li className="collaborate-item"><Component2 /></li>
          <li className="collaborate-item"><Component3 /></li>
          <li className="collaborate-item"><Component4 /></li>

        </ul>
      </div>
    </div>
  );
}

export default FirstPage;
