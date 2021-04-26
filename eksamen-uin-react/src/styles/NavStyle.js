import styled from "styled-components";
export const Nav2Style = styled.nav`
align-self: center;
width:100%;
`;
export const NavStyle = styled.nav`
    align-self: center;
    width:70%;
`;
export const NavContent = styled.ul`
    display: flex;
    list-style-type: none;
    justify-content:space-around;
`;

export const NavContentItem = styled.li`

&:first-child {
}
    & > a {
        color: #810034;
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
    &hover {
        background-color: #393e46,
    }
`;