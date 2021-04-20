import Footer from "../components/footer";
import Header from "../components/header"
import { Main, AllContent } from "../styles/Style";
import { AllArticles, RelevantArticle, ArticleContent, PreviewArticle, RelevantArticlePreview, RelevantImgPreview, RelevantTextPreview, RelevantTekst, Button, MoreButton} from "../styles/HomeStyle";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../utils/client.js";
import '../styles/Style.css';



const Home = () => {
    const [postData, setPost] = useState(null);
    const [RelevantPostData, setRelevantPost] = useState(null);

    const handleClick1 = () => {
        
        };

    const handleClick2 = () => {
        document.getElementById("row").id = "column"
        document.getElementById("button1").id = "button1Clicked"
        document.getElementById("button2").id = "button2Clicked1"
    }
    const handleClick3 = () => {
        document.getElementById("column").id = "row"
        document.getElementById("button2Clicked1").id = "button2"
        document.getElementById("button1Clicked").id = "button1"
    }
   
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
        .fetch(`*[_type == "post" && featured != true ][0..9] | order(publishedAt desc){
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
                        <AllArticles id="row">
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
                        <MoreButton id="button3" onClick={handleClick1}>Se mer</MoreButton>
                        <Button id ="button1" onClick={handleClick2}>Endre visning </Button>
                        <Button id ="button2" onClick={handleClick3}>Endre visning </Button>
                    </ArticleContent>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
};

export default Home;