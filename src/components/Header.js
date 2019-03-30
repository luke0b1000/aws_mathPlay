import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <section className="header">
                <Link to="/">Home</Link>
                <Link to="/settings">Settings</Link>
            </section>
        );
    }
}

export default Header;
