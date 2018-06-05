import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJoke, jokeDone } from 'actions';
import JokeLoading from 'components/presentationals/JokeLoading';
import JokeDone from 'components/presentationals/JokeDone';
import JokeContent from 'components/presentationals/JokeContent';
import PageShell from 'components/hocs/PageShell';

class Joke extends Component {
  constructor(props) {
    super(props);

    this.loadJoke = this.loadJoke.bind(this);
  }
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

  loadJoke() {
    const category = this.getCategoryName();
    this.props.fetchJoke(category);
  }

  getCategoryName() {
    return this.props.match.params.category;
  }
  render() {
    const { jokeStatus, joke } = this.props;
    return (
      <div className="Joke">
        {
                    jokeStatus === 'loading' &&
                    <JokeLoading />
                }
        {
                    jokeStatus === 'loaded' &&
                    <JokeDone />
                }
        {
                    jokeStatus === 'done' &&
                    <JokeContent joke={joke} newJoke={() => this.loadJoke()} back={() => this.props.history.goBack()} />
                }
      </div>
    );
  }
}

const mapStateToProps = ({ joke, jokeStatus }) => ({ joke, jokeStatus });

export default connect(mapStateToProps, { fetchJoke, jokeDone })(PageShell(Joke));
