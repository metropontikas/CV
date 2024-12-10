import RatingWrapper from "./RatingWrapper";
// Styles
import "./GreyCircle.scss";

export const VeryGoodRating = () => {
  return (
    <RatingWrapper>
      <svg width="80px" height="30px" viewBox="0 0 500 100">
        <title>Very Good Rating Icon</title>
        <circle cx="50" cy="50" r="40" fill="#373d48"/>
        <circle cx="50" cy="50" r="40" fill="#373d48"/>
        <circle cx="50" cy="50" r="40" fill="#373d48"/>
        <circle cx="50" cy="50" r="40" fill="#373d48"/>
        <circle
          cx="450"
          cy="50"
          r="40"
          fill="#d5d6d6"
          className="greyCricle"
        />
      </svg>
      <p>Very Good</p>
    </RatingWrapper>
  );
};
