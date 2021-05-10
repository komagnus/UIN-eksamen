import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../../utils/client.js";
import '../../styles/Artikkelside.css';
import imageUrlBuilder from "@sanity/image-url";
import { AllArticles,  PreviewArticle,TittelWrapper,} from "../../styles/HomeStyle";
const builder = imageUrlBuilder(sanityClient);

function urlFor(source) {
    return builder.image(source)
}

export const Tutorials = () => {
    const [typeData, setType] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post" && typeartikkel == "Tutorials"] | order(publishedAt desc) {            
            title,
            slug,
            ledetekst,
            typeartikkel,
            mainImage {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setType(data))
        .catch(console.error);
    }, [] );
   

    
    return (
        <AllArticles>

        {typeData && typeData.map((post, index) => (

            <PreviewArticle key={"ArticlePreview" + post.slug.current}>
            <Link to={"/post/" + post.slug.current} key={post.slug.current + 'home'}>
                <span  
                    key={index + 'home'} >
                    <img style={{height: "200px", width: "300px"}}
                    src={urlFor(post.mainImage.asset.url).format('webp').url()}
                    alt={post.mainImage.alt}
                    />
                </span>
            </Link>
            <TittelWrapper>
                <h3>{post.title}</h3>
                <Link className="artikkeltype" to={"/navigasjon" + post.typeartikkel} >
                    {post.typeartikkel}
                </Link>
            </TittelWrapper>
            <p>
                {post.ledetekst}
            </p>

            <Link to={"/post/" + post.slug.current} key={post.slug.current}><p>Les mer</p></Link>
            </PreviewArticle>
                    ))}

        </AllArticles>
        
    )
}

