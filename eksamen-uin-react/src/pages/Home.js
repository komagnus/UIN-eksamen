import Footer from "../components/footer";
import Header from "../components/header"
import { Main, MainContent, AllContent } from "../styles/Style";
import { AllArticles, RelevantArticle, ArticleContent, PreviewArticle } from "../styles/HomeStyle";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../utils/client.js";



const Home = () => {
    const [postData, setPost] = useState(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);
    };

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"] {
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
                <MainContent>
                    <Header/>
                    <ArticleContent>
                        <RelevantArticle>Her skal den relevante artikkelen ligge</RelevantArticle>
                        <AllArticles>
                        {postData && postData.map((post, index) => (
                            <PreviewArticle changeView={click}>
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
                        <button onclick={handleClick}>Change View</button>
                        </AllArticles>
                    </ArticleContent>
                    <Footer/>
                </MainContent>
            </AllContent>
        </Main>
        </>
    );
};

export default Home;