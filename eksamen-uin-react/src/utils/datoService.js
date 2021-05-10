import client from "./datoClient";


export const getEndreDato = async () => {
    const data = await client.fetch(
      `*[_type == "post" && publishedAt >= ""] | order(publishedAt desc)`,          
      );
    return data;
};
  