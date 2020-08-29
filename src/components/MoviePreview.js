import React from "react";
import MovieImage from "./MovieImage";
import MovieImageNotFound from "./MovieImageNotFound";
import {useDispatch} from "react-redux";
import {movies as moviesActions} from "../store/actions";
import {useHistory} from "react-router-dom";

const MoviePreview = ({movie}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const redirectHandler = () => {
        dispatch(moviesActions.setSelectedMovie(movie));
        history.push('/movie');
    }

    const img = movie.backdrop_path !== null
        ? <MovieImage movie={movie} redirectHandler={redirectHandler} />
        : <MovieImageNotFound movie={movie} redirectHandler={redirectHandler} />;

    return <div className="column is-4 has-text-centered" key={movie.id}>{img}</div>;
}

export default MoviePreview;
