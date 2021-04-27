import React, { useState } from "react";
import Header from '../components/header'
import { AllContent, Main,} from "../styles/Style";
import { KontaktossSide, KontaktossWrapper, Kontaktinfocontent, KontaktRingoss, KontaktossSkjema, KontaktossSkjemaWrapper,KontaktossNyhetsbrev,KontaktossNyhetsbrevWrapper } from "../styles/ContactStyle"
import Footer from '../components/footer';
import ContactForm from "../components/contactForm";
import { createContact } from "../utils/contactService";

const Contact = () => {

    const [loading, setLoading] = useState('false');
    const [error, setError] = useState('false');
    const [success, setSuccess] = useState('false');

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
                                <h1>Kontaktinfo:</h1>
                                <li>Adresse: BRA veien 4 1757 Halden</li>
                                <li>Tipstelefon: 911 911 911</li>
                                <li>E-Post: Kontakt@game.uin</li>
                            </Kontaktinfocontent>
                            <KontaktRingoss>
                                <p>Bilde 1</p>
                                <p>Bilde 2</p>
                            </KontaktRingoss>
                        </KontaktossWrapper>
                        <KontaktossSkjemaWrapper>
                            <KontaktossSkjema>
                                <h1>Hva gjelder det?</h1>
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