import type { FC } from "react";

import { Container } from "./Box.styles";
import { BoxProps } from "./Box.types";

export const Box: FC<BoxProps> = ({
  display="block",
  padding=0,
  margin=0,
  color="none",
  width="auto",
  radius="none",
  children,
  style,
}) => {
  return (
    <Container
      display={display}
      padding={padding}
      margin={margin}
      color={color}
      width={width}
      radius={radius}
      style={style}
    >
      {children}
    </Container>
  );
};

