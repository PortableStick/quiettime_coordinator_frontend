import React, {Component} from 'react';
import { Link } from 'react-router';

class App extends Component {

    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div>
          <ul>
            <li>
              <Link to="/one">One</Link>
            </li>
            <li>
              <Link to="/two">Two</Link>
            </li>
          </ul>
          {this.props.children}
        </div>
      );
    }
}

export default App;
