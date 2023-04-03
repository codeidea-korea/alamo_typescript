import {useEffect, useState} from "react";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

const Withdrawal = () => {
    const navigation = useNavigate();
    useEffect(() => {
        $(".modal .close").click(function () {
            $(".modal").hide();
            $("body").removeClass("noneScroll");
        });

        $(".view").show();
        $(".hidden").hide();
        $("#textarea").hide();
    }, []);
    function openModal(modalname: any) {
        $("#" + modalname).show();
        $("body").addClass("noneScroll");
    }
    const selectHandle = (e: any) => {
        if (e.target.value === "direct") {
            $("#textarea").show();
        } else {
            $("#textarea").hide();
        }
    };
    return (
        <>
            <main className="sub jwithdrawal">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">회원탈퇴</article>
                        <article className="join_com-img tac ico">
                            <img src="/img/page/user_img2.png" alt="회원이미지" />
                            <div className="sub_form tac mt30">
                                <div className="Title03">홍길동 회원님</div>
                                <div className="Fs_sm mt10 summary">
                                    탈퇴 시 예약내역, 문의내역이 모두 삭제되며 복구가 불가능합니다.
                                    <br />
                                    그래도 탈퇴 하시겠습니까?
                                </div>
                                <select className="mt20" id="selbox" name="selbox" onChange={selectHandle}>
                                    <option value="" selected disabled hidden>
                                        탈퇴사유 선택
                                    </option>
                                    <option value="reason01">사유01</option>
                                    <option value="direct">직접입력</option>
                                </select>
                                <div id="textarea" className="textarea mt5">
                                    <textarea id="text_word" name="text_word" className="autosize" placeholder="최대 3,000자"></textarea>
                                    {/* <div id="text_cnt">(0 / 3,000)</div> */}
                                </div>
                                <div className="l-button mt50">
                                    <button type="button" className="full_button button button--disabled mb5">
                                        탈퇴하기(사유선택전)
                                    </button>
                                    <button type="button" className="full_button button button--primary" onClick={() => openModal("completion")}>
                                        탈퇴하기(사유선택후)
                                    </button>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>

                {/* <!-- Modal content S --> */}
                <div id="confirm" className="modal">
                    <div className="modal-content">
                        <span className="close fwb">×</span>
                        <p>탈퇴하시겠습니까?</p>
                        <div className="l-button mt30 flex">
                            <button type="button" className="button link button--disabled mr5">
                                취소
                            </button>
                            <button type="button" className="button link button--primary" onClick={() => openModal("completion")}>
                                탈퇴
                            </button>
                            
                        </div>
                    </div>
                </div>

                <div id="completion" className="modal">
                    <div className="modal-content2">
                        <div className="modal-title Title03">회원탈퇴</div>
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                            <article className="join_com-img tac ico">
                                <img src="/img/page/user_img2.png" alt="회원이미지" />
                                <div className="sub_form tac">
                                    <div className="Title03">정상적으로 탈퇴 되었습니다.</div>
                                    <div className="mt10 summary">그동안 이용해 주셔서 감사합니다.</div>
                                    <div className="l-button mt50">
                                        <button type="button" className="full_button button button--primary" onClick={() => navigation("/")}>
                                            확인
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                {/* <!-- Modal content E --> */}
            </main>
        </>
    );
};
export default Withdrawal;
