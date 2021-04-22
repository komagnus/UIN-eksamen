import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import { NavLink } from "react-router-dom"
import { NavContent, NavContentItem, Nav2Style } from "../styles/NavStyle";

export default function Artikkelnavigasjon() { 
    const [navigationListHeaderData, setNavigationListHeader] = useState(null) ;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "navigationListHeader"]{
        navigationname1,
        navigationname2,
        navigationname3,
        navigationname4,
        navigationname5,
        navigationname6,
        navigationname7,
        }`).then((data) => setNavigationListHeader(data))
        .catch(console.error);
    }, []);




    return (

        <Nav2Style>
        {navigationListHeaderData && navigationListHeaderData.map((navigationListHeader, index) => (                  

            <NavContent>
                <NavContentItem>
                    <NavLink to="/artikkelside/" activeClassName="active">{navigationListHeader.navigationname1}</NavLink> 
                </NavContentItem>

                <NavContentItem>
                <NavLink to="/artikkelside/helse" activeClassName="active">{navigationListHeader.navigationname2}</NavLink> 
               </NavContentItem>

                <NavContentItem>
                    <NavLink to="/artikkelside/inspirasjon" activeClassName="active">{navigationListHeader.navigationname3}</NavLink> 
                </NavContentItem>

                <NavContentItem>
                    <NavLink to="/artikkelside/nyheter" activeClassName="active">{navigationListHeader.navigationname4}</NavLink> 
                </NavContentItem> 

                <NavContentItem>
                <NavLink to="/artikkelside/profflag" activeClassName="active">{navigationListHeader.navigationname5}</NavLink> 
            </NavContentItem> 

            <NavContentItem>
            <NavLink to="/artikkelside/tipsogtriks" activeClassName="active">{navigationListHeader.navigationname6}</NavLink> 
        </NavContentItem> 

        <NavContentItem>
        <NavLink to="/artikkelside/tutorial" activeClassName="active">{navigationListHeader.navigationname7}</NavLink> 
    </NavContentItem> 
                       
           </NavContent>
           ))}
        </Nav2Style>
    );
};

