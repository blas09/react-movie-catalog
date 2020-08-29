import React from "react";
import {movies as moviesActions} from "../store/actions";
import {useDispatch} from "react-redux";

const Search = () => {
    const dispatch = useDispatch();

    const searchHandler = (event) => {
        dispatch(moviesActions.searchMovies(event.target.value));
    }

    return (
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
    );
}

export default Search;
