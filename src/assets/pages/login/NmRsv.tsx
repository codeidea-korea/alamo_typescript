import {useState} from "react";

const NmRsv = () => {
    const [error, setError] = useState(false);
    const [modal, setModal] = useState(false);
    const [email, setEmail] = useState(true);

    const selectHandle = (e: any) => {
        if (e.target.value == "email") {
            setEmail(true);
        }
        if (e.target.value == "rsv_number") {
            setEmail(false);
        }
    };

    return (
        <>
            <main className="sub" id="nm_rsv">
                <div className="sub-vis"></div>

                <div className="contents">
                    <div className="inner">
                        <section className="Title01 sub_form tac">
                            비회원 예약조회
                            <div className="mt20">
                                <div className="Title03 primary">
                                    예약 시 입력한 운전자명과
                                    <br />
                                    이메일 또는 예약번호를 정확히 입력해주세요.
                                </div>
                            </div>
                        </section>

                        <section className="sub_form">
                            <form className="cmxform" id="lookup-form" method="get" action="">
                                <fieldset>
                                    <div className="lookup_input mb20">
                                        <div className="mr5">
                                            <label htmlFor="id">여권 성 <span className="text_gray">(여권상)</span></label>
                                            <input type="text" placeholder="여권 영문 성" autoComplete="off" />
                                        </div>
                                        <div>
                                            <label htmlFor="id">여권 이름 <span className="text_gray">(여권상)</span></label>
                                            <input type="text" placeholder="여권 영문 이름" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="form_input select-box">
                                        <label htmlFor="password" className="label import">
                                            이메일 또는 예약번호
                                        </label>
                                        <div className="flex input_form_col" style={{alignItems: "center"}}>
                                            <select name="select_change" id="id" className="mr5 valid" onChange={selectHandle} style={{width: "30%"}}>
                                                <option value="email">선택</option>
                                                <option value="email">이메일</option>
                                                <option value="rsv_number">예약번호</option>
                                            </select>
                                            {email && (
                                                <>
                                                    <input type="email" placeholder="이메일을 입력해주세요." id="rsv_email" name="rsv_email" autoComplete="off" required title="abc@gmail.com 형태의 규칙을 확인해주세요." />
                                                </>
                                            )}{" "}
                                            {!email && (
                                                <>
                                                    <input type="number" placeholder="예약번호를 입력해주세요." id="rsv_number" name="rsv_number" autoComplete="off" required />
                                                </>
                                            )}
                                        </div>
                                        {error && (
                                            <>
                                                <label id="rsv_email-error" className="error" htmlFor="rsv_email">
                                                    abc@gmail.com 형태의 규칙을 확인해주세요.
                                                </label>
                                            </>
                                        )}
                                        {error && (
                                            <>
                                                <label id="rsv_number-error" className="error" htmlFor="rsv_number">
                                                    예약번호가 일치하지 않습니다.
                                                </label>
                                            </>
                                        )}
                                    </div>
                                </fieldset>
                                <div className="l-button mt50">
                                    {/* <!-- 에러 메시지 확인 --> */}
                                    <button type="button" className="full_button button button--disabled" onClick={() => setError((prev) => !prev)}>
                                        예약조회(에러메시지 확인용)
                                    </button>
                                    {/* <!-- 모달팝업창 확인 --> */}
                                    <button type="button" className="full_button button button--primary mt10" onClick={() => setModal(true)}>
                                        예약조회(모달창 확인용)
                                    </button>
                                    <button type="button" className="full_button button button--disabled mt10">
                                        예약조회(비활성화)
                                    </button>
                                    <button type="button" className="full_button button button--primary mt10">
                                        예약조회
                                    </button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>

                {/* <!-- Modal content S --> */}
                {modal && (
                    <>
                        <div id="confirm" className="modal" style={{display: "block"}}>
                            <div className="modal-content">
                                <span className="close fwb" onClick={() => setModal(false)}>
                                    &times;
                                </span>
                                <p>예약내역이 없습니다.</p>
                                <button type="button" className="full_button button button--primary mt30" onClick={() => setModal(false)}>
                                    확인
                                </button>
                            </div>
                        </div>
                    </>
                )}
                {/* <!-- Modal content E --> */}
            </main>
        </>
    );
};
export default NmRsv;
