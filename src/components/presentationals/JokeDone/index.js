import React from 'react';
import done from 'images/done.gif';
import './style.css';

const JokeDone = () => {
    return (
        <div className="JokeDone">
            <h1 className="title">Your joke is ready and approved by Chuck Norris</h1>
            <img src={done} alt="Your joke is ready and approved by Chuck Norris"/>
        </div>
    );
};

export default JokeDone;