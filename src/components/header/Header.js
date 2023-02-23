import logoMozilla from "../../images/mozilla-logo.png";
import "./header.css";

function Header() {
    return(
        <div className="header-navigation">
            <div className="header-container">
                {/* logo image */}
                <img src={logoMozilla} alt="logo-img" id="logo"></img>  
                {/* info contents */}
                <div className="header-contents">
                    <b className="header-content">Firefox 브라우저</b>
                    <b className="header-content">제품</b>
                    <b className="header-content">만드는 사람들</b>
                    <b className="header-content">혁신</b>
                </div>
                <button className="header-download-button">Firefox 다운로드</button>
            </div>
        </div>
    );
}

export default Header;