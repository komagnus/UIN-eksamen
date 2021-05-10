import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../../utils/client.js";
import '../../styles/Artikkelside.css';
import Header from "../../components/header"
import Artikkelnavigasjon from "../artikkelnavigasjon.js";
import imageUrlBuilder from "@sanity/image-url";
import { Main, AllContent } from "../../styles/Style";
import { AllArticles, ArticleContent, PreviewArticle,TittelWrapper,} from "../../styles/HomeStyle";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}
export default function Post() {
   
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post" && typeartikkel == "Nyheter"] | order(publishedAt desc) {            
            title,
            slug,
            mainImage {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, [] );
   

    
    return (
 

        <Main>
        <AllContent>
        <ArticleContent>
        <Header/>

        <h1 className="sideoverskrift"> Profflag - Artikler</h1>

        <Artikkelnavigasjon />

        <AllArticles>

{postData && postData.map((post, index) => (

    <PreviewArticle key={post.slug.current} id="ArtikkelPreview">
        <Link to={"/post/" + post.slug.current} key={post.slug.current}>
        <span
            key={index} >
            <img
            src={urlFor(post.mainImage.asset.url).format('webp').url()} 
            alt={post.mainImage.alt} 
            />
        </span>
        </Link>
         <TittelWrapper>
         {post.title}
         </TittelWrapper>

        </PreviewArticle>

))}

        </AllArticles>

        </ArticleContent>
        </AllContent>
        </Main>

        
    )
}


