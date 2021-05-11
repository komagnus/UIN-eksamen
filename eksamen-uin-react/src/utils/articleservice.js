import client from "./articleClient";

const articleFields = `
    title, 
    'slug': slug.current,
    ledetekst,
    typeartikkel,
    'mainImage': mainImage{
        asset->{
            _id,
             url
            },
        alt} 
`;

export const getArticles = async (end=20) => {
    const data = await client.fetch(
      `*[_type == "post" && featured != true][10..$end]{${articleFields}}`,
      {end}
      );
    return data;
};
  