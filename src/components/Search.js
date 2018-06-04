import React, { Component } from 'react';
import CategoryList from './CategoryList';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchTerm: '',
            list: []
        }

        this.updateList = this.updateList.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        const { items } = props;
        const { searchTerm } = state;
        const filteredList = searchTerm !== '' ?
                             items.filter(item => item.includes(searchTerm)) :
                             items;
        
        return {
            list: filteredList,
            searchTerm
        };
    }

    updateList(term) {
        const { items } = this.props;
        const filteredList = term !== '' ?
                             items.filter(item => item.includes(term)) :
                             items;
        this.setState({
            searchTerm: term,
            list: filteredList
        });
    }    

    render() {
        const { searchTerm, list } = this.state;
        return (
            <div className="Search">
                <input className="input" type="text" placeholder="Type to filter..." value={searchTerm} onChange={e => this.updateList(e.target.value)} />
                <CategoryList categories={list} />
            </div>
        );
    }
}

export default Search;