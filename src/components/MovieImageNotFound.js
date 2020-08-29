import React from "react";

const MovieImageNotFound = (props) => {
    return (
        <div className="card MovieImageNotFound" onClick={props.redirectHandler}>
            <div className="card-content">
                <p className="subtitle has-text-centered">{props.movie.title}</p>
                <p className="subtitle">{props.movie.average}</p>
            </div>
        </div>
    );
}

export default MovieImageNotFound;
