import React from "react";
import Header from '../components/header';
import { AllContent, Main, MainContent, } from "../styles/Style";
import Footer from '../components/footer';

const About = () => {
return (
        <>
        <Main>
            <AllContent>
                <MainContent>
                    <Header/>
                    <h1>Om oss side</h1>
                    <Footer/>
                </MainContent>
            </AllContent>
        </Main>
        </>
    );
}
export default About;