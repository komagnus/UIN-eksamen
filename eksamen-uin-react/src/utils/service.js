import client from './client.js'

const articleFields = `
    image,
    header,
    preview,
    author
`;

const getArticles = async () => {
    const data = await client.fetch(`*[_type == "articles"]{${articleFields}}`);
    return data;
}
export default getArticles;
