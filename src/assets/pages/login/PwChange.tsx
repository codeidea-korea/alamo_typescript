import {useState} from "react";
import {useNavigate} from "react-router-dom";

const PwChange = () => {
    const navigation = useNavigate();
    const [error, setError] = useState(false);
    return (
        <>
            <main className="sub pw_change">
                <div className="sub-vis"></div>

                <div className="contents l-login_form">
                    <div className="inner">
                        <section className="sub_title Title01 tac">
                            비밀번호 변경
                            <div className="mt20 tac">
                                <div className="Title03 primary">
                                    임시비밀번호 로그인 시<br />
                                    비밀번호 재설정 후 사용 가능합니다.
                                </div>
                            </div>
                        </section>

                        <section className="sub_form">
                            <form className="cmxform" id="login-form" method="get" action="">
                                <fieldset>
                                    <legend>현재 비밀번호와 새 비밀번호</legend>
                                    <div className="form_input mb20">
                                        <label htmlFor="passwd">현재 비밀번호</label>
                                        <input type="password" placeholder="현재 비밀번호" id="password" autoComplete="off" />
                                    </div>
                                    <div className="form_input mb20">
                                        <label htmlFor="passwd">새로운 비밀번호</label>
                                        <input type="password" placeholder="영문자+숫자+특수기호 6~10자리 입력" id="n_password" name="n_password" autoComplete="off" required />
                                        {error && (
                                            <>
                                                <label id="n_password-error" className="error" htmlFor="n_password">
                                                    비밀번호를 확인해주세요
                                                </label>
                                            </>
                                        )}
                                    </div>
                                    <div className="form_input">
                                        <label htmlFor="passwd">비밀번호 재입력</label>
                                        <input type="password" placeholder="비밀번호 확인" id="r_password" name="r_password" autoComplete="off" required />
                                        {error && (
                                            <>
                                                <label id="n_password-error" className="error" htmlFor="n_password">
                                                    비밀번호가 일치하지 않습니다.
                                                </label>
                                            </>
                                        )}
                                    </div>
                                </fieldset>
                                <div className="l-button mt30">
                                    <button type="submit" className="full_button button button--disabled" onClick={() => setError((prev) => !prev)}>
                                        비밀번호 변경 (에러확인용)
                                    </button>
                                    <button type="submit" className="full_button button button--disabled mt10">
                                        비밀번호 변경 (비활성화)
                                    </button>
                                    <button type="submit" className="full_button button button--primary mt10" onClick={() => navigation("/login")}>
                                        비밀번호 변경
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};
export default PwChange;
