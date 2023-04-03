import {useEffect} from "react";
import $ from "jquery";

const UserGuide = () => {
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

        const tabItem = document.querySelectorAll(".tab_item");
        const tabInner = document.querySelectorAll(".tab_inner");

        tabItem.forEach((tab, idx) => {
            tab.addEventListener("click", function () {
                tabInner.forEach((inner) => {
                    inner.classList.remove("active");
                });

                tabItem.forEach((item) => {
                    item.classList.remove("active");
                });

                tabItem[idx].classList.add("active");
                tabInner[idx].classList.add("active");
            });
        });

        $(".view").show();
        $(".hidden").hide();

        $(".modal .close").click(function () {
            $(".modal").hide();
            $("body").removeClass("noneScroll");
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
    const toggleHandle8 = () => {
        $(".toggle_cont8").toggle();
        $(".toggle_tit8").toggleClass("active");
    };
    const toggleHandle9 = () => {
        $(".toggle_cont9").toggle();
        $(".toggle_tit9").toggleClass("active");
    };
    const toggleHandle10 = () => {
        $(".toggle_cont10").toggle();
        $(".toggle_tit10").toggleClass("active");
    };
    const toggleHandle11 = () => {
        $(".toggle_cont11").toggle();
        $(".toggle_tit11").toggleClass("active");
    };
    const toggleHandle12 = () => {
        $(".toggle_cont12").toggle();
        $(".toggle_tit12").toggleClass("active");
    };
    const toggleHandle13 = () => {
        $(".toggle_cont13").toggle();
        $(".toggle_tit13").toggleClass("active");
    };
    const toggleHandle14 = () => {
        $(".toggle_cont14").toggle();
        $(".toggle_tit14").toggleClass("active");
    };
    const toggleHandle15 = () => {
        $(".toggle_cont15").toggle();
        $(".toggle_tit15").toggleClass("active");
    };
    const toggleHandle16 = () => {
        $(".toggle_cont16").toggle();
        $(".toggle_tit16").toggleClass("active");
    };

    return (
        <>
            <main className="sub user_guide" id="user_guide">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">이용가이드</article>

                        <article className="search-box form flex pa30">
                            <span className="mr5" style={{flex: "2"}}>
                                <svg viewBox="0 0 56.7 56.7" className="search_icon">
                                    <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
                                </svg>
                                <input type="search" autoComplete="off" className="search_input mr5" data-test-id="search-input" placeholder="검색" />
                            </span>

                            <button type="button" className="button search_btn">
                                <span className="ico">검색</span>
                            </button>
                        </article>

                        <article className="l-box">
                            <div className="l-board-box mt10">
                                <ul className="tab_btn pb5">
                                    <li>
                                        <a className="tab_item active" href="#" data-category="US">
                                            미국
                                        </a>
                                    </li>
                                    <li>
                                        <a className="tab_item" href="#" data-category="CA">
                                            캐나다
                                        </a>
                                    </li>
                                    <li>
                                        <a className="tab_item" href="#" data-category="GU">
                                            괌
                                        </a>
                                    </li>
                                </ul>
                                <div className="select">
                                    <button className="disabled-selected" onClick={inquiryHandle}>
                                        그 외 국가 선택
                                    </button>
                                    <ul className="list-member Fs_sm" onClick={listMemberHandle}>
                                        <li>
                                            <a className="tab_item" href="#" data-category="MP">
                                                사이판
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="PW">
                                                팔라우
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="AU">
                                                호주
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="NZ">
                                                뉴질랜드
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="GB">
                                                영국
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="DE">
                                                독일
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="ES">
                                                스페인
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="IE">
                                                아일랜드
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="CH">
                                                스위스
                                            </a>
                                        </li>
                                        <li>
                                            <a className="tab_item" href="#" data-category="AT">
                                                오스트리아
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="l-line"></div>
                                <article className="search-box form flex mo_search">
                                    <span className="mr5" style={{flex: "2"}}>
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="search_icon">
                                            <path
                                                d="M12 11.3724L8.64799 8.02038C9.4535 7.05336 9.85518 5.81301 9.76947 4.55737C9.68376 3.30173 9.11726 2.12747 8.18782 1.27887C7.25838 0.430275 6.03756 -0.0273262 4.77932 0.00126329C3.52108 0.0298528 2.32231 0.542432 1.43237 1.43237C0.542432 2.32231 0.0298528 3.52108 0.00126329 4.77932C-0.0273262 6.03756 0.430275 7.25838 1.27887 8.18782C2.12747 9.11726 3.30173 9.68376 4.55737 9.76947C5.81301 9.85518 7.05336 9.4535 8.02038 8.64799L11.3724 12L12 11.3724ZM0.903585 4.89829C0.903585 4.10822 1.13787 3.33588 1.57682 2.67895C2.01576 2.02203 2.63965 1.51001 3.36959 1.20766C4.09952 0.905315 4.90273 0.826206 5.67762 0.980343C6.45252 1.13448 7.16431 1.51494 7.72298 2.07361C8.28165 2.63228 8.66211 3.34407 8.81625 4.11897C8.97038 4.89386 8.89128 5.69707 8.58893 6.427C8.28658 7.15694 7.77456 7.78083 7.11764 8.21977C6.46071 8.65872 5.68837 8.893 4.89829 8.893C3.83919 8.89183 2.82381 8.47058 2.07491 7.72168C1.32601 6.97278 0.90476 5.9574 0.903585 4.89829Z"
                                                fill="#A8ABAE"
                                            />
                                        </svg>
                                        <input type="search" autoComplete="off" className="search_input mr5" data-test-id="search-input" placeholder="검색" />
                                        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="refresh_icon">
                                            <path d="M6.9987 7.66675L4.33203 10.3334L6.9987 13.0001" stroke="#808386" />
                                            <path
                                                d="M1.62391 8C1.0952 7.08424 0.893171 6.01608 1.05092 4.97048C1.20867 3.92489 1.71684 2.96387 2.49219 2.24486C3.26754 1.52585 4.2641 1.09148 5.3186 1.0129C6.3731 0.934327 7.42302 1.21621 8.29637 1.81237C9.16972 2.40854 9.81471 3.28363 10.1257 4.29429C10.4366 5.30496 10.3951 6.39127 10.008 7.37528C9.62084 8.35928 8.91098 9.18262 7.9947 9.71043C7.07842 10.2382 6.01005 10.4392 4.96462 10.2804"
                                                stroke="#808386"
                                                strokeLinecap="round"
                                            />
                                        </svg>
                                    </span>
                                </article>
                                {/* <!-- User Guide list S --> */}
                                <div className="guide_list">
                                    <ul className="l-box US tab_inner active">
                                        {/* <!-- Note1 예약 전 참고사항 --> */}
                                        <li className="box_cont open drop">
                                            <div className="Note1 cont_title arrow pa30 toggle_btn toggle active toggle_tit" onClick={toggleHandle}>
                                                미국 예약 전 참고사항
                                            </div>
                                            <div className="cont_info view hidden toggle_cont">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide01")}>
                                                            요금제 포함사항
                                                        </div>
                                                        <div id="Note1_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">요금제 포함사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <img src="/img/page/sample_img.png" alt="" />
                                                                        <b>1. 거리주차</b>
                                                                        <br />
                                                                        <br />
                                                                        시내 길거리 주차는 통제되고 대부분 유료입니다.
                                                                        <br />
                                                                        주차구역은 주로 도로에 흰색이나 파란색 등으로 표시되어 있습니다.
                                                                        <br />
                                                                        주차가 금지된 구역은 주로 도로에 노란색이나 빨간색으로 표시되어 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        구역 내에 주차를 위해서는
                                                                        <br />
                                                                        1)인도에 설치된 주차권 발행기에서
                                                                        <br />
                                                                        2)주차를 원하는 시간 만큼의 금액을 선지불하고
                                                                        <br />
                                                                        3)티켓을 받아 계기판에 보이도록 놓아 두어야 합니다.
                                                                        <br />
                                                                        주차권 발행기는 동전으로 지불하고 거스름돈이 나오지 않으므로 동전을 미리 준비해야 합니다. 또한 한 번에 최대 주차할 수 있는 시간이 정해져 있는 경우가 많으니 확인이 필요합니다.
                                                                        <br />
                                                                        <br />* 시간에 따라 주차가 금지 또는 무료인 곳이 있으니 구역의 표지판을 확인해야 하며, 'reserve' 표시가 되어 있는 구역은 등록된 차량만 주차가 가능하므로 주의해야 합니다.
                                                                    </div>
                                                                    <div className="info-detail mt30">
                                                                        <b>2. 실내/실외 주차장 주차</b>
                                                                        <br />
                                                                        <br />
                                                                        주차장에 들어갈 때 티켓을 받고, 출차 시 주차장의 정산기에서 금액을 지불한 후 해당 티켓을 출구의 티켓 머신에집어 넣습니다.
                                                                        <br />
                                                                        주차장의 정산기들은 지폐로도 지불이 가능하며, 잔돈을 받을 수 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        [도둑 방지 간단 Tip]
                                                                        <br />
                                                                        - 차 안 눈에 보이는 곳에 소지품을 놓지 않습니다.
                                                                        <br />
                                                                        - 잠깐이라도 차를 떠날 때는 반드시 차 문을 잠그거나 동행자가 차 안에 남아 있도록 합니다.
                                                                        <br />- 도난이 걱정되는 경우에는 주차비는 조금 더 높은 편이지만 안전한 실내 주차장에 주차합니다. 실내 주차장 표시는 P마크 위에 집모양의 ^표시가 있습니다.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide02")}>
                                                            보험종류
                                                        </div>
                                                        <div id="Note1_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">보험종류</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide03")}>
                                                            차량 인수 시 필수 지참사항
                                                        </div>
                                                        <div id="Note1_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량 인수 시 필수 지참사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide04")}>
                                                            렌터카 예약, 언제 하나요?
                                                        </div>
                                                        <div id="Note1_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">렌터카 예약, 언제 하나요?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide05")}>
                                                            요금 책정 기준
                                                        </div>
                                                        <div id="Note1_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">요금 책정 기준</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide06")}>
                                                            국제면허증 발급 방법
                                                        </div>
                                                        <div id="Note1_guide06" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">국제면허증 발급 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide07")}>
                                                            만 25세 미만 운전자
                                                        </div>
                                                        <div id="Note1_guide07" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">만 25세 미만 운전자</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide08")}>
                                                            편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide08" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide09")}>
                                                            미국 편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide09" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">미국 편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide10")}>
                                                            하와이 편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide10" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">하와이 편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide11")}>
                                                            장기 렌탈
                                                        </div>
                                                        <div id="Note1_guide11" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">장기 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide12")}>
                                                            지점에 한국인 직원이 있나요?
                                                        </div>
                                                        <div id="Note1_guide12" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">지점에 한국인 직원이 있나요?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide13")}>
                                                            결제 방법
                                                        </div>
                                                        <div id="Note1_guide13" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">결제 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide14")}>
                                                            렌탈 절차
                                                        </div>
                                                        <div id="Note1_guide14" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">렌탈 절차</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note2 렌터카 예약 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note2 cont_title arrow pa30 toggle_btn toggle active toggle_tit2" onClick={toggleHandle2}>
                                                렌터카 예약
                                            </div>
                                            <div className="cont_info view hidden toggle_cont2">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide01")}>
                                                            차량 선택
                                                        </div>
                                                        <div id="Note2_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량 선택</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide02")}>
                                                            2/4 door란?
                                                        </div>
                                                        <div id="Note2_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">2/4 door란?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide03")}>
                                                            차량조회 불가능
                                                        </div>
                                                        <div id="Note2_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량조회 불가능</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide04")}>
                                                            온라인 예약 절차 안내
                                                        </div>
                                                        <div id="Note2_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">온라인 예약 절차 안내</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide05")}>
                                                            동영상-등급 별 대표 차량안내
                                                        </div>
                                                        <div id="Note2_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">동영상-등급 별 대표 차량안내</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note3 렌터카 이용하기 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note3 cont_title arrow pa30 toggle_btn toggle active toggle_tit3" onClick={toggleHandle3}>
                                                렌터카 이용하기
                                            </div>
                                            <div className="cont_info view hidden toggle_cont3">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide01")}>
                                                            차량인수(Pick up) & 차량반납(Drop off)
                                                        </div>
                                                        <div id="Note3_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량인수(Pick up) & 차량반납(Drop off)</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide02")}>
                                                            추가 옵션
                                                        </div>
                                                        <div id="Note3_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">추가 옵션</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide03")}>
                                                            추가 운전자 등록
                                                        </div>
                                                        <div id="Note3_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">추가 운전자 등록</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide04")}>
                                                            응급상황 대처 방법
                                                        </div>
                                                        <div id="Note3_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">응급상황 대처 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide05")}>
                                                            항공기 연착
                                                        </div>
                                                        <div id="Note3_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">항공기 연착</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note4 렌터카 이용 팁 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note4 cont_title arrow pa30 toggle_btn toggle active toggle_tit4" onClick={toggleHandle4}>
                                                렌터카 이용 팁
                                            </div>
                                            <div className="cont_info view hidden toggle_cont4">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide01")}>
                                                            주차하기
                                                        </div>
                                                        <div id="Note4_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">주차하기</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <img src="/img/page/sample_img.png" alt="" />
                                                                        <b>1. 거리주차</b>
                                                                        <br />
                                                                        <br />
                                                                        시내 길거리 주차는 통제되고 대부분 유료입니다.
                                                                        <br />
                                                                        주차구역은 주로 도로에 흰색이나 파란색 등으로 표시되어 있습니다.
                                                                        <br />
                                                                        주차가 금지된 구역은 주로 도로에 노란색이나 빨간색으로 표시되어 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        구역 내에 주차를 위해서는
                                                                        <br />
                                                                        1)인도에 설치된 주차권 발행기에서
                                                                        <br />
                                                                        2)주차를 원하는 시간 만큼의 금액을 선지불하고
                                                                        <br />
                                                                        3)티켓을 받아 계기판에 보이도록 놓아 두어야 합니다.
                                                                        <br />
                                                                        주차권 발행기는 동전으로 지불하고 거스름돈이 나오지 않으므로 동전을 미리 준비해야 합니다. 또한 한 번에 최대 주차할 수 있는 시간이 정해져 있는 경우가 많으니 확인이 필요합니다.
                                                                        <br />
                                                                        <br />* 시간에 따라 주차가 금지 또는 무료인 곳이 있으니 구역의 표지판을 확인해야 하며, 'reserve' 표시가 되어 있는 구역은 등록된 차량만 주차가 가능하므로 주의해야 합니다.
                                                                    </div>
                                                                    <div className="info-detail mt30">
                                                                        <b>2. 실내/실외 주차장 주차</b>
                                                                        <br />
                                                                        <br />
                                                                        주차장에 들어갈 때 티켓을 받고, 출차 시 주차장의 정산기에서 금액을 지불한 후 해당 티켓을 출구의 티켓 머신에집어 넣습니다.
                                                                        <br />
                                                                        주차장의 정산기들은 지폐로도 지불이 가능하며, 잔돈을 받을 수 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        [도둑 방지 간단 Tip]
                                                                        <br />
                                                                        - 차 안 눈에 보이는 곳에 소지품을 놓지 않습니다.
                                                                        <br />
                                                                        - 잠깐이라도 차를 떠날 때는 반드시 차 문을 잠그거나 동행자가 차 안에 남아 있도록 합니다.
                                                                        <br />- 도난이 걱정되는 경우에는 주차비는 조금 더 높은 편이지만 안전한 실내 주차장에 주차합니다. 실내 주차장 표시는 P마크 위에 집모양의 ^표시가 있습니다.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide02")}>
                                                            주유하기
                                                        </div>
                                                        <div id="Note4_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">주유하기</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide03")}>
                                                            컨버터블 차량 작동법
                                                        </div>
                                                        <div id="Note4_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">컨버터블 차량 작동법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide04")}>
                                                            운전 시 주의사항
                                                        </div>
                                                        <div id="Note4_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">운전 시 주의사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide05")}>
                                                            행정수수료(Administrative Fee)
                                                        </div>
                                                        <div id="Note4_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">행정수수료(Administrative Fee)</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul className="l-box CA tab_inner">
                                        {/* <!-- Note1 예약 전 참고사항 --> */}
                                        <li className="box_cont open drop">
                                            <div className="Note1 cont_title arrow pa30 toggle_btn toggle active toggle_tit5" onClick={toggleHandle5}>
                                                캐나다 예약 전 참고사항
                                            </div>
                                            <div className="cont_info view hidden toggle_cont5">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide01")}>
                                                            요금제 포함사항
                                                        </div>
                                                        <div id="Note1_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">요금제 포함사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <img src="/img/page/sample_img.png" alt="" />
                                                                        <b>1. 거리주차</b>
                                                                        <br />
                                                                        <br />
                                                                        시내 길거리 주차는 통제되고 대부분 유료입니다.
                                                                        <br />
                                                                        주차구역은 주로 도로에 흰색이나 파란색 등으로 표시되어 있습니다.
                                                                        <br />
                                                                        주차가 금지된 구역은 주로 도로에 노란색이나 빨간색으로 표시되어 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        구역 내에 주차를 위해서는
                                                                        <br />
                                                                        1)인도에 설치된 주차권 발행기에서
                                                                        <br />
                                                                        2)주차를 원하는 시간 만큼의 금액을 선지불하고
                                                                        <br />
                                                                        3)티켓을 받아 계기판에 보이도록 놓아 두어야 합니다.
                                                                        <br />
                                                                        주차권 발행기는 동전으로 지불하고 거스름돈이 나오지 않으므로 동전을 미리 준비해야 합니다. 또한 한 번에 최대 주차할 수 있는 시간이 정해져 있는 경우가 많으니 확인이 필요합니다.
                                                                        <br />
                                                                        <br />* 시간에 따라 주차가 금지 또는 무료인 곳이 있으니 구역의 표지판을 확인해야 하며, 'reserve' 표시가 되어 있는 구역은 등록된 차량만 주차가 가능하므로 주의해야 합니다.
                                                                    </div>
                                                                    <div className="info-detail mt30">
                                                                        <b>2. 실내/실외 주차장 주차</b>
                                                                        <br />
                                                                        <br />
                                                                        주차장에 들어갈 때 티켓을 받고, 출차 시 주차장의 정산기에서 금액을 지불한 후 해당 티켓을 출구의 티켓 머신에집어 넣습니다.
                                                                        <br />
                                                                        주차장의 정산기들은 지폐로도 지불이 가능하며, 잔돈을 받을 수 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        [도둑 방지 간단 Tip]
                                                                        <br />
                                                                        - 차 안 눈에 보이는 곳에 소지품을 놓지 않습니다.
                                                                        <br />
                                                                        - 잠깐이라도 차를 떠날 때는 반드시 차 문을 잠그거나 동행자가 차 안에 남아 있도록 합니다.
                                                                        <br />- 도난이 걱정되는 경우에는 주차비는 조금 더 높은 편이지만 안전한 실내 주차장에 주차합니다. 실내 주차장 표시는 P마크 위에 집모양의 ^표시가 있습니다.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide02")}>
                                                            보험종류
                                                        </div>
                                                        <div id="Note1_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">보험종류</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide03")}>
                                                            차량 인수 시 필수 지참사항
                                                        </div>
                                                        <div id="Note1_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량 인수 시 필수 지참사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide04")}>
                                                            렌터카 예약, 언제 하나요?
                                                        </div>
                                                        <div id="Note1_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">렌터카 예약, 언제 하나요?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide05")}>
                                                            요금 책정 기준
                                                        </div>
                                                        <div id="Note1_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">요금 책정 기준</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide06")}>
                                                            국제면허증 발급 방법
                                                        </div>
                                                        <div id="Note1_guide06" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">국제면허증 발급 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide07")}>
                                                            만 25세 미만 운전자
                                                        </div>
                                                        <div id="Note1_guide07" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">만 25세 미만 운전자</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide08")}>
                                                            편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide08" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide09")}>
                                                            미국 편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide09" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">미국 편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide10")}>
                                                            하와이 편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide10" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">하와이 편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide11")}>
                                                            장기 렌탈
                                                        </div>
                                                        <div id="Note1_guide11" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">장기 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide12")}>
                                                            지점에 한국인 직원이 있나요?
                                                        </div>
                                                        <div id="Note1_guide12" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">지점에 한국인 직원이 있나요?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide13")}>
                                                            결제 방법
                                                        </div>
                                                        <div id="Note1_guide13" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">결제 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide14")}>
                                                            렌탈 절차
                                                        </div>
                                                        <div id="Note1_guide14" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">렌탈 절차</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note2 렌터카 예약 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note2 cont_title arrow pa30 toggle_btn toggle active toggle_tit6" onClick={toggleHandle6}>
                                                렌터카 예약
                                            </div>
                                            <div className="cont_info view hidden toggle_cont6">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide01")}>
                                                            차량 선택
                                                        </div>
                                                        <div id="Note2_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량 선택</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide02")}>
                                                            2/4 door란?
                                                        </div>
                                                        <div id="Note2_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">2/4 door란?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide03")}>
                                                            차량조회 불가능
                                                        </div>
                                                        <div id="Note2_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량조회 불가능</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide04")}>
                                                            온라인 예약 절차 안내
                                                        </div>
                                                        <div id="Note2_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">온라인 예약 절차 안내</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide05")}>
                                                            동영상-등급 별 대표 차량안내
                                                        </div>
                                                        <div id="Note2_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">동영상-등급 별 대표 차량안내</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note3 렌터카 이용하기 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note3 cont_title arrow pa30 toggle_btn toggle active toggle_tit7" onClick={toggleHandle7}>
                                                렌터카 이용하기
                                            </div>
                                            <div className="cont_info view hidden toggle_cont7">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide01")}>
                                                            차량인수(Pick up) & 차량반납(Drop off)
                                                        </div>
                                                        <div id="Note3_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량인수(Pick up) & 차량반납(Drop off)</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide02")}>
                                                            추가 옵션
                                                        </div>
                                                        <div id="Note3_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">추가 옵션</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide03")}>
                                                            추가 운전자 등록
                                                        </div>
                                                        <div id="Note3_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">추가 운전자 등록</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide04")}>
                                                            응급상황 대처 방법
                                                        </div>
                                                        <div id="Note3_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">응급상황 대처 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide05")}>
                                                            항공기 연착
                                                        </div>
                                                        <div id="Note3_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">항공기 연착</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note4 렌터카 이용 팁 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note4 cont_title arrow pa30 toggle_btn toggle active toggle_tit8" onClick={toggleHandle8}>
                                                렌터카 이용 팁
                                            </div>
                                            <div className="cont_info view hidden toggle_cont8">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide01")}>
                                                            주차하기
                                                        </div>
                                                        <div id="Note4_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">주차하기</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 거리주차</b>
                                                                        <br />
                                                                        <br />
                                                                        시내 길거리 주차는 통제되고 대부분 유료입니다.
                                                                        <br />
                                                                        주차구역은 주로 도로에 흰색이나 파란색 등으로 표시되어 있습니다.
                                                                        <br />
                                                                        주차가 금지된 구역은 주로 도로에 노란색이나 빨간색으로 표시되어 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        구역 내에 주차를 위해서는
                                                                        <br />
                                                                        1)인도에 설치된 주차권 발행기에서
                                                                        <br />
                                                                        2)주차를 원하는 시간 만큼의 금액을 선지불하고
                                                                        <br />
                                                                        3)티켓을 받아 계기판에 보이도록 놓아 두어야 합니다.
                                                                        <br />
                                                                        주차권 발행기는 동전으로 지불하고 거스름돈이 나오지 않으므로 동전을 미리 준비해야 합니다. 또한 한 번에 최대 주차할 수 있는 시간이 정해져 있는 경우가 많으니 확인이 필요합니다.
                                                                        <br />
                                                                        <br />* 시간에 따라 주차가 금지 또는 무료인 곳이 있으니 구역의 표지판을 확인해야 하며, 'reserve' 표시가 되어 있는 구역은 등록된 차량만 주차가 가능하므로 주의해야 합니다.
                                                                    </div>
                                                                    <div className="info-detail mt30">
                                                                        <b>2. 실내/실외 주차장 주차</b>
                                                                        <br />
                                                                        <br />
                                                                        주차장에 들어갈 때 티켓을 받고, 출차 시 주차장의 정산기에서 금액을 지불한 후 해당 티켓을 출구의 티켓 머신에집어 넣습니다.
                                                                        <br />
                                                                        주차장의 정산기들은 지폐로도 지불이 가능하며, 잔돈을 받을 수 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        [도둑 방지 간단 Tip]
                                                                        <br />
                                                                        - 차 안 눈에 보이는 곳에 소지품을 놓지 않습니다.
                                                                        <br />
                                                                        - 잠깐이라도 차를 떠날 때는 반드시 차 문을 잠그거나 동행자가 차 안에 남아 있도록 합니다.
                                                                        <br />- 도난이 걱정되는 경우에는 주차비는 조금 더 높은 편이지만 안전한 실내 주차장에 주차합니다. 실내 주차장 표시는 P마크 위에 집모양의 ^표시가 있습니다.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide02")}>
                                                            주유하기
                                                        </div>
                                                        <div id="Note4_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">주유하기</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide03")}>
                                                            컨버터블 차량 작동법
                                                        </div>
                                                        <div id="Note4_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">컨버터블 차량 작동법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide04")}>
                                                            운전 시 주의사항
                                                        </div>
                                                        <div id="Note4_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">운전 시 주의사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide05")}>
                                                            행정수수료(Administrative Fee)
                                                        </div>
                                                        <div id="Note4_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">행정수수료(Administrative Fee)</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul className="l-box GU tab_inner">
                                        {/* <!-- Note1 예약 전 참고사항 --> */}
                                        <li className="box_cont open drop">
                                            <div className="Note1 cont_title arrow pa30 toggle_btn toggle active toggle_tit9" onClick={toggleHandle9}>
                                                괌 예약 전 참고사항
                                            </div>
                                            <div className="cont_info view hidden toggle_cont9">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide01")}>
                                                            요금제 포함사항
                                                        </div>
                                                        <div id="Note1_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">요금제 포함사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 거리주차</b>
                                                                        <br />
                                                                        <br />
                                                                        시내 길거리 주차는 통제되고 대부분 유료입니다.
                                                                        <br />
                                                                        주차구역은 주로 도로에 흰색이나 파란색 등으로 표시되어 있습니다.
                                                                        <br />
                                                                        주차가 금지된 구역은 주로 도로에 노란색이나 빨간색으로 표시되어 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        구역 내에 주차를 위해서는
                                                                        <br />
                                                                        1)인도에 설치된 주차권 발행기에서
                                                                        <br />
                                                                        2)주차를 원하는 시간 만큼의 금액을 선지불하고
                                                                        <br />
                                                                        3)티켓을 받아 계기판에 보이도록 놓아 두어야 합니다.
                                                                        <br />
                                                                        주차권 발행기는 동전으로 지불하고 거스름돈이 나오지 않으므로 동전을 미리 준비해야 합니다. 또한 한 번에 최대 주차할 수 있는 시간이 정해져 있는 경우가 많으니 확인이 필요합니다.
                                                                        <br />
                                                                        <br />* 시간에 따라 주차가 금지 또는 무료인 곳이 있으니 구역의 표지판을 확인해야 하며, 'reserve' 표시가 되어 있는 구역은 등록된 차량만 주차가 가능하므로 주의해야 합니다.
                                                                    </div>
                                                                    <div className="info-detail mt30">
                                                                        <b>2. 실내/실외 주차장 주차</b>
                                                                        <br />
                                                                        <br />
                                                                        주차장에 들어갈 때 티켓을 받고, 출차 시 주차장의 정산기에서 금액을 지불한 후 해당 티켓을 출구의 티켓 머신에집어 넣습니다.
                                                                        <br />
                                                                        주차장의 정산기들은 지폐로도 지불이 가능하며, 잔돈을 받을 수 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        [도둑 방지 간단 Tip]
                                                                        <br />
                                                                        - 차 안 눈에 보이는 곳에 소지품을 놓지 않습니다.
                                                                        <br />
                                                                        - 잠깐이라도 차를 떠날 때는 반드시 차 문을 잠그거나 동행자가 차 안에 남아 있도록 합니다.
                                                                        <br />- 도난이 걱정되는 경우에는 주차비는 조금 더 높은 편이지만 안전한 실내 주차장에 주차합니다. 실내 주차장 표시는 P마크 위에 집모양의 ^표시가 있습니다.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide02")}>
                                                            보험종류
                                                        </div>
                                                        <div id="Note1_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">보험종류</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide03")}>
                                                            차량 인수 시 필수 지참사항
                                                        </div>
                                                        <div id="Note1_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량 인수 시 필수 지참사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide04")}>
                                                            렌터카 예약, 언제 하나요?
                                                        </div>
                                                        <div id="Note1_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">렌터카 예약, 언제 하나요?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide05")}>
                                                            요금 책정 기준
                                                        </div>
                                                        <div id="Note1_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">요금 책정 기준</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide06")}>
                                                            국제면허증 발급 방법
                                                        </div>
                                                        <div id="Note1_guide06" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">국제면허증 발급 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide07")}>
                                                            만 25세 미만 운전자
                                                        </div>
                                                        <div id="Note1_guide07" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">만 25세 미만 운전자</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide08")}>
                                                            편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide08" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide09")}>
                                                            미국 편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide09" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">미국 편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide10")}>
                                                            하와이 편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide10" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">하와이 편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide11")}>
                                                            장기 렌탈
                                                        </div>
                                                        <div id="Note1_guide11" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">장기 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide12")}>
                                                            지점에 한국인 직원이 있나요?
                                                        </div>
                                                        <div id="Note1_guide12" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">지점에 한국인 직원이 있나요?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide13")}>
                                                            결제 방법
                                                        </div>
                                                        <div id="Note1_guide13" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">결제 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide14")}>
                                                            렌탈 절차
                                                        </div>
                                                        <div id="Note1_guide14" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">렌탈 절차</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note2 렌터카 예약 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note2 cont_title arrow pa30 toggle_btn toggle active toggle_tit10" onClick={toggleHandle10}>
                                                렌터카 예약
                                            </div>
                                            <div className="cont_info view hidden toggle_cont10">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide01")}>
                                                            차량 선택
                                                        </div>
                                                        <div id="Note2_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량 선택</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide02")}>
                                                            2/4 door란?
                                                        </div>
                                                        <div id="Note2_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">2/4 door란?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide03")}>
                                                            차량조회 불가능
                                                        </div>
                                                        <div id="Note2_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량조회 불가능</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide04")}>
                                                            온라인 예약 절차 안내
                                                        </div>
                                                        <div id="Note2_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">온라인 예약 절차 안내</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide05")}>
                                                            동영상-등급 별 대표 차량안내
                                                        </div>
                                                        <div id="Note2_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">동영상-등급 별 대표 차량안내</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note3 렌터카 이용하기 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note3 cont_title arrow pa30 toggle_btn toggle active toggle_tit11" onClick={toggleHandle11}>
                                                렌터카 이용하기
                                            </div>
                                            <div className="cont_info view hidden toggle_cont11">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide01")}>
                                                            차량인수(Pick up) & 차량반납(Drop off)
                                                        </div>
                                                        <div id="Note3_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량인수(Pick up) & 차량반납(Drop off)</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide02")}>
                                                            추가 옵션
                                                        </div>
                                                        <div id="Note3_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">추가 옵션</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide03")}>
                                                            추가 운전자 등록
                                                        </div>
                                                        <div id="Note3_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">추가 운전자 등록</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide04")}>
                                                            응급상황 대처 방법
                                                        </div>
                                                        <div id="Note3_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">응급상황 대처 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide05")}>
                                                            항공기 연착
                                                        </div>
                                                        <div id="Note3_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">항공기 연착</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note4 렌터카 이용 팁 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note4 cont_title arrow pa30 toggle_btn toggle active toggle_tit12" onClick={toggleHandle12}>
                                                렌터카 이용 팁
                                            </div>
                                            <div className="cont_info view hidden toggle_cont12">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide01")}>
                                                            주차하기
                                                        </div>
                                                        <div id="Note4_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">주차하기</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 거리주차</b>
                                                                        <br />
                                                                        <br />
                                                                        시내 길거리 주차는 통제되고 대부분 유료입니다.
                                                                        <br />
                                                                        주차구역은 주로 도로에 흰색이나 파란색 등으로 표시되어 있습니다.
                                                                        <br />
                                                                        주차가 금지된 구역은 주로 도로에 노란색이나 빨간색으로 표시되어 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        구역 내에 주차를 위해서는
                                                                        <br />
                                                                        1)인도에 설치된 주차권 발행기에서
                                                                        <br />
                                                                        2)주차를 원하는 시간 만큼의 금액을 선지불하고
                                                                        <br />
                                                                        3)티켓을 받아 계기판에 보이도록 놓아 두어야 합니다.
                                                                        <br />
                                                                        주차권 발행기는 동전으로 지불하고 거스름돈이 나오지 않으므로 동전을 미리 준비해야 합니다. 또한 한 번에 최대 주차할 수 있는 시간이 정해져 있는 경우가 많으니 확인이 필요합니다.
                                                                        <br />
                                                                        <br />* 시간에 따라 주차가 금지 또는 무료인 곳이 있으니 구역의 표지판을 확인해야 하며, 'reserve' 표시가 되어 있는 구역은 등록된 차량만 주차가 가능하므로 주의해야 합니다.
                                                                    </div>
                                                                    <div className="info-detail mt30">
                                                                        <b>2. 실내/실외 주차장 주차</b>
                                                                        <br />
                                                                        <br />
                                                                        주차장에 들어갈 때 티켓을 받고, 출차 시 주차장의 정산기에서 금액을 지불한 후 해당 티켓을 출구의 티켓 머신에집어 넣습니다.
                                                                        <br />
                                                                        주차장의 정산기들은 지폐로도 지불이 가능하며, 잔돈을 받을 수 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        [도둑 방지 간단 Tip]
                                                                        <br />
                                                                        - 차 안 눈에 보이는 곳에 소지품을 놓지 않습니다.
                                                                        <br />
                                                                        - 잠깐이라도 차를 떠날 때는 반드시 차 문을 잠그거나 동행자가 차 안에 남아 있도록 합니다.
                                                                        <br />- 도난이 걱정되는 경우에는 주차비는 조금 더 높은 편이지만 안전한 실내 주차장에 주차합니다. 실내 주차장 표시는 P마크 위에 집모양의 ^표시가 있습니다.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide02")}>
                                                            주유하기
                                                        </div>
                                                        <div id="Note4_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">주유하기</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide03")}>
                                                            컨버터블 차량 작동법
                                                        </div>
                                                        <div id="Note4_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">컨버터블 차량 작동법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide04")}>
                                                            운전 시 주의사항
                                                        </div>
                                                        <div id="Note4_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">운전 시 주의사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide05")}>
                                                            행정수수료(Administrative Fee)
                                                        </div>
                                                        <div id="Note4_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">행정수수료(Administrative Fee)</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>

                                    <ul className="l-box MP tab_inner">
                                        {/* <!-- Note1 예약 전 참고사항 --> */}
                                        <li className="box_cont open drop">
                                            <div className="Note1 cont_title arrow pa30 toggle_btn toggle active toggle_tit13" onClick={toggleHandle13}>
                                                사이판 예약 전 참고사항
                                            </div>
                                            <div className="cont_info view hidden toggle_cont13">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide01")}>
                                                            요금제 포함사항
                                                        </div>
                                                        <div id="Note1_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">요금제 포함사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 거리주차</b>
                                                                        <br />
                                                                        <br />
                                                                        시내 길거리 주차는 통제되고 대부분 유료입니다.
                                                                        <br />
                                                                        주차구역은 주로 도로에 흰색이나 파란색 등으로 표시되어 있습니다.
                                                                        <br />
                                                                        주차가 금지된 구역은 주로 도로에 노란색이나 빨간색으로 표시되어 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        구역 내에 주차를 위해서는
                                                                        <br />
                                                                        1)인도에 설치된 주차권 발행기에서
                                                                        <br />
                                                                        2)주차를 원하는 시간 만큼의 금액을 선지불하고
                                                                        <br />
                                                                        3)티켓을 받아 계기판에 보이도록 놓아 두어야 합니다.
                                                                        <br />
                                                                        주차권 발행기는 동전으로 지불하고 거스름돈이 나오지 않으므로 동전을 미리 준비해야 합니다. 또한 한 번에 최대 주차할 수 있는 시간이 정해져 있는 경우가 많으니 확인이 필요합니다.
                                                                        <br />
                                                                        <br />* 시간에 따라 주차가 금지 또는 무료인 곳이 있으니 구역의 표지판을 확인해야 하며, 'reserve' 표시가 되어 있는 구역은 등록된 차량만 주차가 가능하므로 주의해야 합니다.
                                                                    </div>
                                                                    <div className="info-detail mt30">
                                                                        <b>2. 실내/실외 주차장 주차</b>
                                                                        <br />
                                                                        <br />
                                                                        주차장에 들어갈 때 티켓을 받고, 출차 시 주차장의 정산기에서 금액을 지불한 후 해당 티켓을 출구의 티켓 머신에집어 넣습니다.
                                                                        <br />
                                                                        주차장의 정산기들은 지폐로도 지불이 가능하며, 잔돈을 받을 수 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        [도둑 방지 간단 Tip]
                                                                        <br />
                                                                        - 차 안 눈에 보이는 곳에 소지품을 놓지 않습니다.
                                                                        <br />
                                                                        - 잠깐이라도 차를 떠날 때는 반드시 차 문을 잠그거나 동행자가 차 안에 남아 있도록 합니다.
                                                                        <br />- 도난이 걱정되는 경우에는 주차비는 조금 더 높은 편이지만 안전한 실내 주차장에 주차합니다. 실내 주차장 표시는 P마크 위에 집모양의 ^표시가 있습니다.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide02")}>
                                                            보험종류
                                                        </div>
                                                        <div id="Note1_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">보험종류</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide03")}>
                                                            차량 인수 시 필수 지참사항
                                                        </div>
                                                        <div id="Note1_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량 인수 시 필수 지참사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide04")}>
                                                            렌터카 예약, 언제 하나요?
                                                        </div>
                                                        <div id="Note1_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">렌터카 예약, 언제 하나요?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide05")}>
                                                            요금 책정 기준
                                                        </div>
                                                        <div id="Note1_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">요금 책정 기준</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide06")}>
                                                            국제면허증 발급 방법
                                                        </div>
                                                        <div id="Note1_guide06" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">국제면허증 발급 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide07")}>
                                                            만 25세 미만 운전자
                                                        </div>
                                                        <div id="Note1_guide07" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">만 25세 미만 운전자</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide08")}>
                                                            편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide08" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide09")}>
                                                            미국 편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide09" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">미국 편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide10")}>
                                                            하와이 편도 렌탈
                                                        </div>
                                                        <div id="Note1_guide10" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">하와이 편도 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide11")}>
                                                            장기 렌탈
                                                        </div>
                                                        <div id="Note1_guide11" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">장기 렌탈</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide12")}>
                                                            지점에 한국인 직원이 있나요?
                                                        </div>
                                                        <div id="Note1_guide12" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">지점에 한국인 직원이 있나요?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide13")}>
                                                            결제 방법
                                                        </div>
                                                        <div id="Note1_guide13" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">결제 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note1_guide14")}>
                                                            렌탈 절차
                                                        </div>
                                                        <div id="Note1_guide14" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">렌탈 절차</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note2 렌터카 예약 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note2 cont_title arrow pa30 toggle_btn toggle active toggle_tit14" onClick={toggleHandle14}>
                                                렌터카 예약
                                            </div>
                                            <div className="cont_info view hidden toggle_cont14">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide01")}>
                                                            차량 선택
                                                        </div>
                                                        <div id="Note2_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량 선택</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide02")}>
                                                            2/4 door란?
                                                        </div>
                                                        <div id="Note2_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">2/4 door란?</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide03")}>
                                                            차량조회 불가능
                                                        </div>
                                                        <div id="Note2_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량조회 불가능</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide04")}>
                                                            온라인 예약 절차 안내
                                                        </div>
                                                        <div id="Note2_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">온라인 예약 절차 안내</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note2_guide05")}>
                                                            동영상-등급 별 대표 차량안내
                                                        </div>
                                                        <div id="Note2_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">동영상-등급 별 대표 차량안내</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note3 렌터카 이용하기 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note3 cont_title arrow pa30 toggle_btn toggle active toggle_tit15" onClick={toggleHandle15}>
                                                렌터카 이용하기
                                            </div>
                                            <div className="cont_info view hidden toggle_cont15">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide01")}>
                                                            차량인수(Pick up) & 차량반납(Drop off)
                                                        </div>
                                                        <div id="Note3_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">차량인수(Pick up) & 차량반납(Drop off)</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide02")}>
                                                            추가 옵션
                                                        </div>
                                                        <div id="Note3_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">추가 옵션</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide03")}>
                                                            추가 운전자 등록
                                                        </div>
                                                        <div id="Note3_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">추가 운전자 등록</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide04")}>
                                                            응급상황 대처 방법
                                                        </div>
                                                        <div id="Note3_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">응급상황 대처 방법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note3_guide05")}>
                                                            항공기 연착
                                                        </div>
                                                        <div id="Note3_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">항공기 연착</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <!-- Note4 렌터카 이용 팁 --> */}
                                        <li className="box_cont open drop mt10">
                                            <div className="Note4 cont_title arrow pa30 toggle_btn toggle active toggle_tit16" onClick={toggleHandle16}>
                                                렌터카 이용 팁
                                            </div>
                                            <div className="cont_info view hidden toggle_cont16">
                                                <ul className="board-box">
                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide01")}>
                                                            주차하기
                                                        </div>
                                                        <div id="Note4_guide01" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">주차하기</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 거리주차</b>
                                                                        <br />
                                                                        <br />
                                                                        시내 길거리 주차는 통제되고 대부분 유료입니다.
                                                                        <br />
                                                                        주차구역은 주로 도로에 흰색이나 파란색 등으로 표시되어 있습니다.
                                                                        <br />
                                                                        주차가 금지된 구역은 주로 도로에 노란색이나 빨간색으로 표시되어 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        구역 내에 주차를 위해서는
                                                                        <br />
                                                                        1)인도에 설치된 주차권 발행기에서
                                                                        <br />
                                                                        2)주차를 원하는 시간 만큼의 금액을 선지불하고
                                                                        <br />
                                                                        3)티켓을 받아 계기판에 보이도록 놓아 두어야 합니다.
                                                                        <br />
                                                                        주차권 발행기는 동전으로 지불하고 거스름돈이 나오지 않으므로 동전을 미리 준비해야 합니다. 또한 한 번에 최대 주차할 수 있는 시간이 정해져 있는 경우가 많으니 확인이 필요합니다.
                                                                        <br />
                                                                        <br />* 시간에 따라 주차가 금지 또는 무료인 곳이 있으니 구역의 표지판을 확인해야 하며, 'reserve' 표시가 되어 있는 구역은 등록된 차량만 주차가 가능하므로 주의해야 합니다.
                                                                    </div>
                                                                    <div className="info-detail mt30">
                                                                        <b>2. 실내/실외 주차장 주차</b>
                                                                        <br />
                                                                        <br />
                                                                        주차장에 들어갈 때 티켓을 받고, 출차 시 주차장의 정산기에서 금액을 지불한 후 해당 티켓을 출구의 티켓 머신에집어 넣습니다.
                                                                        <br />
                                                                        주차장의 정산기들은 지폐로도 지불이 가능하며, 잔돈을 받을 수 있습니다.
                                                                        <br />
                                                                        <br />
                                                                        [도둑 방지 간단 Tip]
                                                                        <br />
                                                                        - 차 안 눈에 보이는 곳에 소지품을 놓지 않습니다.
                                                                        <br />
                                                                        - 잠깐이라도 차를 떠날 때는 반드시 차 문을 잠그거나 동행자가 차 안에 남아 있도록 합니다.
                                                                        <br />- 도난이 걱정되는 경우에는 주차비는 조금 더 높은 편이지만 안전한 실내 주차장에 주차합니다. 실내 주차장 표시는 P마크 위에 집모양의 ^표시가 있습니다.
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide02")}>
                                                            주유하기
                                                        </div>
                                                        <div id="Note4_guide02" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">주유하기</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide03")}>
                                                            컨버터블 차량 작동법
                                                        </div>
                                                        <div id="Note4_guide03" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">컨버터블 차량 작동법</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide04")}>
                                                            운전 시 주의사항
                                                        </div>
                                                        <div id="Note4_guide04" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">운전 시 주의사항</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li>
                                                        <div className="guide_title arrow" onClick={() => openModal("Note4_guide05")}>
                                                            행정수수료(Administrative Fee)
                                                        </div>
                                                        <div id="Note4_guide05" className="modal">
                                                            <div className="modal-content2">
                                                                <div className="modal-title Title03">행정수수료(Administrative Fee)</div>
                                                                <span className="close fwb">&times;</span>
                                                                <div className="cont_info">
                                                                    <div className="info-detail">
                                                                        <b>1. 제목</b>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- User Guide list E --> */}
                            </div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
};
export default UserGuide;
