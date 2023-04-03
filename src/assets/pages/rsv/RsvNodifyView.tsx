import {useEffect, useState} from "react";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

const RsvNodifyView = () => {
    const navigation = useNavigate();
    useEffect(() => {
        $(".modal .close").click(function () {
            $(".modal").hide();
            $("body").removeClass("noneScroll");
        });

        $(".view").show();
        $(".hidden").hide();

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

    const tooltipHandle = () => {
        $(".tooltip_cont").show();
    };
    const tooltipHandle2 = () => {
        $(".tooltip_cont2").show();
    };
    const tooltipHandle3 = () => {
        $(".tooltip_cont3").show();
    };
    const tooltipHandle4 = () => {
        $(".tooltip_cont4").show();
    };

    const tooltipHandle5 = () => {
        $(".tooltip_cont5").show();
    };
    useEffect(() => {
        $("#rsv_nodify").on("click", () => {
            $(".tooltip_cont").hide();
            $(".tooltip_cont2").hide();
            $(".tooltip_cont3").hide();
            $(".tooltip_cont4").hide();
            $(".tooltip_cont5").hide();
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
    return (
        <>
            <main className="sub rsv_nodify_view" id="rsv_nodify">
                <div className="sub-vis"></div>

                <section className="contents">
                    <div className="inner">
                        <ul className="step-mo mb10">
                            <li className="step_com">
                                <img src="/img/icon/step-com_mo.png" alt="" />
                            </li>
                            <li className="step_com">
                                <img src="/img/icon/step-com_mo.png" alt="" />
                            </li>
                            <li className="step_com">
                                <img src="/img/icon/step-com_mo.png" alt="" />
                            </li>
                            <li className="step_ing">
                                <img src="/img/icon/step04-ing.png" alt="" />
                            </li>
                        </ul>

                        {/* <!-- sub title --> */}
                        <article className="sub_title Title01 tac">
                            수정내역 확인
                            <div className="share">
                                <div className="share_ico">
                                    <img src="/img/icon/receipt.png" alt="" />
                                </div>
                                <div className="share_ico">
                                    <img src="/img/icon/out.png" alt="" />
                                </div>
                            </div>
                        </article>

                        {/* <!-- 예약번호 --> */}
                        <article>
                            {/* <!-- 예약번호 S --> */}
                            <div className="box_cont l-rsv-com">
                                <div className="cont_info Fs_sm">
                                    <ul className="rsv-com border-bottom">
                                        <li className="line">수정날짜</li>
                                        <li className="rsv-com-date">2022-11-25 1:11</li>
                                    </ul>
                                    <ul className="rsv-num mt10">
                                        <li>예약번호</li>
                                        <li className="Title02 ml10">1123455667</li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- 예약번호 E --> */}
                        </article>

                        {/* <!-- 차량등급 --> */}
                        <article className="l-box vihicle">
                            <div className="box_title Title03">
                                차량등급(Vihicle)
                                <div className="l-tooltip" onClick={tooltipHandle}>
                                    <div x-show="true">
                                        <img className="ml5" src="/img/icon/question.svg" alt="설명툴팁" />
                                    </div>
                                    <div className="tooltip Fs_sm pa10 tooltip_cont" style={{display: "none"}}>
                                        렌터카 요금은 24시간 단위로 1일 요금이 책정됩니다.
                                        <br />
                                        예) 오후 1시 픽업 시, 다음날 오후 1시까지 요금 동일
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 차량 등급 수정전 S --> */}
                            <div className="box_cont before disabled open mb10">
                                <div className="badge">수정전</div>
                                <h3 className="cont_title Title03 flex jc-sb">중소형
                                <span className="price-detail modal-btn pc-nc fwn Fs_sm" onClick={() => openModal("spec")}>기본 사양 보기
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="12px" viewBox="0 0 50 80" className="ml5">
                                        <polyline fill="none" stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" points="
                                0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                    </svg>
                                    </span>
                                </h3>
                                <div className="cont_info">
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
                                        {/* <!-- 차종 정보 E --> */}

                                        {/* <!-- PC버전 오른쪽 기본사양 S --> */}
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
                                        {/* <!-- PC버전 오른쪽 기본사양 E --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 차량 등급 수정전 E --> */}

                            {/* <!-- 차량 등급 수정후 S --> */}
                            <div className="box_cont after open">
                                <div className="badge">수정후</div>
                                <h3 className="cont_title Title03 flex jc-sb">중소형
                                <span className="price-detail modal-btn pc-nc fwn Fs_sm" onClick={() => openModal("spec")}>기본 사양 보기
                                    <svg xmlns="http://www.w3.org/2000/svg" width="6px" height="12px" viewBox="0 0 50 80" className="ml5">
                                        <polyline fill="none" stroke="#333" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" points="
                                0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                    </svg>
                                    </span>
                                </h3>
                                <div className="cont_info">
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
                                        {/* <!-- 차종 정보 E --> */}

                                        {/* <!-- PC버전 오른쪽 기본사양 S --> */}
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
                                        {/* <!-- PC버전 오른쪽 기본사양 E --> */}
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 차량 등급 수정후 E --> */}
                        </article>

                        {/* <!-- 운전자 정보 --> */}
                        <article className="l-box driver">
                            <div className="box_title Title03">
                                운전자 정보
                                <div className="l-tooltip" onClick={tooltipHandle2}>
                                    <div x-show="true">
                                        <img className="ml5" src="/img/icon/question.svg" alt="설명툴팁" />
                                    </div>
                                    <div className="tooltip Fs_sm pa10 tooltip_cont2" style={{display: "none"}}>
                                        운전자정보 툴팁
                                    </div>
                                </div>
                                {/* <div className="clar">25세이상</div> */}
                            </div>

                            <div className="box_cont before disabled open mb10">
                                <div className="badge">수정전</div>

                                <div className="box_cont">
                                    <div className="cont_info">
                                    <table className="table01 table-pc">
                                        <tbody>
                                            <tr>
                                                <td className="thead">이름</td>
                                                <td colSpan={3}>홍길동</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">영문 성</td>
                                                <td className="line">HONG</td>
                                                <td className="thead">영문 이름</td>
                                                <td>GILDONG</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">휴대폰 번호</td>
                                                <td colSpan={3}>+82 010 12345678</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">이메일 주소</td>
                                                <td colSpan={3}>abcd@mail.com</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">도착 항공편</td>
                                                <td colSpan={3}>KE 107</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table01 table-mo">
                                        <tbody>
                                            <tr>
                                                <td colSpan={2}><span className="thead">이름</span> 홍길동</td>
                                            </tr>
                                            <tr>
                                                <td className="line"><span className="thead">영문 성</span>HONG</td>
                                                <td><span className="thead">영문 이름</span>GILDONG</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}><span className="thead">휴대폰 번호</span>+82 010 12345678</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}><span className="thead">이메일 주소</span>abcd@mail.com</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}><span className="thead">도착 항공편</span>KE 107</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                            <div className="box_cont after open">
                                <div className="badge">수정후</div>

                                <div className="box_cont">
                                    <div className="cont_info">
                                    <table className="table01 table-pc">
                                        <tbody>
                                            <tr>
                                                <td className="thead">이름</td>
                                                <td colSpan={3}>홍길동</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">영문 성</td>
                                                <td className="line">HONG</td>
                                                <td className="thead">영문 이름</td>
                                                <td>GILDONG</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">휴대폰 번호</td>
                                                <td colSpan={3}>+82 010 12345678</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">이메일 주소</td>
                                                <td colSpan={3}>abcd@mail.com</td>
                                            </tr>
                                            <tr>
                                                <td className="thead">도착 항공편</td>
                                                <td colSpan={3}>KE 107</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <table className="table01 table-mo">
                                        <tbody>
                                            <tr>
                                                <td colSpan={2}><span className="thead">이름</span> 홍길동</td>
                                            </tr>
                                            <tr>
                                                <td className="line"><span className="thead">영문 성</span>HONG</td>
                                                <td><span className="thead">영문 이름</span>GILDONG</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}><span className="thead">휴대폰 번호</span>+82 010 12345678</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}><span className="thead">이메일 주소</span>abcd@mail.com</td>
                                            </tr>
                                            <tr>
                                                <td colSpan={2}><span className="thead">도착 항공편</span>KE 107</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* <!-- 대여일정 --> */}
                        <article className="l-box rental-point">
                            <div className="box_title Title03">
                                대여일정
                                <div className="l-tooltip" onClick={tooltipHandle3}>
                                    <div x-show="true">
                                        <img className="ml5" src="/img/icon/question.svg" alt="설명툴팁" />
                                    </div>
                                    <div className="tooltip Fs_sm pa10 tooltip_cont3" style={{display: "none"}}>
                                        운전자정보 툴팁
                                    </div>
                                </div>
                                <div className="clar">대여기간 : 1일</div>
                            </div>

                            {/* <!-- 반납 수정전 S --> */}
                            <div className="box_cont before disabled open mb10">
                                <div className="badge">수정전</div>
                                <div className="cont_info">
                                    <ul>
                                        <li className="line tac fwb wd_15">
                                            반납<div className="Fs_xsm">Drop-off</div>
                                        </li>
                                        <li>
                                            <ul>
                                                <li className="Fs_sm">2022-08-11 (금) 10:30</li>
                                                <li>세인트 조지 뮤니시플 공항</li>
                                                <li className="Fs_xsm">HILTON HEAD ISLAND ARPT</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- 반납 수정전 E --> */}

                            {/* <!-- 반납 수정후 S --> */}
                            <div className="box_cont after open">
                                <div className="badge">수정후</div>
                                <div className="cont_info">
                                    <ul>
                                        <li className="line tac fwb wd_15">
                                            반납<div className="Fs_xsm">Drop-off</div>
                                        </li>
                                        <li>
                                            <ul>
                                                <li className="Fs_sm">2022-08-11 (금) 10:30</li>
                                                <li>세인트 조지 뮤니시플 공항</li>
                                                <li className="Fs_xsm">HILTON HEAD ISLAND ARPT</li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- 반납 수정후 E --> */}
                        </article>

                        {/* <!-- 요금 및 옵션 --> */}
                        <article className="l-box rates-options">
                            <div className="box_title Title03">
                                요금 및 옵션
                                <div className="l-tooltip" onClick={tooltipHandle4}>
                                    <div x-show="true">
                                        <img className="ml5" src="/img/icon/question.svg" alt="설명툴팁" />
                                    </div>
                                    <div className="tooltip Fs_sm pa10 tooltip_cont4" style={{display: "none"}}>
                                        운전자정보 툴팁
                                    </div>
                                </div>
                                <div className="clar">
                                    <span className="line fwb point">기본할인요금제</span>
                                    <span>현지결제</span>
                                </div>
                            </div>

                            {/* <!-- 요금 및 옵션 수정 전 S --> */}
                            <div className="before disabled mb10">
                                <div className="badge">수정전</div>
                                {/* <!-- 1. 차량 대여 요금 --> */}
                                <div className="box_cont open drop">
                                    <div className="cont_title arrow">
                                        1. 차량 대여 요금
                                        <span className="price-info Fs_sm">
                                            USD <b className="Title03">50.00</b>
                                        </span>
                                    </div>
                                    <div className="cont_info view hidden">
                                        <p className="primary mb10">Time & Distance(USD 85.00 / Per Rental)</p>
                                        <table className="table01 mb10">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        편도이용요금<p className="Fs_xsm">Drop charge</p>
                                                    </td>
                                                    <td className="tar wd10">USD 0.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        자차보험<p className="Fs_xsm">COLLISION DAMAGE WAIVER FULL</p>
                                                    </td>
                                                    <td className="tar wd10">포함</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ul className="Fs_xsm">
                                            <li className="fwb error">주의</li>
                                            <li>일부 대여지점에서는 보험, 세금 등의 조건이 적용되지 않을 수 있으니, 차량 대여 요금의 포함 내역을 재 확인해주시기 바랍니다.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- 2. 편도이용 요금 및 추가옵션--> */}
                                <div className="box_cont open drop mt10">
                                    <div className="cont_title arrow">
                                        2. 추가옵션
                                        <span className="price-info Fs_sm">
                                            USD <b className="Title03">50.00</b>
                                        </span>
                                    </div>
                                    <div className="cont_info view hidden">
                                        <table className="table01">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Booster seat<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Infant child seat<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Child toddler seat<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Navigational system<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days / Week : USD319.99 / Month : USD 49.98)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Satellite radio<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days / Week : USD319.99 / Month : USD 49.98)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* <!-- 3. 세금 및 기타 부가요금 --> */}
                                <div className="box_cont open drop mt10">
                                    <div className="cont_title arrow">
                                        3. 세금 및 기타 부가요금
                                        <span className="price-info Fs_sm">
                                            USD <b className="Title03">110.40</b>
                                        </span>
                                    </div>
                                    <div className="cont_info view hidden">
                                        <table className="table01 mb10">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span className="Fs_xsm mr5">[세금]</span>AIRPORT CONCESSION FEE 11.11 PCT
                                                    </td>
                                                    <td className="tar wd10">USD 10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="Fs_xsm mr5">[기타]</span>CUSTOMER FACILITY CHARGE 9.00/DAY
                                                    </td>
                                                    <td className="tar wd10">USD 10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="Fs_xsm mr5">[세금]</span>TOURISM COMMISSION REC 3.50 PCT
                                                    </td>
                                                    <td className="tar wd10">USD 10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="Fs_xsm mr5">[세금]</span>SALES TAX
                                                    </td>
                                                    <td className="tar wd10">USD 10.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ul className="Fs_xsm">
                                            <li className="fwb primary">안내</li>
                                            <li>일부 대여지점에서는 보험, 세금 등의 조건이 적용되지 않을 수 있으니, 차량 대여 요금의 포함 내역을 재확인해주시기 바랍니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 요금 및 옵션 수정 전 E --> */}

                            {/* <!-- 요금 및 옵션 수정 후 S --> */}
                            <div className="after">
                                <div className="badge">수정후</div>
                                {/* <!-- 1. 차량 대여 요금 --> */}
                                <div className="box_cont open drop">
                                    <div className="cont_title arrow toggle_btn toggle_tit" onClick={toggleHandle}>
                                        1. 차량 대여 요금
                                        <span className="price-info Fs_sm">
                                            USD <b className="Title03">50.00</b>
                                        </span>
                                    </div>
                                    <div className="cont_info view toggle_cont">
                                        <p className="primary mb10">Time & Distance(USD 85.00 / Per Rental)</p>
                                        <table className="table01 mb10">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        편도이용요금<p className="Fs_xsm">Drop charge</p>
                                                    </td>
                                                    <td className="tar wd10">USD 0.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        자차보험<p className="Fs_xsm">COLLISION DAMAGE WAIVER FULL</p>
                                                    </td>
                                                    <td className="tar wd10">포함</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ul className="Fs_xsm">
                                            <li className="fwb error">주의</li>
                                            <li>일부 대여지점에서는 보험, 세금 등의 조건이 적용되지 않을 수 있으니, 차량 대여 요금의 포함 내역을 재 확인해주시기 바랍니다.</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- 2. 편도이용 요금 및 추가옵션--> */}
                                <div className="box_cont open drop mt10">
                                    <div className="cont_title arrow toggle_btn toggle_tit2" onClick={toggleHandle2}>
                                        2. 추가옵션
                                        <span className="price-info Fs_sm">
                                            USD <b className="Title03">50.00</b>
                                        </span>
                                    </div>
                                    <div className="cont_info view toggle_cont2">
                                        <table className="table01">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        Booster seat<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Infant child seat<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Child toddler seat<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Navigational system<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days / Week : USD319.99 / Month : USD 49.98)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        Satellite radio<p className="Fs_xsm">(USD 6.99 / Day: USD 70.00 / 30Days / Week : USD319.99 / Month : USD 49.98)</p>
                                                    </td>
                                                    <td className="tar wd10">1</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* <!-- 3. 세금 및 기타 부가요금 --> */}
                                <div className="box_cont open drop mt10">
                                    <div className="cont_title arrow toggle_btn toggle_tit3" onClick={toggleHandle3}>
                                        3. 세금 및 기타 부가요금
                                        <span className="price-info Fs_sm">
                                            USD <b className="Title03">110.40</b>
                                        </span>
                                    </div>
                                    <div className="cont_info view toggle_cont3">
                                        <table className="table01 mb10">
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <span className="Fs_xsm mr5">[세금]</span>AIRPORT CONCESSION FEE 11.11 PCT
                                                    </td>
                                                    <td className="tar wd10">USD 10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="Fs_xsm mr5">[기타]</span>CUSTOMER FACILITY CHARGE 9.00/DAY
                                                    </td>
                                                    <td className="tar wd10">USD 10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="Fs_xsm mr5">[세금]</span>TOURISM COMMISSION REC 3.50 PCT
                                                    </td>
                                                    <td className="tar wd10">USD 10.00</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <span className="Fs_xsm mr5">[세금]</span>SALES TAX
                                                    </td>
                                                    <td className="tar wd10">USD 10.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <ul className="Fs_xsm">
                                            <li className="fwb primary">안내</li>
                                            <li>일부 대여지점에서는 보험, 세금 등의 조건이 적용되지 않을 수 있으니, 차량 대여 요금의 포함 내역을 재확인해주시기 바랍니다.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- 요금 및 옵션 수정 후 E --> */}
                        </article>

                        {/* <!-- 결제금액 --> */}
                        <article className="l-box payment">
                            <div className="box_title Title03">
                                결제 금액
                                <div className="l-tooltip" onClick={tooltipHandle5}>
                                    <div x-show="true">
                                        <img className="ml5" src="/img/icon/question.svg" alt="설명툴팁" />
                                    </div>
                                    <div className="tooltip Fs_sm pa10 tooltip_cont5" style={{display: "none"}}>
                                        운전자정보 툴팁
                                    </div>
                                </div>
                            </div>

                            {/* <!-- 현지 결제 금액 --> */}
                            <div className="box_cont">
                                <div className="cont_title mb10">
                                    (1+2+3) 현지 결제 금액
                                    <span className="price-info Fs_sm">
                                        USD <b className="Title03">29.33</b>
                                    </span>
                                </div>
                                <div className="cont_info Fs_xsm  pt10">
                                    <ul>
                                        <li>- 해당 추가 옵션 및 편도 이용 금액은 세금 및 기타 항목이불포함된 가격입니다.</li>
                                        <li>- 예약 완료 후 최종 예상 금액을 확인하실 수 있으며 현지 지점에서 지불하시기 바랍니다.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- 취소 수수료 및 환불 규정 --> */}
                            <div className="box_cont open drop mt10">
                                <div className="cont_title arrow toggle_btn toggle_tit4" onClick={toggleHandle4}>
                                    취소 수수료 및 환불 규정
                                </div>
                                <div className="cont_info view toggle_cont4">
                                    <table className="table02 mb10">
                                        <thead>
                                            <tr>
                                                <th>기간 (한국 시간 기준)</th>
                                                <th>취소 수수료 및 환불</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>2022-11-26(토) 08:29까지</td>
                                                <td>전액환불</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    2022-11-26(토) 08:29 ~ <br />
                                                    2022-11-28(월) 07:29
                                                </td>
                                                <td>
                                                    <span className="primary">103,000</span>원<br />
                                                    차감 후 환불
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2022-11-28(월) 07:29부터</td>
                                                <td className="error">환불 불가</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <ul className="guide-explan circle Fs_xsm">
                                        <li>취소료 적용은 현지 픽업 시간을 기준으로 합니다.</li>
                                        <li>
                                            예약 취소/노쇼 및 환불 규정
                                            <ul>
                                                <li>- 현지 픽업 시간 기준 48시간 전 : 무료취소 가능하며 전액환불</li>
                                                <li>- 현지 픽업 시간 기준 48시간 ~ 1시간 전 : 1일 대여요금이 패널티로 부과되어 차감 후 환불</li>
                                                <li>- 현지 픽업 시간 기준 1시간 이내 또는 픽업 시간 이후 : 환불 불가</li>
                                            </ul>
                                        </li>
                                        <li>예약완료 후 수정이 불가하므로, 예약 시 반드시 취소료 적용 시점을 확인 해 주시길 바랍니다.</li>
                                        <li>취소료 적용 환율은 예약 결제시 적용된 환율과 동일합니다.</li>
                                        <li>사전 반납시, 이용 하지 않은 대여 기간에 대해서 환불이 불가합니다.</li>
                                        <li>이벤트 및 제휴 항공사 마일리지 적립은 적용되지 않습니다.</li>
                                        <li>환불 요청은 픽업 1시간 전까지만 신청이 가능하며 그 이후에는 환불이 불가합니다.</li>
                                    </ul>
                                </div>
                            </div>
                        </article>

                        <article>
                            <div className="l-button flex jc-ct">
                                <button type="button" className="button link button--cancle mr10" onClick={() => navigation("/rsv_nodify")}>
                                    이전으로
                                </button>
                                <button type="button" className="button link button--primary" onClick={() => navigation("/rsv_nodify_com")}>
                                    예약수정 완료
                                </button>
                            </div>
                        </article>
                    </div>
                </section>

                <div id="spec" className="modal">
                    <div className="modal-content2">
                        <div className="modal-title Title03">기본사양</div>
                        <span className="close fwb">×</span>
                        <ul className="Fs_sm summary pa30">
                        <li>· 4인승 (4Passengers)</li>
                        <li>· 수화물 2개 (2 Pieces of Luggage)</li>
                        <li>· 자동 변속 기어 (Automatic Transmission)</li>
                        <li>· 수동 변속 기어 (Manual Transmission)</li>
                        <li>· 에어백 (Driver and Passenger Air bags)</li>
                        <li>· ABS브레이크 (ABS Brakes)</li>
                        <li>· 에어컨 (Air Conditioning)</li>
                        <li>· AM/FM 스테레오 &amp; CD (AM/FM Stereo and CD)</li>
                        <li>· 그 외 추가 옵션 (Additional options available)</li>
                        </ul>
                    </div>
                </div>
            </main>
        </>
    );
};
export default RsvNodifyView;
