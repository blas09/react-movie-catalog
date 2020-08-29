import React from "react";
import {useSelector} from "react-redux";
import MovieImageNotFound from "./MovieImageNotFound";

const Discover = () => {
    const movies = useSelector(state => state.movies.movies);

    const imgPath = process.env.REACT_APP_IMAGE_PATH;
    const imgWidth = process.env.REACT_APP_IMAGE_STILL_SIZE;

    return (
        <div className="Discover">
            <div className="columns is-multiline">
                {
                    movies.map( movie => {
                        const img = movie.backdrop_path !== null
                            ? <img src={imgPath + imgWidth + movie.backdrop_path} alt={movie.title} />
                            : <MovieImageNotFound title={movie.title} average={movie.vote_average} />;

                        return (
                            <div className="column is-4 has-text-centered" key={movie.id}>
                                <a href="/">{img}</a>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default Discover;
