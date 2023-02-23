import "./inputDetail.css";

const InputDetail = () => {
    return (
    <div className="input-form-container">

        <label className="input-label" for="id_country">국가 또는 지역을 선택하십시오:</label>
        <select name="country" required="required" aria-required="true" id="id_country">

        </select>

        <label className="input-label" for="id_lang">언어별:</label>
        <select name="lang" required="required" aria-required="true" id="id_lang">

        </select>
        
        <fieldset>
            <legend>형식</legend>
            <p>
                <label for="format-html" className="radio-label">
                    <input type="radio" id="format-html" name="format" value="H" checked />
                    HTML
                </label>

                <label for="format-text" className="radio-label">
                    <input type="radio" id="format-text" name="format" value="T" />
                    텍스트
                </label>
            </p>
        </fieldset>     

        <p>
            <label for="privacy" claaName="privacy-label">
                <input type="checkbox" id="privacy" name="privacy" required aria-required="true" />
                <a>개인정보처리방침</a>
                에 나타난내로 Mozilla가 개인 정보를 다루는 것에 대해서 동의합니다.
            </label>
        </p>


    </div>
    );
}

export default InputDetail;