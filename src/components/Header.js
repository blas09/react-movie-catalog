import React from "react";
import {BrowserRouter as Router, useHistory} from 'react-router-dom';
import StarVoter from "./StarVoter";
import Search from "./Search";

const Header = (props) => {
    const history = useHistory();

    const redirectHandler = () => history.push('/');

    return (
        <Router>
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" onClick={redirectHandler}>
                        <h1 className="title">MOVIE THEATER</h1>
                    </a>
                </div>
                <div className="navbar-menu">
                    <div className="navbar-end">
                        <StarVoter />
                        <Search />
                    </div>
                </div>
            </nav>
        </Router>
    );
}

export default Header;
