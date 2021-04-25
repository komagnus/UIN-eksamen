import client from "./client";


export  const createContact = async (body) => {
    try{
        await client.create({_type: 'contact', ...body});
        
    } catch (error) {
        throw new Error(error);


    }
}