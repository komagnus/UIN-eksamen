import React from "react";
import Header from '../components/header'
import { AllContent, Main, MainContent, } from "../styles/Style";
import Footer from '../components/footer';

const Contact = () => {

    return (
        <>
        <Main>
            <AllContent>
                <MainContent>
                    <Header/>
                    <h1>Kontakt oss side</h1>
                    <Footer/>
                </MainContent>
            </AllContent>
        </Main>
        </>
    );
}
export default Contact;