import styled from "styled-components";
import theme from "styles/theme";

import { BoxProps } from "./Box.types";

export const Container = styled.div<BoxProps>`
  display: ${(props) => props.display ? theme.display[props.display] : theme.display.block};
  background: ${(props) => props.color ? theme.colors[props.color] : theme.colors.none};
  margin: ${(props) => props.margin ? theme.spacing[props.margin] : theme.spacing["0"]};
  padding: ${(props) => props.padding ? theme.spacing[props.padding] : theme.spacing["0"]};
  width: ${(props) => props.width ? theme.width[props.width] : theme.width.auto};
  border-radius: ${(props) =>
    props.radius ? theme.borderRadius[props.radius] : theme.borderRadius.none};
`;
