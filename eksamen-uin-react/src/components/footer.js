import { NavLink } from "react-router-dom"
import { FooterContent,FooterWrapper,FooterChild } from "../styles/FooterStyle";
const Footer = () => {
    return (
        <FooterContent>
            <FooterWrapper>
            <FooterChild>
                <li>Trude Sjef </li>
                <li>Simon Helse</li>
                <li>Trine Selger</li>
                <li>Ask Marked</li>
                <li>Ali Design</li>
            </FooterChild>
            <FooterChild>
                <li>Adresse: B R A veien 4, 1757 Halden</li>
                <li>Tipstelefon: 911 911 911</li>
                <li>E-post: kontakt@game.uin</li>
            </FooterChild>
            <FooterChild>
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