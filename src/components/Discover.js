import React from "react";
import {useSelector} from "react-redux";
import MovieImageNotFound from "./MovieImageNotFound";
import {BrowserRouter as Router, useHistory} from "react-router-dom";

const Discover = () => {
    const movies = useSelector(state => state.movies.movies);
    const starFilter = useSelector(state => state.movies.starFilter);
    const history = useHistory();

    const imgPath = process.env.REACT_APP_IMAGE_PATH;
    const imgWidth = process.env.REACT_APP_IMAGE_STILL_SIZE;

    const redirectHandler = () => history.push('/detail');

    return (
        <Router>
            <div className="Discover">
                <div className="columns is-multiline">
                    {
                        movies
                            .filter(movie => {
                                return starFilter === 0 ||
                                    (movie.vote_average >= (starFilter - 1) * 2 &&
                                    (starFilter === 5 ? movie.vote_average <= starFilter * 2 : movie.vote_average < starFilter * 2));
                            })
                            .map(movie => {
                                const img = movie.backdrop_path !== null
                                    ? <img src={imgPath + imgWidth + movie.backdrop_path} alt={movie.title} />
                                    : <MovieImageNotFound title={movie.title} average={movie.vote_average} />;

                                return (
                                    <div className="column is-4 has-text-centered" key={movie.id}>
                                        <div onClick={redirectHandler}>{img}</div>
                                    </div>
                                );
                            })
                    }
                </div>
            </div>
        </Router>
    );
}

export default Discover;
