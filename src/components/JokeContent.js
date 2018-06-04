import React from 'react';
import { Link } from 'react-router-dom';
import './JokeContent.css';

const JokeContent = ({ joke, newJoke }) => {
    return (
        <div className="JokeContent">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <div className="box">
                        <h1 className="title">
                            { joke }
                        </h1>
                        <div className="button-container">
                            <Link className="button is-link" to="/">Back</Link>
                            <button className="button is-link" onClick={newJoke} >Generate new joke</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JokeContent;