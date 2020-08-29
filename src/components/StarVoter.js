import React from "react";
import Star from "./Star";

const StarVoter = () => {
    return (
        <div className="navbar-item">
            { [...Array(5).keys()].map(n => <Star numberStars={n +1} key={n + 1} />)}
        </div>
    );
}

export default StarVoter;
