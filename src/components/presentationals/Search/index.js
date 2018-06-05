import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CategoryList from 'components/presentationals/CategoryList';

class Search extends Component {
  state = {
    searchTerm: '',
    list: [],
  };

  static getDerivedStateFromProps(props, state) {
    const { items } = props;
    const { searchTerm } = state;
    const filteredList = searchTerm !== '' ?
      items.filter(item => item.includes(searchTerm)) :
      items;

    return {
      list: filteredList,
      searchTerm,
    };
  }

  updateList = (term) => {
    const { items } = this.props;
    const filteredList = term !== '' ?
      items.filter(item => item.includes(term)) :
      items;
    this.setState({
      searchTerm: term,
      list: filteredList,
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

Search.propTypes = {
 items: PropTypes.arrayOf(PropTypes.string)
};

export default Search;
