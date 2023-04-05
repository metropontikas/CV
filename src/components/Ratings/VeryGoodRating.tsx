import RatingWrapper from "./RatingWrapper";
// Styles
import "./GreyCircle.scss";

export const VeryGoodRating = () => {
  return (
    <RatingWrapper>
      <svg width="80px" height="30px" viewBox="0 0 500 100">
        <circle cx="50" cy="50" r="40" fill="#373d48"></circle>
        <circle cx="50" cy="50" r="40" fill="#373d48"></circle>
        <circle cx="50" cy="50" r="40" fill="#373d48"></circle>
        <circle cx="50" cy="50" r="40" fill="#373d48"></circle>
        <circle
          cx="450"
          cy="50"
          r="40"
          fill="#d5d6d6"
          className="greyCricle"
        ></circle>
      </svg>
      <p>Very Good</p>
    </RatingWrapper>
  );
};
