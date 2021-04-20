import styled from "styled-components";

export const Main = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
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
