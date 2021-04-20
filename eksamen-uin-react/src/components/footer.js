import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import { NavLink } from "react-router-dom"
import { FooterContent,FooterWrapper,FooterChild, FooterAnsatte, FooterAdresse, FooterNav } from "../styles/FooterStyle";

export default function Footer() {
    const [footeransattData, setFooteransatt] = useState(null) ;
    const [footerkontaktData, setFooterkontakt] = useState(null) ;
    const [footernavigasjonData, setFooternavigasjon] = useState(null) ;





    useEffect(() => {
        sanityClient.fetch(`*[_type == "author"]{
        name,
        rolle,
        }`
        )
        .then((data) => setFooteransatt(data))
        .catch(console.error);
    }, []);


    useEffect(() => {
        sanityClient.fetch(`*[_type == "footerkontakt"]{
        adresse,
        tipstelefon,
        email,
        }`
        )
        .then((data) => setFooterkontakt(data))
        .catch(console.error);
    }, []);


    useEffect(() => {
        sanityClient.fetch(`*[_type == "footernavigasjon"]{
        navigasjon1,
        navigasjon2,
        navigasjon3,
        navigasjon4,
        navigasjon5,
        }`
        )
        .then((data) => setFooternavigasjon(data))
        .catch(console.error);
    }, []);


    return (
        
        <FooterContent>
        <FooterWrapper>
            <FooterAnsatte>
                {footeransattData && footeransattData.map((footeransatt, index) => (     
                <FooterChild class="ansatte">
                <li> <strong>{footeransatt.rolle}:</strong>{' '} <p>{footeransatt.name}</p></li>
                </FooterChild>
                ))}
            </FooterAnsatte>
            <FooterAdresse>
            {footerkontaktData && footerkontaktData.map((footerkontakt, index) => (     
            <FooterChild>
                <li>{footerkontakt.adresse} </li>
                <li>{footerkontakt.tipstelefon}</li>
                <li>{footerkontakt.email}</li>
            </FooterChild>
                ))}
            </FooterAdresse>
            <FooterNav>
                {footernavigasjonData && footernavigasjonData.map((footernavigasjon, index) => (     
                <FooterChild>
                <li><NavLink to="" activeClassName="active">{footernavigasjon.navigasjon1}</NavLink> </li>
                <li><NavLink to="/kontakt" activeClassName="active">{footernavigasjon.navigasjon2}</NavLink> </li>
                <li><NavLink to="/OmOss" activeClassName="active">{footernavigasjon.navigasjon3}</NavLink> </li>
                <li><NavLink to="/galleri" activeClassName="active">{footernavigasjon.navigasjon4}</NavLink></li>
                </FooterChild>
                ))}
            </FooterNav>
        </FooterWrapper>
        </FooterContent>
    );
}
