import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar.jsx';
class App extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
          <Navbar user={this.props.user}/>
          {this.props.children}
        </div>
      );
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui });

export default connect(mapStateToProps)(App);

/*

  app
   -navbar
   -landing page
   -user info
   --info display
   --edit
   -searches
   --search bar
   --search results

 */