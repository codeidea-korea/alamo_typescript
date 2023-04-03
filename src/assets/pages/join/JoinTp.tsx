import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import $ from "jquery";

const JoinTp = () => {
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const toggleHandle = () => {
        $(".toggle_cont").toggle();
        $(".toggle_tit").toggleClass("active");
    };
    const toggleHandle2 = () => {
        $(".toggle_cont2").toggle();
        $(".toggle_tit2").toggleClass("active");
    };
    const toggleHandle3 = () => {
        $(".toggle_cont3").toggle();
        $(".toggle_tit3").toggleClass("active");
    };
    const toggleHandle4 = () => {
        $(".toggle_cont4").toggle();
        $(".toggle_tit4").toggleClass("active");
    };
    const tooltipHandle = () => {
        $(".tooltip_cont").show();
    };
    useEffect(() => {
        $("#join").on("click", () => {
            $(".tooltip_cont").hide();
        });
    }, []);
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
    const [write, setWrite] = useState(false);
    const selectHandle = (e: any) => {
        if (e.target.value === "write") {
            setWrite(true);
        } else {
            setWrite(false);
        }
    };
    return (
        <>
            <main className="sub join" id="join">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">Travel Partner 회원가입</article>
                        <article className="sub_desc tac">
                            Travel Partner로 가입하시는 아이디는
                            <br /> 알라모(alamo.co.kr)와 내셔널(nationalcar.kr)렌터카 사이트에서 별도 가입 없이 동일하게 이용하실 수 있습니다.
                        </article>
                        <div className="sub_form">
                            <div className="l-box">
                                <div className="box_cont open drop" id="joinAgree">
                                    <div className="cont_title arrow toggle_btn toggle_tit" onClick={toggleHandle}>
                                        <span className="fwb">사업자 정보</span>
                                    </div>
                                    <div className="cont_info view pa30 Fs_sm toggle_cont">
                                        <form className="cmxform" id="sign-form" method="get" action="">
                                            <fieldset>
                                                <div className="form_input">
                                                    <div className="mr10">
                                                        <label htmlFor="input_01" className="import">
                                                            사업자정보
                                                        </label>
                                                        <input type="text" placeholder="사업자정보를 입력해 주세요." id="input_01" name="input_01" autoComplete="off" required />
                                                        {error && (
                                                            <>
                                                                <label id="id-error" className="error" htmlFor="id">
                                                                    등록된 여행사가 없습니다.
                                                                </label>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="form_input mt20">
                                                    <div className="mr10">
                                                        <label htmlFor="input_02" className="import">
                                                            여행사명
                                                        </label>
                                                        <input type="text" placeholder="여행사명을 입력해 주세요." id="input_02" name="input_02" autoComplete="off" required />
                                                    </div>
                                                </div>
                                                <div className="form_input mt20">
                                                    <div className="mr10">
                                                        <label htmlFor="input_03" className="import">
                                                            대표명
                                                        </label>
                                                        <input type="text" placeholder="대표자명 정확히 입력" id="input_03" name="input_03" autoComplete="off" required />
                                                    </div>
                                                </div>
                                                <div className="form_input phone-nm mt20">
                                                    <label htmlFor="phone" className="import">
                                                        대표 연락처
                                                    </label>
                                                    <div className="lookup_input">
                                                        <select id="phone_number" className="mr5 phone">
                                                            <option value="+82">+82</option>
                                                            <option value="+1 670">+1 670</option>
                                                            <option value="+61 8 9164"> +61 8 9164</option>
                                                        </select>
                                                        <div className="phone_input">
                                                            <input type="text" defaultValue="02" className="local_num" />
                                                            <input type="text" placeholder="12345678" autoComplete="off" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form_input mt20">
                                                    <label htmlFor="email" className="import">
                                                        대표 이메일
                                                    </label>
                                                    <input type="email" placeholder="abc@gmail. com" autoComplete="off" required title="abc@gmail.com 형태의 규칙을 확인해주세요." />
                                                </div>
                                                <div className="form_input mt20">
                                                    <div className="mr10">
                                                        <div className="flex jc-sb">
                                                            <div>
                                                                <label htmlFor="input_04" className="import">
                                                                    사업자등록증 증빙
                                                                </label>
                                                                <br />
                                                                <span style={{fontSize: "1.2rem", color: "#808386"}}>최대 3개까지 가능 (JPG,PNG,PDF)</span>
                                                            </div>
                                                            <div>
                                                                <label htmlFor="input_04">
                                                                    <span className="button step button--primary" style={{padding: "0 10px"}}>
                                                                        파일첨부
                                                                    </span>
                                                                </label>
                                                                <input type="file" id="input_04" name="input_04" autoComplete="off" required style={{display: "none"}} />
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <div className="thumb_view">
                                                            <div>
                                                                <img src="/img/page/slide_sample.png" alt="" />
                                                                <i>
                                                                    <img src="/img/icon/x_icon.svg" alt="" />
                                                                </i>
                                                            </div>
                                                            <div>
                                                                <img src="/img/page/slide_sample.png" alt="" />
                                                                <i>
                                                                    <img src="/img/icon/x_icon.svg" alt="" />
                                                                </i>
                                                            </div>
                                                            <div>
                                                                <img src="/img/page/slide_sample.png" alt="" />
                                                                <i>
                                                                    <img src="/img/icon/x_icon.svg" alt="" />
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="l-line"></div>
                        </div>

                        <div className="sub_form">
                            <div className="l-box">
                                <div className="box_cont open drop" id="joinAgree">
                                    <div className="cont_title toggle_btn toggle_tit2 arrow" onClick={toggleHandle2}>
                                        <span className="fwb">부서 정보</span>
                                    </div>
                                    <div className="cont_info view pa30 Fs_sm toggle_cont2">
                                        <form className="cmxform" id="sign-form" method="get" action="">
                                            <fieldset>
                                                <div className="form_input">
                                                    <div className="mr10">
                                                        <label htmlFor="">
                                                            부서선택
                                                            <div className="l-tooltip" onClick={tooltipHandle} style={{top: "2px"}}>
                                                                <div x-show="true" className="inline-block">
                                                                    <img className="ml5" src="/img/icon/question.svg" alt="설명툴팁" />
                                                                </div>
                                                                <div className="tooltip Fs_sm pa10 tooltip_cont" style={{display: "none"}}>
                                                                    동일 부서 내에서 각 담당자의 아이디로 로그인하여 이용할 수 있으며, 소속 부서의 예약내역만 확인이 가능합니다. 예약내역 확인이나 세금계산서 발행이 분리되는 경우 새로운 부서로 가입을 진행해
                                                                    주십시오.
                                                                </div>
                                                            </div>
                                                        </label>
                                                        <div className="lookup_input">
                                                            <select name="" id="" onChange={selectHandle}>
                                                                <option value="">렌터카</option>
                                                                <option value="write">직접입력</option>
                                                            </select>
                                                            {write && <input type="text" className="ml5" placeholder="부서명 입력" />}
                                                        </div>
                                                    </div>
                                                    <div className="form_input mt20">
                                                        <label htmlFor="email_02" className="import">
                                                            부서별 세금계산서용 이메일
                                                        </label>
                                                        <input type="email" placeholder="abc@gmail. com" autoComplete="off" required title="abc@gmail.com 형태의 규칙을 확인해주세요." />
                                                        {error && (
                                                            <>
                                                                <label id="-error" className="error" htmlFor="">
                                                                    abc@gmail.com 형태의 규칙을 확인해주세요.
                                                                </label>
                                                            </>
                                                        )}
                                                    </div>
                                                    <div className="lookup_input mt20">
                                                        <div className="form_input mr5">
                                                            <label htmlFor="id" className="import">
                                                                은행명
                                                            </label>
                                                            <div className="lookup_input">
                                                                <select name="" id="">
                                                                    <option value="">은행선택</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="form_input">
                                                            <label htmlFor="input_06" className="import">
                                                                법인계좌명
                                                            </label>
                                                            <input type="text" placeholder="계좌 명의자명" id="input_06" name="input_06" autoComplete="off" required />
                                                        </div>
                                                    </div>
                                                    <div className="form_input mt20">
                                                        <label htmlFor="input_07" className="import">
                                                            법인계좌번호
                                                        </label>
                                                        <input type="text" placeholder="- 없이 숫자만 입력" id="input_07" name="input_07" autoComplete="off" required />
                                                    </div>
                                                    <div className="form_input mt20">
                                                        <div className="mr10">
                                                            <div className="flex jc-sb">
                                                                <div>
                                                                    <label htmlFor="input_04" className="import">
                                                                        계좌서류 증빙
                                                                    </label>
                                                                    <br />
                                                                    <span style={{fontSize: "1.2rem", color: "#808386"}}>최대 3개까지 가능 (JPG,PNG,PDF)</span>
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="input_04">
                                                                        <span className="button step button--primary" style={{padding: "0 10px"}}>
                                                                            파일첨부
                                                                        </span>
                                                                    </label>
                                                                    <input type="file" id="input_04" name="input_04" autoComplete="off" required style={{display: "none"}} />
                                                                </div>
                                                            </div>
                                                            <br />

                                                            <div className="thumb_view">
                                                                <div>
                                                                    <img src="/img/page/slide_sample.png" alt="" />
                                                                    <i>
                                                                        <img src="/img/icon/x_icon.svg" alt="" />
                                                                    </i>
                                                                </div>
                                                                <div>
                                                                    <img src="/img/page/slide_sample.png" alt="" />
                                                                    <i>
                                                                        <img src="/img/icon/x_icon.svg" alt="" />
                                                                    </i>
                                                                </div>
                                                                <div>
                                                                    <img src="/img/page/slide_sample.png" alt="" />
                                                                    <i>
                                                                        <img src="/img/icon/x_icon.svg" alt="" />
                                                                    </i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="l-line"></div>
                        </div>

                        <div className="sub_form">
                            <div className="l-box">
                                <div className="box_cont open drop" id="joinAgree">
                                    <div className="cont_title arrow toggle_btn toggle_tit3" onClick={toggleHandle3}>
                                        <span className="fwb">담당자 정보</span>
                                    </div>
                                    <div className="cont_info view pa30 Fs_sm toggle_cont3">
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
                                                                    아이디를 입력해주세요.
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
                                                                비밀번호를 입력해주세요.
                                                            </label>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="form_input mt20">
                                                    <label htmlFor="confirm_password" className="import">
                                                        비밀번호 재입력
                                                    </label>
                                                    <input type="password" placeholder="비밀번호 확인 " id="confirm_password" name="confirm_password" autoComplete="off" />
                                                </div>
                                                <div className="form_input mt20">
                                                    <label htmlFor="name_ko" className="import">
                                                        한글이름
                                                    </label>
                                                    <input type="text" placeholder="한글 이름을 입력해 주세요." autoComplete="off" />
                                                </div>

                                                <div className="form_input phone-nm mt20">
                                                    <label htmlFor="phone">담당자 전화번호</label>
                                                    <div className="lookup_input">
                                                        <select id="phone_number" className="mr5 phone">
                                                            <option value="+82">+82</option>
                                                            <option value="+1 670">+1 670</option>
                                                            <option value="+61 8 9164"> +61 8 9164</option>
                                                        </select>
                                                        <div className="phone_input">
                                                            <input type="text" defaultValue="02" className="local_num" />
                                                            <input type="text" placeholder="12345678" autoComplete="off" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="form_input phone-nm mt20">
                                                    <label htmlFor="phone">담당자 휴대폰번호</label>
                                                    <div className="lookup_input">
                                                        <select id="phone_number" className="mr5 phone">
                                                            <option value="+82">+82</option>
                                                            <option value="+1 670">+1 670</option>
                                                            <option value="+61 8 9164"> +61 8 9164</option>
                                                        </select>
                                                        <select name="" id="" className="mr5 phone">
                                                            <option value="">010</option>
                                                        </select>
                                                        <input type="text" placeholder="12345678" autoComplete="off" />
                                                    </div>
                                                </div>

                                                <div className="form_input mt20">
                                                    <label htmlFor="email">담당자 이메일</label>
                                                    <input type="email" placeholder="abc@gmail. com" autoComplete="off" required title="abc@gmail.com 형태의 규칙을 확인해주세요." />
                                                    {error && (
                                                        <>
                                                            <label id="-error" className="error" htmlFor="">
                                                                abc@gmail.com 형태의 규칙을 확인해주세요.
                                                            </label>
                                                        </>
                                                    )}
                                                </div>
                                                <div className="form_input mt20">
                                                    <div className="mr10">
                                                        <div className="flex jc-sb">
                                                            <div>
                                                                <label htmlFor="input_04" className="import">
                                                                    계좌서류 증빙
                                                                </label>
                                                                <br />
                                                                <span style={{fontSize: "1.2rem", color: "#808386"}}>최대 3개까지 가능 (JPG,PNG,PDF)</span>
                                                            </div>
                                                            <div>
                                                                <label htmlFor="input_04">
                                                                    <span className="button step button--primary" style={{padding: "0 10px"}}>
                                                                        파일첨부
                                                                    </span>
                                                                </label>
                                                                <input type="file" id="input_04" name="input_04" autoComplete="off" required style={{display: "none"}} />
                                                            </div>
                                                        </div>
                                                        <br />

                                                        <div className="thumb_view">
                                                            <div>
                                                                <img src="/img/page/slide_sample.png" alt="" />
                                                                <i>
                                                                    <img src="/img/icon/x_icon.svg" alt="" />
                                                                </i>
                                                            </div>
                                                            <div>
                                                                <img src="/img/page/slide_sample.png" alt="" />
                                                                <i>
                                                                    <img src="/img/icon/x_icon.svg" alt="" />
                                                                </i>
                                                            </div>
                                                            <div>
                                                                <img src="/img/page/slide_sample.png" alt="" />
                                                                <i>
                                                                    <img src="/img/icon/x_icon.svg" alt="" />
                                                                </i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="l-line"></div>
                            <div className="l-box check_table">
                                <div className="box_cont open drop" id="joinAgree">
                                    <div className="cont_title toggle_btn agreeAll toggle_tit4">
                                        <input type="checkbox" id="checkAll" checked={isAllChecked} onChange={handleCheckAll} />
                                        <label htmlFor="checkAll">
                                            <span className="import fwb">약관 전체 동의</span>
                                        </label>
                                        <i onClick={toggleHandle4} className="arrow_icon"></i>
                                    </div>
                                    <div className="cont_info view pa30 Fs_sm toggle_cont4 bg_white">
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
                                            <input type="checkbox" name="join_agree" id="join_agree3" onChange={handleCheck} />
                                            <label htmlFor="join_agree3" className="ml10">
                                                개인정보 수집 및 이용 동의<span className="ess Fs_xsm">(필수)</span>
                                            </label>
                                            <a href="#" className="detail join_agree_btn2">
                                                전문보기
                                            </a>
                                        </div>
                                        <div className="agree_check">
                                            <input type="checkbox" name="join_agree" id="join_agree4" onChange={handleCheck} />
                                            <label htmlFor="join_agree4" className="ml10">
                                                제 3자 제공 동의<span className="ess Fs_xsm">(필수)</span>
                                            </label>
                                            <a href="#" className="detail join_agree_btn2">
                                                전문보기
                                            </a>
                                        </div>
                                        <div className="agree_check">
                                            <input type="checkbox" name="join_agree" id="join_agree5" onChange={handleCheck} />
                                            <label htmlFor="join_agree5" className="ml10">
                                                이벤트 및 할인 혜택 안내 동의<span className="Fs_xsm">(선택)</span>
                                            </label>
                                            <a href="#" className="detail join_agree_btn3">
                                                전문보기
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="l-button mt50">
                                <button type="button" className="full_button button button--disabled mb10" onClick={() => setError((prev) => !prev)}>
                                    여행사 담당자 가입하기 (에러메시지 확인용)
                                </button>
                                <button type="button" className="full_button button button--disabled mb10">
                                    여행사 담당자 가입하기 (비활성화)
                                </button>
                                <button type="button" className="full_button button button--primary" onClick={() => navigate("/join_TP_com")}>
                                    여행사 담당자 가입하기
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
export default JoinTp;
