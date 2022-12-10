import styled from "styled-components";
import theme from "styles/theme";

import { TextProps } from "./Text.types";

export const Font = styled.p<TextProps>`
  color: ${(props) => props.color ? theme.colors[props.color] : theme.colors.grayDark};
  font-size: ${(props) => props.size ? theme.fontSize[props.size] : theme.fontSize.base};
  font-weight: ${(props) =>
    props.weight ? theme.fontWeight[props.weight] : theme.fontWeight.normal};
  margin: 0;
  padding: ${(props) => props.spacing ? theme.spacing[props.spacing] : theme.spacing["0"]};
  text-align: ${(props) =>
    props.textAlign ? theme.textAlign[props.textAlign] : theme.textAlign.initial};
  width: ${(props) => props.width ? theme.width[props.width] : theme.width.full};
`;
