import React, {useEffect} from 'react';

import Discover from "./components/Discover";
import Header from "./components/Header";
import './App.css';
import {useDispatch} from "react-redux";
import {movies as moviesActions} from './store/actions';
import 'bulma/css/bulma.css';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.searchMovies());
    }, []);

    return (
        <section className="App section">
            <Header />
            <Discover />
        </section>
    );
}

export default App;
