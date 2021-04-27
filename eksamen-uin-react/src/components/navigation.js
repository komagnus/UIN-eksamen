import React, { useEffect, useState } from "react";
import sanityClient from "../utils/client.js";
import { NavLink } from "react-router-dom"
import { NavContent, NavContentItem, NavStyle } from "../styles/NavStyle";

export default function Navigation() {
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

        <NavStyle key={'navstyle'}>
        {navigationListData && navigationListData.map((navigationList, index) => (                  

            <NavContent key={'nav1ContentItem'}>
                <NavContentItem key={'nav1ContentItem'}>
                    <NavLink to="/NavigasjonAlle" activeClassName="active" key={"navlink1"} >{navigationList.navigationname1}</NavLink> 
                </NavContentItem>

                <NavContentItem key={'nav2ContentItem'}>
                <NavLink to="/omOss" activeClassName="active" key={"navlink2"} >{navigationList.navigationname2}</NavLink> 
               </NavContentItem>

                <NavContentItem key={'nav3ContentItem'}>
                    <NavLink to="/kontakt" activeClassName="active" key={"navlink3"} >{navigationList.navigationname3}</NavLink> 
                </NavContentItem>

                <NavContentItem key={'nav4ContentItem'}>
                    <NavLink to="/galleri" activeClassName="active" key={"navlink4"} >{navigationList.navigationname4}</NavLink> 
                </NavContentItem> 
                       
           </NavContent>
           ))}
        </NavStyle>
    );
};

