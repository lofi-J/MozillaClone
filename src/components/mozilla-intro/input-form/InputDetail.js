import "./inputDetail.css";


const InputDetail = () => {
    return (
    <div className="input-form-container">

        <label className="input-label" htmlFor="id_country">국가 또는 지역을 선택하십시오:</label>
        <select className="input-data" name="country" required="required" aria-required="true" id="id_country">
            <option defaultValue>국가 또는 지역을 선택하십시오</option>
            <option vlaue="ko">대한민국</option>
            <option vlaue="cn">중국</option> 
            <option vlaue="jp">일본</option>
            <option value="us">미국</option>
        </select>

        <label className="input-label" htmlFor="id_lang">언어별:</label>
        <select className="input-data" name="lang" required="required" aria-required="true" id="id_lang">
            <option defaultValue>언어별</option>
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="id">Bahasa Indonesia</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="pl">Polski</option>
            <option value="pt">Português</option>
            <option value="ru">Русский</option>
            <option value="zh-TW">正體中文</option>
        </select>
        
        <fieldset className="fieldset">
            <legend className="input-label">형식</legend>
            <p>
                <label htmlFor="format-html" className="radio-label">
                    <input type="radio" id="format-html" name="format" value="H" defaultChecked />
                    <b className="b">HTML</b>
                </label>

                <label htmlFor="format-text" className="radio-label">
                    <input type="radio" id="format-text" name="format" value="T" />
                    <b className="b">텍스트</b>
                </label>
            </p>
        </fieldset>     

        <div>
            <label htmlFor="privacy" className="privacy-label">
                <input className="checkbox01" type="checkbox" id="privacy" name="privacy" required aria-required="true" />
                <p className="privacy-wrap"><b className="a-link">개인정보처리방침</b>
                에 나타난내로 Mozilla가 개인 정보를 다루는 것에 대해서 동의합니다.</p>
            </label>
        </div>

        

        
    </div>
    );
}

export default InputDetail;