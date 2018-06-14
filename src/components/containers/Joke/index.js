import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import JokeLoading from 'components/presentationals/JokeLoading';
import JokeDone from 'components/presentationals/JokeDone';
import JokeContent from 'components/presentationals/JokeContent';
import Error from 'components/presentationals/JokeError';
import PageShell from 'components/hocs/PageShell';

class Joke extends PureComponent {

  componentDidUpdate(prevProps) {
    // if (
    //   this.props.jokeStatus !== prevProps.jokeStatus &&
    //   this.props.jokeStatus === 'loaded'
    // ) {
    //   this.timeout = window.setTimeout(() => {
    //     this.props.jokeDone();
    //   }, 2150); // 2150 is the time for the gif to complete
    // }
  }

  render() {
    const { joke, loading, error } = this.props.jokeQuery;
    console.log(this.props);
    return (
      <div className="Joke">
        {joke && <JokeContent joke={joke} newJoke={this.loadJoke} back={this.props.history.goBack} />}
        {loading && <JokeLoading />}
        {error && <Error newJoke={this.loadJoke} back={this.props.history.goBack} />}
      </div>
    );
  }
}

Joke.propTypes = {
  jokeQuery: PropTypes.shape({
    loading: PropTypes.bool,
    error: PropTypes.bool,
    joke: PropTypes.string,
  })
};

const JOKE_QUERY = gql`
query JokeQuery($category: String) {
  joke(category: $category)
}
`

export default graphql(JOKE_QUERY, {
  name: 'jokeQuery',
  options: ownProps => ({
    variables: {
      category: ownProps.match.params.category
    }
  })
})(PageShell(Joke));
