import styled from "styled-components";
import { device } from "utils/device";

export const ContainerHeader = styled.div`
    background: ${(props) => props.theme.white};
    padding: 1rem;
    width: 100%;
    margin: 0 auto;
    @media ${device.laptop} {
        padding: 1.5rem 3rem;
    }
    @media ${device.desktop} {
        padding: 1.5rem 3rem;
    }
`;

export const Navbar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UnorderedList = styled.ul`
    margin: 0;
    list-style: none;
    width: auto;
    display: flex;
    justify-content: space-between;
    margin-rig
`;

export const ItemList = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0;
    border-radius: 0.5rem;
    margin-right: 1rem;
    transition: background ease-in 0.3s;
    &:hover {
        background: ${(props) => props.theme.gray};
    }
`;