import {useNavigate} from "react-router-dom";

const JoinCom = () => {
    const navigate = useNavigate();
    return (
        <>
            <main className="sub" id="join">
                <div className="sub-vis"></div>
                <div className="contents">
                    <div className="inner">
                        <section className="join_com-img tac ico">
                            <img src="/img/page/join_sample.svg" alt="가입완료 이미지" />
                        </section>

                        <section className="sub_form tac">
                            <div className="Title03">홍길동님</div>
                            <div className="mt10">
                                알라모 회원가입을 축하드립니다.
                                <br />
                                즐거운 여행되세요!
                            </div>
                            <div className="l-button mt50">
                                <button type="button" className="full_button button button--primary" onClick={() => navigate("/login")}>
                                    로그인 하기
                                </button>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </>
    );
};
export default JoinCom;
