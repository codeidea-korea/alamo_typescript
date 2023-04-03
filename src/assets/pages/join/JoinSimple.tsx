import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import $ from "jquery";

const JoinSimple = () => {
    const navigate = useNavigate();
    const toggleHandle = () => {
        $(".toggle_cont").toggle();
        $(".toggle_tit").toggleClass("active");
    };
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
    return (
        <>
            <main className="sub" id="join">
                <div className="sub-vis"></div>

                <div className="contents">
                    <div className="inner">
                        <section className="sub_title Title02 tac fwb">알라모 이용을 위해 추가정보를 입력해주세요.</section>

                        <section className="sub_form">
                            <form className="cmxform" method="get" action="">
                                <fieldset>
                                    <div className="form_input mt20">
                                        <label htmlFor="name_ko">한글이름</label>
                                        <input type="text" placeholder="한글 이름을 입력해 주세요." autoComplete="off" />
                                    </div>
                                    <div className="form_input mt20">
                                        <label htmlFor="email" className="import">
                                            이메일
                                        </label>
                                        <input type="email" id="email" name="email" defaultValue="abc@email.com" disabled />
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
                                            <select id="phone_number" className="long mr5">
                                                <option value="+82">대한민국 +82</option>
                                                <option value="+1 670">미국령북마리아나제도 +1 670</option>
                                                <option value="+61 8 9164">크리스마스 섬 제도 +61 8 9164</option>
                                            </select>
                                            <input type="text" placeholder="12345678" autoComplete="off" />
                                        </div>
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
                                                <select name="select_change" className=" mr5">
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
                                            <select name="select_change" id="id">
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
                                            <div className="cont_info view Fs_sm toggle_cont bg_white">
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree" onChange={handleCheck} />
                                                    <label htmlFor="join_agree" className="ml10">
                                                        만 14세 이상<span className="ess Fs_xsm">(필수)</span>
                                                    </label>
                                                    <a href="#" className="detail join_agree_btn1">
                                                        전문보기
                                                    </a>
                                                </div>
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree2" onChange={handleCheck} />
                                                    <label htmlFor="join_agree2" className="ml10">
                                                        서비스 이용약관<span className="ess Fs_xsm">(필수)</span>
                                                    </label>
                                                    <a href="#" className="detail join_agree_btn2">
                                                        전문보기
                                                    </a>
                                                </div>
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree2" onChange={handleCheck} />
                                                    <label htmlFor="join_agree2" className="ml10">
                                                        개인정보 수집 및 이용 동의<span className="ess Fs_xsm">(필수)</span>
                                                    </label>
                                                    <a href="#" className="detail join_agree_btn2">
                                                        전문보기
                                                    </a>
                                                </div>
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree2" onChange={handleCheck} />
                                                    <label htmlFor="join_agree2" className="ml10">
                                                        제 3자 제공 동의<span className="ess Fs_xsm">(필수)</span>
                                                    </label>
                                                    <a href="#" className="detail join_agree_btn2">
                                                        전문보기
                                                    </a>
                                                </div>
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree3" onChange={handleCheck} />
                                                    <label htmlFor="join_agree3" className="ml10">
                                                        이벤트 및 할인 혜택 안내 동의<span className="Fs_xsm">(선택)</span>
                                                    </label>
                                                    <a href="#" className="detail join_agree_btn3">
                                                        전문보기
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="l-button mt50">
                                    <button type="button" className="full_button button button--disabled">
                                        회원가입 완료 (비활성화)
                                    </button>
                                    <button type="button" className="full_button button button--primary mt10" onClick={() => navigate("/join_com")}>
                                        회원가입 완료
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
export default JoinSimple;
