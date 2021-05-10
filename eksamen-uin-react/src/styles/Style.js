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
    font-family: 'Roboto', sans-serif;
    background-color: #222831;
    -webkit-box-shadow: 0px 0px 9px 3px #222831; 
    box-shadow: 0px 0px 9px 3px #222831;
    @media (max-width: 768px){
        { grid-area: 1 / 1 / 6 / 6; }
        }
`;
