import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './App.css';

export default class Navbar extends React.Component {
    
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
    <div>
        <img src="images/nav.png" onClick={ this.showSettings } width="50px" height="50px"/>
      <Menu>
        <a id="All" className="menu-item" href="/">All</a>
        <a id="Utilaty" className="menu-item" href="/">Utilaty</a>
        <a id="Decorative" className="menu-item" href="/">Decorative</a>
        <a id="Earring" className="menu-item" href="/">Earring</a>
        <a id="Necklaces" className="menu-item" href="/">Necklaces</a>
        <a id="Rings" className="menu-item" href="/">Rings</a>
        
      </Menu>
      </div>
    );
  }
}
