import type { ReactNode } from 'react';

export type LoaderProps = {
    color?: "blueDark" | "white" | "blue" | "gray" |"grayDark" | "grayLight" | "grayMedium" | "none";
    loading?: boolean;
    width?: number;
    paddingTop?: string;
    isIconButton?: boolean;
    children?: ReactNode;
}
