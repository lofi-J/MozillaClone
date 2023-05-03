import "./MozillaIntro.css";
import dino from "../../images/dino.png";
import HeadTextComponent from "./heading-text/HeadTextComponent"
import P from "./p-text/P";
import note from "../../images/note-img.png";
import people from "../../images/people-img.png";
import tube from "../../images/tube-img.png";
import peoples from "../../images/peoples.png";
import footerLogo from "../../images/footer-logo.png";
import { useState } from "react";
import InputDetail from "./input-form/InputDetail";
import FooterList from "./FooterList";
// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok, faMastodon, faSpotify, faTwitter, faInstagram, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";




function MozillaIntro() {
    const [isFocus, setIsFocus] = useState(false);

    const onClickMethod = () => {
        setIsFocus(true);
    }

    //list
    const company = ['Mozilla 선언문', '보도자료', '기업 블로그', '채용 정보', '연락처', '기부'];
    const data = ['프라이버시 허브', '브라우저 비교', '브랜드 가이드'];
    const help = ['제품 도움말', '버그 신고'];
    const dev = ['Developer Edition', 'Beta', 'Android 용 Beta', 'Nightly', '기업용', '도구'];
    const companyObj = {
        className: 'company',
        name: '회사',
        arr: company
    }
    const dataObj = {
        className: 'data',
        name: '자료',
        arr: data
    }
    const helpObj = {
        className: 'help',
        name: '도움말',
        arr: help
    }
    const devObj = {
        className: 'dev',
        name: '개발자',
        arr: dev
    }
    const list = [companyObj, dataObj, helpObj, devObj];



    return (
    <div>
        <div className="wrap-mozilla-info">

            {/* dino */}
            <div className="container-sec">
                <section className="sec-img-info">
                    <div className="container-img">
                        <img src={dino} alt="dino-img"/>
                    </div>
                    <div>
                        <div className="container-text">
                            <HeadTextComponent type="h2" text="인터넷을 더 안전하고, 풍요롭고 좋은 사회로 만듭니다." />
                            <P text="Mozilla는 대안 웹 브라우저인 Firefox를 만들고 있는 비영리 조직입니다. 우리는 이익이 아닌 사람들을 위해 인터넷 서비스를 제공하는 제품과 정책을 개발합니다." />
                        </div>
                    </div>
                </section>
            </div>
            

            {/* ul and paragraph */}
            <div className="show-info">
                <div className="show-info-container">
                    <HeadTextComponent type="h2" text="영향력" />
                    <P text="Firefox를 사용함으로써, 온라인상의 잘못된 정보와 싸우고 디지털 기술을 가르치며 
                    댓글을 보다 인간적으로 만드는 Mozilla의 활동을 도울 수 있습니다. 보다 건강한 인터넷을 만드
                    는 데 도움이 되는 활동을 살펴보세요."/>
                    <ul className="show-info-ul">
                        <li className="show-info-li">Mozilla 정보 신뢰 계획</li>
                        <li className="show-info-li">온라인에서 여성의 힘 확대</li>
                        <li className="show-info-li">Coral 프로젝트</li>
                        <li className="show-info-li">인터넷 건전성 보고서 보기</li>
                    </ul>
                </div>

                <div className="show-info-container">
                    <HeadTextComponent type="h2" text="혁신" />
                    <P text="플랫폼으로서 웹을 활용함으로써 웹 개발자가 폐쇄적이고 상업적 생태계에 얽매이지 않고 
                    일할 수 있도록, 모든 사람에게 더 빠르고 안전한 웹 경험을 제공 할 수 있도록 개방적이고 혁신적인
                    기술을 개발하고 있습니다." />
                    <ul className="show-info-ul">
                        <li className="show-info-li">Common Voice</li>
                        <li className="show-info-li">가상 현실 플랫폼</li>                        
                    </ul>
                </div>
            </div>


            {/* 3 components */}
            <section className="external">
                <div className="external-container">
                    
                    <div className="external-component">
                        <img className="external-img" src={note} alt="note-img" />
                        <div className="external-text">
                            <HeadTextComponent type="h2" size="38" text="확장기능" />
                            <P text="암호 관리자, 광고 차단기 등 즐겨 찾는 부가 기능으로 밎춤형 Firefox를 사용하세요." />
                        </div>
                    </div>
                    
                    <div className="external-component">
                        <img className="external-img" src={people} alt="people-img" />
                        <div className="external-text">
                            <HeadTextComponent type="h2" size="38" text="채용 정보" />
                            <P text="Mozilla에서 근무하는 장점을 살펴보고 전세계에 열려있는 구인정보를 확인하세요." />   
                        </div>
                    </div>

                    <div className="external-component">
                        <img className="external-img" src={tube} alt="tube-img" />
                        <div className="external-text">
                            <HeadTextComponent type="h2" size="38" text="도움이 필요하십니까?" />
                            <P text="고객 지원 봉사자로 부터 Firefox와 Mozilla에 대한 질문에 대한 답을 받을 수 있습니다." />
                        </div>
                    </div>
                    
                </div>
            </section>

            <div className="newsletter">

                <div className="newsletter-left-side">
                    <div className="newsletter-img">
                        <img src={peoples} alt="peoples-img" />
                    </div>
                </div>

                <div className="newsletter-right-side">
                <HeadTextComponent className="newletterh3" type="h3" size="48" text="Firefox뉴스레터" />
                    <fieldset>
                        <label className="input-label">이메일 주소:</label>
                        <input onClick={onClickMethod} className="input-data" type="email" name="email" required placeholder="yourname@example.com" />

                        {
                            isFocus ? <InputDetail /> : undefined
                        }

                        <p className="button-container">
                            <button className="newsletter-button">지금 구독하기</button>
                            <span className="newsletter-note">Firefox와 관련된 정보만 전송합니다.</span>
                        </p>
                    </fieldset>
                </div>

            </div>

        </div>
        {/* footer */}
        <footer className="footer">
            <div className="footer-wrap">
                <div className="footer-top"> 
                    <div className="footer-logo-wrap"> {/* logo */}
                        <img src={footerLogo} alt="footer-logo.img" />
                    </div>

                    <div className="footer-content-wrap">   {/* content */}
                        <div className="footer-content-list">
                        {
                            list.map(item => {
                                return (
                                    <FooterList key={item.name} list={item} />
                                );
                            })
                        }
                            <div id="footer-content-last-child" className="footer-list-wrap footer-content-sns">
                                <div className="footer-content-sns-mozilla">
                                    
                                    <h5>@Mozilla 팔로우</h5>
                                    <div className="sns-wrap">
                                        <FontAwesomeIcon className="sns-icon" icon={faTwitter} />
                                        <FontAwesomeIcon className="sns-icon" icon={faMastodon} />
                                        <FontAwesomeIcon className="sns-icon" icon={faInstagram} />
                                        <FontAwesomeIcon className="sns-icon" icon={faLinkedin} />
                                        <FontAwesomeIcon className="sns-icon" icon={faTiktok} />
                                        <FontAwesomeIcon className="sns-icon" icon={faSpotify} />
                                    </div>
                                    
                                </div>    

                                <div className="footer-content-sns-firefox">
                                    
                                    <h5>@Firefox 팔로우</h5>
                                    <div className="sns-wrap">
                                        <FontAwesomeIcon className="sns-icon" icon={faTwitter} />
                                        <FontAwesomeIcon className="sns-icon" icon={faInstagram} />
                                        <FontAwesomeIcon className="sns-icon" icon={faYoutube} />
                                    </div>                            
                                    
                                </div>
                            </div>            
                        </div>                                
                    </div>
                </div>
                             
                        
                <div className="footer-bottom"> 
                    <div className="footer-bottom-left">
                        <ul className="footer-term">
                            <li>웹 사이트 개인정보처리방침</li>
                            <li>쿠키</li>
                            <li>법적 고지</li>
                            <li>커뮤니티 참여 가이드라인</li>
                            <li>이 사이트 정보</li>
                        </ul>
                        <pre className="footer-pre">
                        <b>Mozilla Corporation</b>를 운영하는 비영리 재단인 <b>Mozilla Foundation</b>을 방문하세요.<br />
                        <p className="copyright">본 웹 페이지는 Mozilla 웹 사이트의 클론 사이트임을 알리며 단순 css 숙련의 목적으로 작성된 페이지입니다.</p>
                        </pre>
                    </div>
                    
                    <div className="footer-bottom-right">
                        <form className="footer-form">
                            <label htmlFor="page-lang">언어</label>
                            <select id="page-lang" name="lang">
                                <option>한국어</option>
                            </select>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    );
}

export default MozillaIntro;