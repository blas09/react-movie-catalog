import React from "react";
import Star from "./Star";

const StarVoter = () => {
    return (
        <>
            { [...Array(5).keys()].map(n => <Star numberStars={n +1} key={n + 1} />)}
        </>
    );
}

export default StarVoter;
