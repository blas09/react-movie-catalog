import { movies } from '../constants'

const initialState = {
    movies: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case movies.SET_MOVIES:
            return { ...state, movies: action.movies }
        default:
            return { ...state }
    }
}
