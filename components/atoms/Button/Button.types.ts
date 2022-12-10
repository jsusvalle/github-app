import type { ReactNode } from 'react';

export type ButtonProps = {
    type?: string;
    color?: "white" |"blue" |"gray" |"grayDark" |"grayLight" |"grayMedium" | "blueDark" | "none";
    children: ReactNode;
    loading?: boolean;
    disabled?: boolean;
    spacing?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    onClick?: () => any;
};
