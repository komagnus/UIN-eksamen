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
    & > li {
        display:flex;
        justify-content: center;
    }
    &:nth-child(3) {
        border: none;
    } 
`;
export const FooterAnsatte = styled.section`
    border-right: 2px solid #fed049;
    
    flex-direction: column;
    list-style-type: none;
    &::after {
        justify-content: space-between;
    }
`;
export const FooterAdresse = styled.section`
    justify-content: center;
    border-right: 2px solid #fed049;
    flex-direction: column;

`;
export const FooterNav = styled.section`
    justify-content: center;
`;