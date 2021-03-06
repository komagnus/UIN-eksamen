import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../utils/client.js";
import BlockContent from "@sanity/block-content-to-react";
import Header from '../header';
import { AllContent, Main, } from "../../styles/Style";
import Footer from '../footer';
import { KursContent, KursTekst } from "../../styles/kursStyles.js";
import { createKurs } from "../../utils/kursService.js";
import KursSkjema from "./kurspaameldingGratis.js";
import KursPrisSkjema from "./kurspaameldingPris.js";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}


export default function FullKurs(){ 
    const [kurs, setKurs] = useState(null);
    const { slug } = useParams();
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [gratis, setGratis] = useState(false);
    

    useEffect(() => {
        sanityClient.fetch(`*[slug.current == "${slug}"]{
            title,
            previewBeskrivelse,
            beskrivelse,
            url,
            slug,
            prisgratis,
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
            .then((data) => setKurs(data[0]))
            .catch(console.error) ;
        }, [slug] ) ;
        
        if (!kurs) return <div>Loading...</div> ;
        
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
    const handleForm = () => {
       if (kurs.prisgratis === true) {
           showGratis();
       }
    }

    const showGratis = () => setGratis(true)

    const GratisSatt = () => {
        return (
            <>
            <KursSkjema loading={loading} onSubmit={onSubmit} title={kurs.title}/>
                {error ? <p>{error}</p> : null}
                {success ? <p>Du er p??meldt!</p> : null}
            </>
        )
    } 
    
    const PrisSatt = () => {
        return (
            <>
            <KursPrisSkjema loading={loading} onSubmit={onSubmit} title={kurs.title}/>
                {error ? <p>{error}</p> : null}
                {success ? <p>Du er p??meldt!</p> : null}
            </>
        )
    } 
    

    return (
        <>
        <Main>
            <AllContent>
                    <Header/>
                    <KursContent onLoad={handleForm}> 
                        <img className="hovedbilde" src={urlFor(kurs.kursImage.asset.url).format('webp').url()} alt={kurs.title}/>
                        <h1>{kurs.title}</h1>
                        <KursTekst>
                            {kurs.previewBeskrivelse}
                        </KursTekst>
                        <KursTekst>
                            <BlockContent 
                                blocks={kurs.beskrivelse} 
                                projectId="vlt4cikf" 
                                dataset="production" 
                            />
                        </KursTekst>
                        <p>Pris for kurset:{kurs.pris}</p>
                        <p>Kurset begynner {kurs.dato}</p>
                        <p>Les mer om kurset: <a href={kurs.url} target="_blank" rel="noreferrer noopener">{kurs.url}</a></p>
                        <div>
                            Adresse: {kurs.adresse}
                        </div>
                        <h2>P??melding:</h2>
                        {gratis ? <GratisSatt /> : <PrisSatt/>}
                    </KursContent>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
}