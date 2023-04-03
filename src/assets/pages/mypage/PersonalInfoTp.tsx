import {useEffect, useState} from "react";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

const PersonalInfoTp = () => {
    const navigation = useNavigate();
    useEffect(() => {
        $(".modal .close").click(function () {
            $(".modal").hide();
            $("body").removeClass("noneScroll");
        });

        $(".view").show();
        $(".hidden").hide();

        $("select[id*='phone_number']").css("color", "transparent");
        // 국가번호 value값으로 불러오기
        $("select[id*='phone_number']").change(function (e: any) {
            $("input[id*='phone_number_value']").val(e.target.value);

            // 선택된 value 색상 바꾸기
            var current = $("select[id*='phone_number']").val();
            if (current != "null") {
                $("select[id*='phone_number']").css("color", "transparent");
            }
        });
        $(".toggle_btn").on("click", function () {
            if ($(this).hasClass("toggle")) {
                $(this).removeClass("toggle");
            } else {
                $(this).addClass("toggle");
            }
        });
    }, []);
    function openModal(modalname: any) {
        $("#" + modalname).show();
        $("body").addClass("noneScroll");
    }
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
            <main className="sub join">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">개인정보변경</article>
                        <article className="sub_form">
                            <form className="cmxform" id="sign-form" method="get" action="">
                                <fieldset>
                                    <div className="l-box mb10">
                                        <div className="box_cont open drop">
                                            <div className="toggle_tit cont_title arrow toggle toggle_btn" onClick={toggleHandle}>
                                                사업자 정보
                                            </div>
                                            <div className="cont_info view toggle_cont">
                                                <div className="form_input">
                                                    <label htmlFor="business_number" className="import">
                                                        사업자번호
                                                    </label>
                                                    <input type="text" defaultValue="111-111-1111" autoComplete="off" />
                                                </div>
                                                <div className="form_input mt20">
                                                    <label htmlFor="travel_agency" className="import">
                                                        여행사명
                                                    </label>
                                                    <input type="text" defaultValue="여행사" autoComplete="off" />
                                                </div>
                                                <div className="form_input mt20">
                                                    <label htmlFor="ceo" className="import">
                                                        대표자명
                                                    </label>
                                                    <input type="text" defaultValue="홍길동" autoComplete="off" />
                                                </div>

                                                <div className="form_input phone-nm mt20">
                                                    <label htmlFor="phone" className="import">
                                                        대표 연락처
                                                    </label>
                                                    <div className="lookup_input">
                                                        <select name="select_change" className="mr5">
                                                            <option value="대한민국">대한민국 +82</option>
                                                            <option value="미국령북마리아나제도">미국령북마리아나제도 +1 670</option>
                                                        </select>
                                                        <input type="text" defaultValue="01012345678" autoComplete="off" />
                                                    </div>
                                                </div>

                                                <div className="form_input mt20">
                                                    <label htmlFor="name_ko" className="import">
                                                        대표 이메일
                                                    </label>
                                                    <input type="email" defaultValue="abcd@email.com" id="email" name="email" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="l-box mb10">
                                        <div className="box_cont open drop">
                                            <div className="toggle_tit2 cont_title arrow toggle_btn" onClick={toggleHandle2}>
                                                부서 정보
                                            </div>
                                            <div className="cont_info view toggle_cont2">
                                                <div className="form_input">
                                                    <label htmlFor="business_number" className="box_title">
                                                        부서 선택
                                                    </label>
                                                    <select name="select_change">
                                                        <option value="렌터카">렌터카</option>
                                                    </select>
                                                </div>
                                                <div className="form_input mt20">
                                                    <label htmlFor="department_email" className="import">
                                                        부서별 세금계산서용 이메일
                                                    </label>
                                                    <input type="email" defaultValue="abcd@email.com" id="email" name="email" autoComplete="off" />
                                                </div>
                                                <div className="lookup_input mt20">
                                                    <div className="mr5">
                                                        <label htmlFor="bank" className="import">
                                                            은행명
                                                        </label>
                                                        <select name="select_change">
                                                            <option value="" disabled hidden>
                                                                은행선택
                                                            </option>
                                                            <option value="">은행1</option>
                                                            <option value="">은행2</option>
                                                        </select>
                                                    </div>
                                                    <div>
                                                        <label htmlFor="business_account." className="import">
                                                            법인계좌명
                                                        </label>
                                                        <input type="text" defaultValue="김아무개" autoComplete="off" />
                                                    </div>
                                                </div>
                                                <div className="form_input mt20">
                                                    <label htmlFor="business_account." className="import">
                                                        법인계좌번호
                                                    </label>
                                                    <input type="text" defaultValue="111-111-1111" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="l-box">
                                        <div className="box_cont open drop">
                                            <div className="toggle_tit3 cont_title arrow toggle_btn" onClick={toggleHandle3}>
                                                담당자 정보
                                            </div>
                                            <div className="cont_info view toggle_cont3">
                                                <div className="form_input">
                                                    <div className="mr10">
                                                        <label htmlFor="id" className="import">
                                                            아이디
                                                        </label>
                                                        <input type="text" defaultValue="abcd" id="id" name="id" autoComplete="off" required />
                                                    </div>
                                                </div>

                                                <div className="form_input mt20">
                                                    <label htmlFor="password" className="import">
                                                        비밀번호
                                                    </label>
                                                    <button type="button" className="button link button--primary" onClick={() => openModal("change_pw")}>
                                                        비밀번호 변경
                                                    </button>
                                                </div>

                                                <div className="form_input mt20">
                                                    <label htmlFor="name_ko" className="import">한글이름</label>
                                                    <input type="text" defaultValue="홍길동" autoComplete="off" />
                                                </div>

                                                <div className="form_input phone-nm mt20">
                                                    <label htmlFor="call">
                                                        담당자 전화번호
                                                    </label>
                                                    <div className="lookup_input">
                                                        <input type="text" id="phone_number_value" defaultValue="+82" />
                                                        <select id="phone_number" className="mr5">
                                                            <option value="+82">대한민국 +82</option>
                                                            <option value="+1 670">미국령북마리아나제도 +1 670</option>
                                                            <option value="+61 8 9164">크리스마스 섬 제도 +61 8 9164</option>
                                                        </select>
                                                        <input type="text" defaultValue="021234567" autoComplete="off" />
                                                    </div>
                                                </div>

                                                <div className="form_input phone-nm mt20">
                                                    <label htmlFor="phone">
                                                        담당자 휴대폰번호
                                                    </label>
                                                    <div className="lookup_input">
                                                        <input type="text" id="phone_number_value" defaultValue="+82" />
                                                        <select id="phone_number" className="mr5">
                                                            <option value="+82">대한민국 +82</option>
                                                            <option value="+1 670">미국령북마리아나제도 +1 670</option>
                                                            <option value="+61 8 9164">크리스마스 섬 제도 +61 8 9164</option>
                                                        </select>
                                                        <input type="text" defaultValue="01012345678" autoComplete="off" />
                                                    </div>
                                                </div>

                                                <div className="form_input mt20">
                                                    <label htmlFor="email">
                                                        담당자 이메일
                                                    </label>
                                                    <input type="email" defaultValue="abcd@email.com" id="email" name="email" autoComplete="off" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="l-line"></div>
                                    <div className="l-box check_table">
                                        <div className="box_cont open drop" id="joinAgree">
                                            <div className="cont_title toggle_btn agreeAll">
                                                <input type="checkbox" id="checkAll" checked={isAllChecked} onChange={handleCheckAll} />
                                                <label htmlFor="checkAll">
                                                    <span className="import fwb">약관 전체 동의</span>
                                                </label>
                                                <span className="arrow toggle_tit" onClick={toggleHandle}>토글</span>
                                            </div>
                                            <div className="cont_info view Fs_sm toggle_cont">
                                                <div className="agree_check">
                                                    <input type="checkbox" name="join_agree" id="join_agree" onChange={handleCheck} />
                                                    <label htmlFor="join_agree" className="ml10">
                                                        이벤트 및 할인 혜택 안내 동의<span className="Fs_xsm">(선택)</span>
                                                    </label>
                                                    <a href="#" className="detail join_agree_btn1">
                                                        전문보기
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                                <div className="l-button mt50 flex jc-ct">
                                    <button type="button" className="button link button--disabled mr10" onClick={() => navigation("/mypage_TP")}>
                                        취소
                                    </button>
                                    <button type="button" className="button link button--primary">
                                        개인정보 변경
                                    </button>
                                </div>
                                <div className="search-box Fs_sm mt20 tac">
                                    <a href="#?" onClick={() => openModal("withdrawal")}>
                                        회원탈퇴
                                    </a>
                                </div>
                            </form>
                        </article>
                    </div>
                </section>
                <div id="withdrawal" className="modal">
                    <div className="modal-content">
                        <span className="close fwb">&times;</span>
                        <p>회원탈퇴를 하시겠습니까?</p>
                        <a href="/withdrawal">
                            <button type="button" className="full_button button button--primary mt30" style={{color: "#fff"}}>
                                확인
                            </button>
                        </a>
                    </div>
                </div>

                {/* <!-- Modal content S --> */}
                <div id="change_pw" className="modal">
                    <div className="modal-content2">
                        <div className="modal-title Title03">비밀번호 변경</div>
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                            <form className="cmxform" id="sign-form" method="get" action="">
                                <fieldset>
                                    <div className="form_input">
                                        <div className="mr10">
                                            <label htmlFor="now_password">현재 비밀번호</label>
                                            <input type="password" placeholder="현재 비밀번호를 입력해주세요." id="id" name="id" autoComplete="off" required />
                                        </div>
                                    </div>
                                    <div className="form_input mt20">
                                        <label htmlFor="new_password">새로운 비밀번호</label>
                                        <input type="password" placeholder="새로운 비밀번호를 입력해주세요." id="password" name="password" autoComplete="off" required />
                                    </div>
                                    <div className="form_input mt20">
                                        <label htmlFor="confirm_password">새로운 비밀번호 재입력</label>
                                        <input type="password" placeholder="새로운 비밀번호를 다시 입력해주세요." id="confirm_password" name="confirm_password" autoComplete="off" required />
                                    </div>
                                </fieldset>
                            </form>
                            <div className="l-button mt30">
                                <button type="button" className="button link button--primary">
                                    변경하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal content E --> */}
            </main>
        </>
    );
};
export default PersonalInfoTp;
