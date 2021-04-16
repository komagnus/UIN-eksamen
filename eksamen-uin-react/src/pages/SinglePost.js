import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../utils/client.js";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
import '../styles/SinglePost.css';
import Header from '../components/header';
import { AllContent, Main, MainContent, } from "../styles/Style";
import Footer from '../components/footer';

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
                <MainContent>
                    <Header/>
                    <body> 
                        <main className="hovedsiden">

                        <nav className="pageNav">

                        <div className="rc_logo">                 
                        <a title="Logo">Artikler</a>
                        </div>  
                        
                        
                        <div class="rc_nav" > 
                        <a href="#" title="Alle">Alle</a>
                        <a href="#" title="Nyheter">Nyheter</a>     
                        <a href="#" title="Tutorials">Tutorials</a>
                        <a href="#" title="Tips og tricks">Tips og tricks</a>
                        <a href="#" title="Helse">Helse</a>
                        <a href="#" title="Profflag">Profflag</a>
                        <a href="#" title="Inspirasjon">Inspirasjon</a>

                        </div>
                        </nav>

                        <span className="line"></span>



                        <article>
                        <header>
                        <div >
                        <div>

                        <p className="typeartikkel">
                        {singlePost.typeartikkel}
                        </p>


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
                    </body>
                    <Footer/>
                </MainContent>
            </AllContent>
        </Main>
        </>
        
    );
}