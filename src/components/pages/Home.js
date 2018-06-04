import React, { Component } from 'react';
import Search from '../Search';
import hero from '../../images/hero.jpg';
import './Home.css';
import { fetchCategories } from '../../actions';
import { connect } from 'react-redux';
import PageShell from '../PageShell';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    componentWillMount() {
        this.loadCategories();
    }

    loadCategories() {
        this.props.fetchCategories();
    }
    render() {
        const { categories } = this.props;
        return (
            <section className="Home section">
                <div className="container">
                    <div className="columns">
                        <div className="column is-half is-offset-one-quarter">
                            <h1 className="title">Random house kick!</h1>
                            <h2 className="subtitle">Pick a category and get a Chuck Norris fun fact!</h2>
                            <img src={hero} alt="Random house kick!" className="Hero"/>
                            <Search items={categories} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps, { fetchCategories })(PageShell(Home));