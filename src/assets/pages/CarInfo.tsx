import {useEffect} from "react";
import $ from "jquery";

const CarInfo = () => {
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

        $(".modal .close").click(function () {
            $(".modal").hide();
            $("body").removeClass("noneScroll");
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

    return (
        <>
            <main className="sub" id="car_info">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">보유차량</article>
                        <article className="l-box vihicle">
                            <div className="select">
                                <button className="disabled-selected" onClick={inquiryHandle}>
                                    미국(United States)
                                </button>
                                <ul className="list-member Fs_sm" onClick={listMemberHandle}>
                                    <li>
                                        <a className="tab_item" href="#" data-category="US">
                                            미국(United States)
                                        </a>
                                    </li>
                                    <li>
                                        <a className="tab_item" href="#" data-category="CA">
                                            캐나다
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="l-line"></div>
                            <div className="US tab_inner active">
                                <ul id="tab-btn" className="tab_btn pb5">
                                    <li>
                                        <a className="active_tab" href="#" data-category="all">
                                            전체(6)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="compact">
                                            중소형(3)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="medium">
                                            중형(2)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="large">
                                            대형(1)
                                        </a>
                                    </li>
                                </ul>
                                {/* <!-- 차량 list S --> */}
                                <div className="tab_box mt10">
                                    <div className="box_cont open mb20 medium all toggle_wrap">
                                        <h3 className="cont_title arrow toggle_btn toggle toggle_tit active" onClick={toggleHandle}>
                                            중형
                                        </h3>
                                        <div className="cont_info view hidden toggle_cont">
                                            <div className="l-car-list">
                                                {/* <!-- 차종 정보 S --> */}
                                                <div className="car-list">
                                                    <div className="refer-ment Fs_sm">차량 등급 예약 후 차종은 현지에서 확정 됩니다.</div>
                                                    <div className="car-list_txt">
                                                        <div className="car-list_info Fs_sm">
                                                            <div className="info-sameclass">
                                                                <p className="info-sameclass_tit Fs_xsm mb5">[동급차종]</p>
                                                                <p>Kia Morning</p>
                                                                <p>Kia Rio</p>
                                                                <p>or Similar</p>
                                                            </div>
                                                            <div className="info-ico mt20">
                                                                <span className="seat">
                                                                    <img src="/img/icon/seat.svg" alt="승차인원" />4
                                                                </span>
                                                                <span className="baggage">
                                                                    <img src="/img/icon/baggage.svg" alt="수하물" />2
                                                                </span>
                                                                <span className="door">
                                                                    <img src="/img/icon/door.svg" alt="문갯수" />
                                                                    2-4
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <figure className="car-list_img">
                                                            <img src="/img/page/car_sample.png" loading="lazy" alt="" />
                                                        </figure>
                                                    </div>
                                                </div>
                                                {/* <!-- 차종 정보 S --> */}

                                                {/* <!-- PC버전 기본사양 S --> */}
                                                <div className="car-spec">
                                                    <div className="car-spec_tit mb10">기본 사양</div>
                                                    <ul className="Fs_sm">
                                                        <li>· 4인승 (4Passengers)</li>
                                                        <li>· 수화물 2개 (2 Pieces of Luggage)</li>
                                                        <li>· 자동 변속 기어 (Automatic Transmission)</li>
                                                        <li>· 수동 변속 기어 (Manual Transmission)</li>
                                                        <li>· 에어백 (Driver and Passenger Air bags)</li>
                                                        <li>· ABS브레이크 (ABS Brakes)</li>
                                                        <li>· 에어컨 (Air Conditioning)</li>
                                                        <li>· AM/FM 스테레오 & CD (AM/FM Stereo and CD)</li>
                                                        <li>· 그 외 추가 옵션 (Additional options available)</li>
                                                    </ul>
                                                </div>
                                                {/* <!-- PC버전 기본사양 E --> */}

                                                {/* <!-- MO버전 기본사양 S --> */}
                                                {/* <div className="car-list_price">
                                                    <span className="price-detail arrow modal-btn" onClick={() => openModal("spec")}>
                                                        기본 사양 보기
                                                    </span>
                                                </div> */}
                                                {/* <!-- MO버전 기본사양 E --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box_cont open mb20 compact all">
                                        <h3 className="cont_title arrow toggle_btn toggle toggle_tit2 active" onClick={toggleHandle2}>
                                            중소형
                                        </h3>
                                        <div className="cont_info view hidden toggle_cont2">
                                            <div className="l-car-list">
                                                {/* <!-- 차종 정보 S --> */}
                                                <div className="car-list">
                                                    <div className="refer-ment Fs_sm">차량 등급 예약 후 차종은 현지에서 확정 됩니다.</div>
                                                    <div className="car-list_txt">
                                                        <div className="car-list_info Fs_sm">
                                                            <div className="info-sameclass">
                                                                <p className="info-sameclass_tit Fs_xsm mb5">[동급차종]</p>
                                                                <p>Kia Morning</p>
                                                                <p>Kia Rio</p>
                                                                <p>or Similar</p>
                                                            </div>
                                                            <div className="info-ico mt20">
                                                                <span className="seat">
                                                                    <img src="/img/icon/seat.svg" alt="승차인원" />4
                                                                </span>
                                                                <span className="baggage">
                                                                    <img src="/img/icon/baggage.svg" alt="수하물" />2
                                                                </span>
                                                                <span className="door">
                                                                    <img src="/img/icon/door.svg" alt="문갯수" />
                                                                    2-4
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <figure className="car-list_img">
                                                            <img src="/img/page/car_sample.png" loading="lazy" alt="" />
                                                        </figure>
                                                    </div>
                                                </div>
                                                {/* <!-- 차종 정보 S --> */}

                                                {/* <!-- PC버전 기본사양 S --> */}
                                                <div className="car-spec">
                                                    <div className="car-spec_tit mb10">기본 사양</div>
                                                    <ul className="Fs_sm">
                                                        <li>· 4인승 (4Passengers)</li>
                                                        <li>· 수화물 2개 (2 Pieces of Luggage)</li>
                                                        <li>· 자동 변속 기어 (Automatic Transmission)</li>
                                                        <li>· 수동 변속 기어 (Manual Transmission)</li>
                                                        <li>· 에어백 (Driver and Passenger Air bags)</li>
                                                        <li>· ABS브레이크 (ABS Brakes)</li>
                                                        <li>· 에어컨 (Air Conditioning)</li>
                                                        <li>· AM/FM 스테레오 & CD (AM/FM Stereo and CD)</li>
                                                        <li>· 그 외 추가 옵션 (Additional options available)</li>
                                                    </ul>
                                                </div>
                                                {/* <!-- PC버전 기본사양 E --> */}

                                                {/* <!-- MO버전 기본사양 S --> */}
                                                {/* <div className="car-list_price">
                                                    <span className="price-detail arrow modal-btn" onClick={() => openModal("spec")}>
                                                        기본 사양 보기
                                                    </span>
                                                </div> */}
                                                {/* <!-- MO버전 기본사양 E --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box_cont open mb20 large all">
                                        <h3 className="cont_title arrow toggle_btn toggle toggle_tit3 active" onClick={toggleHandle3}>
                                            대형
                                        </h3>
                                        <div className="cont_info view hidden toggle_cont3">
                                            <div className="l-car-list">
                                                {/* <!-- 차종 정보 S --> */}
                                                <div className="car-list">
                                                    <div className="refer-ment Fs_sm">차량 등급 예약 후 차종은 현지에서 확정 됩니다.</div>
                                                    <div className="car-list_txt">
                                                        <div className="car-list_info Fs_sm">
                                                            <div className="info-sameclass">
                                                                <p className="info-sameclass_tit Fs_xsm mb5">[동급차종]</p>
                                                                <p>Kia Morning</p>
                                                                <p>Kia Rio</p>
                                                                <p>or Similar</p>
                                                            </div>
                                                            <div className="info-ico mt20">
                                                                <span className="seat">
                                                                    <img src="/img/icon/seat.svg" alt="승차인원" />4
                                                                </span>
                                                                <span className="baggage">
                                                                    <img src="/img/icon/baggage.svg" alt="수하물" />2
                                                                </span>
                                                                <span className="door">
                                                                    <img src="/img/icon/door.svg" alt="문갯수" />
                                                                    2-4
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <figure className="car-list_img">
                                                            <img src="/img/page/car_sample.png" loading="lazy" alt="" />
                                                        </figure>
                                                    </div>
                                                </div>
                                                {/* <!-- 차종 정보 S --> */}

                                                {/* <!-- PC버전 기본사양 S --> */}
                                                <div className="car-spec ">
                                                    <div className="car-spec_tit mb10">기본 사양</div>
                                                    <ul className="Fs_sm">
                                                        <li>· 4인승 (4Passengers)</li>
                                                        <li>· 수화물 2개 (2 Pieces of Luggage)</li>
                                                        <li>· 자동 변속 기어 (Automatic Transmission)</li>
                                                        <li>· 수동 변속 기어 (Manual Transmission)</li>
                                                        <li>· 에어백 (Driver and Passenger Air bags)</li>
                                                        <li>· ABS브레이크 (ABS Brakes)</li>
                                                        <li>· 에어컨 (Air Conditioning)</li>
                                                        <li>· AM/FM 스테레오 & CD (AM/FM Stereo and CD)</li>
                                                        <li>· 그 외 추가 옵션 (Additional options available)</li>
                                                    </ul>
                                                </div>
                                                {/* <!-- PC버전 기본사양 E --> */}

                                                {/* <!-- MO버전 기본사양 S --> */}
                                                {/* <div className="car-list_price">
                                                    <span className="price-detail arrow modal-btn" onClick={() => openModal("spec")}>
                                                        기본 사양 보기
                                                    </span>
                                                </div> */}
                                                {/* <!-- MO버전 기본사양 E --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- 차량 list E --> */}
                            </div>

                            <div className="CA tab_inner">
                                <ul id="tab-btn" className="tab_btn pb5">
                                    <li>
                                        <a className="active_tab" href="#" data-category="all">
                                            전체(10)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="compact">
                                            중소형(5)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="medium">
                                            중형(3)
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" data-category="large">
                                            대형(2)
                                        </a>
                                    </li>
                                </ul>
                                {/* <!-- 차량 list S --> */}
                                <div className="tab_box mt10">
                                    <div className="box_cont open mb20 medium all">
                                        <h3 className="cont_title arrow toggle_btn toggle toggle_tit4 active" onClick={toggleHandle4}>
                                            중형
                                        </h3>
                                        <div className="cont_info view hidden toggle_cont4">
                                            <div className="l-car-list">
                                                {/* <!-- 차종 정보 S --> */}
                                                <div className="car-list">
                                                    <div className="refer-ment Fs_sm">차량 등급 예약 후 차종은 현지에서 확정 됩니다.</div>
                                                    <div className="car-list_txt">
                                                        <div className="car-list_info Fs_sm">
                                                            <div className="info-sameclass">
                                                                <p className="info-sameclass_tit Fs_xsm mb5">[동급차종]</p>
                                                                <p>Kia Morning</p>
                                                                <p>Kia Rio</p>
                                                                <p>or Similar</p>
                                                            </div>
                                                            <div className="info-ico mt20">
                                                                <span className="seat">
                                                                    <img src="/img/icon/seat.svg" alt="승차인원" />4
                                                                </span>
                                                                <span className="baggage">
                                                                    <img src="/img/icon/baggage.svg" alt="수하물" />2
                                                                </span>
                                                                <span className="door">
                                                                    <img src="/img/icon/door.svg" alt="문갯수" />
                                                                    2-4
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <figure className="car-list_img">
                                                            <img src="/img/page/car_sample.png" loading="lazy" alt="" />
                                                        </figure>
                                                    </div>
                                                </div>
                                                {/* <!-- 차종 정보 S --> */}

                                                {/* <!-- PC버전 기본사양 S --> */}
                                                <div className="car-spec">
                                                    <div className="car-spec_tit mb10">기본 사양</div>
                                                    <ul className="Fs_sm">
                                                        <li>· 4인승 (4Passengers)</li>
                                                        <li>· 수화물 2개 (2 Pieces of Luggage)</li>
                                                        <li>· 자동 변속 기어 (Automatic Transmission)</li>
                                                        <li>· 수동 변속 기어 (Manual Transmission)</li>
                                                        <li>· 에어백 (Driver and Passenger Air bags)</li>
                                                        <li>· ABS브레이크 (ABS Brakes)</li>
                                                        <li>· 에어컨 (Air Conditioning)</li>
                                                        <li>· AM/FM 스테레오 & CD (AM/FM Stereo and CD)</li>
                                                        <li>· 그 외 추가 옵션 (Additional options available)</li>
                                                    </ul>
                                                </div>
                                                {/* <!-- PC버전 기본사양 E --> */}

                                                {/* <!-- MO버전 기본사양 S --> */}
                                                <div className="car-list_price">
                                                    <span className="price-detail arrow modal-btn" onClick={() => openModal("spec")}>
                                                        기본 사양 보기
                                                    </span>
                                                </div>
                                                {/* <!-- MO버전 기본사양 E --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box_cont open mb20 compact all">
                                        <h3 className="cont_title arrow toggle_btn toggle toggle_tit5 active" onClick={toggleHandle5}>
                                            중소형
                                        </h3>
                                        <div className="cont_info view hidden toggle_cont5">
                                            <div className="l-car-list">
                                                {/* <!-- 차종 정보 S --> */}
                                                <div className="car-list">
                                                    <div className="refer-ment Fs_sm">차량 등급 예약 후 차종은 현지에서 확정 됩니다.</div>
                                                    <div className="car-list_txt">
                                                        <div className="car-list_info Fs_sm">
                                                            <div className="info-sameclass">
                                                                <p className="info-sameclass_tit Fs_xsm mb5">[동급차종]</p>
                                                                <p>Kia Morning</p>
                                                                <p>Kia Rio</p>
                                                                <p>or Similar</p>
                                                            </div>
                                                            <div className="info-ico mt20">
                                                                <span className="seat">
                                                                    <img src="/img/icon/seat.svg" alt="승차인원" />4
                                                                </span>
                                                                <span className="baggage">
                                                                    <img src="/img/icon/baggage.svg" alt="수하물" />2
                                                                </span>
                                                                <span className="door">
                                                                    <img src="/img/icon/door.svg" alt="문갯수" />
                                                                    2-4
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <figure className="car-list_img">
                                                            <img src="/img/page/car_sample.png" loading="lazy" alt="" />
                                                        </figure>
                                                    </div>
                                                </div>
                                                {/* <!-- 차종 정보 S --> */}

                                                {/* <!-- PC버전 기본사양 S --> */}
                                                <div className="car-spec">
                                                    <div className="car-spec_tit mb10">기본 사양</div>
                                                    <ul className="Fs_sm">
                                                        <li>· 4인승 (4Passengers)</li>
                                                        <li>· 수화물 2개 (2 Pieces of Luggage)</li>
                                                        <li>· 자동 변속 기어 (Automatic Transmission)</li>
                                                        <li>· 수동 변속 기어 (Manual Transmission)</li>
                                                        <li>· 에어백 (Driver and Passenger Air bags)</li>
                                                        <li>· ABS브레이크 (ABS Brakes)</li>
                                                        <li>· 에어컨 (Air Conditioning)</li>
                                                        <li>· AM/FM 스테레오 & CD (AM/FM Stereo and CD)</li>
                                                        <li>· 그 외 추가 옵션 (Additional options available)</li>
                                                    </ul>
                                                </div>
                                                {/* <!-- PC버전 기본사양 E --> */}

                                                {/* <!-- MO버전 기본사양 S --> */}
                                                <div className="car-list_price">
                                                    <span className="price-detail arrow modal-btn" onClick={() => openModal("spec")}>
                                                        기본 사양 보기
                                                    </span>
                                                </div>
                                                {/* <!-- MO버전 기본사양 E --> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box_cont open mb20 large all">
                                        <h3 className="cont_title arrow toggle_btn toggle toggle_tit6 active" onClick={toggleHandle6}>
                                            대형
                                        </h3>
                                        <div className="cont_info view hidden toggle_cont6">
                                            <div className="l-car-list">
                                                {/* <!-- 차종 정보 S --> */}
                                                <div className="car-list">
                                                    <div className="refer-ment Fs_sm">차량 등급 예약 후 차종은 현지에서 확정 됩니다.</div>
                                                    <div className="car-list_txt">
                                                        <div className="car-list_info Fs_sm">
                                                            <div className="info-sameclass">
                                                                <p className="info-sameclass_tit Fs_xsm mb5">[동급차종]</p>
                                                                <p>Kia Morning</p>
                                                                <p>Kia Rio</p>
                                                                <p>or Similar</p>
                                                            </div>
                                                            <div className="info-ico mt20">
                                                                <span className="seat">
                                                                    <img src="/img/icon/seat.svg" alt="승차인원" />4
                                                                </span>
                                                                <span className="baggage">
                                                                    <img src="/img/icon/baggage.svg" alt="수하물" />2
                                                                </span>
                                                                <span className="door">
                                                                    <img src="/img/icon/door.svg" alt="문갯수" />
                                                                    2-4
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <figure className="car-list_img">
                                                            <img src="/img/page/car_sample.png" loading="lazy" alt="" />
                                                        </figure>
                                                    </div>
                                                </div>
                                                {/* <!-- 차종 정보 S --> */}

                                                {/* <!-- PC버전 기본사양 S --> */}
                                                <div className="car-spec">
                                                    <div className="car-spec_tit mb10">기본 사양</div>
                                                    <ul className="Fs_sm">
                                                        <li>· 4인승 (4Passengers)</li>
                                                        <li>· 수화물 2개 (2 Pieces of Luggage)</li>
                                                        <li>· 자동 변속 기어 (Automatic Transmission)</li>
                                                        <li>· 수동 변속 기어 (Manual Transmission)</li>
                                                        <li>· 에어백 (Driver and Passenger Air bags)</li>
                                                        <li>· ABS브레이크 (ABS Brakes)</li>
                                                        <li>· 에어컨 (Air Conditioning)</li>
                                                        <li>· AM/FM 스테레오 & CD (AM/FM Stereo and CD)</li>
                                                        <li>· 그 외 추가 옵션 (Additional options available)</li>
                                                    </ul>
                                                </div>
                                                {/* <!-- PC버전 기본사양 E --> */}

                                                {/* <!-- MO버전 기본사양 S --> */}
                                                <div className="car-list_price">
                                                    <span className="price-detail arrow modal-btn" onClick={() => openModal("spec")}>
                                                        기본 사양 보기
                                                    </span>
                                                </div>
                                                {/* <!-- MO버전 기본사양 E --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- 차량 list E --> */}
                            </div>
                        </article>
                    </div>
                </section>

                {/* <!-- Modal content S -->
    <!-- 기본 사양 보기 --> */}
                <div id="spec" className="modal">
                    <div className="modal-content2">
                        <div className="modal-title Title03">기본사양</div>
                        <span className="close fwb">&times;</span>
                        <ul className="Fs_sm summary pa30">
                            <li>· 4인승 (4Passengers)</li>
                            <li>· 수화물 2개 (2 Pieces of Luggage)</li>
                            <li>· 자동 변속 기어 (Automatic Transmission)</li>
                            <li>· 수동 변속 기어 (Manual Transmission)</li>
                            <li>· 에어백 (Driver and Passenger Air bags)</li>
                            <li>· ABS브레이크 (ABS Brakes)</li>
                            <li>· 에어컨 (Air Conditioning)</li>
                            <li>· AM/FM 스테레오 & CD (AM/FM Stereo and CD)</li>
                            <li>· 그 외 추가 옵션 (Additional options available)</li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Modal content E --> */}
            </main>
        </>
    );
};
export default CarInfo;
