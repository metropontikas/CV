// Types
import type { MonogramSVGProps } from "../../types/Types";

const MonogramSVG = ({ initials }: MonogramSVGProps) => {
  return (
    <svg height="86px" width="86px">
      <title>Monogram Icon</title>
      <circle cx="43px" cy="43px" r="43px" fill="#003D74"/>
      <text
        textAnchor="middle"
        x="60px"
        y="68px"
        fill="#fff"
        fontSize="20px"
        id="SUBSTR_FALN"
      >
        {initials}
      </text>
    </svg>
  );
};
export default MonogramSVG;
