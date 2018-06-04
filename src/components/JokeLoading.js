import React from 'react';
import loading from '../images/loading.gif';

const JokeLoading = () => {
    return (
        <div className="JokeLoading">
            <img src={loading} alt="Loading your joke"/>
        </div>
    );
};

export default JokeLoading;