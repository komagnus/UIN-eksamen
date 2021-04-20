import sanityClient from "../utils/client.js";
import Header from "../components/header"
import Footer from "../components/footer";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import React, { useEffect, useState } from "react";
import { AllContent, Main,} from "../styles/Style";
import {AboutContent} from "../styles/About";
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

        <Main>
          <AllContent>
                <Header/>
                    <AboutContent>
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
                        </AboutContent>
                    <Footer/>
            </AllContent>  
        </Main>
);
    }