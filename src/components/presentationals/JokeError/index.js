import React from 'react';
import './style.css';

const JokeError = ({ newJoke, back }) => (
  <div className="JokeError">
    <div className="columns">
      <div className="column is-half is-offset-one-quarter">
        <div className="box">
          <div className="notification is-danger">
            <p>
              There was an error fetching your joke. You can try again or go back to the home page and choose another category
            </p>
          </div>
          <div className="button-container">
            <button className="button is-link" onClick={back} >Back</button>
            <button className="button is-link" onClick={newJoke} >Generate new joke</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default JokeError;
