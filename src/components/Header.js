import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Flight, { Rect } from 'react-flight/dom'

class Header extends Component {
    render() {
        return (
            <div className="content">
                <div className="nav-bar">
                    <ul className="nav-bar-ul">
                        <li className="nav-bar-li"><Link to='/' className="nav-bar-link">Home</Link></li>
                        <li className="nav-bar-li"><Link to='/about' className="nav-bar-link">About</Link></li>
                        <li className="nav-bar-li"><Link to='/topics' className="nav-bar-link">Topics</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header