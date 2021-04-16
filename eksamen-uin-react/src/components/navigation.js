import React from "react" 
import { NavLink } from "react-router-dom"
import { NavContent, NavContentItem, NavStyle } from "../styles/Style.js";

const Navigation = () => {
    return (
        <NavStyle>
            <NavContent>
                <NavContentItem>
                    <NavLink to="/kontakt" activeClassName="active">Kontakt oss</NavLink> 
                </NavContentItem>
                <NavContentItem>
                    <NavLink to="/omOss" activeClassName="active">Om oss</NavLink> 
                </NavContentItem>
                <NavContentItem>
                    <NavLink to="/galleri" activeClassName="active">Galleri</NavLink> 
                </NavContentItem>        
           </NavContent>
        </NavStyle>
    );
};

export default Navigation;