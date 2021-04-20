import React from "react";
import Header from '../components/header'
import { AllContent, Main,} from "../styles/Style";
import { KontaktossSide, KontaktossWrapper, Kontaktinfocontent, KontaktRingoss, KontaktossSkjema, KontaktossSkjemaWrapper,KontaktossNyhetsbrev,KontaktossNyhetsbrevWrapper } from "../styles/ContactStyle"
import Footer from '../components/footer';
const  handleClick = () => {
    console.log("Clicked")
}
const Contact = () => {

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
                                <p>Dropdown</p>
                                <textarea placeholder="Skriv en kommentar her"></textarea>
                                <button onClick={handleClick}>Send inn</button>
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