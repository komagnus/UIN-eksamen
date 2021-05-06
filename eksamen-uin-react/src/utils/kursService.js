import client from "./client";


export  const createKurs = async ( epost) => {
    try{
        await client.create({_type: 'paamelding', ...epost});
        
    } catch (error) {
        throw new Error(error);


    }
}