import "./SectionSplit.css";
import iphone from "../../images/iphone12.png"

function SectionSplit() {
    return(
        <section className="section">
            <div className="title-and-download">
                <h2 className="section-title">좋은 아이디어로 돌<br/>아가기 - 더 빠르게</h2>
                <button className="blue-button">새로운 Firefox 받기</button>
            </div>

            <div className="iphone-container">
                <img src={iphone} alt="section-img" className="iphone-img"></img>
            </div>
        </section>
    );
}

export default SectionSplit;