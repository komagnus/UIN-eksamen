import client from "./client";


export  const createKurs = async ( body ) => {
    try{
        await client.create({_type: 'paamelding', ...body});
        
    } catch (error) {
        throw new Error(error);
    }
}