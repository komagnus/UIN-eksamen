import styled from "styled-components";

export const ArticleContent = styled.section`
    display: grid;
    grid-template-rows: auto auto;
`;

export const RelevantArticle = styled.article`
    color: #eeeeee;
    align-self: center;
    justify-self: center;
    grid-row-start: 1;
    grid-row-end: 2;
    padding: 20px;
    border-bottom: 1px solid #fed049;
`;

export const AllArticles = styled.article`
    color: #eeeeee;
    grid-row-start: 2;
    grid-row-end: 3;
    display: flex;
    padding: 20px;
    flex-direction: 'row';
    flex-wrap: wrap;
    justify-content: space-between;
    ${props => props.changeView ? 'row' : 'column'}
`;

export const PreviewArticle = styled.article`
    padding: 10px;
`;
