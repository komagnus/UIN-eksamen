import React, { useEffect, useState } from "react";
import Header from '../components/header'
import { AllContent, Main,} from "../styles/Style";
import { KontaktossSide, KontaktossWrapper, Kontaktinfocontent, KontaktRingoss, KontaktossSkjema, KontaktossSkjemaWrapper,KontaktossNyhetsbrev,KontaktossNyhetsbrevWrapper } from "../styles/ContactStyle"
import Footer from '../components/footer';
import ContactForm from "../components/contactForm";
import { createContact } from "../utils/contactService";
import sanityClient from "../utils/client.js";
import imageUrlBuilder from "@sanity/image-url";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
    return builder.image(source)
}

const Contact = () => {
    const [footerkontaktData, setFooterkontakt] = useState(null) ;
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [imgData, setImg] = useState(null) ;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "contactimg"]{
        "contactimgImage": image.asset->url
        }`
        )
        .then((data) => setImg(data))
        .catch(console.error);
    }, []);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "footerkontakt"]{
        adresse,
        tipstelefon,
        epost,
        }`
        )
        .then((data) => setFooterkontakt(data))
        .catch(console.error);
    }, []);

    const onSubmit = async (data) => {
        
        setLoading(true);
        setError(false);
        setSuccess(false);
        try {
            await createContact(data);
            setSuccess(true);
        } catch (error) {
            setError(error.message);
            
        } finally {
            setLoading(false);
        }

        

    };
    return (
        <>
        <Main>
            <AllContent>
                    <Header/>
                    <KontaktossSide>
                        <KontaktossWrapper>
                            <Kontaktinfocontent>
                            {footerkontaktData && footerkontaktData.map((footerkontakt, index) => (     
                <div key={index}>
                    <li key={index + 'adresse'} >{footerkontakt.adresse} </li>
                    <li key={index + 'tlf'}>{footerkontakt.tipstelefon}</li>
                    <li key={index + 'epost'}>{footerkontakt.epost}</li>
                </div>
                    ))}
                            </Kontaktinfocontent>
                            <KontaktRingoss>
                            {imgData && imgData.map((image, index) => (    
                                     
                                    

                                     <img src={urlFor(image.contactimgImage).format('webp').url()} alt="kontaktoss" key={index}/>
                                     
                                     
                                     ))}
                            </KontaktRingoss>
                        </KontaktossWrapper>
                        <KontaktossSkjemaWrapper>
                            <KontaktossSkjema>
                                <h1>Send tips og forslag her!</h1>
                                <ContactForm loading={loading} onSubmit={onSubmit}/>
                                {error ? <p>{error}</p> : null}
                                {success ? <p>Din melding er sendt!</p> : null}
                                
                            </KontaktossSkjema>
                        </KontaktossSkjemaWrapper>
                        <KontaktossNyhetsbrevWrapper>
                            <KontaktossNyhetsbrev>
                                <h1>Abonner på nyhetsbrevet!</h1>
                                <input placeholder="Din e-postadresse"></input>
                            </KontaktossNyhetsbrev>
                        </KontaktossNyhetsbrevWrapper>
                    </KontaktossSide>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
}
export default Contact;