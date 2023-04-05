// Components
import MonogramWrapper from "./MonogramWrapper/MonogramWrapper";
// Types
import { HeaderWrapperProps } from "../../types/Types";
// Assets
import MonogramSVG from "../SVGComponents/MonogramSVG";
//Styles
import "./HeaderWrapper.scss";

export const HeaderWrapper = ({
  name,
  profession,
  initials,
}: HeaderWrapperProps) => {
  return (
    <header>
      <MonogramWrapper>
        <MonogramSVG initials={initials} />
      </MonogramWrapper>
      <h1 className="name">{name}</h1>
      <p>{profession}</p>
    </header>
  );
};
