import React, {useEffect, useState} from "react";
import {movies as moviesActions} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";

const Search = () => {
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const storedSearchText = useSelector(state => state.movies.searchText);

    useEffect(() => {
        setSearchText(storedSearchText);
    }, []);

    const searchHandler = (event, val) => {
        setSearchText(event.target.value);
        dispatch(moviesActions.searchMovies(event.target.value));
    }

    const deleteSearchTextHandler = () => {
        setSearchText('');
        dispatch(moviesActions.searchMovies(''));
    }

    return (
        <div className="navbar-item">
            <div className="field has-addons is-input-centered">
                <div className="control has-icons-left">
                    <input className="input" type="text" placeholder="Search" onChange={searchHandler} value={searchText} />
                    <span className="icon is-small is-left">
                        <i className="fa fa-search"></i>
                    </span>
                </div>
                <div className="control">
                    <a className="button is-info" onClick={deleteSearchTextHandler}>
                        <span className="icon is-small is-left">
                            <i className="fa fa-trash"></i>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Search;
