import React from 'react';

/**
 * The footer of the site
 */
class Footer extends React.Component {
  render() {
    return (
      <footer className="app-footer">
        <a href="http://www.qantas.com/">Quantas</a> &copy; 2018 creativeLabs.
        <span className="float-right">Powered by <a href="http://www.qantas.com/">Oscar</a></span>
      </footer>
    )
  }
}

export default Footer;
