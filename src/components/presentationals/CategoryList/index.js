import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const CategoryList = ({ categories }) => (
  <ul className="CategoryList">
    {
                categories.map(category =>
                  (<li key={category}>
                    <Link key={category} to={`/jokes/${category}`}>
                      <img src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt="" />
                      {category}
                    </Link>
                   </li>))
            }
  </ul>
);

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string)
};

export default CategoryList;
