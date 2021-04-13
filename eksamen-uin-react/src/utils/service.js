import client from './client.js'

const eventFields = `
`;

export const getEvents = async () => {
    const data = await client.fetch(`*[_type == "event"]{${eventFields}}`);
    return data;
}

export const getEvent = async (slug) => {
    const data = await client.fetch(
        `*[_type == "event" && slug.current == $slug]{${eventFields}}`,
        { slug }
        );
    return data;
}