import "../css/link_style.css";

const LinkList = () => {
    return (
        <>
            <div id="publishingContainer">
                <ul className="page-link">
                    <li className="sub" data-label="메인">
                        <span className="label">
                            메인<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="/" target="_blank">
                                    메인
                                </a>
                            </li>
                        </ul>
                    </li>

                    <li className="mt50 sub" data-label="로그인/비밀번호">
                        <span className="label">
                            로그인/비밀번호<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 110px)"}}></span>
                            <li data-label="로그인" className="sub">
                                <span className="label">
                                    로그인<span></span>
                                </span>
                                <ul>
                                    <span className="division"></span>
                                    <li className="sub">
                                        <a href="login" target="_blank" className="label">
                                            일반 로그인
                                        </a>
                                        <ul>
                                            <span className="division"></span>
                                            <li>
                                                <a href="nm_rsv" target="_blank">
                                                    비회원 예약조회
                                                </a>
                                            </li>
                                            <li>
                                                <a href="login_guide" target="_blank">
                                                    로그인안내
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="login_TP" target="_blank">
                                            Travel Partners 로그인
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li data-label="ID/PW 찾기" className="sub mt30">
                                <span className="label">
                                    ID/PW 찾기<span></span>
                                </span>
                                <ul>
                                    <span className="division"></span>
                                    <li className="sub">
                                        <a href="find_login" target="_blank" className="label">
                                            아이디/비밀번호 찾기
                                        </a>
                                        <ul>
                                            <span className="division"></span>
                                            <li>
                                                <a href="id_send_guide" target="_blank">
                                                    아이디 발송 안내
                                                </a>
                                            </li>
                                            <li>
                                                <a href="pw_send_guide" target="_blank">
                                                    비밀번호 발송 안내
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="pw_change" target="_blank">
                                            비밀번호 변경
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li className="mt50 sub" data-label="회원가입">
                        <span className="label">
                            회원가입<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="join_simple" target="_blank">
                                    간편로그인 후 회원가입
                                </a>
                            </li>
                            <li className="sub">
                                <a href="join" target="_blank" className="label">
                                    일반 회원가입
                                </a>
                                <ul>
                                    <span className="division"></span>
                                    <li>
                                        <a href="join_com" target="_blank">
                                            일반 회원가입 완료
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sub">
                                <a href="join_TP#" target="_blank" className="label">
                                    Travel Partners 회원가입
                                </a>
                                <ul>
                                    <span className="division"></span>
                                    <li>
                                        <a href="join_TP_com" target="_blank">
                                            Travel Partners 회원가입 완료
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li className="mt50 sub" data-label="렌터카 예약하기">
                        <span className="label">
                            렌터카 예약하기<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="rsv_main" target="_blank">
                                    렌터카 예약하기
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_vihicle" target="_blank">
                                    step1 - 차량 및 요금제 선택
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_pay_now" target="_blank">
                                    step2 - 요금확인 및 옵션추가(지금결제)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_pay_local" target="_blank">
                                    step2 - 요금확인 및 옵션추가(현지결제)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_driver_now" target="_blank">
                                    step3 - 운전자정보(지금결제)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_driver_local" target="_blank">
                                    step3 - 운전자정보(현지결제)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_com_now" target="_blank">
                                    stpe4 - 예약완료(지금결제)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_com_local" target="_blank">
                                    stpe4 - 예약완료(현지결제)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_nodify" target="_blank">
                                    예약수정 / 차량변경
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_nodify_view" target="_blank">
                                    수정내역 확인
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_nodify_com" target="_blank">
                                    예약수정 완료
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt50 sub" data-label="마이페이지">
                        <span className="label">
                            마이페이지<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="mypage_simple" target="_blank">
                                    마이페이지(간편)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="mypage" target="_blank">
                                    마이페이지(일반)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="mypage_TP" target="_blank">
                                    마이페이지(여행사)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="personal_info_simple" target="_blank">
                                    개인정보변경(간편)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="personal_info" target="_blank">
                                    개인정보변경(일반)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="personal_info_TP" target="_blank">
                                    개인정보변경(여행사)
                                </a>
                            </li>
                            <li className="sub">
                                <a href="withdrawal" target="_blank">
                                    회원탈퇴
                                </a>
                            </li>
                            <li className="sub">
                                <a href="rsv_status" target="_blank">
                                    예약현황
                                </a>
                            </li>
                            <li className="sub">
                                <a href="pickup_scheduled" target="_blank">
                                    픽업예정
                                </a>
                            </li>
                            <li className="sub">
                                <a href="coupon" target="_blank">
                                    보유쿠폰
                                </a>
                            </li>
                            <li className="sub">
                                <a href="inquiry_list" target="_blank">
                                    1:1문의 목록
                                </a>
                            </li>
                            <li className="sub">
                                <a href="inquiry_regist" target="_blank">
                                    1:1문의 등록
                                </a>
                            </li>
                            <li className="sub">
                                <a href="nm_inquiry_regist" target="_blank">
                                    1:1문의 등록(비회원)
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt50 sub" data-label="보유차량">
                        <span className="label">
                            보유차량<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="car_info" target="_blank">
                                    보유차량
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt50 sub" data-label="멤버십 안내">
                        <span className="label">
                            멤버십 안내<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="membership" target="_blank">
                                    멤버십 안내
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt50 sub" data-label="뉴스&amp;이벤트">
                        <span className="label">
                            뉴스&amp;이벤트<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="news_list" target="_blank">
                                    뉴스&amp;이벤트
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt50 sub" data-label="고객센터">
                        <span className="label">
                            고객센터<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="faq" target="_blank">
                                    FAQ
                                </a>
                            </li>
                            <li className="sub">
                                <a href="user_guide" target="_blank">
                                    이용가이드
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt50 sub" data-label="회사소개">
                        <span className="label">
                            회사소개<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                            <li className="sub">
                                <a href="company" target="_blank">
                                    회사소개
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className="mt50 sub" data-label="이메일 발송">
                        <span className="label">
                            이메일 발송<span></span>
                        </span>
                        <ul>
                            <span className="division" style={{height: "calc(100% - 70px)"}}></span>
                            <li data-label="회원가입 완료" className="sub">
                                <span className="label">
                                    회원가입 완료<span></span>
                                </span>
                                <ul>
                                    <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                                    <li className="sub">
                                        <a href="/em/mail_sign_com.html" target="_blank">
                                            회원가입 완료(일반)
                                        </a>
                                    </li>
                                    <li className="sub">
                                        <a href="/em/mail_sign_TP_com.html" target="_blank">
                                            회원가입 완료(여행사)
                                        </a>
                                    </li>
                                    <li className="sub">
                                        <a href="/em/mail_find_id.html" target="_blank">
                                            아이디 찾기
                                        </a>
                                    </li>
                                    <li className="sub">
                                        <a href="/em/mail_find_pw.html" target="_blank">
                                            비밀번호 찾기
                                        </a>
                                    </li>
                                    <li className="sub">
                                        <a href="/em/mail_guide.html" target="_blank">
                                            가입완료-가입안내
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li data-label="예약" className="sub">
                                <span className="label">
                                    예약<span></span>
                                </span>
                                <ul>
                                    <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                                    <li className="sub">
                                        <a href="/em/mail_rsv_com.html" target="_blank">
                                            예약확정
                                        </a>
                                    </li>
                                    <li className="sub">
                                        <a href="/em/mail_rsv_nodify.html" target="_blank">
                                            예약수정확정
                                        </a>
                                    </li>
                                    <li className="sub">
                                        <a href="/em/mail_rsv_cancle.html" target="_blank">
                                            예약취소
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li data-label="문의" className="sub">
                                <span className="label">
                                    문의<span></span>
                                </span>
                                <ul>
                                    <span className="division" style={{height: "calc(100% - 30px)"}}></span>
                                    <li className="sub">
                                        <a href="/em/mail_inquiry.html" target="_blank">
                                            문의내역
                                        </a>
                                    </li>
                                    <li className="sub">
                                        <a href="/em/mail_answer.html" target="_blank">
                                            답변
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </>
    );
};
export default LinkList;
