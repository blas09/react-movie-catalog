import React from "react";
import { useDispatch } from "react-redux";
import { movies as moviesActions } from '../store/actions';
import {BrowserRouter as Router, Link, useHistory} from 'react-router-dom';
import StarVoter from "./StarVoter";

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const searchHandler = (event) => {
        dispatch(moviesActions.searchMovies(event.target.value));
    }

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
                    <div className="navbar-start">
                        <StarVoter />
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="field">
                                <p className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Search" onChange={searchHandler} />
                                    <span className="icon is-small is-left">
                                        <i className="fa fa-search"></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </Router>
    );
}

export default Header;
