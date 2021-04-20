import Footer from "../components/footer";
import Header from "../components/header"
import { Main, AllContent } from "../styles/Style";
import { AllArticles, RelevantArticle, ArticleContent, PreviewArticle, RelevantArticlePreview, RelevantImgPreview, RelevantTextPreview, RelevantTekst } from "../styles/HomeStyle";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../utils/client.js";



const Home = () => {
    const [postData, setPost] = useState(null);
    const [RelevantPostData, setRelevantPost] = useState(null);

   
    useEffect(()=> {
        sanityClient.fetch(`*[_type == "post" && featured == true] {
        title, 
        slug,
        ledetekst,
        mainImage {
            asset->{
                _id,
                url
            },
            alt
        }
        }`)
        .then((data) => setRelevantPost(data))
        .catch(console.error);
    }, [] );

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post" && featured != true ][0..9] | order(publishedAt asc){
            title,
            slug,
            ledetekst,
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
        <>
        <Main>
            <AllContent>
                    <Header/>
                    <ArticleContent>
                        {RelevantPostData && RelevantPostData.map((post, index) => (
                        <RelevantArticle>
                            <RelevantArticlePreview>
                                <RelevantImgPreview>
                                    <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                        <span key={index} >
                                            <img style={{height: "300px", width: "500px"}}
                                            src={post.mainImage.asset.url} 
                                            alt={post.mainImage.alt}
                                            />
                                        </span>
                                    </Link>
                                </RelevantImgPreview>
                                <RelevantTextPreview>
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <RelevantTekst>
                                        {post.ledetekst}
                                    </RelevantTekst>
                                    <Link to={"/post/" + post.slug.current} key={post.slug.current}><p>Les mer</p></Link>
                                </RelevantTextPreview>
                            </RelevantArticlePreview>
                        </RelevantArticle>
                        ))}
                        <AllArticles>
                        {postData && postData.map((post, index) => (
                            <PreviewArticle>
                                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                    <span  
                                        key={index} >
                                        <img style={{height: "200px", width: "300px"}}
                                        src={post.mainImage.asset.url} 
                                        alt={post.mainImage.alt}
                                        />
                                    </span>
                                </Link>
                                <h3>
                                    {post.title}
                                </h3>
                                <p>
                                    {post.ledetekst}
                                </p>
                                <Link to={"/post/" + post.slug.current} key={post.slug.current}><p>Les mer</p></Link>
                            </PreviewArticle>
                        ))}
                        </AllArticles>
                    </ArticleContent>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
};

export default Home;