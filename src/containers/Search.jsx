import React, {Component} from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar.jsx'
import SearchResult from '../components/SearchResult.jsx'
import * as Actions from '../actions/actions'
import store from '../store/store'
import RefreshIndicator from 'material-ui/RefreshIndicator'

import '../scss/search.scss'

class Search extends Component {

    constructor(props) {
      super(props)
      this.state = {
        searchEntry: ""
      }
    }

    setAttending(id, center) {
      const updateObj = {
        id: id,
        updateData: JSON.stringify({
          update: {
            yelp_id: id,
            center: center
          }
        })
      }
      store.dispatch(Actions.addLocationToUser(updateObj))
    }

    removeAttending(id, center) {
      const updateObj = {
        id: id,
        updateData: JSON.stringify({
          update: {
            yelp_id: location
          }
        })
      }
      store.dispatch(Actions.removeLocationFromUser(updateObj))
    }

    submitSearch(event) {
      event.preventDefault()
      if(this.state.searchEntry === "" && this.props.ui.isUsingGeolocation) {
        const coordinates = this.props.user.coordinates
       if(this.props.user.loggedIn) {
          store.dispatch(Actions.sendAuthenticatedSearchData(coordinates))
        } else {
          store.dispatch(Actions.sendUnauthenticatedSearchData(coordinates))
        }
      } else {
        const searchObj = JSON.stringify({
          search: {
            name: this.state.searchEntry
          }
        })
        if(this.props.user.loggedIn) {
          store.dispatch(Actions.sendAuthenticatedSearchData(searchObj))
        } else {
          store.dispatch(Actions.sendUnauthenticatedSearchData(searchObj))
        }
      }
    }

    updateSearchEntry(event) {
      this.setState({
        searchEntry: event.target.value
      })
    }

    componentDidMount() {
      if(this.props.ui.searchDataSent) {
        return
      }
      navigator.geolocation.getCurrentPosition(data => {
        const coordinates = JSON.stringify({
          search: {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude
          }
        })
        store.dispatch(Actions.setCoordinates(coordinates))
        store.dispatch(Actions.persistUserCoordinates(coordinates))
        store.dispatch(Actions.enableGeolocation())
        if(this.props.user.loggedIn) {
          store.dispatch(Actions.sendAuthenticatedSearchData(coordinates))
        } else {
          store.dispatch(Actions.sendUnauthenticatedSearchData(coordinates))
        }
      })
    }

    componentWillReceiveProps(newProps) {
    }

    render() {
      const { searches, ui, user } = this.props
      const results = searches.results.map(result =>
                        <SearchResult key={result.id}
                                      result={result}
                                      center={searches.center}
                                      isLoggedIn={user.loggedIn}
                                      id={result.id}
                                      setAttending={this.setAttending.bind(this, result.id, searches.center)}
                                      removeAttending={this.removeAttending.bind(this, result.id, searches.center)}
                                      />)

      return (<section className="container">
        <h1>Search for a quiet place</h1>
        <SearchBar isUsingGeolocation={ui.isUsingGeolocation}
                  submitSearch={this.submitSearch.bind(this)}
                  updateSearchEntry={this.updateSearchEntry.bind(this)}
                  />
        {this.props.ui.searchDataSent ? <RefreshIndicator
      size={50}
      left={70}
      top={0}
      loadingColor="#FF9800"
      status="loading"
    /> : null}
        <ul>
          {results}
        </ul>
      </section>)
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui, searches: state.searches })

export default connect(mapStateToProps)(Search)
