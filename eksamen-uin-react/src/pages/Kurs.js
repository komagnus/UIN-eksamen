import React, { useState, useEffect } from "react";
import sanityClient from '../utils/client';
import Header from '../components/header'
import { AllContent,  Main } from "../styles/Style";
import Footer from '../components/footer';
import { KursWrapper, PreviewKurs, TittelWrapper  } from "../styles/kursStyles";
import { Link } from "react-router-dom";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

const Kurs = () => {

    const [kursData, setKurs] = useState([]);
    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "kurs" && gratis != true]{
            title,
            slug,
            previewBeskrivelse,
            dato,
            pris,
            kursImage {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setKurs(data))
        .catch(console.error);
    }, [] );
    
    return (
        <Main>
            <AllContent>
                <Header/>
                <KursWrapper>
                {kursData && kursData.map((kurs, index) => (
                            <PreviewKurs key={"kursPreview" + kurs.slug.current}>
                                <Link to={"/kurs/" + kurs.slug.current} key={kurs.slug.current + 'home'}>
                                    <span  
                                        key={index + 'home'} >
                                        <img style={{height: "200px", width: "300px"}}
                                        src={urlFor(kurs.kursImage.asset.url).format('webp').url()}
                                        alt={kurs.kursImage.alt}
                                        />
                                    </span>
                                </Link>
                                <TittelWrapper>
                                    <h3>{kurs.title}</h3>
                                </TittelWrapper>
                                <p>
                                    {kurs.PreviewBeskrivelse}
                                </p>
                                <p><strong>Dato:</strong>{kurs.dato}</p>
                                <p><strong>Pris:</strong> {kurs.pris}</p>
                                
                                <Link to={"/kurs/" + kurs.slug.current} key={kurs.slug.current}><p>Meld deg på her!</p></Link>
                            </PreviewKurs>
                        ))}
                </KursWrapper>
                <Footer/>
        </AllContent>
        </Main>
        );
    }
export default Kurs;



