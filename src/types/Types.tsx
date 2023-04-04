import { ReactNode } from "react";

export interface TextWrapperProps {
  text: string;
}

export interface HeadingAltProps {
  icon: JSX.Element;
  title: string;
}

export interface SectionAltProps {
  children: ReactNode;
  id: string;
}
