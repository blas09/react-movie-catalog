import React, {useEffect} from 'react';

import Discover from "./components/Discover";
import Header from "./components/Header";
import './App.css';
import {useDispatch} from "react-redux";
import {movies as moviesActions} from './store/actions';
import axios from 'axios';
import 'bulma/css/bulma.css';

function App() {
    const dispatch = useDispatch();

    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    const apiBaseUrl = process.env.REACT_APP_MOVIE_APP_BASEURL;
    const apiUrl = `${apiBaseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

    useEffect(() => {
        axios
            .get(apiUrl)
            .then(res => {
                dispatch(moviesActions.setMovies(res.data.results));
            });
    }, []);

    return (
        <section className="App section">
            <Header />
            <Discover />
        </section>
    );
}

export default App;
