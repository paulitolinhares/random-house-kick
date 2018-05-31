import React from 'react';
import Search from '../Search';
import hero from '../../images/hero.jpg';
import './Home.css';

const categories = [
    "explicit",
    "dev",
    "movie",
    "food",
    "celebrity",
    "science",
    "sport",
    "political",
    "religion",
    "animal",
    "history",
    "music",
    "travel",
    "career",
    "money",
    "fashion"
];

const Home = () => (
    <section className="Home section">
        <div className="container">
            <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                    <h1 className="title">Random house kick!</h1>
                    <h2 className="subtitle">Pick a category and get a Chuck Norris fun fact!</h2>
                    <img src={hero} alt="Random house kick!" className="Hero"/>
                    <Search items={categories} />
                </div>
            </div>
        </div>
    </section>
);

export default Home;