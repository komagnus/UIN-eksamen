import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 25rem auto 25rem;
    grid-template-rows: auto auto auto;
    background-color: #393e46;
`;
export const AllContent = styled.section`
    grid-column-start: 2;
    grid-column-end: 3;
    border: 1px solid black;
`;
export const MainContent = styled.section`
    grid-row-start: 2;
    grid-row-end: 3;
    background-color: #222831;
`;
export const FooterContent = styled.footer`
    grid-row-start: 5;
    grid-row-end: 6;
    color: #eeeeee;
    background-color: #444b55;
`;
export const FooterWrapper = styled.section`
    display: flex;
    justify-content: center;
    justify-content:space-around;
`;
export const FooterChild = styled.section`
    width:33%;
    justify-content: center;
    justify-content:space-around;
    border-right: 2px solid #fed049;
    & > li {
        display:flex;
        justify-content: center;
    }
    &:nth-child(3) {
        border: none;
    }
`;
export const HeaderWrapper = styled.div`
    background-color: #eeeeee;
    grid-row-start: 1;
    grid-row-end: 2;
    display: flex;
    &:first-child {
        padding-left: 2rem;
    }
`;
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
export const LogoStyle = styled.h1`
    color: #00adb5;
    font-size: 50px;
`;
export const ArticleContent = styled.section`
    display: grid;
    grid-template-rows: auto auto;
`;

export const RelevantArticle = styled.article`
    color: #eeeeee;
    align-self: center;
    justify-self: center;
    grid-row-start: 1;
    grid-row-end: 2;
    padding: 20px;
    border-bottom: 1px solid #fed049;
`;

export const AllArticles = styled.article`
    color: #eeeeee;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    padding: 20px;
`;