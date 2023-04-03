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
                                        <input type="text" placeholder="이름을 입력해주세요." autoComplete="off" value={"홍길동"}/>
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
                                                여권 성 <span className="summary">(여권상)</span>
                                            </label>
                                            <input type="text" placeholder="여권 영문 성" autoComplete="off" value={"HONG"}/>
                                        </div>
                                        <div>
                                            <label htmlFor="last_name">
                                                여권 이름 <span className="summary">(여권상)</span>
                                            </label>
                                            <input type="text" placeholder="여권 영문 이름" autoComplete="off" value={"GILDONG"}/>
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
                                            <div className="join_date flex ai-ct">
                                                <select name="select_change" className="mr5">
                                                    <option value="" disabled hidden>
                                                        년도
                                                    </option>
                                                    <option value="2022">2022</option>
                                                    <option value="2021">2021</option>
                                                </select>
                                                <select name="select_change" className="mr5">
                                                    <option value="" disabled hidden>
                                                        월
                                                    </option>
                                                    <option value="1월">01</option>
                                                    <option value="2월">02</option>
                                                    <option value="3월">03</option>
                                                    <option value="4월">04</option>
                                                    <option value="5월">05</option>
                                                    <option value="6월">06</option>
                                                    <option value="7월">07</option>
                                                    <option value="8월">08</option>
                                                    <option value="9월">09</option>
                                                    <option value="10월">10</option>
                                                    <option value="11월">11</option>
                                                    <option value="12월">12</option>
                                                </select>
                                                <p className="mr5">월</p>
                                                <select name="select_change" className="mr5">
                                                    <option value="" disabled hidden>
                                                        일
                                                    </option>
                                                    <option value="01일">01</option>
                                                    <option value="02일">02</option>
                                                    <option value="03일">03</option>
                                                    <option value="04일">04</option>
                                                    <option value="05일">05</option>
                                                    <option value="06일">06</option>
                                                    <option value="07일">07</option>
                                                    <option value="08일">08</option>
                                                    <option value="09일">09</option>
                                                    <option value="10일">10</option>
                                                    <option value="11일">11</option>
                                                    <option value="12일">12</option>
                                                    <option value="13일">13</option>
                                                    <option value="14일">14</option>
                                                    <option value="15일">15</option>
                                                    <option value="16일">16</option>
                                                    <option value="17일">17</option>
                                                    <option value="18일">18</option>
                                                    <option value="19일">19</option>
                                                    <option value="20일">20</option>
                                                    <option value="21일">21</option>
                                                    <option value="21일">22</option>
                                                    <option value="22일">23</option>
                                                    <option value="23일">24</option>
                                                    <option value="24일">25</option>
                                                    <option value="25일">26</option>
                                                    <option value="26일">27</option>
                                                    <option value="27일">28</option>
                                                    <option value="29일">29</option>
                                                    <option value="30일">30</option>
                                                    <option value="31일">31</option>
                                                </select>
                                                <p>일</p>
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
                                <div className="l-button mt50 flex jc-ct btn_full">
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
