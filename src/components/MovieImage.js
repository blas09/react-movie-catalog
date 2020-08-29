import React from "react";

const MovieImage = (props) => {
    return <img className="is-rounded" src={props.movie.backdrop_path} alt={props.movie.title} onClick={props.redirectHandler} />;
}

export default MovieImage;
