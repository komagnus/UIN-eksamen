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
export const RelevantTekst = styled.section `
    font-size: 10wv;
`;

export const AllArticles = styled.article`
    color: #eeeeee;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    ${props => props.changeView ? 'row' : 'column'}
`;

export const PreviewArticle = styled.article`
    padding: 10px;
`;
export const Button = styled.button`
    background-color: #fed049;
    width: fit-content;
    justify-self: end;
`;
export const MoreButton = styled.button`
    background-color: #222831;
    border: 1px solid #fed049;
    color: #fed049;
    width: fit-content;
    padding: 0.3em 1em;
    justify-self: center;
    border-radius: 2%;
`;
export const TittelWrapper = styled.section `
    display: flex;
    flex-direction: row;
`;
