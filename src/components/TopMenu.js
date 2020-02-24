import React from 'react';
import {Link} from 'react-router-dom'

class TopMenu extends React.Component {
  render() {
    return(
      <div>
          <Link to='/'>Home</Link>
          <br/>
          <Link to='/list'>Product List</Link>
          <br/>
      </div>
    )
  }
}

export default TopMenu;
