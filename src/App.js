import React, {useEffect} from 'react';

import Discover from "./components/Discover";
import './App.css';
import {useDispatch} from "react-redux";
import {movies as moviesActions} from './store/actions';
import 'bulma/css/bulma.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Movie from "./components/Movie";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.searchGenres());
        dispatch(moviesActions.searchMovies());
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <section className="App section">
                <Switch>
                    <Route exact path='/' component={Discover} />
                    <Route exact path='/movie' component={Movie} />
                </Switch>
            </section>
        </Router>
    );
}

export default App;
