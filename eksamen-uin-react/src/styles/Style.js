import styled from "styled-components";

export const Main = styled.main`
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
{ grid-area: 1 / 1 / 6 / 6; }
    background-color: #393e46;
`;
export const AllContent = styled.section`
    { grid-area: 1 / 2 / 6 / 5; }
    border: 1px solid black;
    background-color: #222831;
`;
