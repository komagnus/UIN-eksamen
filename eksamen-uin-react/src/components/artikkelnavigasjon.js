import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import { NavLink } from "react-router-dom"
import { NavContent, NavContentItem, NavStyle } from "../styles/NavStyle";

export default function Artikkelnavigasjon() { 
    const [navigationListData, setNavigationListHeader] = useState(null) ;

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

        <NavStyle>
        {navigationListHeaderData && navigationListHeaderData.map((navigationListHeader, index) => (                  

            <NavContent>
                <NavContentItem>
                    <NavLink to="/" activeClassName="active">{navigationListHeader.navigationname1}</NavLink> 
                </NavContentItem>

                <NavContentItem>
                <NavLink to="/" activeClassName="active">{navigationListHeader.navigationname2}</NavLink> 
               </NavContentItem>

                <NavContentItem>
                    <NavLink to="/" activeClassName="active">{navigationListHeader.navigationname3}</NavLink> 
                </NavContentItem>

                <NavContentItem>
                    <NavLink to="/" activeClassName="active">{navigationListHeader.navigationname4}</NavLink> 
                </NavContentItem> 

                <NavContentItem>
                <NavLink to="/" activeClassName="active">{navigationListHeader.navigationname5}</NavLink> 
            </NavContentItem> 

            <NavContentItem>
            <NavLink to="/" activeClassName="active">{navigationListHeader.navigationname6}</NavLink> 
        </NavContentItem> 

        <NavContentItem>
        <NavLink to="/" activeClassName="active">{navigationListHeader.navigationname7}</NavLink> 
    </NavContentItem> 
                       
           </NavContent>
           ))}
        </NavStyle>
    );
};

