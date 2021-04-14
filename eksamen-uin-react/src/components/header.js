import { Link } from "react-router-dom";
import { HeaderWrapper } from "../styles/Style";
import { Logo } from "./logo";
import '../styles/Style.css';
import Navigation from "./navigation";

const Header = () => {
    return (
        <>
        <HeaderWrapper>
            <Link className="link" to="/"><Logo/></Link>
            <Navigation/>
        </HeaderWrapper>
        </>
    );
}

export default Header;