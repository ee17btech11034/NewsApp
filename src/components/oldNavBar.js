import React, { Component } from 'react'
import './oldNavBar.css'
import logo from '../Images/logo.jpg';

export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
                <li id="logo"><a href="/">
                    <img src={logo} alt='..'/>
                </a>
                </li>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">News</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
      </div>
    )
  }
}

export default NavBar
