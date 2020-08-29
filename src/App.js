import React, {useEffect} from 'react';

import Discover from "./components/Discover";
import Header from "./components/Header";
import './App.css';
import {useDispatch} from "react-redux";
import {movies as moviesActions} from './store/actions';
import 'bulma/css/bulma.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Detail from "./components/Detail";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.searchMovies());
    }, []);

    return (
        <Router>
            <section className="App section">
                <Header />
                <Switch>
                    <Route exact path='/' component={Discover} />
                    <Route exact path='/detail' component={Detail} />
                </Switch>
            </section>
        </Router>
    );
}

export default App;
