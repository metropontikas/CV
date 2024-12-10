import RatingWrapper from "./RatingWrapper";
// Styles
import "./GreyCircle.scss";

export const DecentRating = () => {
  return (
    <RatingWrapper>
      <svg width="80px" height="30px" viewBox="0 0 500 100">
        <title>Decent Rating Icon</title>
        <circle cx="50" cy="50" r="40" fill="#373d48"/>
        <circle cx="50" cy="50" r="40" fill="#373d48"/>
        <circle
          cx="250"
          cy="50"
          r="40"
          fill="#373d48"
          className="greyCricle"
        />
        <circle
          cx="350"
          cy="50"
          r="40"
          fill="#d5d6d6"
          className="greyCricle"
        />
        <circle
          cx="450"
          cy="50"
          r="40"
          fill="#d5d6d6"
          className="greyCricle"
        />
      </svg>
      <p>Decent</p>
    </RatingWrapper>
  );
};
