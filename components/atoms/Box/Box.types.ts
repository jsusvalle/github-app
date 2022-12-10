import type { ReactNode } from 'react';

export type BoxProps = {
  display?: "grid" | "flex" | "inline-block" | "block" | "none",
  padding?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
  margin?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
  color?: "white" |"blue" |"gray" |"grayDark" |"grayLight" |"grayMedium" |"none",
  width?: "auto" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "5/6" |"1/12" |"5/12" |"6/12" |"7/12" |"9/12" | "11/12" |"full" | "screen",
  radius?: "none" | "sm" | "default" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full",
  style?: {
    [key: string]: string,
  },
  children?: ReactNode;
}
