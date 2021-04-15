import React from "react" 
import { NavLink } from "react-router-dom"
import { NavContent, NavContentItem, NavStyle } from "./styles/Style.js";

const Navigation = () => {
    return (
        <NavStyle>
            <NavContent>
                <NavContentItem>
                    <NavLink to="/" activeClassName="active">Artikler</NavLink> 
                </NavContentItem>
                <NavContentItem>
                    <NavLink to="/contact" activeClassName="active">Kontakt oss</NavLink> 
                </NavContentItem>
                <NavContentItem>
                    <NavLink to="/about" activeClassName="active">Om oss</NavLink> 
                </NavContentItem>
                <NavContentItem>
                    <NavLink to="/gallery" activeClassName="active">Galleri</NavLink> 
                </NavContentItem>        
           </NavContent>
        </NavStyle>
    );
}

export default Navigation;