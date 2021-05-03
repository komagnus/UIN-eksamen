import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import sanityClient from "../utils/client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import '../styles/SinglePost.css';
import Header from '../components/header';
import { AllContent, Main, } from "../styles/Style";
import Footer from '../components/footer';
import Artikkelnavigasjon from "../components/artikkelnavigasjon.js";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
return builder.image(source)
}


export default function SinglePost() {


    
const [singlePost, setSinglePost] = useState(null);
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
        "name": author->name,
        "authorImage": author->image
        }`
        )
        .then((data) => setSinglePost(data[0]))
        .catch(console.error);
        }, [slug]);
        
        if (!singlePost) return <div>Loading...</div>;
        
        
        
        

    return (
        <>
        <Main>
            <AllContent>
                    <Header/>
                    <section> 
                        <main className="hovedsiden">



                        
                        <Artikkelnavigasjon />


                        <article>
                        <header>
                        <div >
                        <div>

                        <Link className="typeartikkel" to={"/navigasjon" + singlePost.typeartikkel}>
                        {singlePost.typeartikkel}
                        </Link>


                            <img className="hovedbilde" src={singlePost.mainImage.asset.url}
                            alt={singlePost.title}/>


                            
                            <h1 className="overskrift">
                            {singlePost.title}
                            </h1>

                            <h2 className="ledetekst">
                            {singlePost.ledetekst}
                            </h2>


                            <div> 
                            <img className="forfatterbilde"  
                            src={urlFor(singlePost.authorImage).url()}
                            alt={singlePost.name} />
                            </div>
                                
                            <p className="forfatternavn">
                            {singlePost.name} 
                            </p>

                            <p className="publiseringsdato">
                            {singlePost.publishedAt}
                            </p>

                            </div>
                            </div>


                            </header>

                            <div className="malinformasjon"
                            style={{ }}>


                            <BlockContent 
                            blocks={singlePost.body} 
                            projectId="vlt4cikf" 
                            dataset="production" />
                                
                            </div>
                            </article>
                            </main>
                    </section>
                    <Footer/>
            </AllContent>
        </Main>
        </>
        
    );
}