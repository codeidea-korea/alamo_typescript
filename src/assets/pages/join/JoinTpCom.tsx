import {useNavigate} from "react-router-dom";
const JoinTpCom = () => {
    const navigate = useNavigate();
    return (
        <>
            <main className="sub" id="join_com">
                <div className="sub-vis"></div>

                <div className="contents">
                    <div className="inner">
                        <section className="join_com-img ico tac">
                            <img src="/img/page/join_sample.svg" alt="가입완료 이미지" />
                        </section>

                        <section className="sub_form tac">
                            <div className="Title03">
                                <span className="point mr5">여행사명</span>홍길동님
                            </div>
                            <div className="mt10">알라모 회원가입을 축하드립니다.</div>
                            <div className="mt10">
                                관리자 승인 후 이용 가능합니다.
                                <br />
                                빠른 시간내 승인 완료하겠습니다.
                                <br />
                                감사합니다.
                            </div>
                            <div className="l-button mt50">
                                <button type="button" className="full_button button button--primary" onClick={() => navigate("/")}>
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
export default JoinTpCom;
