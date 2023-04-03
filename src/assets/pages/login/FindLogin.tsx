import {useNavigate} from "react-router-dom";
import $ from "jquery";
import {useEffect, useState} from "react";

const FindLogin = () => {
    const navigation = useNavigate();
    const [error, setError] = useState(false);
    const [error2, setError2] = useState(false);

    useEffect(() => {
        //tab
        const tabItem = document.querySelectorAll(".tab_item");
        const tabInner = document.querySelectorAll(".tab_inner");

        tabItem.forEach((tab, idx) => {
            tab.addEventListener("click", function () {
                tabInner.forEach((inner) => {
                    inner.classList.remove("active");
                });

                tabItem.forEach((item) => {
                    item.classList.remove("active");
                });

                tabItem[idx].classList.add("active");
                tabInner[idx].classList.add("active");
            });
        });

        // 탭버튼 li수에 맞춰 너비값 변경
        var n = $(".sub .tab_btn > li").length;
        var m = $(".modal .tab_btn > li").length;
        $(".sub .tab_btn > li").css({width: "calc(100% / " + n + ")"});
        $(".modal .tab_btn > li").css({width: "calc(100% / " + m + ")"});
    });
    return (
        <>
            <main className="sub" id="find_login">
                <div className="sub-vis mobile"></div>
                <div className="contents">
                    <ul className="tab tab_btn Title02 fwb flex mobile_class">
                        <li className="tab_item active">아이디 찾기</li>
                        <li className="tab_item">비밀번호 찾기</li>
                    </ul>
                    {/* <!-- 아이디 찾기 --> */}
                    <div className="l-login_form tab_inner active">
                        <div className="inner">
                            <section className="sub_title Title01 tac">
                                아이디 찾기
                                <div className="mt20 tac">
                                    <div className="Title03 primary">가입시 등록한 한글이름,<br className="br_mobile"/> 이메일을 입력해 주세요.</div>
                                </div>
                            </section>

                            <section className="sub_form">
                                <form className="cmxform" id="login-form" method="get" action="">
                                    <fieldset>
                                        <legend>한글이름과 이메일</legend>
                                        <div className="form_input mb20">
                                            <label htmlFor="ko_name">한글 이름</label>
                                            <input type="text" placeholder="한글 이름을 입력해주세요." autoComplete="off" />
                                            {error && (
                                                <>
                                                    <label id="-error" className="error" htmlFor="">
                                                        회원정보를 확인해주세요.
                                                    </label>
                                                </>
                                            )}
                                        </div>
                                        <div className="form_input mb20">
                                            <label htmlFor="email">이메일</label>
                                            <input type="email" placeholder="이메일을 입력해주세요." autoComplete="off" required title="abc@gmail.com 형태의 규칙을 확인해주세요." />
                                            {error && (
                                                <>
                                                    <label id="-error" className="error" htmlFor="">
                                                        abc@gmail.com 형태의 규칙을 확인해주세요.
                                                    </label>
                                                </>
                                            )}
                                        </div>
                                    </fieldset>
                                    <div className="l-button mt30">
                                        <button
                                            type="button"
                                            className="full_button button button--disabled"
                                            onClick={() => {
                                                setError((prev) => !prev);
                                            }}>
                                            이메일로 아이디 발송(에러 확인용)
                                        </button>
                                        <button type="submit" className="full_button button button--disabled mt10">
                                            이메일로 아이디 발송 (비활성화)
                                        </button>
                                        <button type="submit" className="full_button button button--primary mt10" onClick={() => navigation("/id_send_guide")}>
                                            이메일로 아이디 발송
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>

                    {/* <!-- 비밀번호 찾기 --> */}
                    <div className="l-login_form tab_inner">
                        <div className="inner">
                            <section className="sub_title Title01 tac">
                                비밀번호 찾기
                                <div className="mt20 tac">
                                    <div className="Title03 primary">
                                        가입시 등록한 이메일을 입력하시면
                                        <br />
                                        임시비밀번호를 발송해드립니다.
                                    </div>
                                </div>
                            </section>

                            <section className="sub_form">
                                <form className="cmxform" id="login-form" method="get" action="">
                                    <fieldset>
                                        <legend>아이디와 이메일</legend>
                                        <div className="form_input mb20">
                                            <label htmlFor="id">아이디</label>
                                            <input type="text" placeholder="아이디를 입력해주세요." name="id" autoComplete="off" />
                                            {error2 && (
                                                <>
                                                    <label id="-error" className="error" htmlFor="">
                                                        회원정보를 확인해주세요.
                                                    </label>
                                                </>
                                            )}
                                        </div>
                                        <div className="form_input mb20">
                                            <label htmlFor="email">이메일</label>
                                            <input type="email" placeholder="이메일을 입력해주세요." autoComplete="off" required title="abc@gmail.com 형태의 규칙을 확인해주세요." />
                                            {error2 && (
                                                <>
                                                    <label id="-error" className="error" htmlFor="">
                                                        abc@gmail.com 형태의 규칙을 확인해주세요.
                                                    </label>
                                                </>
                                            )}
                                        </div>
                                    </fieldset>
                                    <div className="l-button mt50">
                                        <button
                                            type="submit"
                                            className="full_button button button--disabled"
                                            onClick={() => {
                                                setError2((prev) => !prev);
                                            }}>
                                            이메일로 임시비밀번호 발송(에러 확인용)
                                        </button>
                                        <button type="submit" className="full_button button button--disabled mt10">
                                            이메일로 임시비밀번호 발송 (비활성화)
                                        </button>
                                        <button type="submit" className="full_button button button--primary mt20" onClick={() => navigation("/pw_send_guide")}>
                                            이메일로 임시비밀번호 발송
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default FindLogin;
