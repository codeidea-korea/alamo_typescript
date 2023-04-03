import {useNavigate} from "react-router-dom";
const PwSendGuide = () => {
    const navigation = useNavigate();
    return (
        <>
            <main className="sub" id="login">
                <div className="sub-vis"></div>
                <div className="contents l-login_form">
                    <div className="inner">
                        <section className="h2 sub_title Title01 tac">비밀번호 발송 안내</section>

                        <section className="sub_form">
                            <div className="tac">
                                <div className="Title03 primary">ab***d@gmail.com</div>
                                <div className="mt5">해당 메일로 임시비밀번호를 발송완료했습니다.</div>
                            </div>
                            <div className="l-button mt50">
                                <button type="button" className="full_button button button--primary" onClick={() => navigation("/")}>
                                    확인
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};
export default PwSendGuide;
