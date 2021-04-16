import styled from "styled-components";

export const NavStyle = styled.nav`
    padding-left: 10rem;
    align-self: center;
`;
export const NavContent = styled.ul`
    display: flex;
    list-style-type: none;
`;

export const NavContentItem = styled.li`
    padding: 0 3rem;
    &:first-child {
        padding-left:2rem;
    }
    & > a {
        color: #810034;
        font-size: 20px;
        padding: 7px 0;
        display: block;
        text-decoration: none;
    }
    &.active {
        text-decoration: underline;
        color: black;
    }
    &:hover {
        background-color: #393e46,
    }
`;