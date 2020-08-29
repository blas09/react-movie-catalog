import React from "react";
import {useSelector} from "react-redux";
import Header from "./Header";
import MoviePreview from "./MoviePreview";

const Discover = () => {
    const movies = useSelector(state => state.movies.movies);
    const starFilter = useSelector(state => state.movies.starFilter);

    return (
        <>
            <Header />
            <div className="Discover">
                <div className="columns is-multiline">
                    {
                        movies
                            .filter(movie => {
                                return starFilter === 0 ||
                                    (movie.vote_average >= (starFilter - 1) * 2 &&
                                    (starFilter === 5 ? movie.vote_average <= starFilter * 2 : movie.vote_average < starFilter * 2));
                            })
                            .map(movie => <MoviePreview movie={movie} key={movie.id} />)
                    }
                </div>
            </div>
        </>
    );
}

export default Discover;
