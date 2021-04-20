import React from "react"
import Header from '../components/header'
import { AllContent,  Main } from "../styles/Style";
import Footer from '../components/footer';

export default function Galleri () {

    return (
        <>
        <Main>
            <AllContent>

                    <Header/>
                    <h1>Galleriside</h1>
                    <Footer/>
            </AllContent>
        </Main>
        </>
    );
}