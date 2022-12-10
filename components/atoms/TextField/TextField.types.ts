import type { RefObject } from 'react';

export type TextFieldProps = {
  name?: string;
  type?: string;
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64;
  color?: "white" |"blue" |"gray" |"grayDark" |"grayLight" |"grayMedium" |"none";
  bgColor?: "grayMain" | "white" |"blue" |"gray" |"grayDark" |"grayLight" |"grayMedium" |"none";
  label?: string;
  value?: string | number;
  error?: boolean;
  id?: string;
  helperText?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autocomplete?: string;
  ref?: RefObject<HTMLElement>;
}

