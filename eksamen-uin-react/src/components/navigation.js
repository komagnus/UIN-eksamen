import { NavLink } from "react-router-dom"
import { NavContent, NavContentItem, NavStyle } from "../styles/Style";

const Navigation = () => {
    return (
        <NavStyle>
            <NavContent>
                <NavContentItem>
                    <NavLink to="/artikler" activeClassName="active">Artikler</NavLink> 
                </NavContentItem>
                <NavContentItem>
                    <NavLink to="/kontakt" activeClassName="active">Kontakt oss</NavLink> 
                </NavContentItem>
                <NavContentItem>
                    <NavLink to="/OmOss" activeClassName="active">Om oss</NavLink> 
                </NavContentItem>
                <NavContentItem>
                    <NavLink to="/galleri" activeClassName="active">Galleri</NavLink> 
                </NavContentItem>        
           </NavContent>
        </NavStyle>
    );
}

export default Navigation;