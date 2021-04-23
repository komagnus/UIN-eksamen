  
import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import { NavLink } from "react-router-dom"
import { NavContent, NavContentItem, Nav2Style } from "../styles/NavStyle";
import '../styles/Artikkelnavigasjon.css';

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


        <nav className="pageNav">

        {navigationListHeaderData && navigationListHeaderData.map((navigationListHeader, index) => (                  
<div> 
        <div className="rc_logo">                 
        <a title="Logo">Artikler</a>
        </div>  
        
        
        <div className="rc_nav" > 
        <a> <NavLink to="/NavigasjonAlle" activeClassName="active">{navigationListHeader.navigationname1}</NavLink> </a>
        <a> <NavLink to="/NavigasjonHelse" activeClassName="active">{navigationListHeader.navigationname2}</NavLink> </a>
        <a> <NavLink to="/NavigasjonInspirasjon" activeClassName="active">{navigationListHeader.navigationname3}</NavLink> </a>
        <a> <NavLink to="/NavigasjonNyheter" activeClassName="active">{navigationListHeader.navigationname4}</NavLink> </a>
        <a> <NavLink to="/NavigasjonProfflag" activeClassName="active">{navigationListHeader.navigationname5}</NavLink> </a>
        <a> <NavLink to="/NavigasjonTipsogtricks" activeClassName="active">{navigationListHeader.navigationname6}</NavLink> </a>
        <a> <NavLink to="/NavigasjonTutorials" activeClassName="active">{navigationListHeader.navigationname7}</NavLink> </a>

        </div>
        <span className="line"></span>
        </div>
        
        ))}

        </nav>

    );
};