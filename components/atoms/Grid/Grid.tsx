import type { FC } from "react";

import { GridContainer } from "./Grid.styles";
import { GridProps } from "./Grid.types";

export const Grid: FC<GridProps> = ({ items=2, children }) => {
  return <GridContainer items={items}>{children}</GridContainer>;
};
