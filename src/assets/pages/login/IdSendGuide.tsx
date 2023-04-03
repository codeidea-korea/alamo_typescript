import {useNavigate} from "react-router-dom";
const IdSendGuide = () => {
    const navigation = useNavigate();
    return (
        <>
            <main className="sub login">
                <div className="sub-vis"></div>

                <div className="contents l-login_form">
                    <div className="inner">
                        <section className="sub_title Title01 tac">아이디 발송 안내</section>'
                        <section className="sub_form">
                            <div className="tac">
                                <div className="Title03 primary">ab***d@gmail.com</div>
                                <div className="mt5">해당 메일로 아이디가 발송완료했습니다.</div>
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
export default IdSendGuide;
