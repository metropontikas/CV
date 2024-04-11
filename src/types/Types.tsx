import { ReactNode } from "react";

export interface MonogramSVGProps {
    initials: string;
}

export interface TextWrapperProps extends TextWrapperHeaderProps, DateWrapperProps, TextContentProps, RegionWrapperProps, LinkProps {
    children?: ReactNode;
    alt?: boolean;
}
export interface TextWrapperAltProps {
    text: string;
    children?: ReactNode;
}

export interface HeadingProps {
    icon: JSX.Element;
    title?: string;
    alt?: boolean;
}

export interface SectionAltProps {
    children: ReactNode;
    icon: JSX.Element;
    title?: string;
    alt?: boolean;
    altHeading?: boolean;
}

export interface RatingWrapperProps {
    children: ReactNode;
}

export interface ExcellentRatingProps {
    nativeSpeaker?: boolean;
}

export interface ContactMediumProps {
    title: string;
    link?: string;
    type?: string;
    placeholder?: string;
}

export interface HeaderWrapperProps {
    name: string;
    profession: string;
    initials: string;
}

export interface MonogramWrapperProps {
    children: ReactNode;
}

export interface RegionWrapperProps {
    region?: string;
}

export interface DateWrapperProps {
    dateStart?: string;
    dateEnd?: string;
    isPresent?: boolean;
}

export interface TextWrapperHeaderProps {
    title?: string;
}

export interface TextContentProps {
    content?: string;
    styledContent?: string;
}

export interface SVGComponentProps {
    absolute?: boolean;
}

export interface LinkProps {
    href?: string;
    linkText?: string;
}
