import client from "./client";


export  const createSubscribe = async (body) => {
    try{
        await client.create({_type: 'subscribe', ...body});
        
    } catch (error) {
        throw new Error(error);


    }
}