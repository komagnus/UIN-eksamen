import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import sanityClient from "../../utils/client.js";
import '../../styles/Artikkelside.css';
import Header from "../../components/header"
import Artikkelnavigasjon from "../Artikkelnavigasjon.js";

export default function Post() {
   
    const [postData, setPost] = useState(null);

    useEffect(() => {
        sanityClient
        .fetch(`*[_type == "post" && publishedAt >= ""] | order(publishedAt desc) {            
            title,
            slug,
            mainImage {
                asset->{
                    _id,
                    url
                },
                alt
            }
        }`)
        .then((data) => setPost(data))
        .catch(console.error);
    }, [] );
   

    
    return (
 

        <main className="hovedarket">
        <section>
        <Header/>

        <h1 className="sideoverskrift"> Alle - </h1>

        <Artikkelnavigasjon />

        <div>

{postData && postData.map((post, index) => (

        <article>
        
        <Link to={"/post/" + post.slug.current} key={post.slug.current}>





    <span  
        
        key={index} >

        <div className="row">
        <div className="column" style={{float: "left"}}>

        <img style={{height: "250px", width: "250px;"}}
        
        src={post.mainImage.asset.url} 
        alt={post.mainImage.alt} />

         <h3>
         {post.title}
         </h3>


         </div>
         </div>
         
        <span >


        </span>
        </span>
        </Link>

        </article>

))}

        </div>

        </section>
        </main>

        
    )
}


