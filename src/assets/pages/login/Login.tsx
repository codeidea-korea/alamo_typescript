import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigation = useNavigate();
    const [error, setError] = useState(false);

    return (
        <>
            <main className="sub login">
                <div className="sub-vis"></div>

                <div className="contents" id="login">
                    <div className="inner">
                        <section className="sub_title Title01 tac">로그인</section>
                        <section className="sub_form">
                            <form className="cmxform" id="login-form" method="get" action="">
                                <fieldset>
                                    <div className="form_input mb20">
                                        <label htmlFor="id">아이디</label>
                                        <input type="text" placeholder="아이디를 입력해 주세요." id="id" name="id" autoComplete="off" />
                                        {error && (
                                            <>
                                                <label id="id-error" className="error" htmlFor="id">
                                                    회원정보를 확인해주세요.
                                                </label>
                                            </>
                                        )}
                                    </div>
                                    <div className="form_input">
                                        <label htmlFor="passwd">비밀번호</label>
                                        <input type="password" placeholder="비밀번호를 입력해주세요." id="password" name="password" autoComplete="off" required />
                                        {error && (
                                            <>
                                                <label id="password-error" className="error" htmlFor="password">
                                                    회원정보를 확인해주세요.
                                                </label>
                                            </>
                                        )}
                                    </div>
                                </fieldset>
                                <div className="l-button mt50">
                                    <button type="button" className="full_button button button--disabled mb10" onClick={() => setError((prev) => !prev)}>
                                        로그인(에러 확인용)
                                    </button>
                                    <button type="submit" className="full_button button button--disabled mb10">
                                        로그인 (비활성화)
                                    </button>
                                    <button type="submit" className="full_button button button--primary" onClick={() => navigation("/")}>
                                        로그인
                                    </button>
                                    <div className="Fs_sm mt10">
                                        <a className="line summary" href="/join">
                                            회원가입
                                        </a>
                                        <a className="summary" href="/find_login">
                                            아이디/비밀번호 찾기
                                        </a>
                                    </div>
                                </div>
                                <div className="simple-login-line tac mt50">간편로그인</div>
                                <div className="l-button sns-box mt30 flex jc-ct">
                                    <button type="button" className="button naver ico mr10">
                                        <img src="/img/icon/login_naver.png" />
                                    </button>
                                    <button type="button" className="button kakao ico mr10">
                                        <img src="/img/icon/login_kakao.png" />
                                    </button>
                                    <button type="button" className="button google ico">
                                        <img src="/img/icon/login_google.png" />
                                    </button>
                                </div>
                                <div className="l-button mt50">
                                    <button type="submit" className="full_button button button--tip mb10" onClick={() => navigation("/nm_rsv")}>
                                        비회원 예약조회
                                    </button>
                                    <div className="Fs_sm mt10">
                                        <a className="summary" href="/login_TP">
                                            Travel Partner 로그인
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};
export default Login;
