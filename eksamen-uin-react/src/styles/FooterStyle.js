import styled from "styled-components";

export const FooterContent = styled.footer`
    color: #eeeeee;
    background-color: #444b55;
`;
export const FooterWrapper = styled.section`
    display: flex;
    justify-content: center;
    justify-content:space-around;
    border-top: 1px solid black;
`;
export const FooterChild = styled.section`

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
    width:33%;
    border-right: 2px solid #fed049;
    display:flex;
    flex-direction: column;
    list-style-type: none;
`;
export const FooterAdresse = styled.section`
    width:33%;
    justify-content: center;
    border-right: 2px solid #fed049;
    flex-direction: column;

`;
export const FooterNav = styled.section`
    width:33%;
    justify-content: center;
`;