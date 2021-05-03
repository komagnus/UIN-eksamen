import Header from '../components/header'
import { AllContent,  Main } from "../styles/Style";
import {GalleryContent} from '../styles/Gallery'
import Footer from '../components/footer';
import sanityClient from "../utils/client.js";
import imageUrlBuilder from "@sanity/image-url";
import React, { useEffect, useState } from "react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function Galleri() {
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

                    <Header/>
                    <GalleryContent>
                    
                    <h1>Galleri</h1>
                    <div className="hoved" >
                    {galleryData && galleryData.map((gallery, index) => (    
                                     
                        

                        <img src={urlFor(gallery.galleryImage).format('webp').url()} alt={gallery.beskrivelse} key={gallery.beskrivelse}/>

                        

                        
                        
                        
                        ))}
                        </div>
                    </GalleryContent>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
}