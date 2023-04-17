import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import $ from "jquery";

const Join = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    // 체크
    const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

    const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('.check_table input[type="checkbox"]');
        checkboxes.forEach((checkbox) => {
            checkbox.checked = event.target.checked;
        });
        setIsAllChecked(event.target.checked);
    };

    const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const checkboxes = document.querySelectorAll<HTMLInputElement>('.check_table input[type="checkbox"]');
        let allChecked = true;
        checkboxes.forEach((checkbox) => {
            if (checkbox !== event.target) {
                checkbox.checked = checkbox.checked || false;
            }
            allChecked = allChecked && checkbox.checked;
        });
        setIsAllChecked(allChecked);
    };
    const toggleHandle = () => {
        $(".toggle_cont").toggle();
        $(".toggle_tit").toggleClass("active");
    };
    const openModal = (modalname: any) => {
        $("#" + modalname).show();
        $("body").addClass("noneScroll");
    };
    useEffect(() => {
        $(".modal .close").click(function () {
            $(".modal").hide();
            $("body").removeClass("noneScroll");
        });
    }, []);
    
    return (
        <>
            <main className="sub join">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">회원가입</article>
                        <article className="sub_form">
                            <form className="cmxform" id="sign-form" method="get" action="">
                                <fieldset>
                                    <div className="form_input">
                                        <div className="mr10">
                                            <label htmlFor="id" className="import">
                                                아이디
                                            </label>
                                            <input type="text" placeholder="아이디를 입력해 주세요." id="id" name="id" autoComplete="off" required />
                                            {error && (
                                                <>
                                                    <label id="id-error" className="error" htmlFor="id">
                                                        이미 사용중인 아이디입니다.
                                                    </label>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form_input mt20">
                                        <label htmlFor="password" className="import">
                                            비밀번호
                                        </label>
                                        <input type="password" placeholder="영문자+숫자+특수기호 6 ~ 10자리 입력" id="password" name="password" autoComplete="off" required />
                                        {error && (
                                            <>
                                                <label id="password-error" className="error" htmlFor="password">
                                                    영문자+숫자+특수기호 6~10자리로 입력해주세요.
                                                </label>
                                            </>
                                        )}
                                    </div>
                                    <div className="form_input mt20">
                                        <label htmlFor="confirm_password" className="import">
                                            비밀번호 재입력
                                        </label>
                                        <input type="password" placeholder="비밀번호 재확인" id="confirm_password" name="confirm_password" autoComplete="off" />
                                        {error && (
                                            <>
                                                <label id="password-error" className="error" htmlFor="password">
                                                    비밀번호가 일치하지 않습니다.
                                                </label>
                                            </>
                                        )}
                                    </div>
                                    <div className="form_input mt20">
                                        <label htmlFor="name_ko">한글이름</label>
                                        <input type="text" placeholder="이름을 입력해주세요." autoComplete="off" />
                                    </div>
                                    <div className="lookup_input mt20">
                                        <div className="mr5">
                                            <label htmlFor="first_name">
                                                여권 성 <span className="Fs_sm summary">(여권상)</span>
                                            </label>
                                            <input type="text" placeholder="여권 성" autoComplete="off" />
                                        </div>
                                        <div>
                                            <label htmlFor="last_name">
                                                여권 이름 <span className="Fs_sm summary">(여권상)</span>
                                            </label>
                                            <input type="text" placeholder="여권 영문 이름" autoComplete="off" />
                                        </div>
                                    </div>

                                    <div className="form_input phone-nm mt20">
                                        <label htmlFor="phone">휴대폰번호</label>
                                        <div className="lookup_input">
                                            <select id="phone_number" className="mr5">
                                                <option value="+82"> +82</option>
                                                <option value="+1 670"> +1 670</option>
                                                <option value="+61 8 9164">+61 8 9164</option>
                                            </select>
                                            <select name="" id="" className="phone mr5">
                                                <option value="">010</option>
                                            </select>
                                            <input type="text" placeholder="12345678" autoComplete="off" />
                                        </div>
                                    </div>

                                    <div className="form_input mt20">
                                        <label htmlFor="email" className="import">
                                            이메일
                                        </label>
                                        <input type="email" placeholder="abc@gmail.com" autoComplete="off" required title="abc@gmail.com 형태의 규칙을 확인해주세요." />
                                        {error && (
                                            <>
                                                <label id="-error" className="error" htmlFor="">
                                                    abc@gmail.com 형태의 규칙을 확인해주세요.
                                                </label>
                                            </>
                                        )}
                                    </div>
                                    <div className="form_input mt20">
                                        <div className="">
                                            <label htmlFor="date_birth">생년월일</label>
                                            <div className="join_date flex ai-ct">
                                                <select name="select_change" className="mr5">
                                                    <option value="" disabled hidden>
                                                        년도
                                                    </option>
                                                    <option value="2022">2022년</option>
                                                    <option value="2021">2021년</option>
                                                </select>
                                                <select name="select_change" className="mr5">
                                                    <option value="" disabled hidden>
                                                        월
                                                    </option>
                                                    <option value="1월">1</option>
                                                    <option value="2월">2</option>
                                                    <option value="3월">3</option>
                                                    <option value="4월">4</option>
                                                    <option value="5월">5</option>
                                                    <option value="6월">6</option>
                                                    <option value="7월">7</option>
                                                    <option value="8월">8</option>
                                                    <option value="9월">9</option>
                                                    <option value="10월">10</option>
                                                    <option value="11월">11</option>
                                                    <option value="12월">12</option>
                                                </select>
                                                <span className=" mr5">월</span>
                                                <select name="select_change" className="mr5">
                                                    <option value="" disabled hidden>
                                                        일
                                                    </option>
                                                    <option value="1일">1</option>
                                                    <option value="2일">2</option>
                                                </select>
                                                <span>일</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="lookup_input mt20">
                                        <div className="mr5">
                                            <label htmlFor="mileage">항공사 마일리지 적립</label>
                                            <select name="select_change">
                                                <option value="" disabled hidden>
                                                    항공사
                                                </option>
                                                <option value="KAL">대한한공</option>
                                                <option value="AAR">아시아나</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="membership">멤버십 번호</label>
                                            <input type="text" placeholder="멤버십 번호 입력" autoComplete="off" />
                                        </div>
                                    </div>
                                    <div className="l-line"></div>
                                    <div className="l-box check_table">
                                        <div className="box_cont open drop" id="joinAgree">
                                            <div className="cont_title toggle_btn agreeAll toggle_tit">
                                                <input type="checkbox" id="checkAll" checked={isAllChecked} onChange={handleCheckAll} />
                                                <label htmlFor="checkAll">
                                                    <span className="import fwb">약관 전체 동의</span>
                                                </label>
                                                <i onClick={toggleHandle} className="arrow_icon"></i>
                                            </div>
                                            <div className="cont_info view pa30 Fs_sm toggle_cont bg_white">
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree" onChange={handleCheck} />
                                                    <label htmlFor="join_agree" className="ml10">
                                                        만 14세 이상<span className="ess Fs_xsm">(필수)</span>
                                                    </label>
                                                    <a href="#?" onClick={() => openModal("privacy_01")} className="detail join_agree_btn1">
                                                        전문보기
                                                    </a>
                                                </div>
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree2" onChange={handleCheck} />
                                                    <label htmlFor="join_agree2" className="ml10">
                                                        서비스 이용약관<span className="ess Fs_xsm">(필수)</span>
                                                    </label>
                                                    <a href="#?" onClick={() => openModal("privacy_02")} className="detail join_agree_btn2">
                                                        전문보기
                                                    </a>
                                                </div>
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree3" onChange={handleCheck} />
                                                    <label htmlFor="join_agree3" className="ml10">
                                                        개인정보 수집 및 이용 동의<span className="ess Fs_xsm">(필수)</span>
                                                    </label>
                                                    <a href="#?" onClick={() => openModal("privacy_03")} className="detail join_agree_btn2">
                                                        전문보기
                                                    </a>
                                                </div>
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree4" onChange={handleCheck} />
                                                    <label htmlFor="join_agree4" className="ml10">
                                                        제 3자 제공 동의<span className="ess Fs_xsm">(필수)</span>
                                                    </label>
                                                    <a href="#?" onClick={() => openModal("privacy_04")} className="detail join_agree_btn2">
                                                        전문보기
                                                    </a>
                                                </div>
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree5" onChange={handleCheck} />
                                                    <label htmlFor="join_agree5" className="ml10">
                                                        이벤트 및 할인 혜택 안내 동의<span className="Fs_xsm">(선택)</span>
                                                    </label>
                                                    <a href="#?" onClick={() => openModal("privacy_05")} className="detail join_agree_btn3">
                                                        전문보기
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="l-button mt50">
                                    <button type="button" className="full_button button button--disabled mb10" onClick={() => setError((prev) => !prev)}>
                                        회원가입 완료 (에러메시지 확인용)
                                    </button>
                                    <button type="button" className="full_button button button--disabled mb10">
                                        회원가입 완료 (비활성화)
                                    </button>
                                    <button type="button" className="full_button button button--primary" onClick={() => navigate("/join_com")}>
                                        회원가입 완료
                                    </button>
                                </div>
                            </form>
                        </article>
                    </div>
                </section>
            </main>

            {/* <!-- 개인정보 취급방침 --> */}
            <div id="privacy_01" className="modal">
                <div className="modal-content2">
                    <div className="modal-title Title03">만 14세이상</div>
                    <span className="close fwb">&times;</span>
                    <div className="cont_info">
                        약관 내용 입니다.
                    </div>
                </div>
            </div>

            <div id="privacy_02" className="modal">
                <div className="modal-content2">
                    <div className="modal-title Title03">서비스 이용약관</div>
                    <span className="close fwb">&times;</span>
                    <div className="cont_info">
                        약관 내용 입니다.
                    </div>
                </div>
            </div>

            <div id="privacy_03" className="modal">
                <div className="modal-content2">
                    <div className="modal-title Title03">개인정보 수집 및 이용 동의</div>
                    <span className="close fwb">&times;</span>
                    <div className="cont_info">
                        약관 내용 입니다.
                    </div>
                </div>
            </div>

            <div id="privacy_04" className="modal">
                <div className="modal-content2">
                    <div className="modal-title Title03">제 3자 제공 동의</div>
                    <span className="close fwb">&times;</span>
                    <div className="cont_info">
                        약관 내용 입니다.
                    </div>
                </div>
            </div>

            <div id="privacy_05" className="modal">
                <div className="modal-content2">
                    <div className="modal-title Title03">이벤트 및 할인 혜택 안내 동의</div>
                    <span className="close fwb">&times;</span>
                    <div className="cont_info">
                        약관 내용 입니다.
                    </div>
                </div>
            </div>
        </>
    );
};
export default Join;
