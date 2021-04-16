import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import Header from "../components/header"
import Footer from "../components/footer";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

export default function About() {
    const [author, setAuthor] = useState(null) ;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
        }`).then((data) => setAuthor(data[0]))
        .catch(console.error);
    }, []);

    if (!author) return <div> Laster...</div>;

    return (

        <main>
        <Header/>

        <img src={urlFor(author.authorImage).url()} alt={author.name}
        style={{height: "250px", width: "250px"}}/>

        <div>

        <h1> Forfatter navn: {""} </h1>
        <span> {author.name}</span>
        
        <div>
        <BlockContent blocks={author.bio} projectId="kggawxgp" dataset="production" />
        </div>
        </div>
        
        <Footer/>

        </main>
);
    }