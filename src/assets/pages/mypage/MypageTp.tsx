import {useEffect, useState} from "react";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

const MypageTp = () => {
    const navigation = useNavigate();
    useEffect(() => {
        $(".modal .close").click(function () {
            $(".modal").hide();
            $("body").removeClass("noneScroll");
        });

        $(".view").show();
        $(".hidden").hide();
    }, []);
    function openModal(modalname: any) {
        $("#" + modalname).show();
        $("body").addClass("noneScroll");
    }
    const toggleHandle = () => {
        $(".toggle_cont").toggle();
    };
    const toggleHandle2 = () => {
        $(".toggle_cont2").toggle();
    };
    const toggleHandle3 = () => {
        $(".toggle_cont3").toggle();
    };
    const toggleHandle4 = () => {
        $(".toggle_cont4").toggle();
    };
    const toggleHandle5 = () => {
        $(".toggle_cont5").toggle();
    };

    return (
        <>
            <main className="sub mypage">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        {/* <!-- sub title --> */}
                        <article className="sub_title Title01 tal">
                            마이페이지
                            <div className="mypage-title_ico">
                                <div className="ico logout" onClick={() => openModal("confirm")}></div>
                                <div className="ico alarm"></div>
                                <div className="ico set"></div>
                            </div>
                        </article>

                        <article className="l-mypage">
                            <div className="mypage_top">
                                <div className="mypage_top-left box_cont">
                                    <div className="top-left_info">
                                        <div className="name Title02">
                                            <span className="mr10">투어코리아 여행사</span>
                                        </div>
                                        <div className="id Fs_sm">
                                            홍길동님
                                            <button type="button" className="button myinfo step ml10">
                                                <span className="Fs_sm" onClick={() => navigation("/personal_info_TP")}>
                                                    나의정보
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="12px" viewBox="0 0 50 80">
                                                        <polyline
                                                            fill="none"
                                                            stroke="#fff"
                                                            strokeWidth="6"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            points="
                  0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <button className="button top-left_btn tac Fs_sm">
                                        픽업예정
                                        <span className="fwb ml5 Title03">
                                            100건
                                            <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="12px" viewBox="0 0 50 80">
                                                <polyline
                                                    fill="none"
                                                    stroke="#333"
                                                    strokeWidth="6"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    points="
              0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                <div className="mypage_top-right box_cont">
                                    <ul className="top-right_ico">
                                        <li className="cursor tac line ico" onClick={() => navigation("/rsv_status")}>
                                            <img src="/img/icon/Check_File.svg" alt="예약확인" />
                                            <p>예약확인</p>
                                        </li>
                                        <li className="cursor tac line ico" onClick={() => navigation("/rsv_main")}>
                                            <img src="/img/icon/Calendar_Plus.svg" alt="예약하기" />
                                            <p>예약하기</p>
                                        </li>
                                        <li className="cursor tac ico" onClick={() => navigation("/news_list")}>
                                            <img src="/img/icon/Megaphone.svg" alt="뉴스&이벤트" />
                                            <p>뉴스&이벤트</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <nav className="mypage_gnb mt30">
                                <ul>
                                    <li>
                                        <a className="arrow" href="#" onClick={() => openModal("point-search")}>
                                            지점정보
                                        </a>
                                    </li>
                                    <li>
                                        <a className="arrow" href="/car_info">
                                            보유차량
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a className="arrow" href="/user_guide">
                                            이용가이드
                                        </a>
                                    </li>
                                    <li>
                                        <a className="arrow" href="/faq">
                                            FAQ
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a className="arrow" href="/inquiry_list">
                                            1:1 문의
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            뉴스레터 구독현황
                                            <div className="toggle-btn yes">
                                                <input type="checkbox" className="checkbox" />
                                                <div className="knobs"></div>
                                                <div className="layer"></div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a className="arrow" href="/membership">
                                            멤버십 안내
                                        </a>
                                    </li>
                                    <li>
                                        <a className="arrow" href="#" onClick={() => openModal("emergency_contact")}>
                                            현지 긴급 연락처
                                        </a>
                                    </li>
                                </ul>
                            </nav>

                            <ul className="mypage_bottom mt30">
                                <li className="Fs_sm tac line">
                                    <a href="/company">알라모 소개</a>
                                </li>
                                <li className="Fs_sm tac line">
                                    <a onClick={() => openModal("tos")}>이용약관</a>
                                </li>
                                <li className="Fs_sm tac">
                                    <a href="#">개인정보 취급방침</a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>

                {/* <!-- Modal content S --> */}
                {/* <!-- 로그아웃 확인 --> */}
                <div id="confirm" className="modal">
                    <div className="modal-content">
                        <span className="close fwb">&times;</span>
                        <p>로그아웃하시겠습니까?</p>
                        <button type="button" className="full_button button button--primary mt30">
                            확인
                        </button>
                    </div>
                </div>
                {/* <!-- 이용약관 --> */}
                <div id="tos" className="modal">
                    <div className="modal-content2">
                        <div className="modal-title Title03">이용약관</div>
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                            <div className="box_cont open mb10">
                                <div className="cont_title arrow toggle_btn" onClick={toggleHandle}>
                                    이용약관1
                                </div>
                                <div className="tos_info view hidden toggle_cont">
                                    <div className="txt_wrap">
                                        <h2>제1장 총칙</h2>
                                        <ul>
                                            <li className="txt_step_tit">제1조 (목적)</li>
                                            <li className="txt">
                                                본 약관은 귀하가&nbsp;주식회사&nbsp;메타세이프(이하 "당사")의 온라인 및 모바일 서비스, 웹 사이트 및 서비스 뿐만 아니라, 당사가 제공하는 saffy(이하 "서비스") 를 이용할 수 있는 조건, "당사" 와 "사용자" 간의 권리,
                                                의무 및 책임 등을 규정합니다.
                                                <br />
                                                <br />본 약관은 당사의 "서비스"에 접속한 방문자, 비회원, 회원, 제공자, 기고자 등 (이하 "사용자")에게 적용됩니다.{" "}
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제2조 (약관의 효력과 변경)</li>
                                            <li>1. 본 약관은 귀하가 “당사”의 "서비스" 접속 또는 이용 시 본 약관 및 개인 정보 보호 정책, 저작권 정책 등 “당사”가 명시한 정책에 동의한 것으로 간주하며 즉시 효력이 발생합니다.</li>
                                            <li>2. “당사”는 관련 법령에 위배되지 않는&nbsp;범위에서&nbsp;사전 고지 없이 본 약관을 개정할 수 있습니다.</li>
                                            <li>
                                                3. “당사”는 변경된 약관 정보를 적용일 기준 7일 이전에 적용 일자 및 개정 사유를 “당사”의 웹사이트 "서비스" 공지 및 전자우편 등의 방법으로 고지함으로써 “사용자”의 동의 및 적용이 된 것으로 간주, 즉시 변경된 약관의
                                                효력이 발생합니다.
                                            </li>
                                            <li>4. “당사”는 변경된 약관 정보에 “사용자”에게 불리한 내용이 포함된 경우 최소 30일 이전에 이를 공지해야 하며, “사용자”가 이를 쉽게 확인할 수 있도록 홈페이지에 명시할 의무가 있습니다.</li>
                                            <li>5. “사용자”는 변경된 약관에 동의하지 않을 경우 회원 탈퇴 및 해지가 가능하며, “사용자”가 변경된 약관의 효력 발생일 이후 "서비스"를 사용할 경우 약관의 변경 사항에 동의한 것으로 간주합니다.</li>
                                            <li>6. “당사”는 “사용자”가 “당사”의 "서비스"를 통해 고지 또는 명시한 변경된 약관에 대한 정보를 인지하지 못해 발생한 피해에 대해 책임을 지지 않습니다.</li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제3조 (용어의 정의)</li>
                                            <li>1. "사용자" 란 회원, 비회원, 기고자, 제공자 등 "당사" 의 "서비스"를 이용하는 모든 사람, 단체, 법인을 말하며 개인, 사업자, 법인 등을 포함합니다.</li>
                                            <li>2. "회원" 이란 “당사”와 “이용 계약” 을 체결하고 “당사” 의 “서비스” 이용에 대한 계정을 부여 받은 “사용자” 를 말합니다.</li>
                                            <li>3. "무료회원"이라 함은 유료회원이 아닌 회원으로 회원가입 이후에 기본적으로 모든 회원에게 부여되는 자격을 가진 회원을 의미합니다.</li>
                                            <li>4. "유료회원"이란 유료"서비스"를 이용하는 회원을 의미합니다.</li>
                                            <li>5. "이용계약" 이란 "당사" 가 제공하는 "서비스"를 이용하기 위해 "사용자" 가 "당사" 와 체결한 계약을 뜻하며, "회원가입" 과 동일한 의미입니다.</li>
                                            <li>6. "유료서비스"란 "회원"이 "서비스"를 이용하는데 있어서 별도의 비용을 지급하고 사용하는 것을 의미합니다.</li>
                                            <li>7. “결제”란 회원이 특정 “유료서비스”를 이용하기 위하여 각종 지불수단을 통하여 회사가 정한 일정 금액을 회사에 지불하는 것을 의미합니다.</li>
                                            <li>8. "정기결제"란 "회원"이 “유료서비스”를 이용하기 위해 미리 등록한 결제수단을 통하여 월/년 단위의 이용기간에대한 이용요금이 정기적으로 결제되고, 이용기간이 자동 갱신되는 "결제" 방식을 의미합니다.</li>
                                            <li>9. "해지" 란 "회원" 이 "당사" 와 체결한 "이용 계약" 을 해약하는 것을 말하며, "회원 탈퇴" 와 동일한 의미입니다.</li>
                                            <li>10. "콘텐츠"란 "디자인 요소"와 "템플릿" 및 각각의 키워드, 이름, 설명 등의 메타데이터를 포함합니다.</li>
                                            <li>11. "디자인 요소"란 "사용자"가 "편집기능"을 통해 사용할 수 있도록 "당사"가 제공하는 모든 유료 또는 무료의 사진, 모든 유료 또는 무료의 정보, 도형, 일러스트, 글꼴, 폰트 등의 데이터를 의미합니다.</li>
                                            <li>12. "템플릿"이란, "사용자"가 "편집기"를 통해 편집 및 사용할 수 있도록 복수의 "디자인 요소"를 조합한 데이터를 의미합니다.</li>
                                            <li>13. "사용자 템플릿" 이란 "사용자" 가 "당사" 가 제공하는 "편집기" 를 통해 직접 편집 또는 저장한 데이터를 의미합니다.</li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제4조 (서비스 이용계약의 성립)</li>
                                            <li>1. "사용자"는 "당사"가 제공하는 "회원" 을 위한 전용 "서비스" 를 이용하기 위해 "회원가입"을 통해 "이용계약" 을 요청할 수 있습니다.</li>
                                            <li>2. "이용계약" 은 "서비스" 회원 가입 시 등록한 이용 신청 정보에 대해 당사가 승인함으로써 즉시 효력이 발생하며, 이와 동시에 본 약관과 라이선스 정책, 개인정보 처리방침에 동의한 것으로 간주합니다.</li>
                                            <li>3. "당사"는 "서비스"를 이용하는 "회원"에 대하여 등급별로 구분하여 "서비스"의 이용에 차등을 둘 수 있습니다.</li>
                                            <li>
                                                4. "당사" 는 이유를 불문하고 언제든지 본 약관 또는 "라이선스 정책" 을 변경할 수 있으며, "사용자" 가 "서비스"에서 다운로드, 업로드, 게시 또는 인쇄하는 모든 "사용자 템플릿" 및 "콘텐츠"에 추가적인 조건을 적용할 수
                                                있습니다.
                                            </li>
                                            <li>
                                                5. "당사"는 다음 각 호에 대항하는 신청에 대하여는 이용계약을 취소하거나 거절할 수 있습니다.
                                                <ul>
                                                    <li>a. "회원가입"을 신청한 "사용자"가 본 약관에 의하여 회원자격을 상실한 적이 있는 경우</li>
                                                    <li>b. 타인의 명의를 도용하여 "회원가입"을 신청한 경우</li>
                                                    <li>c. "회원가입" 신청 시 허위의 정보를 기재하거나, 회사가 요구하는 내용을 기재하지 않은 경우</li>
                                                    <li>d. "회원가입" 신청 시 귀책사유로 인하여 승인이 불가능한 경우</li>
                                                    <li>e. "회원가입" 신청 시 기타 규정한 제반 사항을 위반하여 신청하는 경우</li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제5조 (개인정보 보호)</li>
                                            <li>1. "당사" 는 개인정보 취급 방침 및 관련 법령을 통해 "회원" 의 정보를 보호하여야 할 의무가 있습니다.</li>
                                            <li>2. "회원" 은 비밀번호, 이메일 등 계정 정보 유출에 유의해야 하며, "당사" 는 "회원" 의 귀책 사유로 노출된 정보에 대해 책임을 지지 않습니다.</li>
                                            <li>
                                                3. "당사" 는 다음과 같은 경우에 법이 허용하는 범위 내에서 "회원" 의 개인 정보를 제 3자에게 제공할 수 있습니다.
                                                <ul>
                                                    <li>a. 이용자들이 사전에 동의한 경우</li>
                                                    <li>b. 통계작성, 학술연구 또는 시장조사를 위하여 필요한 경우로서 특정개인을 식별할 수 없는 형태로 제공하는 경우</li>
                                                    <li>
                                                        c. 영업의 양도·합병 등에 관한 사유가 발생하는 경우(단, 회사는 영업의 양도 등에 관한 사유가 발생하여 이용자의 개인정보 이전이 필요한 경우, 관계법률에서 규정한 절차와 방법에 따라 개인정보 이전에 관한 사실
                                                        등을 사전에 고지하며, 이용자에게는 개인정보 이전에 관한 동의 철회권을 부여합니다.)
                                                    </li>
                                                    <li>d. 법령의 규정에 의거하거나, 수사 목적으로 사기관의 요구가 있는 경우</li>
                                                </ul>
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제6조 (회원의 계정)</li>
                                            <li>1. "당사" 는 "이용계약" 을 체결하고 "회원" 의 자격을 얻는 "사용자" 에게 본 약관에 따라 독립적인 계정을 생성하고 "사용자"가 입력한 이메일 주소를 "이메일 계정" 에 부여합니다.</li>
                                            <li>2. "당사" 는 "이용계약" 을 체결한 "회원" 의 유료 또는 무료 계정에 대해 "당사"가 정한 "라이센스 정책" 이 허용하는 범위 내에서 "서비스" 를 사용할 수 있는 권한을 부여합니다.</li>
                                            <li>3. "회원" 은 "당사" 가 "서비스" 를 통해 제공하는 가입 해지 메뉴 또는 고객 센터를 통해 "이용계약" 을 해지할 수 있습니다.</li>
                                            <li>4. "사용자" 는 계정을 만들 때 정확하고 완전한 정보를 제공해야 하며, "당사"는 관계 법령상 개인 정보 취급 방침에 따라 "사용자" 또는 "회원" 의 개인 정보를 관리 및 변경할 수 있습니다.</li>
                                            <li>
                                                5. "사용자" 는 허가 없이 다른 “사용자”의 계정을 이용할 수 없으며, 타인의 정보를 도용하거나 허위로 정보를 등록할 경우 "서비스" 권리 침해 및 보안 등 이슈가 발생하여도 아무런 권리를 주장할 수 없고 관계 법령에 따라
                                                민사상 손해배상책임 또는 형사 처벌을 받을 수 있습니다.
                                            </li>
                                            <li>6. "당사" 는 타인의 정보(타인의 이름, 이메일)를 도용하여 "이용 계약"을 체결한 "회원"의 계정을 삭제할 수 있으며, 그에 따른 책임은 전적으로 “회원”이 부담합니다.</li>
                                            <li>7. "당사"는 "사용자" 의 이메일 계정을 다음에 해당하는 사유로 변경 또는 해지할 수 있습니다.</li>
                                            <li>
                                                <ul>
                                                    <li>a. “사용자” 이메일 계정이 개인을 식별할 수 있는 정보를 포함하여 타인의 사생활을 침해할 우려가 있는 경우</li>
                                                    <li>b. “사용자” 이메일 계정이 타인에게 혐오감을 주거나 사회의 불안감을 조성할 수 있는 정보를 포함한 경우</li>
                                                    <li>c. “사용자” 이메일 계정이 "당사", "당사" 의 "서비스" 또는 "서비스" 운영자 등과 명칭이 동일하거나 오인 등의 우려가 있는 경우</li>
                                                    <li>
                                                        d. “사용자” 이메일 계정이 기타 법적인 문제, 사회적 분쟁 등을 야기할 수 있는 합리적인 사유가 있는 경우 "회원" 의 계정에서 발생하는 활동으로 인하여 발생하는 분쟁에 대한 사실상/법률상 책임은 전적으로 "회원"
                                                        당사자에게 있으며, “당사”는 어떠한 책임을 부담하지 않으므로 “회원”은 계정의 암호를 안전하게 유지해야 합니다.
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                9. "회원" 은 다른 사람이 "회원" 당사자의 고유한 사용자 이름, 비밀번호 또는 기타 보안 코드로 "서비스" 에 액세스하거나 "서비스" 를 이용하도록 허용 할 수 없으며, "회원" 은 보안 위반 또는 계정 무단 사용이 발생하면
                                                즉시 "당사" 에 알려야 합니다.
                                            </li>
                                            <li>
                                                10. "회원"의 계정과 비밀번호에 대한 모든 관리 및 책임은 “회원” 에게 있으며, "당사" 는 "회원" 이 이메일 계정 또는 비밀 번호를 사용 및 관리하는 과정에서 발생하는 과실로 인해 제 3자에 의한 부정 사용 등의 침해를 입은
                                                경우 책임을 지지 않습니다.
                                            </li>
                                            <li>11. "당사" 는 계정의 무단 사용으로 인한 손실에 대해 책임을 지지 않으며, "회원" 이 본인의 계정에 대한 강력한 암호를 설정할 것을 권고합니다.</li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제7조 (회원에 대한 통지 및 공지)</li>
                                            <li>
                                                1. 당사”는 “회원”에게 알려야 할 사항이 있는 경우, “회원”이 공개한 이메일주소, 전화 등의 연락처를 통해 개별 통지하거나, 앱을 통해 팝업메세지, 알림메세지 등의 방법으로 개별 통지할 수 있습니다. 다만, “회원”이
                                                연락처를 미기재하거나 변경하거나, 앱을 삭제 또는 이용하지 않는 등으로 인하여 개별 통지가 어려운 경우 “회사”의 게시판 등에 7일 이상 게시함으로써 개별 통지를 갈음할 수 있습니다.
                                            </li>
                                            <li>
                                                2. “당사”는 “회원” 전체에 대한 통지의 경우 7일 이상 “회사”의 게시판에 게시함으로써 전항의 개별 통지를 갈음 할 수 있습니다. 다만, “회원” 본인의 거래와 관련하여 중대한 영향을 미치는 사항에 대하여는 전항과 동일한
                                                방법으로 통지를 합니다.
                                            </li>
                                            <li>
                                                3. “당사”는 본조의 공지 또는 개별 통지를 하면서 특정일까지 회원이 거부 의사를 표시하지 아니할 경우 공지 또는 개별 통지 내용에 동의한 것으로 간주한다는 내용을 고지하였으나, 회원이 명시적으로 그에 대한 거부의사를
                                                표시하지 아니하면, 회사는 회원이 특정일자 부로 공지 또는 개별 통지 내용에 동의한 것으로 간주합니다.
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제8조 (계약 변경 및 해지)</li>
                                            <li>1. ”회원”이 이용 계약을 해지하고자 하는 때에는 회원 본인이 "사용자정보"내의 메뉴를 이용해 가입해지를 해야 하며, 웹 내의 메뉴 이용이 불가한 상황에선 고객센터를 통해 계약 해지가 가능합니다.</li>
                                            <li>
                                                2. “회원”의 "서비스" 이용 계약 해지, 회원 박탈 등으로 인해 “회원”과 “당사”의 "서비스" 이용 계약이 종료되는 경우, 본 약관 및 관계 법령에서 별도로 정하는 경우를 제외하고는 “당사”는 더 나은 "서비스" 환경의 유지 등을
                                                위하여 회원 정보 및 회원과 관련된 모든 정보를 삭제할 수 있습니다. 따라서 “회원”은 "서비스" 이용 계약 종료 이전에 보관이 필요한 정보는 별도로 백업 또는 저장하여야 하며, “당사”는 이용 계약 종료 이후 회원과 관련된
                                                모든 정보 삭제로 인한 책임을 부담하지 않습니다
                                            </li>
                                            <li>
                                                3. 본 조에 따라 해지를 한 “회원”은 본 약관이 정하는 회원가입 절차 및 관련조항에 따라 신규 회원으로 다시 가입할 수 있습니다. 다만 제11조 8항에 따라 이용계약이 해지된 후 재가입 신청하는 경우 “당사”는 재가입을
                                                일정기간 동안 제한할 수 있습니다.
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제9조 (서비스 이용 시간)</li>
                                            <li>
                                                1. "당사" 는 원칙적으로 "서비스" 를 휴일과 무관하게 매일 24시간 내내 이용이 가능하도록 운영하지만, "서비스" 보완 또는 개선을 위한 예정된 작업 또는 기술적인 문제가 발생했을 경우 별도의 공지 또는 통지 없이 "서비스"
                                                를 중단할 수 있습니다.
                                            </li>
                                            <li>
                                                2. “당사" 는 긴급한 시스템 점검, 증설 및 교체 등 부득이한 사유로 인하여 별도의 예고 또는 통지 없이 "서비스" 를 일시적으로 중단할 수 있으며, 합리적인 사유에 의해 현재 제공되는 "서비스" 를 완전히 중단할 수
                                                있습니다.
                                            </li>
                                            <li>
                                                3. "당사" 는 국가 비상 사태, 정전, 설비 등의 장애 또는 "서비스" 이용 폭주 등으로 정상적인 "서비스" 제공이 불가능한 경우, 그 사유 및 기간을 "회원" 에게 사전 또는 사후 공지하고 "서비스" 의 전부 또는 일부를 제한
                                                또는 중지할 수 있습니다.
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제10조 (서비스 이용 제한 범위)</li>
                                            <li>
                                                1. "당사" 는 "사용자" 또는 "회원"의 사용자 콘텐츠 또는 행위가&nbsp;아래의 사용 금지 범위에 해당하는 경우, 사전의 통지 없이 "사용자"의 콘텐츠 및 "회원"이 업로드 한 기타 “사용자”의 콘텐츠 또는 “사용자 템플릿” 을
                                                즉시 삭제할 수 있습니다.
                                            </li>
                                            <li>
                                                2. "당사" 는 사전 통지 없이 "서비스" 를 변경하거나 "사용자" 또는 "회원" 에게 "서비스" 또는 기능 제공을 중지할 수 있으며, "서비스" 또는 기능 제공이 중지되더라도 "사용자" 또는 "회원" 은 본 약관 및 “라이센스 정책”
                                                에 구속됩니다.
                                            </li>
                                            <li>
                                                3. 어떤 이유로든 계정이 해지된 "사용자" 는 다른 계정을 만들기 전에 "당사" 의 사전 승인을 받아야 하며 “당사” 의 승인을 받지 않고 다른 계정을 만들 경우, "당사" 는 해당 "사용자" 에 대해 "서비스"를 영구적으로 차단할
                                                수 있습니다.
                                            </li>
                                            <li>4. "당사" 는 "사용자" 또는 "회원" 간의 분쟁을 모니터링 할 권한이 있지만 의무는 없습니다.</li>
                                            <li>5. "당사" 는 "사용자" 또는 "회원" 상호 간의 분쟁에 대한 책임을 지지 않으며, 이에 대한 책임은 "사용자" 또는 "회원" 본인에게 있습니다.</li>
                                            <li>6. "당사" 는 회사의 설비, 기술적인 문제 또는 기타 “당사” 의 귀책 사유로 인해 불가피한 경우 “회원” 및 “사용자”의 "서비스" 이용을 제한할 수 있습니다.</li>
                                            <li>7. "당사" 는 방송통신위원회 등의 공공 기관의 시정 요구가 있을 경우 "회원" 에 대해 "서비스" 이용을 제한할 수 있습니다.</li>
                                            <li>
                                                8. "회원""은 관계법령, 이 약관의 규정, 이용지침, "서비스" 이용안내 및 "서비스"와 관련하여 공지한 주의사항,&nbsp;“당사”가 통지하는 사항 등을 준수하여야 하며, 기타&nbsp;“당사”의 업무에 방해되는 행위 및 다음 각호에
                                                해당하는 행위를 해서는 안 됩니다.
                                                <ul>
                                                    <li>a. 회원가입 또는 회원정보 변경 시 허위 내용을 등록하는 행위</li>
                                                    <li>b. 이벤트 참여 등의 과정에서 비정상적인 가입을 시도하거나 "서비스" 제공을 방해하는 행위</li>
                                                    <li>c. 타인의 정보를 수집, 저장, 공개하거나 도용하여 부정하게 사용하는 행위</li>
                                                    <li>d. 법령의 규정에 의거하거나, 수사 목적으로 사기관의 요구가 있는 경우</li>
                                                    <li>e. 저작권법에 위반하여 기술적 보호조치를 무력화하는 불법 프로그램 이용 등 비정상적인 경로를 통해 "서비스"를 이용하는 행위</li>
                                                    <li>
                                                        f. 회사의 동의 없이 "서비스", 콘텐츠 또는 이에 포함된 소프트웨어의 일부를 복사, 수정, 배포, 판매, 양도, 대여하거나 타인에게 그 이용을 허락하는 행위와 소프트웨어를 역설계하거나 소스 코드의 추출을 시도하는
                                                        등 "서비스"를 복제, 분해 또는 모방하거나 기타 변형하는 행위
                                                    </li>
                                                    <li>g. “당사”의 운영자, 임직원,&nbsp;“당사”를 사칭하거나 관련 정보를 도용하는 행위</li>
                                                    <li>h. “당사”가 "서비스"에 게시한 정보를 변경하거나 전송하는 행위</li>
                                                    <li>i. “당사”와 기타 제3자의 저작권, 영업비밀, 특허권 등 지적재산권을 침해하는 행위</li>
                                                    <li>j. 제공되는 "서비스"를 사적 목적이 아닌 공공장소에서 공개하거나 영리를 목적으로 이용하는 행위</li>
                                                    <li>k. 자신의 재산상 이익을 위하여&nbsp;“당사”&nbsp;또는&nbsp;“당사”의 "서비스"와 관련된 허위의 정보를 유통하거나 비정상적으로 "서비스"를 이용하는 행위</li>
                                                    <li>l. “당사”와 다른 "회원" 및 기타 제3자를 희롱하거나, 위협하거나 명예를 손상시키는 행위</li>
                                                    <li>m. 외설, 폭력적인 메시지, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위</li>
                                                    <li>n. 고객센터 문의 시 욕설, 폭언, 성희롱, 반복적인 민원을 통해 업무를 방해하는 행위</li>
                                                    <li>o. 현행 법령에 위반되는 불법적인 행위</li>
                                                    <li>p. 기타&nbsp;“당사”의 건전한 "서비스" 운영을 방해하는 일체의 행위</li>
                                                </ul>
                                            </li>
                                            <li>9. “당사”는 "회원"이 전항에서 금지한 행위를 하는 경우, 위반 행위의 경중에 따라 "서비스"의 이용정지/계약의 해지 등 "서비스" 이용 제한, 수사 기관에의 고발 조치 등 합당한 조치를 취할 수 있습니다.</li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제11조 (콘텐츠의 저작권과 이용)</li>
                                            <li className="txt">
                                                당사” 또는 “서비스”가 제공하는 모든 “콘텐츠”의 저작권은 해당 “콘텐츠”를 제작한 원저작자에 있으며, “콘텐츠” 공급자 또는 “당사”의 독점적 자산입니다. “회원”은 "서비스"가 제공하는 “콘텐츠”를 라이센스 정책(링크)에
                                                따라 이용해야 합니다. 라이센스 정책을 위반함으로써 발행하는 분쟁에 대해서 “회원”이 단독으로 책임을 지며, “회원”은 자신의 책임 및 비용으로 분쟁을 해결해야 합니다.
                                            </li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제12조 (당사의 의무)</li>
                                            <li>1. "당사" 는 지속적이고 안정적인 "서비스" 의 제공을 위하여 설비에 장애 발생 시 지체 없이 설비를 수리 및 복구합니다.</li>
                                            <li>2. "당사" 는 개인 정보 보호를 위해 개인정보취급방침을 공시하고 준수합니다.</li>
                                            <li>
                                                3. "당사" 는 "사용자" 또는 "회원" 이 제시한 의견, 불만, 건의 내용이 정당하다고 판단되는 경우, 적절한 절차를 걸쳐 반영 및 개선할 의무가 있고 즉각적인 반영 및 개선의 불가능한 경우 "사용자" 에게 그 사유와 처리
                                                일정을 통지합니다.
                                            </li>
                                            <li>4. "당사" 는 "서비스"의 개선 또는 보완 등을 위해 예정된 작업으로 일시적인 "서비스" 중단이 필요한 경우, 사전에 "회원" 또는 "사용자" 에게 "당사" 의 "서비스" 를 통해 공지합니다.</li>
                                        </ul>

                                        <ul>
                                            <li className="txt_step_tit">제13조 (회원의 의무)</li>
                                            <li>
                                                1. "회원" 은 회원 가입 신청 또는 회원 정보 변경 시 모든 사항을 사실에 근거하여 작성하여야 하며 허위 정보 또는 타인의 정보를 이용한 사실이 발견된 경우, “"서비스"” 이용과 관련한 일체의 권리를 주장할 수 없습니다.
                                            </li>
                                            <li>
                                                2. "회원" 은 본 약관에서 규정하는 사항과 기타 “당사” 가 정한 제반 규정, “당사” 가 공지하는 사항 및 관계 법령을 준수하여야 하며, “당사” 의 업무에 방해되는 행위, “당사” 의 명예를 손상 시키는 행위, 타인에게 피해를
                                                주는 행위를 해서는 안 됩니다.
                                            </li>
                                            <li>3. "회원" 은 청소년보호법 등 관계 법령을 준수하여야 하며, 이를 위반한 경우 관계 법령에 따라 처벌을 받을 수 있습니다.</li>
                                            <li>4. "회원" 은 회원에게 부여된 이메일 아이디와 비밀번호를 직접 관리해야 하며, 회원의 관리 소홀로 발생한 문제의 책임은 회원에게 있습니다.</li>
                                            <li>5. "회원" 은 "당사" 의 사전 승낙 없이 "서비스"를 이용하여 영업 활동을 할 수 없으며, 그 영업 활동의 결과에 대한 책임은 회원에게 있습니다.</li>
                                            <li>
                                                6. "회원" 이 "당사" 의 사전 승낙 없이 "당사" 의 "서비스" 를 이용하여 영업 활동을 하고 그 과정 또는 결과로 인해 "당사" 또는 "당사" 의 "서비스" 에 손해를 끼칠 경우, “당사” 는 해당 "회원" 에게 "서비스" 이용을
                                                제한하고 적법한 절차를 통한 손해 배상을 요구할 수 있습니다.
                                            </li>
                                            <li>7. "회원" 은 "당사" 의 명시적 동의가 없는 한 "서비스"의 이용 권한, 기타 “이용 계약” 상의 지위를 타인에게 양도, 증여할 수 없으며 이를 담보로 제공할 수 없습니다.</li>
                                            <li>8. "회원" 은 "당사" 및 "당사" 의 제휴사, 기여자, 제공자, 개인 또는 기업 사용자를 포함한 제 3자의 지적 재산권을 침해하는 행위를 해서는 안 됩니다.</li>
                                            <li>9. "회원" 이 본 약관의 제 11조 ("서비스" 이용 제한의 범위)에 해당하는 행위를 하는 경우, "당사" 는 해당 "회원" 의 "서비스" 이용 제한 및 적법한 조치를 포함한 제재를 할 수 있습니다.&nbsp;</li>
                                            <li>10. "회원은 “"서비스"”를 이용하여 제작한 “사용자 템플릿” 을 “당사”가 사용사례의 공유 목적으로 "당사"의 웹사이트 및 소셜 미디어 등에 게재함을 허락합니다.</li>
                                            <li>11. "회원은 “서비스"를 이용하는 과정에서 입력하는 데이터 및 사용자 템플릿을 &nbsp;“당사”가 "서비스" 품질 개선 및 성능 향상, 사용자들에 대한 "서비스" 고도화 및 최적화 등을 목적으로 저장하는 것을 허락합니다.</li>
                                            <li>
                                                12. "회원"은 본 “약관” 및 “라이센스 정책” 에 관해 발생할 수 있는 질문에 대해 “당사” 또는 “당사” 의 대리인이 제공하는 피드백이 법률 자문이 아닌 본 “약관” 을 해석하기 위해서만 사용된다는 것을 명시적으로 동의합니다.
                                                당사는 “회원” 내지 “사용자”에게 법률 자문을 제공할 수 없으며, “당사” 또는 “당사” 의 대리인이 제공하는 모든 피드백과 관련된 어떠한 종류의 책임도 명시적으로 부인합니다.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box_cont open mb10">
                                <div className="cont_title arrow" onClick={toggleHandle2}>
                                    이용약관2
                                </div>
                                <div className="tos_info view hidden toggle_cont2">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias libero harum dicta a mollitia accusantium placeat vitae, eum, ad et fugiat. Labore dolore, dolorem officia distinctio at non debitis.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda maxime dolor, recusandae, voluptatem alias nisi possimus quisquam id debitis omnis eligendi libero. Cum eius eum nam provident a sed.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur explicabo animi minus recusandae dolorum consequatur mollitia optio. Eligendi accusamus aspernatur dignissimos saepe doloremque. Adipisci esse quo
                                    magnam? Tempora, natus!
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, error sequi non tenetur repellendus corrupti dolorum facilis sunt ab tempore iste, voluptatibus consequatur! Molestias labore vitae magni culpa sed alias.
                                </div>
                            </div>
                            <div className="box_cont open mb10">
                                <div className="cont_title arrow" onClick={toggleHandle3}>
                                    이용약관3
                                </div>
                                <div className="tos_info view hidden toggle_cont3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias libero harum dicta a mollitia accusantium placeat vitae, eum, ad et fugiat. Labore dolore, dolorem officia distinctio at non debitis.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda maxime dolor, recusandae, voluptatem alias nisi possimus quisquam id debitis omnis eligendi libero. Cum eius eum nam provident a sed.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur explicabo animi minus recusandae dolorum consequatur mollitia optio. Eligendi accusamus aspernatur dignissimos saepe doloremque. Adipisci esse quo
                                    magnam? Tempora, natus!
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, error sequi non tenetur repellendus corrupti dolorum facilis sunt ab tempore iste, voluptatibus consequatur! Molestias labore vitae magni culpa sed alias.
                                </div>
                            </div>
                            <div className="box_cont open">
                                <div className="cont_title arrow" onClick={toggleHandle4}>
                                    이용약관4
                                </div>
                                <div className="tos_info view hidden toggle_cont4">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi alias libero harum dicta a mollitia accusantium placeat vitae, eum, ad et fugiat. Labore dolore, dolorem officia distinctio at non debitis.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel assumenda maxime dolor, recusandae, voluptatem alias nisi possimus quisquam id debitis omnis eligendi libero. Cum eius eum nam provident a sed.
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tenetur explicabo animi minus recusandae dolorum consequatur mollitia optio. Eligendi accusamus aspernatur dignissimos saepe doloremque. Adipisci esse quo
                                    magnam? Tempora, natus!
                                    <br />
                                    <br />
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur, error sequi non tenetur repellendus corrupti dolorum facilis sunt ab tempore iste, voluptatibus consequatur! Molestias labore vitae magni culpa sed alias.
                                </div>
                            </div>
                            <button type="button" className="full_button button button--primary mt30">
                                확인
                            </button>
                        </div>
                    </div>
                </div>
                {/* <!-- 지점정보 --> */}
                <div id="search-branch" className="modal">
                    <div className="modal-content2">
                        <div className="modal-title Title03">예약취소</div>
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                            <p>예약 픽업일자 : 2021-01-11 12:00</p>
                            <div className="ask-box mt10">
                                <span className="error fwb">152,983원 차감</span> 후<br />
                                <span className="primary fwb">152,983원 환불</span> 예정입니다.
                                <br />
                                예약을 취소하시겠습니까?
                            </div>
                            <div className="l-button mt30">
                                <button type="button" className="button link button--cancle mr10">
                                    예약유지
                                </button>
                                <button type="button" className="button link button--primary">
                                    예약취소 처리
                                </button>
                            </div>
                            <table className="table02 mt50">
                                <thead>
                                    <tr>
                                        <th>기간 (한국 시간 기준)</th>
                                        <th>취소 수수료 및 환불</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>2022-11-26(토) 08:29까지</td>
                                        <td>전액환불</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            2022-11-26(토) 08:29 ~ <br />
                                            2022-11-28(월) 07:29
                                        </td>
                                        <td>
                                            <span className="primary">103,000</span>원<br />
                                            차감 후 환불
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2022-11-28(월) 07:29부터</td>
                                        <td className="error">환불 불가</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal content E --> */}
            </main>
        </>
    );
};
export default MypageTp;
