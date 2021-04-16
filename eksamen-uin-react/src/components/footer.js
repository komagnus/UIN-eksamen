import { NavLink } from "react-router-dom"
import { FooterContent,FooterWrapper,FooterChild } from "../styles/Style";
const Footer = () => {
    return (
        <FooterContent>
            <FooterWrapper>
            <FooterChild>
                <li> Redaktør: <strong>Trude Sjef</strong> </li>
                <li>Leder helse:<strong>Simon Helse</strong></li>
                <li>Leder annonse:<strong>Trine Selger</strong></li>
                <li>Leder markedsføring: <strong>Ask Marked</strong></li>
                <li>Leder design: <strong>Ali Design</strong></li>
            </FooterChild>
            <FooterChild>
                <li>Adresse: B R A veien 4, 1757 Halden</li>
                <li>Tipstelefon: 911 911 911</li>
                <li>E-post: kontakt@game.uin</li>
            </FooterChild>
            <FooterChild>
            <li><NavLink to="" activeClassName="active">Hjem</NavLink> </li>
            <li><NavLink to="/artikler" activeClassName="active">Artikler</NavLink> </li>
            <li><NavLink to="/kontakt" activeClassName="active">Kontakt oss</NavLink> </li>
            <li><NavLink to="/OmOss" activeClassName="active">Om oss</NavLink> </li>
            <li><NavLink to="/galleri" activeClassName="active">Galleri</NavLink></li>
            </FooterChild>
            </FooterWrapper>
        </FooterContent>
    );
}

export default Footer;