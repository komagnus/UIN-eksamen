import styled from "styled-components";

export const ArticleContent = styled.section`
    display: grid;
    grid-template-rows: auto auto;
`;

export const RelevantArticle = styled.article`
    color: #eeeeee;
    
    grid-row-start: 1;
    grid-row-end: 2;
    padding: 20px;
    border-bottom: 1px solid #fed049;
`;
export const RelevantArticlePreview = styled.h2 `
    display: grid;
    grid-template-rows: auto auto;
`;
export const RelevantImgPreview = styled.span`
    grid-column-start: 1;
    grid-column-end: 2;

`;
export const RelevantTextPreview = styled.span`
    grid-column-start: 3;
    grid-column-end: 4;
`;
export const RelevantTekst = styled.p `
    font-size: medium;
`;

export const AllArticles = styled.article`
    color: #eeeeee;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    padding: 20px;
    flex-wrap: wrap;
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
