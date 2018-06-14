import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Search from 'components/presentationals/Search';
import Error from 'components/presentationals/SearchError';
import PageShell from 'components/hocs/PageShell';
import hero from 'images/hero.jpg';

class Home extends PureComponent {

  render() {
    const { categories, error } = this.props.categoriesQuery;
    return (
      <section className="Home section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title">Random house kick!</h1>
              <p className="subtitle">Pick a category and get a Chuck Norris fun fact!</p>
              <img src={hero} alt="Random house kick!" className="Hero" />
              {categories && <Search items={categories} />}
              {error && <Error />}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  categoriesQuery: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string),
    error: PropTypes.bool
  })
};

const CATEGORIES_QUERY = gql`
query CategoryQuery {
  categories
}
`

export default graphql(CATEGORIES_QUERY, { name: 'categoriesQuery' })(PageShell(Home));
