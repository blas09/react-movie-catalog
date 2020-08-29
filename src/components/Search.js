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
            <div className="field has-addons">
                <p className="control has-icons-left has-icons-right">
                    <input className="input" type="text" placeholder="Search" onChange={searchHandler} value={searchText} />
                    <span className="icon is-small is-left">
                        <i className="fa fa-search"></i>
                    </span>
                </p>
                <div className="control">
                    <button className="button is-info" onClick={deleteSearchTextHandler} disabled={searchText.trim() === ''}>
                        <span className="icon is-small is-left">
                            <i className="fa fa-trash"></i>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Search;
