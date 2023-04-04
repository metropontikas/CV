// Components
import RatingWrapper from "./RatingWrapper";
// Styles
import "./GreyCircle.scss";

const BasicRating = () => {
  return (
    <RatingWrapper>
      <svg width="80px" height="30px" viewBox="0 0 500 100">
        <circle cx="50" cy="50" r="40" fill="#373d48"></circle>
        <circle
          cx="150"
          cy="50"
          r="40"
          fill="#373d48"
          className="greyCricle"
        ></circle>
        <circle
          cx="250"
          cy="50"
          r="40"
          fill="#373d48"
          className="greyCricle"
        ></circle>
        <circle
          cx="350"
          cy="50"
          r="40"
          fill="#d5d6d6"
          className="greyCricle"
        ></circle>
        <circle
          cx="450"
          cy="50"
          r="40"
          fill="#d5d6d6"
          className="greyCricle"
        ></circle>
      </svg>
      <p>Basic</p>
    </RatingWrapper>
  );
};

export default BasicRating;
