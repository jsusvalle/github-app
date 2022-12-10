import styled from "styled-components";
import { device } from "utils/device";

export const Container = styled.div`
    padding: 0.5rem 1rem;
    width: 100%;
    margin: 0 auto;
    @media ${device.laptop} {
        padding: 0.5rem 3rem;
    }
    @media ${device.desktop} {
        padding: 0.5rem 3rem;
    }
`;