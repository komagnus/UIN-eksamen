import { Link } from "react-router-dom";
import { PreviewArticle, TittelWrapper } from "../styles/HomeStyle";



const Extraposts = ({ title, mainImage, typeartikkel, ledetekst, slug }) => {
    return (
        <>
        <PreviewArticle key={title}>
            <Link to={"/post/" + slug} key={slug + 'extra'}>
                    <span key={ slug + "imgwrap"}>
                    <img style={{height: "200px", width: "300px"}}
                    src={mainImage.asset.url} 
                    alt={mainImage.alt}
                    key={slug + "img"}
                    />
             </span>
            </Link> 
            <TittelWrapper key={slug + "tittelwrap"}>
                <h3 key={slug + "tittel"}>{title}</h3>
                <p className="artikkeltype" key={slug + "artikkeltype"}>
                    {typeartikkel}
                </p>
                    </TittelWrapper>
                <p key={slug + "ledetekst"}>
                    {ledetekst}
                </p>
                                
            <Link to={"/post/" + slug} key={slug}><p>Les mer</p></Link>
        </PreviewArticle>
        </>
    )
}

export default Extraposts;