import { Link } from "react-router-dom";
import { PreviewArticle, TittelWrapper } from "../styles/HomeStyle";



const Extraposts = ({ title, mainImage, typeartikkel, ledetekst, slug }) => {
    return (
        <>
        <PreviewArticle>
            <Link to={"/post/" + slug.current} key={slug.current + 'extra'}>
                    <span >
                    <img style={{height: "200px", width: "300px"}}
                    src={mainImage.asset.url} 
                    alt={mainImage.alt}
                    />
             </span>
            </Link>
            <TittelWrapper>
                <h3>{title}</h3>
                <p className="artikkeltype">
                    {typeartikkel}
                </p>
                    </TittelWrapper>
                <p>
                    {ledetekst}
                </p>
                                
            <Link to={"/post/" + slug.current} key={slug.current}><p>Les mer</p></Link>
        </PreviewArticle>
        </>
    )
}

export default Extraposts;