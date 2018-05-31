import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';
import { capitalize } from '../lib/string';

const CategoryList = ({ categories }) => {
    return (
        <div className="CategoryList">
            { 
                categories.map(category =>
                    <Link key={category} to={`/jokes/${category}`} className="tag is-link is-large">
                        {category}
                    </Link>
                )
            }
        </div>
    );
};

export default CategoryList;