import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import $ from "jquery";

const InqueryList = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // 탭버튼 li수에 맞춰 너비값 변경
        var n = $(".sub .tab_btn > li").length;
        var m = $(".modal .tab_btn > li").length;
        $(".sub .tab_btn > li").css({width: "calc(100% / " + n + ")"});
        $(".modal .tab_btn > li").css({width: "calc(100% / " + m + ")"});

        $("#tab-btn li a").click(function (event) {
            event.preventDefault();
            $(".all").hide();

            var selectAtt = $(this).attr("data-category");

            $("#tab-btn li a").removeClass("active_tab");
            $(this).addClass("active_tab");

            $("." + selectAtt).show();
        });

        $(".view").show();
        $(".hidden").hide();

        $(".toggle_btn").on("click", function () {
            if ($(this).hasClass("toggle")) {
                $(this).removeClass("toggle");
            } else {
                $(this).addClass("toggle");
            }
        });
    }, []);

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
    const toggleHandle5 = () => {
        $(".toggle_cont5").toggle();
        $(".toggle_tit5").toggleClass("active");
    };
    const toggleHandle6 = () => {
        $(".toggle_cont6").toggle();
        $(".toggle_tit6").toggleClass("active");
    };
    const toggleHandle7 = () => {
        $(".toggle_cont7").toggle();
        $(".toggle_tit7").toggleClass("active");
    };

    return (
        <>
            <main className="sub" id="inquiry_list">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">1:1문의</article>

                        <div className="box_cont inquiry_info mb30">
                            <div className="Fs_sm">
                                <div className="fwb">고객센터 운영시간</div>
                                <ul className="flex">
                                    <li className="line">평일</li>
                                    <li>09:00 ~ 17:00</li>
                                </ul>
                                <ul className="flex">
                                    <li className="line">주말/공휴일</li>
                                    <li>휴무</li>
                                </ul>
                            </div>
                            <button className="button link tac Fs_sm fwb" onClick={() => navigate("/inquiry_regist")}>
                                1:1 문의등록
                            </button>
                        </div>

                        <article className="l-box">
                            <div className="l-board-box mt10">
                                <ul id="tab-btn" className="tab_btn pb20">
                                    <li>
                                        <a className="active_tab" href="#" data-category="all">
                                            전체
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="answer_complete">
                                            답변완료
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="answering">
                                            답변중
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="answer_waiting">
                                            답변대기
                                        </a>
                                    </li>
                                </ul>
                                {/* <!-- User inquiry_list S --> */}
                                <div className="inquiry_list">
                                    <div className="box_cont open drop answer_waiting all mb10">
                                        <ul className="cont_title arrow toggle_btn toggle flex ac active toggle_tit items-center" onClick={toggleHandle}>
                                            <li className="line tac wd_15 pa30 summary">답변대기</li>
                                            <li className="pa30">
                                                <ul>
                                                    <li className="Fs_sm summary">2022-09-11</li>
                                                    <li>유료도로를 지나갔는데 톨비 결제를 어떻게 해야하나요?</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="cont_info view hidden pa30 toggle_cont">
                                            <div className="question table01 pa20">
                                                질문내용질문내용질문
                                                <br />
                                                내용질문내용질문내용질문내용
                                            </div>
                                            <div className="l-button flex jc-ct mt20">
                                                <button type="button" className="button link button--cancle mr10">
                                                    삭제
                                                </button>
                                                <a href="/inquiry_regist" type="button" className="button link button--primary">
                                                    재문의하기
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box_cont open drop answer_complete all mb10">
                                        <ul className="cont_title arrow toggle_btn toggle flex ac active toggle_tit2 items-center" onClick={toggleHandle2}>
                                            <li className="line tac wd_15 pa30 point">답변완료</li>
                                            <li className="pa30">
                                                <ul>
                                                    <li className="Fs_sm summary">2022-09-11</li>
                                                    <li>유료도로를 지나갔는데 톨비 결제를 어떻게 해야하나요?</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="cont_info view hidden pa30 toggle_cont2">
                                            <div className="question table01 pa20 summary">
                                                질문내용질문내용질문
                                                <br />
                                                내용질문내용질문내용질문내용
                                            </div>
                                            <div className="question table01 pa20 mt20">
                                                <p className="Fs_sm summary mb10">
                                                    <span className="line">답변일</span>2022-09-11
                                                </p>
                                                <p>
                                                    현지에서 계약서 작성 시 고객님께서 추가/변경하는 부분이 없다면, 예약 확정서 상의 최종 예상 요금 이외에 별도의 비용이 발생하지 않습니다. 서명된 부분에 대해서는 추후 환불이 불가하오니 금액 추가를 원치 않는
                                                    경우, 렌탈 계약서 상 포함된 항목이 없는지 꼼꼼히 확인하신 후 서명해주시길 바랍니다.일반적으로 현지 지점 직원이 권유하는 추가 옵션은 다음과 같습니다.
                                                </p>

                                                {/* <!-- 재문의하기 리스트 S --> */}
                                                <ul className="mt20">
                                                    <li className="guide_title arrow toggle_btn toggle re-answer pa20 summary active toggle_tit4" onClick={toggleHandle4}>
                                                    <span className="ellipsis">체크/데빗 카드로 결제가 가능한가요?</span>
                                                    </li>
                                                    <li className="cont_info view hidden pa30 toggle_cont4">
                                                        <p className="Fs_sm summary mb10">
                                                            <span className="line">답변일</span>2022-09-11
                                                        </p>
                                                        <p className="question table01 pa20 summary">체크/데빗 카드로 결제가 가능 여부</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="guide_title arrow toggle_btn toggle re-answer pa20 summary active toggle_tit5" onClick={toggleHandle5}>
                                                    <span className="ellipsis">차종 선택이 가능한가요?</span>
                                                    </li>
                                                    <li className="cont_info view hidden pa30 toggle_cont5">
                                                        <p className="Fs_sm summary mb10">
                                                            <span className="line">답변일</span>2022-09-11
                                                        </p>
                                                        <p className="question table01 pa20 summary">차종 선택이 가능 여부</p>
                                                    </li>
                                                </ul>
                                                {/* <!-- 재문의하기 리스트 E --> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="box_cont open drop answering all">
                                        <ul className="cont_title arrow toggle_btn toggle flex ac active toggle_tit3 items-center" onClick={toggleHandle3}>
                                            <li className="line tac wd_15 pa30 primary">답변중</li>
                                            <li className="pa30">
                                                <ul>
                                                    <li className="Fs_sm summary">2022-09-11</li>
                                                    <li>유료도로를 지나갔는데 톨비 결제를 어떻게 해야하나요?</li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="cont_info view hidden pa30 toggle_cont3">
                                            <div className="question table01 pa20 summary">
                                                질문내용질문내용질문
                                                <br />
                                                내용질문내용질문내용질문내용
                                            </div>
                                            <div className="question table01 pa20 mt20">
                                                <p className="Fs_sm summary mb10">
                                                    <span className="line">답변일</span>2022-09-11
                                                </p>
                                                <p>
                                                    현지에서 계약서 작성 시 고객님께서 추가/변경하는 부분이 없다면, 예약 확정서 상의 최종 예상 요금 이외에 별도의 비용이 발생하지 않습니다. 서명된 부분에 대해서는 추후 환불이 불가하오니 금액 추가를 원치 않는
                                                    경우, 렌탈 계약서 상 포함된 항목이 없는지 꼼꼼히 확인하신 후 서명해주시길 바랍니다.일반적으로 현지 지점 직원이 권유하는 추가 옵션은 다음과 같습니다.
                                                </p>

                                                {/* <!-- 재문의하기 리스트 S --> */}
                                                <ul className="mt20">
                                                    <li className="guide_title arrow toggle_btn toggle re-answer pa20 summary active toggle_tit6" onClick={toggleHandle6}>
                                                        <span className="ellipsis">체크/데빗 카드로 결제가 가능한가요?</span>
                                                    </li>
                                                    <li className="cont_info view hidden pa30 toggle_cont6">
                                                        <p className="Fs_sm summary mb10">
                                                            <span className="line">답변일</span>2022-09-11
                                                        </p>
                                                        <p className="question table01 pa20 summary">체크/데빗 카드로 결제가 가능 여부</p>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li className="guide_title arrow toggle_btn toggle re-answer pa20 summary active toggle_tit7" onClick={toggleHandle7}>
                                                        <span className="ellipsis">차종 선택이 가능한가요?</span>
                                                    </li>
                                                    <li className="cont_info view hidden pa30 toggle_cont7">
                                                        <p className="Fs_sm summary mb10">
                                                            <span className="line">답변일</span>2022-09-11
                                                        </p>
                                                        <p className="question table01 pa20 summary">차종 선택이 가능 여부</p>
                                                    </li>
                                                </ul>
                                                {/* <!-- 재문의하기 리스트 E --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Inquiry list E --> */}
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
};
export default InqueryList;
