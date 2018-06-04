import React from 'react';

const JokeContent = ({ joke }) => {
    return (
        <div className="JokeContent">
            { joke }
        </div>
    );
};

export default JokeContent;