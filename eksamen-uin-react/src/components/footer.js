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
        
        <FooterContent key={'footercontent'}>

            <FooterAdresse key={'footeradresse'}>
                {footerkontaktData && footerkontaktData.map((footerkontakt, index) => (     
                <FooterChild key={'footerchild1'}>
                    <li key={'adresse'} >{footerkontakt.adresse} </li>
                    <li key={'tlf'}>{footerkontakt.tipstelefon}</li>
                    <li key={'email'}>{footerkontakt.email}</li>
                </FooterChild>
                    ))}
            </FooterAdresse>

            <FooterWrapper key={'footerwrapper'}>
                <FooterAnsatte key={'footeransatte'}>
                    {footeransattData && footeransattData.map((footeransatt, index) => (     
                    <FooterChild key={ footeransatt.name + 'footerchild2'}>
                    <li key={'ansatt'}> <strong>{footeransatt.rolle}:</strong> {" "}{footeransatt.name}</li>
                    </FooterChild>
                    ))}
                </FooterAnsatte>
                <FooterNav key={'footernav'}>
                    {footernavigasjonData && footernavigasjonData.map((footernavigasjon, index) => (     
                    <FooterChild key={'footerchild3'}>
                    <li key={'nav1'} ><NavLink to="" activeClassName="active" >{footernavigasjon.navigasjon1}</NavLink> </li>
                    <li key={'nav2'}><NavLink to="/kontakt" activeClassName="active" >{footernavigasjon.navigasjon2 }</NavLink> </li>
                    <li key={'nav3'}><NavLink to="/OmOss" activeClassName="active" >{footernavigasjon.navigasjon3}</NavLink> </li>
                    <li key={'nav4'}><NavLink to="/galleri" activeClassName="active" >{footernavigasjon.navigasjon4}</NavLink></li>
                    </FooterChild>
                    ))}
                </FooterNav>
            </FooterWrapper>
        </FooterContent>
    );
}
