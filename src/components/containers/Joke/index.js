import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { fetchJoke, jokeDone } from 'actions';
import JokeLoading from 'components/presentationals/JokeLoading';
import JokeDone from 'components/presentationals/JokeDone';
import JokeContent from 'components/presentationals/JokeContent';
import Error from 'components/presentationals/JokeError';
import PageShell from 'components/hocs/PageShell';

class Joke extends PureComponent {

  componentWillMount() {
    this.loadJoke();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.jokeStatus !== prevProps.jokeStatus &&
      this.props.jokeStatus === 'loaded'
    ) {
      this.timeout = window.setTimeout(() => {
        this.props.jokeDone();
      }, 2150); // 2150 is the time for the gif to complete
    }
  }

  loadJoke = () => {
    const { match: { params: { category } } } = this.props;
    this.props.fetchJoke(category);
  }

  render() {
    const { jokeStatus, joke } = this.props;
    return (
      <div className="Joke">
      {
        {
          loading: <JokeLoading />,
          loaded: <JokeDone />,
          done: <JokeContent joke={joke} newJoke={this.loadJoke} back={this.props.history.goBack} />,
          failed: <Error newJoke={this.loadJoke} back={this.props.history.goBack} />
        }[jokeStatus]
      }
      </div>
    );
  }
}

const mapStateToProps = ({ joke, jokeStatus }) => ({ joke, jokeStatus });

export default connect(mapStateToProps, { fetchJoke, jokeDone })(PageShell(Joke));
