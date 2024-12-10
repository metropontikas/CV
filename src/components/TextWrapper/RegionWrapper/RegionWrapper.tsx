// Types
import type { RegionWrapperProps } from "../../../types/Types";

// Styles
import "./RegionWrapper.scss";

export const RegionWrapper = ({ region }: RegionWrapperProps) => {
  return <p className="region">{region}</p>;
};
