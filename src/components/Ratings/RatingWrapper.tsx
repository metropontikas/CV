// Types
import { RatingWrapperProps } from "../../types/Types";
//Styles
import "./RatingWrapper.scss";

const RatingWrapper = ({ children }: RatingWrapperProps) => {
  return <div className="ratingWrapper">{children}</div>;
};
export default RatingWrapper;
