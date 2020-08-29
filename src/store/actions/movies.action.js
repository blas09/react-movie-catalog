import { movies } from '../constants'
import axios from 'axios';

let cancelToken;

const searchMovies = (query = '') => {
    //Cancel previous pending requests
    if (typeof cancelToken !== typeof undefined) {
        cancelToken.cancel("Operation canceled due to new request.");
    }

    //Save the cancel token for the current request
    cancelToken = axios.CancelToken.source();

    const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
    const apiBaseUrl = process.env.REACT_APP_MOVIE_APP_BASEURL;

    return dispatch => {
        let apiUrl = `${apiBaseUrl}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`;

        if (query.trim() !== '') {
            apiUrl = `${apiBaseUrl}search/movie?api_key=${apiKey}&query=${query}&language=en-US&page=1&include_adult=false`;
        }

        axios
            .get(apiUrl, { cancelToken: cancelToken.token })
            .then(res => {
                dispatch(setMovies(res.data.results));
            });
    };
}

const setMovies = (data) => {
    return { type: movies.SET_MOVIES, movies: data }
}

const setStarFilter = (stars) => {
    return { type: movies.SET_STAR_FILTER, starFilter: stars}
}

const setSelectedMovie = (selectedMovie) => {
    return { type: movies.SET_SELECTED_MOVIE, selectedMovie }
}

export default {
    searchMovies,
    setStarFilter,
    setSelectedMovie,
}
