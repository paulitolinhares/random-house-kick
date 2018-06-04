import React from 'react';
import loading from '../images/loading.gif';
import './JokeLoading.css';

const JokeLoading = () => {
    return (
        <div className="JokeLoading">
            <h1 className="title">Loading your joke <span>(and hoping not to get kicked on the head)</span></h1>
            <img src={loading} alt="Loading your joke"/>
        </div>
    );
};

export default JokeLoading;