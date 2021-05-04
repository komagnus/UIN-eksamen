import styled from "styled-components";

export const ArticleContent = styled.section`

`;

export const RelevantArticle = styled.article`
    color: #eeeeee;
    border-bottom: 1px solid #fed049;
`;
export const RelevantArticlePreview = styled.h2 `
display:flex;
flex-direction:row;
justify-content: space-around;
@media (max-width: 768px){
    display:flex;
    flex-direction:column;
    align-items:center;
    }
`;
export const RelevantImgPreview = styled.span`
width:50%;
@media (max-width: 768px){
    display:flex;
    width:80%;
    }
`;
export const RelevantTextPreview = styled.span`
width:50%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

@media (max-width: 768px){
    width:100%;
    }
`;
export const RelevantTekst = styled.p `
    font-size: 15px;
`;

export const AllArticles = styled.article`
    color: #eeeeee;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;
export const EkstraArticles = styled.article `
    color: #eeeeee;
    grid-row-start: 3;
    grid-row-end: 4;
    padding: 20px;
    flex-wrap: wrap;
`;
export const PreviewArticle = styled.article`
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

export const Button = styled.button`
    background-color: #fed049;
    width: fit-content;
    align-self: center;
    font-size: 1vw;
    padding: 0.3em 1.5em;
`;
export const MoreButton = styled.button`
    background-color: #222831;
    border: 1px solid #fed049;
    font-size: 1vw;
    color: #fed049;
    width: fit-content;
    padding: 0.5em 2em;
    justify-self: center;
    align-self: center;
    border-radius: 2%;
`;
export const TittelWrapper = styled.section `
    display: flex;
    flex-direction: row;
`;
export const ButtonsWrapper = styled.section `
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5%;
`;
