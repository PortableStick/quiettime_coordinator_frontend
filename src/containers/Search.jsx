import React, {Component} from 'react';
import { connect } from 'react-redux';

class Search extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return (<div>This is the search!</div>);
    }
}

const mapStateToProps = state => ({user: state.user, ui: state.ui, searches: state.searches })

export default Search;
