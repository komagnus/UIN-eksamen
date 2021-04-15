import React from "react"
import Header from '../components/header'
import { AllContent,  Main, MainContent, } from "../styles/Style";
import Footer from '../components/footer';

export default function Galleri () {

    return (
        <>
        <Main>
            <AllContent>
                <MainContent>
                    <Header/>
                    <h1>Galleriside</h1>
                    <Footer/>
                </MainContent>
            </AllContent>
        </Main>
        </>
    );
}