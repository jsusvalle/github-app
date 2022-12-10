import type { FC } from "react";

import { Vertical, Horizontal } from "./Spacer.styles";
import { SpacerProps } from "./Spacer.types";

export const Spacer: FC<SpacerProps> = ({ type="horizontal", spacing=0 }) => {
  return type === "horizontal" ? (
    <Horizontal data-testid="horizontal" spacing={spacing} />
  ) : (
    <Vertical data-testid="vertical" spacing={spacing} />
  );
};
