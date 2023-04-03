import {useEffect, useState} from "react";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

const Coupon = () => {
    const navigation = useNavigate();
    useEffect(() => {
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
    return (
        <>
            <main className="sub" id="coupon">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">보유쿠폰</article>
                        <article className="l-box">
                            {/* <!-- 쿠폰 list S --> */}
                            <div className="box_cont open drop mb20">
                                <div className="cont_title arrow toggle_btn toggle active toggle_tit" onClick={toggleHandle}>
                                    <p style={{color: "#999"}}>
                                        유효기간 <span className="error">2022-09-11 (D-3)</span>
                                    </p>
                                    업그레이드 쿠폰
                                    <span className="price-info Fs_sm">
                                        <b className="Title03 primary">10% 할인</b>
                                    </span>
                                </div>
                                <div className="cont_info view hidden pa20 Fs_sm summary toggle_cont">
                                    쿠폰안내 문구 나옵니다.
                                    <br />
                                    제외국가 : 미국, 스페인
                                    <p className="error">총 50만원 이상 결제 시 사용가능합니다.</p>
                                </div>
                            </div>
                            <div className="box_cont open drop mb20">
                                <div className="cont_title arrow toggle_btn toggle active toggle_tit2" onClick={toggleHandle2}>
                                    <p style={{color: "#999"}}>
                                        유효기간 <span className="primary">2022-09-11 (D-100)</span>
                                    </p>
                                    업그레이드 쿠폰
                                    <span className="price-info Fs_sm">
                                        <b className="Title03 primary">10% 할인</b>
                                    </span>
                                </div>
                                <div className="cont_info view hidden pa20 Fs_sm summary toggle_cont2">
                                    쿠폰안내 문구 나옵니다.
                                    <br />
                                    제외국가 : 미국, 스페인
                                    <p className="error">총 50만원 이상 결제 시 사용가능합니다.</p>
                                </div>
                            </div>
                            <div className="box_cont open drop mb20">
                                <div className="cont_title arrow toggle_btn toggle active toggle_tit3" onClick={toggleHandle3}>
                                    <p style={{color: "#999"}}>유효기간 2022-09-11 (사용완료)</p>
                                    업그레이드 쿠폰
                                    <span className="price-info Fs_sm">
                                        <b className="Title03 primary">10% 할인</b>
                                    </span>
                                </div>
                                <div className="cont_info view hidden pa20 Fs_sm summary toggle_cont3">
                                    쿠폰안내 문구 나옵니다.
                                    <br />
                                    제외국가 : 미국, 스페인
                                    <p className="error">총 50만원 이상 결제 시 사용가능합니다.</p>
                                </div>
                            </div>
                            <div className="box_cont open drop mb20">
                                <div className="cont_title arrow toggle_btn toggle active toggle_tit4" onClick={toggleHandle4}>
                                    <p style={{color: "#999"}}>유효기간 2022-09-11 (유효기간 만료)</p>
                                    업그레이드 쿠폰
                                    <span className="price-info Fs_sm">
                                        <b className="Title03 primary">10% 할인</b>
                                    </span>
                                </div>
                                <div className="cont_info view hidden pa20 Fs_sm summary toggle_cont4">
                                    쿠폰안내 문구 나옵니다.
                                    <br />
                                    제외국가 : 미국, 스페인
                                    <p className="error">총 50만원 이상 결제 시 사용가능합니다.</p>
                                </div>
                            </div>

                            {/* <!-- 쿠폰 list E --> */}
                        </article>

                        <article className="l-button flex jc-ct">
                            <button type="button" className="button link button--primary">
                                더보기
                            </button>
                        </article>
                    </div>
                </section>

                {/* <!-- Modal content S --> */}
                {/* <!-- 기본 사양 보기 --> */}
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
export default Coupon;
