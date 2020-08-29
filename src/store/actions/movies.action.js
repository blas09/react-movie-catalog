import { movies } from '../constants'

const setMovies = (data) => {
    return { type: movies.SET_MOVIES, movies: data }
}

export default {
    setMovies,
}
