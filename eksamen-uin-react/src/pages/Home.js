import Footer from "../components/footer";
import Header from "../components/header"
import { Main, AllContent } from "../styles/Style";
import { AllArticles, RelevantArticle, ArticleContent, PreviewArticle, RelevantArticlePreview, RelevantImgPreview, RelevantTextPreview, RelevantTekst, Button, MoreButton, TittelWrapper } from "../styles/HomeStyle";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../utils/client.js";
import '../styles/Style.css';
import { getArticles } from '../utils/articleservice';
import Extraposts from "../components/extraposts";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

const Home = () => {
    const [postData, setPost] = useState(null);
    const [RelevantPostData, setRelevantPost] = useState(null);
    const [morePostData, setMorePostData] = useState([]);
    const [flexDirection, setFlexDirection] = useState(false);

    

    const GetMorePostData = async() => {
        const ekstraPosts = await getArticles();
        setMorePostData(ekstraPosts)
    }
    const changeView = () => {
        setFlexDirection(!flexDirection ? 'column' : 'row');
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
                                        <span key={index + 'home'} >
                                            <img className={"hovedbilde"}
                                            src={urlFor(post.mainImage.asset.url).format('webp').url()} 
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
                        <AllArticles style={{flexDirection:flexDirection}}>
                        {postData && postData.map((post, index) => (
                            <PreviewArticle>
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
                        <MoreButton onClick={GetMorePostData}>Se mer</MoreButton>
                        <Button onClick={changeView}>Endre Visning</Button>
                    </ArticleContent>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
};

export default Home;