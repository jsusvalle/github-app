import styled from "styled-components";
import theme from "styles/theme";

import { ButtonProps } from "./Button.types";

export const ButtonContainer = styled.button<ButtonProps>`
  background: ${(props) => props.color ? theme.colors[props.color] : theme.colors.none};
  width: ${(props) => props.width ? props.width : theme.width.auto};
  height: ${(props) => props.height};
  margin: 0;
  padding: ${(props) => props.spacing};
  border: none;
  transition: background ease 0.5s;
  border-radius: ${(props) => props.borderRadius};
  cursor: ${(props) =>
    props.loading || props.disabled ? "not-allowed" : "pointer"};
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: ${(props) => theme.hover[props.color]};
  }
  &:focus {
    background: ${(props) => theme.hover[props.color]};
  }
`;
