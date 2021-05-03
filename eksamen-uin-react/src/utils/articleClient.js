import sanityClient from '@sanity/client';

const options = {
    projectId: "kggawxgp",
    dataset: "production",
    apiVersion: '2021-03-25', 
}

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === 'production'
});

export default client;