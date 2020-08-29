import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { movies as moviesActions } from '../store/actions';

const Header = () => {
    const dispatch = useDispatch();

    const searchHandler = (event) => {
        dispatch(moviesActions.searchMovies(event.target.value));
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <h1 className="title">MOVIE THEATER</h1>
                </a>
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
        </nav>
    );
}

export default Header;
