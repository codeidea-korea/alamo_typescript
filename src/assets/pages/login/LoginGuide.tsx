import {useNavigate} from "react-router-dom";
const LoginGuide = () => {
    const navigation = useNavigate();
    return (
        <>
            <main className="sub login">
                <div className="sub-vis"></div>

                <div className="contents" id="login">
                    <div className="inner">
                        <section className="h2 sub_title Title01 tac">로그인 안내</section>

                        <section className="sub_form">
                            <div className="tac">
                                <div className="Title03 primary">잠시만 기다려주세요.</div>
                                <div className="mt5">현재 승인대기 중입니다. 승인 후 사용 가능합니다.</div>
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
export default LoginGuide;
