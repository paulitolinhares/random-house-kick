import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from 'actions';
import Search from 'components/presentationals/Search';
import Error from 'components/presentationals/SearchError';
import PageShell from 'components/hocs/PageShell';
import hero from 'images/hero.jpg';

class Home extends PureComponent {

  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, categoriesStatus } = this.props;
    return (
      <section className="Home section">
        <div className="container">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title">Random house kick!</h1>
              <h2 className="subtitle">Pick a category and get a Chuck Norris fun fact!</h2>
              <img src={hero} alt="Random house kick!" className="Hero" />
              {
                {
                  loaded: <Search items={categories} />,
                  failed: <Error />
                }[categoriesStatus]
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Home.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  categoriesStatus: PropTypes.string.isRequired
};

const mapStateToProps = ({ categories, categoriesStatus }) => ({ categories, categoriesStatus });

export default connect(mapStateToProps, { fetchCategories })(PageShell(Home));
