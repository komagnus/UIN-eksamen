import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../utils/client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import '../styles/ArtikkelMal.css';
import Header from '../components/header';
import { AllContent, Main, } from "../styles/Style";
import Footer from '../components/footer';
import Artikkelnavigasjon from "../components/Artikkelnavigasjon.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
return builder.image(source)
}


export default function ArtikkelMal() {


    
const [ArtikkelMal, setArtikkelMal] = useState(null);
const { slug } = useParams();


useEffect(() => {
    sanityClient.fetch(`*[slug.current == "${slug}"]{
        title,
        _id,
        publishedAt,
        ledetekst,
        typeartikkel,
        slug,
        mainImage{
        asset->{
        _id,
        url
        }
        },
        body,
        "name": forfatter->name,
        "authorImage": author->image
        }`
        )
        .then((data) => setArtikkelMal(data[0]))
        .catch(console.error);
        }, [slug]);
        
        if (!ArtikkelMal) return <div>Loading...</div>;
        
        
        
        

    return (
        <>
        <Main>
            <AllContent>
                    <Header/>
                    <body> 
                        <main className="hovedsiden">



                        
                        <Artikkelnavigasjon />


                        <article>
                        <header>
                        <div >
                        <div>

                        <p className="typeartikkel">
                        {ArtikkelMal.typeartikkel}
                        </p>


                            <img className="hovedbilde" src={ArtikkelMal.mainImage.asset.url}
                            alt={ArtikkelMal.title}/>


                            
                            <h1 className="overskrift">
                            {ArtikkelMal.title}
                            </h1>

                            <h2 className="ledetekst">
                            {ArtikkelMal.ledetekst}
                            </h2>


                            <div> 
                            <img className="forfatterbilde"  
                            src={urlFor(ArtikkelMal.authorImage).url()}
                            alt={ArtikkelMal.name} />
                            </div>
                                
                            <p className="forfatternavn">
                            {ArtikkelMal.name} 
                            </p>

                            <p className="publiseringsdato">
                            {ArtikkelMal.publishedAt}
                            </p>

                            </div>
                            </div>


                            </header>

                            <div className="malinformasjon"
                            style={{ }}>


                            <BlockContent 
                            blocks={ArtikkelMal.body} 
                            projectId="vlt4cikf" 
                            dataset="production" />
                                
                            </div>
                            </article>
                            </main>
                    </body>
                    <Footer/>
            </AllContent>
        </Main>
        </>
        
    );
}