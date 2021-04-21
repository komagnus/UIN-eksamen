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
    @media (max-width: 768px){
        flex-direction:column;
        padding-top:10px;
        border-top: none;
        }
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
    width:52%;
    border-right: 2px solid #fed049;
    display:flex;
    flex-direction: column;
    list-style-type: none;
    @media (max-width: 768px){
        width:100%;
        border-right: none;
        border-bottom: 2px solid #fed049;
        }
`;
export const FooterAdresse = styled.section`
    width:100%;
    justify-content: center;
    border-top: 2px solid black;
    flex-direction: column;
    @media (max-width: 768px){
        width:100%;
        border-right: none;
        border-bottom: 2px solid #fed049;
        padding-top:10px;
        }

`;
export const FooterNav = styled.section`
    width:48%;
    justify-content: center;
    @media (max-width: 768px){
        width:100%;
        padding-top:10px;
        }
`;