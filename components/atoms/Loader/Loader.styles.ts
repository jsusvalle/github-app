import styled, { keyframes } from "styled-components";
import theme from "styles/theme";

import { LoaderProps } from "./Loader.types";

const loaderAnimation = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;
export const CircleLoader = styled.div<LoaderProps>`
    display: inline-block;
    margin-right: ${(props) => (props.isIconButton ? "10px" : "0")};
    width: ${(props) => props.width || 20 + 10}px;
    &:after {
        content: " ";
        display: block;
        width: ${(props) => props.width}px;
        height: ${(props) => props.width}px;
        margin: 0;
        border-radius: 50%;
        border: 6px solid ${(props) => theme.colors[props.color ? props.color : "gray"]};
        border-color: ${(props) => theme.colors[props.color ? props.color : "gray"]} transparent
        ${(props) => theme.colors[props.color ? props.color : "gray"]} transparent;
        animation: ${loaderAnimation} 1.2s linear infinite;
    }
`;
export const LoaderContainer = styled.div<LoaderProps>`
    display: flex;
    justify-content: center;
    height: 100%;
    width: auto;
    padding-top: ${(props) => props.paddingTop};
`;