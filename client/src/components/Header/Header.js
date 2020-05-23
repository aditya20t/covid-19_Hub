import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <BrowserRouter>
                        <a className="nav-link logo" href="/">Covid-19_Hub</a>
                        </BrowserRouter>
                    </li>
                </ul>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <BrowserRouter>
                        <a className="nav-link" href="/world">World</a>
                    </BrowserRouter>
                    </li>
                    <li className="nav-item">
                    <BrowserRouter>
                        <a className="nav-link" href="/states">States</a>
                    </BrowserRouter>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Header;