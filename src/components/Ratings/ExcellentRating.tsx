// Components
import type { ExcellentRatingProps } from "../../types/Types";
import RatingWrapper from "./RatingWrapper";

export const ExcellentRating = ({ nativeSpeaker }: ExcellentRatingProps) => {
  const text = nativeSpeaker ? "Native Speaker" : "Excellent";
  return (
    <RatingWrapper>
      <svg width="80px" height="30px" viewBox="0 0 500 100">
        <title>Excellent Rating Icon</title>
        <circle cx="50" cy="50" r="40" fill="#373d48"/>
        <circle cx="150" cy="50" r="40" fill="#373d48"/>
        <circle cx="250" cy="50" r="40" fill="#373d48"/>
        <circle cx="350" cy="50" r="40" fill="#d5d6d6"/>
        <circle cx="450" cy="50" r="40" fill="#d5d6d6"/>
      </svg>
      <p>{text}</p>
    </RatingWrapper>
  );
};
