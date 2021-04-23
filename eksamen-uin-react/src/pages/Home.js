import Footer from "../components/footer";
import Header from "../components/header"
import { Main, AllContent } from "../styles/Style";
import { AllArticles, RelevantArticle, ArticleContent, PreviewArticle,EkstraArticles, RelevantArticlePreview, RelevantImgPreview, RelevantTextPreview, RelevantTekst, Button, MoreButton, TittelWrapper } from "../styles/HomeStyle";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../utils/client.js";
import '../styles/Style.css';
import { getArticles } from '../utils/articleservice';
import Extraposts from "../components/extraposts";



const Home = () => {
    const [postData, setPost] = useState(null);
    const [RelevantPostData, setRelevantPost] = useState(null);
    const [postData2, setPost2] = useState(null);
    const [morePostData, setmMorePostData] = useState([]);

    const GetMorePostData = async() => {
        const ekstraPosts = await getArticles();
        setmMorePostData(ekstraPosts)
    }


    const handleClick1 = () => {
        document.getElementById("second").id ="secondClicked"
        document.getElementById("button1").id = "button1Clicked"
        document.getElementById("button2").id = "button2Clicked"
        document.getElementById("row").id = "moreClicked";
        };
    
    const handleClick2 = () => {
        document.getElementById("secondClicked").id = "second"
        document.getElementById("button1Clicked").id = "button1"
        document.getElementById("button2Clicked").id = "button2"
        document.getElementById("moreClicked").id = "row";
    }
    const handleClick3 = () => {
        document.getElementById("row").id = "column"
        document.getElementById("button3").id = "button3Clicked"
        document.getElementById("button4").id = "button4Clicked"
    }
    const handleClick4 = () => {
        document.getElementById("column").id = "row"
        document.getElementById("button4Clicked").id = "button4"
        document.getElementById("button3Clicked").id = "button3"
    }
   
    useEffect(()=> {
        sanityClient.fetch(`*[_type == "post" && featured == true] {
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
        .then((data) => setRelevantPost(data))
        .catch(console.error);
    }, [] );

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post" && featured != true ][0..9] | order(publishedAt desc){
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
        .then((data) => setPost(data))
        .catch(console.error);
    }, [] );

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post" && featured != true ][0..19] | order(publishedAt desc){
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
        .then((data) => setPost2(data))
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
                                            <img className={"hovedbilde"}
                                            src={post.mainImage.asset.url} 
                                            alt={post.mainImage.alt}
                                            />
                                        </span>
                                    </Link>
                                </RelevantImgPreview>
                                <RelevantTextPreview>
                                    <TittelWrapper>
                                    <h3>
                                        {post.title}
                                    </h3>
                                    <p className="artikkeltype">
                                        {post.typeartikkel}
                                    </p>
                                    </TittelWrapper>
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
                                <TittelWrapper>
                                    <h3>{post.title}</h3>
                                    <p className="artikkeltype">
                                        {post.typeartikkel}
                                    </p>
                                </TittelWrapper>
                                <p>
                                    {post.ledetekst}
                                </p>
                                
                                <Link to={"/post/" + post.slug.current} key={post.slug.current}><p>Les mer</p></Link>
                            </PreviewArticle>
                        ))}
                        {morePostData?.length > 0 ? morePostData.map(post =>  <Extraposts title={post.title} mainImage={post.mainImage} typeartikkel={post.typeartikkel} ledetekst={post.ledetekst} slug={post.slug} />) : null}
                        </AllArticles>
                        <MoreButton id="button1" onClick={handleClick1}>Se mer</MoreButton>
                        <MoreButton id="button2" onClick={handleClick2}>Se mindre</MoreButton>
                        <Button id ="button3" onClick={handleClick3}>Endre visning </Button>
                        <Button id ="button4" onClick={handleClick4}>Endre visning </Button>
                    </ArticleContent>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
};

export default Home;