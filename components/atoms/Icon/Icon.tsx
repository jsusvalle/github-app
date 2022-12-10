import { FC } from "react";

import { IconsOptions, IconProps } from "./Icon.types";

export const Icon: FC<IconProps> = ({ icon="search", size="small", color="white", style }) => {
  return (
    <div data-testid="icon" style={style}>
      {IconsOptions[icon]({ size, color })}
    </div>
  );
};