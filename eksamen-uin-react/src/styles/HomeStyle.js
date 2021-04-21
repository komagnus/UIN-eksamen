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
