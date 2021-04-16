import Footer from "../components/footer";
import Header from "../components/header"
import { Main, MainContent, AllContent } from "../styles/Style";
import { AllArticles, RelevantArticle, ArticleContent } from "../styles/HomeStyle";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../utils/client.js";



const Home = () => {
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post"] {
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
        <>
        <Main>
            <AllContent>
                <MainContent>
                    <Header/>
                    <ArticleContent>
                        <RelevantArticle>Her skal den relevante artikkelen ligge</RelevantArticle>
                        <AllArticles>
                        {postData && postData.map((post, index) => (
                            <article>
                                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <span  
                                        key={index} >
                                        <img style={{height: "250px", width: "250px"}}
                                        src={post.mainImage.asset.url} 
                                        alt={post.mainImage.alt}
                                        />
                                    </span>
                                </Link>
                            </article>
                        ))}
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