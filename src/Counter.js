import React from 'react';
import "./App.css";

function Counter({numClicked, inc}){
    return(
        <div className="counter">
            <h1 className="counter-title">Counter</h1>
            <button onClick={inc} className="counter-btn">Click me!</button>
            <h2 className="counter-content">{numClicked}</h2>
        </div>
    )
}

export default Counter;