import sanityClient from './client.js'

const articleFields = `
    title, 
    slug,
    ledetekst,
    typeartikkel,
    mainImage {
        asset->{
            _id,
             url
            },
        alt} 
`;

export const getArticles = async() => {
    const data = await sanityClient.fetch(
      `*[_type == "post" && featured != ["10..20"]{${articleFields}}`
    );
    return data;
  };
  