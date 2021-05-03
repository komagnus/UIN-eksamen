import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import { NavLink } from "react-router-dom"
import { NavContent, NavContentItem, NavStyle } from "../styles/NavStyle";

export default function Navigasjon() {
    const [navigationListData, setNavigationList] = useState(null) ;

    useEffect(() => {
        sanityClient.fetch(`*[_type == "navigationList"]{
        navigationname1,
        navigationname2,
        navigationname3,
        navigationname4,
        }`).then((data) => setNavigationList(data))
        .catch(console.error);
    }, []);




    return (

        <NavStyle>
        {navigationListData && navigationListData.map((navigationList, index) => (                  

            <NavContent>
                <NavContentItem>
                    <NavLink to="/NavigasjonAlle" activeClassName="active">{navigationList.navigationname1}</NavLink> 
                </NavContentItem>

                <NavContentItem>
                <NavLink to="/omOss" activeClassName="active">{navigationList.navigationname2}</NavLink> 
               </NavContentItem>

                <NavContentItem>
                    <NavLink to="/kontakt" activeClassName="active">{navigationList.navigationname3}</NavLink> 
                </NavContentItem>

                <NavContentItem>
                    <NavLink to="/galleri" activeClassName="active">{navigationList.navigationname4}</NavLink> 
                </NavContentItem> 
                       
           </NavContent>
           ))}
        </NavStyle>
    );
};

