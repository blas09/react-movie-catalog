import React from "react";
import Header from "./Header";
import {useSelector} from "react-redux";
import {Redirect, useHistory} from "react-router-dom";

const Movie = () => {
    const movie = useSelector(state => state.movies.selectedMovie);
    const genres = useSelector(state => state.movies.genres);
    const history = useHistory();

    if (null === movie) {
        return <Redirect to='/' />
    }

    const content = null !== movie.poster_path ?
        <img src={movie.poster_path} /> :
        <h2 className="subtitle">Image not available</h2>;

    return (
        <section className="hero is-fullheight is-default is-bold">
            <div className="hero-head">
                <Header showSearchInput={false} showStarsFilter={false} />
            </div>
            <div className="hero-body">
                <div className="container has-text-centered">
                    <div className="columns is-vcentered">
                        <div className="column is-5">

                            {content}<br /><br />

                            <div className="field is-grouped is-grouped-multiline" style={{justifyContent: 'center'}}>
                                <div className="control">
                                    <div className="tags has-addons">
                                        <span className="tag is-dark">Popularity</span>
                                        <span className="tag is-success">{movie.popularity.toFixed(1)}</span>
                                    </div>
                                </div>
                                <div className="control">
                                    <div className="tags has-addons">
                                        <span className="tag is-dark">Stars</span>
                                        <span className="tag is-warning">{movie.vote_average.toFixed(1)}</span>
                                    </div>
                                </div>
                                <div className="control">
                                    <div className="tags has-addons">
                                        <span className="tag is-dark">Language</span>
                                        <span className="tag is-primary">{movie.original_language}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-3">{movie.title}</h1>
                            <article className="message is-medium">
                                <div className="message-body has-text-justified">
                                    {null !== movie.overview ? movie.overview : 'Description not available'}
                                </div>
                            </article>

                            <div className="tags has-text-centered" style={{justifyContent: 'center'}}>
                                {movie.genre_ids.map(genre => {
                                    const movieGenre = genres.filter(movieGenre => movieGenre.id === genre);
                                    return <span className="tag is-danger" key={movieGenre[0].id}>{movieGenre[0].name}</span>;
                                })}
                            </div><br /><br />

                            <a className="button is-medium is-info is-outlined" onClick={() => history.push('/')}>
                                Go Back
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Movie;
