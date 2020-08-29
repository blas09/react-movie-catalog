import { movies } from '../constants'

const initialState = {
    movies: [],
    starFilter: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case movies.SET_MOVIES:
            return { ...state, movies: action.movies, starFilter: 0 }
        case movies.SET_STAR_FILTER:
            return { ...state, starFilter: action.starFilter }
        case movies.SET_SELECTED_MOVIE:
            console.log(movies.SET_SELECTED_MOVIE);
            return { ...state, selectedMovie: action.selectedMovie }
        default:
            return { ...state }
    }
}
