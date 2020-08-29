import React from "react";
import Star from "./Star";

const StarVoter = () => {
    return (
        <div>
            <Star numberStars={1} />
            <Star numberStars={2} />
            <Star numberStars={3} />
            <Star numberStars={4} />
            <Star numberStars={5} />
        </div>
    );
}

export default StarVoter;
