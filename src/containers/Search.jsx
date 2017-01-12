import React, {Component} from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar.jsx'
import SearchResults from '../components/SearchResults.jsx'

class Search extends Component {

    constructor(props) {
      super(props)
    }

    render() {
      return (<section>
        <h1>Search for a quiet place</h1>
        <SearchBar isUsingGeolocation={this.props.ui.isUsingGeolocation} />
        <SearchResults results={this.props.searches.results} />
      </section>)
    }
}

const mapStateToProps = state => ({user: state.user, ui: state.ui, searches: state.searches })

export default connect(mapStateToProps)(Search)
