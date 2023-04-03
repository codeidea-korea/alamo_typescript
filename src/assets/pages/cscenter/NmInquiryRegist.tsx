import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import $ from "jquery";

const NmInquiryRegist = () => {
    const navigate = useNavigate();
    useEffect(() => {
        $(".modal .close").click(function () {
            $(".modal").hide();
            $("body").removeClass("noneScroll");
        });

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

    /* Modal */
    function openModal(modalname: any) {
        $("#" + modalname).show();
        $("body").addClass("noneScroll");
    }

    const inquiryHandle = (e: any) => {
        e.target.classList.toggle("on");
    };

    const listMemberHandle = (e: any) => {
        const btn = document.querySelector(".disabled-selected");
        if (btn !== null) {
            btn.textContent = e.target.innerText;
            btn.classList.remove("on");
        }
    };
    return (
        <>
            <main className="sub" id="inquiry_regist">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">1:1 문의 등록</article>

                        <article className="sub_form">
                            <form method="get" action="">
                                <fieldset>
                                    <div className="form_input">
                                        <label htmlFor="phone">문의 구분</label>

                                        <div className="select normal">
                                            <div className="disabled-selected flex ai-ct pl10" onClick={inquiryHandle}>
                                                문의
                                            </div>
                                            <ul className="list-member Fs_sm" onClick={listMemberHandle}>
                                                <li>
                                                    <a className="tab_item active" href="#?" data-category="inquiry01">
                                                        문의
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="tab_item" href="#?" data-category="inquiry02">
                                                        항공사 마일리지 적립
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="tab_item" href="#?" data-category="inquiry03">
                                                        Lost amd Found
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className=" mt20 flex ai-ct">
                                            <p className="point mr10">추천 TIP</p>
                                            <button type="button" className="button button--tip step Fs_sm mr5" onClick={() => openModal("point-search")}>
                                                <span className="mr5">사륜구동</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="12px" viewBox="0 0 50 80">
                                                    <polyline fill="none" stroke="var(--main-color)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 " />
                                                </svg>
                                            </button>
                                            <button type="button" className="button button--tip step Fs_sm" onClick={() => openModal("point-search")}>
                                                <span className="mr5">환불안내</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="12px" viewBox="0 0 50 80">
                                                    <polyline fill="none" stroke="var(--main-color)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 " />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="tab_inner inquiry01 active">
                                        <div className="form_input mt20">
                                            <label htmlFor="phone">예약번호</label>
                                            <select id="">
                                                <option value="">예약번호 선택</option>
                                            </select>
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="email" className="import">
                                                이메일
                                            </label>
                                            <input type="email" placeholder="이메일을 입력해주세요." id="email" name="email" autoComplete="off" />
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="name">한글이름</label>
                                            <input type="text" placeholder="한글 이름을 입력해 주세요." autoComplete="off" />
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
                                                <input type="text" placeholder="휴대폰번호를 입력해주세요" autoComplete="off" />
                                            </div>
                                            <input type="text" className="mt5" placeholder="차량 픽업 지점" name="" id="" />
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="" className="import">
                                                제목
                                            </label>
                                            <input type="text" placeholder="제목 최대 30자" autoComplete="off" />
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="" className="import">
                                                내용
                                            </label>
                                            <div className="textarea mt5">
                                                <textarea id="text_word" name="text_word" className="autosize"></textarea>
                                                <div id="text_cnt">(0 / 3,000)</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab_inner inquiry02 ">
                                        <div className="lookup_input mt20">
                                            <div className="mr5">
                                                <label htmlFor="">예약번호</label>
                                                <select id="">
                                                    <option value="">예약번호 선택</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label htmlFor="">픽업일자</label>
                                                <input type="text" placeholder="" autoComplete="off" />
                                            </div>
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="email" className="import">
                                                이메일
                                            </label>
                                            <input type="email" placeholder="이메일을 입력해주세요." id="email" name="email" autoComplete="off" />
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="name">한글이름</label>
                                            <input type="text" placeholder="한글 이름을 입력해 주세요." autoComplete="off" />
                                        </div>

                                        <div className="form_input mt20">
                                            <div className="lookup_input">
                                                <div className="mr5">
                                                    <label htmlFor="" className="import">
                                                        항공사
                                                    </label>
                                                    <select id="">
                                                        <option value="">선택</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <label htmlFor="" className="import">
                                                        멤버십 번호
                                                    </label>
                                                    <input type="text" placeholder="멤버십 번호 입력" autoComplete="off" />
                                                </div>
                                            </div>
                                            <input type="text" className="mt5" placeholder="차량 픽업 지점" name="" id="" />
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
                                                <input type="text" placeholder="휴대폰번호를 입력해주세요" autoComplete="off" />
                                            </div>
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="" className="import">
                                                제목
                                            </label>
                                            <input type="text" placeholder="제목 최대 30자" autoComplete="off" />
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="" className="import">
                                                내용
                                            </label>
                                            <div className="textarea mt5">
                                                <textarea id="text_word" name="text_word" className="autosize"></textarea>
                                                <div id="text_cnt">(0 / 3,000)</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab_inner inquiry03">
                                        <div className="form_input mt20">
                                            <label htmlFor="email" className="import">
                                                이메일
                                            </label>
                                            <input type="email" placeholder="이메일을 입력해주세요." id="email" name="email" autoComplete="off" />
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="name">한글이름</label>
                                            <input type="text" placeholder="한글 이름을 입력해 주세요." autoComplete="off" />
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
                                                <input type="text" placeholder="휴대폰번호를 입력해주세요" autoComplete="off" />
                                            </div>
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="" className="import">
                                                분실물품
                                            </label>
                                            <input type="text" placeholder="물픔 직접 입력" autoComplete="off" />
                                            <input type="text" className="mt5" placeholder="차량 픽업 지점" name="" id="" />
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="" className="import">
                                                제목
                                            </label>
                                            <input type="text" placeholder="제목 최대 30자" autoComplete="off" />
                                        </div>

                                        <div className="form_input mt20">
                                            <label htmlFor="" className="import">
                                                내용
                                            </label>
                                            <div className="textarea mt5">
                                                <textarea id="text_word" name="text_word" className="autosize"></textarea>
                                                <div id="text_cnt">(0 / 3,000)</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt20">
                                        <p className="fwb">고객센터 월~금 09:00 ~ 17:00 (주말/공휴일 휴무)</p>
                                        <p className="Fs_sm summary">운영시간 안에 주신 문의는 운영시간내 답변을 원칙으로 하며, 이메일로도 회신됩니다.</p>
                                    </div>
                                </fieldset>
                            </form>

                            <div className="l-button mt30 flex jc-ct">
                                <button type="button" className="button link button--cancle mr10">
                                    취소
                                </button>
                                <button type="button" className="button link button--primary mr10">
                                    문의하기
                                </button>
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
};
export default NmInquiryRegist;
