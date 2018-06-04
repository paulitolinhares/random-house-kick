import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchJoke } from '../../actions';

class Joke extends Component {
    componentWillMount() {
        this.loadJoke()
    }

    loadJoke() {
        const category = this.getCategoryName();
        this.props.fetchJoke(category);
    }

    getCategoryName() {
        return this.props.match.params.category;
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

const mapStateToProps = ({ joke }) => ({ joke });

export default connect(mapStateToProps, { fetchJoke })(Joke);