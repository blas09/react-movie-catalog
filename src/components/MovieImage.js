import React from "react";

const MovieImage = (props) => {
    const imgPath = process.env.REACT_APP_IMAGE_PATH;
    const imgWidth = process.env.REACT_APP_IMAGE_STILL_SIZE;

    return <img className="is-rounded" src={imgPath + imgWidth + props.movie.backdrop_path} alt={props.movie.title} onClick={props.redirectHandler} />;
}

export default MovieImage;
