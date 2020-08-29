import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {movies as moviesActions} from "../store/actions";

const Star = (props) => {
    const dispatch = useDispatch();
    const starFilter = useSelector(state => state.movies.starFilter);

    const iconClasses = [
        'icon',
        'is-large',
        'star-voter'
    ];

    if (props.numberStars <= starFilter) {
        iconClasses.push('clicked');
    }

    const clickHandler = () => {
        const numberStars = starFilter !== props.numberStars ? props.numberStars : 0;
        dispatch(moviesActions.setStarFilter(numberStars));
    }

    return (
        <span className={iconClasses.join(' ')} onClick={clickHandler}>
            <i className="fa fa-star"></i>
        </span>
    );
}

export default Star;
