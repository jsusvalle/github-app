import styled from "styled-components";
import { device } from "utils/device";

export const FloatContainer = styled.div`
    padding-top: 5vh;

    @media ${device.laptop} {
        padding-top: 30vh;
    }
`;
