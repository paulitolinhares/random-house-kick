import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CategoryList = ({ categories }) => {
    return (
        <ul className="CategoryList">
            { 
                categories.map(category =>
                    <li key={category}>
                        <Link key={category} to={`/jokes/${category}`}>
                            <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt=""/>
                            {category}
                        </Link>
                    </li>
                )
            }
        </ul>
    );
};

export default CategoryList;