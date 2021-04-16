import styled from "styled-components";

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