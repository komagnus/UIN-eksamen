import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import { NavLink } from "react-router-dom"
import '../styles/Artikkelnavigasjon.css';

export default function ArtikkelNavHome() { 
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
<div key="NavHolder"> 
    
        <div className="rc_nav" > 
         <NavLink to="/NavigasjonAlle" activeClassName="active" key={navigationListHeader.navigationname1}>{navigationListHeader.navigationname1}</NavLink>
         <NavLink to="/NavigasjonHelse" activeClassName="active" key={navigationListHeader.navigationname2}>{navigationListHeader.navigationname2}</NavLink> 
         <NavLink to="/NavigasjonInspirasjon" activeClassName="active" key={navigationListHeader.navigationname3}>{navigationListHeader.navigationname3}</NavLink> 
         <NavLink to="/NavigasjonNyheter" activeClassName="active" key={navigationListHeader.navigationname4}>{navigationListHeader.navigationname4}</NavLink> 
         <NavLink to="/NavigasjonProfflag" activeClassName="active" key={navigationListHeader.navigationname5}>{navigationListHeader.navigationname5}</NavLink> 
         <NavLink to="/NavigasjonTipsogtricks" activeClassName="active" key={navigationListHeader.navigationname6}>{navigationListHeader.navigationname6}</NavLink> 
         <NavLink to="/NavigasjonTutorials" activeClassName="active" key={navigationListHeader.navigationname7}>{navigationListHeader.navigationname7}</NavLink> 

        </div>
        <span className="line" ></span>
        </div>
        
        ))}

        </nav>

    );
};

