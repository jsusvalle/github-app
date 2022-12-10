import styled from "styled-components";
import theme from "styles/theme";

import { SpacerProps } from "./Spacer.types";

export const Horizontal = styled.div<SpacerProps>`
  width: 100%;
  height: ${(props) => theme.spacing[props.spacing]};
`;

export const Vertical = styled.div<SpacerProps>`
  height: 100%;
  width: ${(props) => theme.spacing[props.spacing]};
`;
