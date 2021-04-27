import client from "./articleClient";

const articleFields = `
    title, 
    'slug': slug.current ,
    ledetekst,
    typeartikkel,
    mainImage {
        asset->{
            _id,
             url
            },
        alt} 
`;

export const getArticles = async (slug) => {
    const data = await client.fetch(
      `*[_type == "post" && featured != true &&slug.current == $slug]["10..20"]{${articleFields}}`,
      { slug }
      );
    return data;
  };
  