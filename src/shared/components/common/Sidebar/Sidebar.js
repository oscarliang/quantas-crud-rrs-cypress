import React from 'react';
import { Link } from 'react-router-dom'

class Sidebar extends React.Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/homepage'} className="nav-link"><i className="icon-home"></i> Home Page </Link>
            </li>
            <li className="nav-item">
              <Link to={'/search'} className="nav-link"><i className="icon-eye"></i> Search </Link>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
