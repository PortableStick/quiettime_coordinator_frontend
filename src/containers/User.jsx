import React, {Component} from 'react';
import { connect } from 'react-redux';

class User extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return(<div>This is the user!</div>)
    }
}

const mapStateToProps = state => ({ user: state.user, ui: state.ui })

export default connect(mapStateToProps)(User);
