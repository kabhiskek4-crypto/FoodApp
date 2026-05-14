import { LOGO_URL } from "../utils/constants";
const Header =() => {
    return (
        <div className= "header">
                <img className="logo" src={LOGO_URL} alt="logoim" />

            <div className="nav-items">
                <ul>home</ul>
                <ul>about us</ul>
                <ul>contact</ul> 
        </div>
            </div>
    )
}

export default Header;