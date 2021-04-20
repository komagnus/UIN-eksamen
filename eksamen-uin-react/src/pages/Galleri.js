import Header from '../components/header'
import { AllContent,  Main, MainContent, } from "../styles/Style";
import Footer from '../components/footer';
import sanityClient from "../utils/client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [galleryData, setGallery] = useState(null) ;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "gallery"]{
            beskrivelse,
        "galleryImage": image.asset->url
        }`
        )
        .then((data) => setGallery(data))
        .catch(console.error);
    }, []);
    return (
        <>
        <Main>
            <AllContent>
                <MainContent>
                    <Header/>
                    <h1>Galleriswasadwide</h1>
                    {galleryData && galleryData.map((gallery, index) => (                  
                        <div className="img"> 

                        <img src={urlFor(gallery.galleryImage).url()} alt={gallery.beskrivelse}
                        style={{height: "250px", width: "250px"}}/>

                        <div>

                        
         
        
                        <div>
                        
                        </div>
                        </div>

                        </div>
                        ))}
                    <Footer/>
                </MainContent>
            </AllContent>
        </Main>
        </>
    );
}