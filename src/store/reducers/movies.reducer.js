import { movies } from '../constants'

const initialState = {
    movies: [],
    starFilter: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case movies.SET_MOVIES:
            return { ...state, movies: action.movies }
        case movies.SET_STAR_FILTER:
            return { ...state, starFilter: action.starFilter }
        default:
            return { ...state }
    }
}
