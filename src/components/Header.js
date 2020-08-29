import React from "react";
import {useHistory} from 'react-router-dom';
import StarVoter from "./StarVoter";
import Search from "./Search";

const Header = () => {
    const history = useHistory();

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" onClick={() => history.push('/')}>
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
    );
}

export default Header;
