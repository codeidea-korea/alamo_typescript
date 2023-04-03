import {useEffect, useState} from "react";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

const PersonalInfoSimple = () => {
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
    }, []);
    function openModal(modalname: any) {
        $("#" + modalname).show();
        $("body").addClass("noneScroll");
    }
    const toggleHandle = () => {
        $(".toggle_cont").toggle();
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
                                    <div className="form_input mt20">
                                        <label htmlFor="name_ko">한글이름</label>
                                        <input type="text" placeholder="이름을 입력해주세요." autoComplete="off" />
                                    </div>

                                    <div className="form_input mt20">
                                        <label htmlFor="email" className="import">
                                            이메일
                                        </label>
                                        <input type="email" placeholder="이메일을 입력해주세요." id="email" name="email" autoComplete="off" />
                                    </div>

                                    <div className="lookup_input mt20">
                                        <div className="mr5">
                                            <label htmlFor="first_name">
                                                여권 성 <span className="Fs_sm summary">(여권상)</span>
                                            </label>
                                            <input type="text" placeholder="여권 영문 성" autoComplete="off" />
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
                                        <div className="">
                                            <label htmlFor="date_birth">생년월일</label>
                                            <div className="join_date flex">
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
                                                    <option value="1월">1월</option>
                                                    <option value="2월">2월</option>
                                                    <option value="3월">3월</option>
                                                    <option value="4월">4월</option>
                                                    <option value="5월">5월</option>
                                                    <option value="6월">6월</option>
                                                    <option value="7월">7월</option>
                                                    <option value="8월">8월</option>
                                                    <option value="9월">9월</option>
                                                    <option value="10월">10월</option>
                                                    <option value="11월">11월</option>
                                                    <option value="12월">12월</option>
                                                </select>
                                                <select name="select_change" className="">
                                                    <option value="" disabled hidden>
                                                        일
                                                    </option>
                                                    <option value="1일">1일</option>
                                                    <option value="2일">2일</option>
                                                </select>
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
                                            <div className="cont_title toggle_btn agreeAll">
                                                <input type="checkbox" id="checkAll" checked={isAllChecked} onChange={handleCheckAll} />
                                                <label htmlFor="checkAll">
                                                    <span className="import fwb">약관 전체 동의</span>
                                                </label>
                                            </div>
                                            <div className="cont_info view Fs_sm">
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
                                    <button type="button" className="button link button--disabled mr10" onClick={() => navigation("/mypage_simple")}>
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
            </main>
        </>
    );
};
export default PersonalInfoSimple;
