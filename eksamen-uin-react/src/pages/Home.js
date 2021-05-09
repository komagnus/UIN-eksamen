import Footer from "../components/footer";
import Header from "../components/header"
import { Main, AllContent } from "../styles/Style";
import { AllArticles, RelevantArticle, ArticleContent, PreviewArticle, RelevantArticlePreview, RelevantImgPreview, RelevantTextPreview, RelevantTekst, Button, MoreButton, TittelWrapper, ButtonsWrapper } from "../styles/HomeStyle";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../utils/client.js";
import '../styles/Style.css';
import { getArticles } from '../utils/articleservice';
import Extraposts from "../components/extraposts";
import imageUrlBuilder from "@sanity/image-url";
import ArtikkelNavHome from '../components/artikkelNavHome';
import { getEndreDato } from '../utils/datoService';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

const Home = () => {
    const [postData, setPost] = useState(null);
    const [RelevantPostData, setRelevantPost] = useState(null);
    const [morePostData, setMorePostData] = useState([]);
    const [flexDirection, setFlexDirection] = useState(false);
    const [EndreDato, setEndreDato] = useState([]);



    

    const GetMorePostData = async() => {
        const ekstraPosts = await getArticles(20);
        setMorePostData(ekstraPosts);
    }
    const changeView = () => {
        setFlexDirection(!flexDirection ? 'column' : 'row');
    }
    const GetEndreDato = async() => {
        const data = await getEndreDato();
        setEndreDato(data);
    };
 


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
        .fetch(`*[_type == "post" && featured != true ][0..9] {
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
                    <ArtikkelNavHome />
                    <ArticleContent>
                        {RelevantPostData && RelevantPostData.map((post, index) => (
                        <RelevantArticle key="RelevantArticle">
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
                                    <Link className="artikkeltype" to={"/navigasjon" + post.typeartikkel} >
                                        {post.typeartikkel}
                                    </Link>
                                    </TittelWrapper>
                                    <RelevantTekst>
                                        {post.ledetekst}
                                    </RelevantTekst>
                                    <Link to={"/post/" + post.slug.current} key={post.slug.current}><p>Les mer</p></Link>
                                </RelevantTextPreview>
                            </RelevantArticlePreview>
                        </RelevantArticle>
                        ))}

                        <ButtonsWrapper>
                            <Button onClick={changeView}>Visning</Button>
                        </ButtonsWrapper>

                        {EndreDato}
                        <ButtonsWrapper>
                        <Button onClick={GetEndreDato}>Endre dato</Button>
                    </ButtonsWrapper>


                        <AllArticles style={{flexDirection:flexDirection}}>
                        {postData && postData.map((post, index) => (
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
                        {morePostData?.length > 0 ? morePostData.map(post =>  <Extraposts title={post.title} mainImage={post.mainImage} typeartikkel={post.typeartikkel} ledetekst={post.ledetekst} slug={post.slug} key ={post.slug + "Wrapper"}/>) : null}
                        </AllArticles>
                        <ButtonsWrapper>
                            <MoreButton onClick={GetMorePostData} >Flere Artikler</MoreButton>
                        </ButtonsWrapper>
                    </ArticleContent>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
};

export default Home;