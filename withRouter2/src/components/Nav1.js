import React from 'react'
import {
  Link,
} from 'react-router-dom'

class Nav extends React.Component {

  componentWillMount() {
    // will trigger the callback function whenever a new Route renders a component(as long as this component stays mounted as routes change)
    this.props.history.listen(() => {
      // view new URL
      console.log('New URL', this.props.history.location.pathname);
    });
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to='/todos/new'>Create New Todo</Link></li>
          <li><Link to='/todos/2'>Show A Todo</Link></li>
          <li><Link to='/'>View All Todos</Link></li>
        </ul>
      </div>
    );
  }
}

export default Nav;
