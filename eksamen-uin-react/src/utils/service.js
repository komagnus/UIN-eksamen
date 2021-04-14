import client from './client.js'

const eventFields = `
`;

const aboutFields = `
    portrait,
    name,
    occupation,
    bio,
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

export const getAbout = async () => {
    const data = await client.fetch(`*[_type == "about"]{${aboutFields}}`);
    return data;
}