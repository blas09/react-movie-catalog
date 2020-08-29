import { movies } from '../constants'

const initialState = {
    movies: [],
    starFilter: 0,
    searchText: '',
    genres: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case movies.SET_MOVIES:
            return { ...state, movies: action.movies, starFilter: 0, searchText: action.searchText }
        case movies.SET_STAR_FILTER:
            return { ...state, starFilter: action.starFilter }
        case movies.SET_SELECTED_MOVIE:
            return { ...state, selectedMovie: action.selectedMovie }
        case movies.SET_GENRES:
            return { ...state, genres: action.genres }
        default:
            return { ...state }
    }
}
