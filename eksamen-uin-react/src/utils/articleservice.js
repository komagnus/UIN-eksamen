import client from "./articleClient";

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

export const getArticles = async () => {
    const data = await client.fetch(
      `*[_type == "post" && featured != true]["10..20"]{${articleFields}}`,
      );
    return data;
  };
  