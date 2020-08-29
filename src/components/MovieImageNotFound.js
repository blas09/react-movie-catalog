import React from "react";

const MovieImageNotFound = (props) => {
    return (
        <div className="card MovieImageNotFound">
            <div className="card-content">
                <p className="subtitle has-text-centered">{props.title}</p>
                <p className="subtitle">{props.average}</p>
            </div>
        </div>
    );
}

export default MovieImageNotFound;
