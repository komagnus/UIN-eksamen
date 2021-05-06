import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../utils/client.js";
import BlockContent from "@sanity/block-content-to-react";
import Header from '../../components/header';
import { AllContent, Main, } from "../../styles/Style";
import Footer from '../../components/footer';
import { KursContent, KursTekst } from "../../styles/kursStyles.js";
import { createKurs } from "../../utils/kursService.js";
import KursSkjema from "./kurspåmelding.js";

export default function GratisKurs(){ 
    const [gratisKurs, setgratisKurs] = useState(null);
    const { slug } = useParams();
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

useEffect(() => {
    sanityClient.fetch(`*[slug.current == "${slug}"]{
        title,
        previewBeskrivelse,
        beskrivelse,
        url,
        slug,
        dato, 
        pris,
        adresse,
        kursImage{
        asset->{
        _id,
        url
        }
        },
        }`
        )
        .then((data) => setgratisKurs(data[0]))
        .catch(console.error);
        }, [slug]);
        
        if (!gratisKurs) return <div>Loading...</div>;
        
     const onSubmit = async (data) => {
        setLoading(true);
            setError(false);
            setSuccess(false);
            try {
                await createKurs(data);
                setSuccess(true);
            } catch (error) {
                setError(error.message);
                
            } finally {
                setLoading(false);
            }
    
            
    
        };
        
        

    return (
        <>
        <Main>
            <AllContent>
                    <Header/>
                    <KursContent> 
                                <img className="hovedbilde" src={gratisKurs.kursImage.asset.url}
                                alt={gratisKurs.title}/>


                                
                                <h1>
                                {gratisKurs.title}
                                </h1>

                                <KursTekst>
                                {gratisKurs.previewBeskrivelse}
                                </KursTekst>
                                <KursTekst>
                                    <BlockContent 
                                    blocks={gratisKurs.beskrivelse} 
                                    projectId="vlt4cikf" 
                                    dataset="production" />
                                </KursTekst>
                               

                                <p>Pris for kurset:{gratisKurs.pris}</p>
                                <p>Kurset begynner {gratisKurs.dato}</p>

                            <p>les mer om kurset: {gratisKurs.url}</p>
                            <div>
                                Adresse: {gratisKurs.adresse}
                            </div>
                            <h2>Påmelding:</h2>
                            <KursSkjema loading={loading} onSubmit={onSubmit}/>
                                {error ? <p>{error}</p> : null}
                                {success ? <p>Du er påmeldt!</p> : null}
                    </KursContent>
                    <Footer/>
            </AllContent>
        </Main>
        </>
        
    );
}