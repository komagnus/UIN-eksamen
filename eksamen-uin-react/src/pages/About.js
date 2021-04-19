import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import Header from "../components/header"
import Footer from "../components/footer";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import '../styles/About.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [authorData, setAuthor] = useState(null) ;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
        }`
        )
        .then((data) => setAuthor(data))
        .catch(console.error);
    }, []);


    return (

        <main>

        <Header/>

        {authorData && authorData.map((author, index) => (                  
        <div className="hoved"> 

        <img src={urlFor(author.authorImage).url()} alt={author.name}
        style={{height: "250px", width: "250px"}}/>

        <div>

        <h1> {author.name} </h1>
         
        
        <div>
        <BlockContent blocks={author.bio} projectId="kggawxgp" dataset="production" />
        </div>
        </div>

        </div>
        ))}

        <Footer/>

        </main>
);
    }