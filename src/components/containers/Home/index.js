import React, { PureComponent } from 'react';
import Search from 'components/presentationals/Search';
import Error from 'components/presentationals/SearchError';
import hero from 'images/hero.jpg';
import { fetchCategories } from 'actions';
import { connect } from 'react-redux';
import PageShell from 'components/hocs/PageShell';

class Home extends PureComponent {

  componentWillMount() {
    this.loadCategories();
  }

  loadCategories() {
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

const mapStateToProps = ({ categories, categoriesStatus }) => ({ categories, categoriesStatus });

export default connect(mapStateToProps, { fetchCategories })(PageShell(Home));
