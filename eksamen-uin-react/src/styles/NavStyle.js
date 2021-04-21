import styled from "styled-components";

export const NavStyle = styled.nav`
    display:flex
    justify-content: space-around;
    align-self: center;
    width:70%;
`;
export const NavContent = styled.ul`
    display: flex;
    justify-content: space-around;
    list-style-type: none;
`;

export const NavContentItem = styled.li`
    &:first-child {
}
    & > a {
        color: #810034;
        width:30%;
        font-size: 1.3vw;
        text-decoration: none;
        @media (max-width: 768px){
            font-size: 2vw;
            }
    }
    &.active {
        text-decoration: underline;
        color: black;
    }
    &:hover {
        background-color: #393e46,
    }
`;