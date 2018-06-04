import React from 'react';
import './JokeContent.css';

const JokeContent = ({ joke, newJoke, back }) => {
    return (
        <div className="JokeContent">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <div className="box">
                        <h1 className="subtitle">
                            { joke }
                        </h1>
                        <div className="button-container">
                            <button className="button is-link" onClick={back} >Back</button>
                            <button className="button is-link" onClick={newJoke} >Generate new joke</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JokeContent;