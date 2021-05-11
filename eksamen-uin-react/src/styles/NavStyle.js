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
export const FilterNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    font-size: 1vw;
    height: 2vw;
    align-items: center;
    border-bottom: 1px solid #fed049;
    & > li {
        list-style-type: none;
        color: white;
        &:hover {
        text-decoration: underline 1px solid white;
        cursor: pointer;
    }
    }
    @media (max-width: 1000px){
        height: 4vw;
        font-size:2vw;
    }
`;