import React, {Component} from 'react'
import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar.jsx'
import SearchResult from '../components/SearchResult.jsx'
import { sendSearchData, enableGeolocation, setCoordinates, persistUserCoordinates } from '../actions/actions'
import store from '../store/store'

class Search extends Component {

    constructor(props) {
      super(props)
      this.state = {
        searchEntry: ""
      }
    }

    submitSearch(event) {
      event.preventDefault()
      if(this.state.searchEntry === "" && this.props.ui.isUsingGeolocation) {
        store.dispatch(sendSearchData(this.props.user.coordinates))
      } else {
        const searchObj = JSON.stringify({
          search: {
            name: this.state.searchEntry
          }
        })
        store.dispatch(sendSearchData(searchObj))
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
          store.dispatch(setCoordinates(coordinates))
          store.dispatch(persistUserCoordinates(coordinates))
          store.dispatch(enableGeolocation())
          store.dispatch(sendSearchData(coordinates))
        })
    }

    componentWillReceiveProps(newProps) {
      // console.log(newProps)
    }

    render() {
      const { searches, ui, user } = this.props
      if(ui.error) {
        console.error("Error", ui.error)
      }

      const results = <div>Search results here</div>
                      &&
                      searches.results.map(result =>
                        <SearchResult key={result.id}
                                      result={result}
                                      center={searches.center}
                                      isLoggedIn={user.loggedIn}
                                      plans={user.plans}/>
                        )

      return (<section className="container">
        <h1>Search for a quiet place</h1>
        <SearchBar isUsingGeolocation={ui.isUsingGeolocation}
                  submitSearch={this.submitSearch.bind(this)}
                  updateSearchEntry={this.updateSearchEntry.bind(this)}
                  />
        {results}
      </section>)
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui, searches: state.searches })

export default connect(mapStateToProps)(Search)
