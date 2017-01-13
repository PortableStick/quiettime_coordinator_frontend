import React, {Component} from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar.jsx'
import SearchResults from '../components/SearchResults.jsx'
import { sendSearchData, enableGeolocation } from '../actions/actions'
import store from '../store/store'

class Search extends Component {

    constructor(props) {
      super(props)
    }

    componentDidMount() {
      if(!this.props.ui.searchDataSent) {
        navigator.geolocation.getCurrentPosition(data => {
          const coordinates = JSON.stringify({
            search: {
              latitude: data.coords.latitude,
              longitude: data.coords.longitude
            }
          })
          store.dispatch(enableGeolocation())
          store.dispatch(sendSearchData(coordinates))
        });
      }
    }

    render() {
      if(this.props.ui.error) {
        console.error("Error", this.props.ui.error)
      }
      const { searches, ui } = this.props
      return (<section className="container">
        <h1>Search for a quiet place</h1>
        <SearchBar isUsingGeolocation={ui.isUsingGeolocation} />
        { searches.results ? <SearchResults results={searches.results} /> : <div>Search results here</div> }
      </section>)
    }
}

const mapStateToProps = state => ({user: state.user, ui: state.ui, searches: state.searches })

export default connect(mapStateToProps)(Search)
