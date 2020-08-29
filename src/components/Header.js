import React, {useState} from "react";

import {useHistory} from 'react-router-dom';
import StarVoter from "./StarVoter";
import Search from "./Search";

const Header = (props) => {
    const history = useHistory();
    const [isActive, setIsActive] = useState(false);

    const toggleHandler = () => {
        setIsActive(prevState => !prevState);
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" onClick={() => history.push('/')}>
                    <strong>Movies</strong>
                </a>

                <a role="button" className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" onClick={toggleHandler}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                <div className="navbar-end">
                    {props.showStarsFilter ? <StarVoter /> : null}
                    {props.showSearchInput ? <Search /> : null}
                </div>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    showSearchInput: true,
    showStarsFilter: true,
};

export default Header;
