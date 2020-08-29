import { movies } from '../constants'
import axios from 'axios';

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
const apiBaseUrl = process.env.REACT_APP_MOVIE_APP_BASEURL;

let cancelToken;

const searchMovies = (query = '') => {
    //Cancel previous pending requests
    if (typeof cancelToken !== typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
    }

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    const imgPath = process.env.REACT_APP_IMAGE_PATH;
    const imgWidth = process.env.REACT_APP_IMAGE_STILL_SIZE;

    return dispatch => {
        let apiUrl = `${apiBaseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

        if (query.trim() !== '') {
            apiUrl = `${apiBaseUrl}search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`;
        }

        axios
            .get(apiUrl, { cancelToken: cancelToken.token })
            .then(res => {
                const movies = res.data.results.map(movie => {
                    return {
                        ...movie,
                        backdrop_path: null !== movie.backdrop_path ? imgPath + imgWidth + movie.backdrop_path : null,
                        poster_path: null !== movie.poster_path ? imgPath + imgWidth + movie.poster_path : null,
                    }
                });

                dispatch(setMovies(movies, query));
            });
    };
}

const setMovies = (data, searchText) => {
    return { type: movies.SET_MOVIES, movies: data, searchText }
}

const setStarFilter = (stars) => {
    return { type: movies.SET_STAR_FILTER, starFilter: stars}
}

const setSelectedMovie = (selectedMovie) => {
    return { type: movies.SET_SELECTED_MOVIE, selectedMovie }
}

const searchGenres = () => {
    return dispatch => {
        const apiUrl = `${apiBaseUrl}genre/movie/list?api_key=${apiKey}`;

        axios
            .get(apiUrl)
            .then(res => {
                dispatch(setGenres(res.data.genres));
            });
    };
}

const setGenres = (genres) => {
    return { type: movies.SET_GENRES, genres }
}

export default {
    searchMovies,
    setStarFilter,
    setSelectedMovie,
    searchGenres,
}
