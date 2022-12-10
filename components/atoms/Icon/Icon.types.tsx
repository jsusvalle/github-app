import { IconSearch } from "public/assets/icons";

import theme from "styles/theme";

type typeOption = {
  size: "small" | "medium" | "large";
  color: string;
}

export const IconsOptions = {
  search: ({ size, color }: typeOption) => (
    <IconSearch
      color={color}
      height={theme.iconSize[size]}
      width={theme.iconSize[size]}
    />
  ),
};

export type IconProps = {
  color?: "white" | "blue" | "gray" |"grayDark" | "grayLight" | "grayMedium" | "none";
  icon?: "search";
  size?: "small" | "medium" | "large";
  style?: {
    [key: string]: string,
  };
}
