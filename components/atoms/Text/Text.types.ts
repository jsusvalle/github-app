import type { ReactNode } from 'react';

export type TextProps = {
  type?: string,
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl",
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
  color?: "white" |"blue" |"gray" |"grayDark" |"grayLight" |"grayMedium" |"none",
  width?: "auto" | "full",
  textAlign?: "initial" | "center" | "start" | "end",
  weight?: "hairline" | "light" | "normal" | "medium" | "bold" | "black",
  children?: ReactNode;
}
