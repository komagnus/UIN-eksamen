import styled from 'styled-components';

export const KursWrapper = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    
`;
export const KursContent = styled.article `
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const ClickableKurs = styled.div `
    grid-row-start: 1;
    grid-row-end: 2;
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    justify-self: center;
`;
export const ButtonWrapper = styled.section `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

export const TittelWrapper = styled.section `
    display: flex;
    flex-direction: row;
`;
export const PreviewKurs = styled.article`
    padding: 10px;
    border: 1px solid black;
    margin-bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1700px) {
        width: 28%;
    }
    @media (max-width: 1699px) {
        width: 40%;
    }
    @media (max-width: 1300px) {
        width:100%;
    }
`;
export const KursTekst = styled.div`
    max-width: 60%;
`;
export const PaameldingSkjema = styled.section`
    display: flex;
    color: white;
    flex-direction: column;
    align-items:center;
    width: 80%; 
    border: 2px solid #FFFFFF;
    & > h1 {
        font-size: 1vw;
        color: #FFFFFF
    }
    & > button {
        display: flex;
        justify-content:center;
        width: 10%;
    }
    & > textarea {
        height: 30%;
        width:50%;
    }
`;
export const KursformStyle = styled.section `
    display: flex;
    flex-direction: column;
`;
