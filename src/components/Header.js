import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { movies as moviesActions } from '../store/actions';

const Header = () => {
    const dispatch = useDispatch();

    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    const apiBaseUrl = process.env.REACT_APP_MOVIE_APP_BASEURL;

    let cancelToken;

    const searchHandler = (event) => {
        const query = event.target.value;

        if (typeof cancelToken !== typeof undefined) {
            cancelToken.cancel("Operation canceled due to new request.");
        }
        cancelToken = axios.CancelToken.source();

        let apiUrl = `${apiBaseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

        if (query.trim() !== '') {
            apiUrl = `${apiBaseUrl}search/movie?api_key=${apiKey}&query=${event.target.value}&language=en-US&page=1&include_adult=false`;
        }

        axios
            .get(apiUrl, {cancelToken: cancelToken.token})
            .then(res => {
                dispatch(moviesActions.setMovies(res.data.results));
            });
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
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
