import React from 'react';
import done from '../images/done.gif';

const JokeDone = () => {
    return (
        <div className="JokeDone">
            <img src={done} alt="Your joke is ready and approved by Chuck Norris"/>
        </div>
    );
};

export default JokeDone;