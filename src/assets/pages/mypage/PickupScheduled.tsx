import {useEffect, useState} from "react";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

const PickupScheduled = () => {
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
        $("#pickup_scheduled").on("click", () => {
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
            <main className="sub" id="pickup_scheduled">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        {/* <!-- sub title --> */}
                        <article className="sub_title Title01 tac">
                            픽업예정
                            <div className="share">
                                <div className="share_ico">
                                    <img src="/img/icon/receipt.png" alt="" />
                                </div>
                                <div className="share_ico">
                                    <img src="/img/icon/out.png" alt="" />
                                </div>
                            </div>
                        </article>
                        <article>
                            {/* <!-- 예약번호 S --> */}
                            <div className="box_cont l-rsv-com">
                                <div className="cont_info Fs_sm">
                                    <ul className="rsv-com border-bottom">
                                        <li className="line">수정날짜</li>
                                        <li className="rsv-com-date">2022-11-25 1:11</li>
                                    </ul>
                                    <ul className="rsv-num">
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
                            {/* <!-- 차량 등급 공통 S --> */}
                            <div className="box_cont open mb10">
                                <h3 className="cont_title Title03">중소형</h3>
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
                            {/* <!-- 차량 등급 공통 E --> */}
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
                                <div className="clar">25세이상</div>
                            </div>

                            <div className="box_cont">
                                <div className="cont_info">
                                    <table className="table01">
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
                                        대여일정 툴팁
                                    </div>
                                </div>
                                <div className="clar">대여기간 : 1일</div>
                            </div>

                            <div className="box_cont open">
                                <div className="cont_info">
                                    <ul>
                                        <li className="line tac fwb wd_15">
                                            픽업<div className="Fs_xsm">Pick-up</div>
                                        </li>
                                        <li>
                                            <ul>
                                                <li className="Fs_sm">2022-08-10 (목) 10:30</li>
                                                <li>힐튼 헤드 아일랜드 공항</li>
                                                <li className="Fs_xsm">HILTON HEAD ISLAND ARPT</li>
                                            </ul>
                                        </li>
                                    </ul>
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
                                        요금 및 옵션 툴팁
                                    </div>
                                </div>
                                <div className="clar">
                                    <span className="line fwb point">기본할인요금제</span>
                                    <span>현지결제</span>
                                </div>
                            </div>

                            {/* <!-- 1. 차량 대여 요금 --> */}
                            <div className="box_cont open drop">
                                <div className="cont_title arrow toggle_btn toggle_tit" onClick={toggleHandle}>
                                    1. 차량 대여 요금
                                    <span className="price-info Fs_sm">
                                        USD <b className="Title03">50.00</b>
                                    </span>
                                </div>
                                <div className="cont_info view pa30 toggle_cont">
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
                                <div className="cont_info view pa30 toggle_cont2">
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
                                <div className="cont_info view pa30 toggle_cont3">
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
                                        결제 금액 툴팁
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
                                <div className="cont_info view pa30 toggle_cont4">
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

                        {/* <!-- 기타 안내 --> */}
                        <article className="l-box guide-box">
                            {/* <!-- 온라인체크 안내 --> */}
                            <div className="box_cont open drop">
                                <div className="cont_title arrow toggle_btn toggle_tit5" onClick={toggleHandle5}>
                                    온라인 체크인(Online Check in)
                                </div>
                                <div className="cont_info view pa30 toggle_cont5">
                                    <ul className="guide-explan circle Fs_xsm">
                                        <li>온라인 체크인은 운전면허증 정보와 현지에서 필요한 옵션 및 도착 정보를 사전에 입력하여 카운터에서의 시간을 절약할 수 있는 시스템 입니다.</li>
                                        <li>온라인 체크인을 완료 하시더라도 필수 서류인 예약확정서, 국내 면허증, 국제 면허증, 여권, 주운전자 명의 해외신용카드를 시 지참해 주시기 바랍니다.</li>
                                    </ul>
                                    <button type="button" className="button button--primary mt20 py12 btn_full">
                                        온라인 체크인 이용 가이드 다운로드
                                    </button>
                                </div>
                            </div>

                            {/* <!-- 차량 인수 안내 --> */}
                            <div className="box_cont open drop mt10">
                                <div className="cont_title arrow toggle_btn toggle_tit6" onClick={toggleHandle6}>
                                    차량인수 안내(PICK-UP Information)
                                </div>
                                <div className="cont_info view pa30 toggle_cont6">
                                    <ul className="guide-explan number Fs_xsm index">
                                        <li>1. 수화물 찾는 곳 외부에 위치한 퍼플 스탑(purple stop)으로 이동하시어, 상시 운행중인 알라모 셔틀버스에 탑승하여 지점까지 이동하여 주시기 바랍니다</li>
                                        <li>2. 모든 렌터카 이용 고객은 알라모 공항 지점으로 이동해 주셔야 합니다.</li>
                                        <li>3. 엘에이 국제공항은 시내로부터 남서쪽으로 10마일 정도 떨어지 곳에 위치하고 있습니다.</li>
                                        <li>4. 알라모 엘에이 국제공항 지점은 공항으로 부터 3마일 정도 떨어진 곳에 위치하고 있으며, 센츄리 블루버드(Century Boulevard)로부터는 북쪽, 멘체스터 블루버드(Manchester Boulevard)로부터는 남쪽에 위치하고 있습니다.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* <!-- 렌터카 이용정보 및 주의사항 --> */}
                            <div className="box_cont open drop mt10">
                                <div className="cont_title arrow toggle_btn toggle_tit7" onClick={toggleHandle7}>
                                    렌터카 이용정보 및 주의사항
                                </div>
                                <div className="cont_info view pa30 toggle_cont7">
                                    <ul className="guide-explan circle Fs_xsm">
                                        <li>알라모렌터카 한국 총판(www.alamo.co.kr) 에서는 본사 예약시스템을 기반으로 한 실시간 예약 서비스를 통해 예약을 대행해 드리고 있습니다.</li>
                                        <li>차량 예약 시 결제가 이루어지지 않으며 알라모렌터카 한국 총판(www.alamo.co.kr) 에서 확정 받은 요금은 현지 지점에서 차량 픽업 시 결제됩니다.</li>
                                    </ul>

                                    <ul className="guide-explan circle Fs_xsm">
                                        <div className="guide-title fwb Fs_xsm">필수 지참 사항</div>
                                        <li>필요 서류 : 주 운전자 명의의 한국여권, 신용카드, 국내 운전 면허증, 국제 운전 면허증, 예약 확정서 (하와이 지역의 경우 국제 운전 면허증은 필수 옵션이 아니므로 국내 운전 면허증만으로 차량 대여가 가능합니다.)</li>
                                    </ul>

                                    <ul className="guide-explan number Fs_xsm">
                                        <div className="guide-title fwb Fs_xsm">대여 안내</div>
                                        <li>
                                            1. 렌탈 가능 연령 : 만 25세 이상부터 대여 가능 하며, 만 21세~24세 이하의 경우 추가 비용(Under age Charge) 지불 시 이용가능 합니다.
                                            <br />
                                            (만 21세~24세 운전자는 이용가능 한 차량등급이 제한될 수 있습니다.) *뉴욕과 미시간주에서는 만18세 이상부터 렌터카 이용이 가능하며, 추가 비용 및 이용 가능한 차량 등급도타 주와 상이합니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            2. 렌탈 계약서 작성 시 유의사항: 차량 픽업 시 지점에서 계약서를 작성하며 응급출동서비스(RAP),유아 카시트 등 추가 옵션을 구매할 수 있습니다.
                                            <br />
                                            렌탈 계약서에 서명을 한 이후에는 추가로 발생한 비용에 대해 환불이 불가하오니 서명 전 계약서 내용을 반드시 확인하시기 바랍니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            3. 차량 인수 지점과 반납 지점이 다를 경우, 편도비용(Drop Charge)이 발생되며, 예약 마지막 단계의 Drop charge 항목에서 확인 가능합니다. 최종 예상 요금(Estimated Total)에 편도 비용이 합산되어 반영됩니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            4. 30일 이상 렌터카 픽업 시하는 장기렌탈건은 알라모렌터카 정책에 의해 30일 단위로 결제가 나뉘어 진행됨에 따라 계약서 및 인보이스도 나뉘어 발급됩니다. <br />
                                            예를 들어, 90일 이용건의 경우 30일 단위로 총 3번의 결제로 나누어 진행하시게 됩니다.
                                            <br />
                                            또한 대여 기간 동안 차량 점검등의 이유로 지점의 요청에 의해 방문이 필요하실 수 있으니 현지 지점의 안내에 따라 주시기 바랍니다.
                                        </li>
                                    </ul>

                                    <ul className="guide-explan number Fs_xsm">
                                        <div className="guide-title fwb Fs_xsm">비용 지불</div>
                                        <li>
                                            1. 결제 방법: 렌터카 픽업 시 주 운전자 본인 명의의 신용카드로 차량 이용금액의 약1~1.5배에 해당하는 금액이 보증금으로 가승인 처리가 됩니다.
                                            <br />
                                            차량 반납 시, 보증금은 자동 해지되며 실제 이용한 차량 요금은 보증금을 가승인 했던 신용카드로 자동 결제됩니다.
                                            <br />
                                            보증금은 신용카드 대금 결제일 이전까지 정상 승인이 되어 있더라도 실 청구는 되지 않습니다
                                            <br />
                                            미국 이용가능 신용카드: American Express®, MasterCard®, VISA®, Discover® Network, JCB
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            2. 체크카드 이용 규정: 일부 지점에 한해 체크/데빗 카드 사용이 가능합니다. (MasterCard®, VISA®) 체크/데빗 카드 이용을 원하시는 경우 사전에 알라모렌터카 (02-739-3110)를 통해 이용 가능 여부를 확인하시기 바랍니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            3. 법인카드 이용 규정: 운전자 본인 명의의 법인카드만 사용이 가능하며 무기명 법인카드는 사용이 불가합니다.
                                            <br />* 현금 결제는 불가합니다.
                                        </li>
                                    </ul>

                                    <ul className="guide-explan number Fs_xsm">
                                        <div className="guide-title fwb Fs_xsm">예약 변경 및 취소</div>
                                        <li>
                                            1. 예약변경
                                            <ul>
                                                <li>1) 차량 픽업 전: 차량 수급이 원활한 경우에 한해 알라모렌터카 한국 총판(www.alamo.co.kr) 에서 대여 시간 기준 24시간 전까지 변경이 가능합니다.</li>
                                                <li>2) 차량 픽업 시: 현지 지점에서 계약서 작성 시 차량 등급, 렌탈 기간 등을 변경하실 수 있으며 이때 변경되는 사항에 대해서는 알라모렌터카 한국 총판 (www.alamo.co.kr) 요금이 아닌 현지 요금으로 책정됩니다.</li>
                                                <li>3) 차량 픽업 후: 렌트기간 및 반납 지점 변경을 원하시는 경우 픽업지점으로 연락하시어 변경 가능 여부를 확인해야 합니다. 추가 금액은 현지 요금 기준으로 책정됩니다.</li>
                                            </ul>
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            2. 추가 이용 시간 요금 : 요금은 대여시간 기준 24시간 단위로 책정되며, 예정된 반납 시간보다 29분 이상 지연 시 하루 요금 단위로 추가 금액이 발생합니다.
                                            <br />
                                            추가 금액은 현지 요금 기준으로 책정됩니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            3. 사전 반납 : 예약한 반납일보다 하루 이상 먼저 반납 할 경우 이용 금액은 실제 이용한 일수로 계산되나, 예정보다 일찍 반납하신 것에 대해 Early Return Fee 금액이 패널티로 부과되며 패널티 금액은 지점마다 상이합니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            4. 영업시간 외 반납 : 지점 영업시간 종료 후에도 차량 반납이 가능한 지점에 한해 영업시간 외 반납이 가능합니다. 차량 계약서 작성 시 지점 직원과 영업시간 외 반납 가능 여부에 대해 재확인하시기 바랍니다.
                                            <br />* 영업 시간외 차량 반납 시, 지정된 구역에 주차 후, 차량 열쇠와 렌탈 자켓(Rental Jacket)의 마지막장을 작성해 키 드랍 박스(Key Drop Box)에 넣으시면 됩니다.
                                            <br />
                                            차량 이용 요금은 차량픽업 시 사용 하셨던 신용카드로 자동 청구 되며 다음날 지점 직원이 차량 상태를 점검한 이후 렌탈 계약이 최종적으로 종료 됩니다.
                                            <br />
                                            지점 직원에 의해 반납 절차가 완료되기 전까지 차량이 손상되거나, 주유가 되지 않은 경우, 고객님의 신용카드로 추가 요금이 자동 청구됩니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            5. 예약 취소 : 스케쥴 변경 및 기타 사유로 인해 렌터카 이용이 불가능 하실 경우, 픽업일 기준 최소 1일 전까지 취소해 주시기 바랍니다.
                                            <br />
                                            예약한 시간보다 늦게 방문하실 경우 예약이 자동 취소될 수 있습니다. 예약 시간보다 늦게 지점에 도착하시는 경우 현지 지점으로 미리 고지해주시길 바랍니다.
                                            <br />
                                            <br />
                                        </li>
                                    </ul>

                                    <ul className="guide-explan number Fs_xsm">
                                        <div className="guide-title fwb Fs_xsm">추가 옵션 사항</div>
                                        <li>- 추가 옵션 항목(네비게이션, 유아 카시트 등)은 제한된 수량으로 인해 사전에 신청이 완료된 경우에라도 현지 지점의 상황에 따라 대여가 불가능할 수 있습니다.</li>
                                        <li>
                                            1. 온라인 예약 시 추가 가능한 옵션
                                            <ul>
                                                <li>1) 네비게이션 (GPS, USD12.99+세금/Day) : 한국어 언어 설정 시 한국어로 음성 안내를 받을 수 있으며, 경로 설정은 영어로만 지원이 가능합니다.</li>
                                                <li>
                                                    2) 유아 카시트 : 알라모렌터카 한국 총판(www.alamo.co.kr) 를 통해 예약 시 1개당 USD6.99+세금/Day, 현지 대여 시 1개당USD10.99+세금/Day) 미국 대부분의 주에서는 법적으로 몸무게가 약 36.29kg 이하의 아동은 유아
                                                    보호 좌석을 이용하도록 규정하고 있습니다.
                                                </li>
                                            </ul>
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            2. 현지에서 추가 가능한 옵션 :<br />
                                            - 현지에서 추가하신 옵션은 추가 옵션 비용에 대한 세금이 별도로 부과되며, 정확한 세금은 현지 지점에서 계약서 작성 시 확인할 수 있습니다.
                                            <br />- 렌탈 계약서에 서명을 한 이후에는 추가로 발생한 비용에 대해 환불이 불가하오니 서명 전 계약서 내용을 반드시 확인하시기 바랍니다.
                                            <ul>
                                                <li>
                                                    1) 보험사항:
                                                    <ul className="number2">
                                                        <li>
                                                            1-1) 대인/대물(EP ; Extended Protection) : 알라모렌터카 한국총판 (www.alamo.co.kr)을 통해 예약하신 경우, 자차보험(CDW)은 기본적으로 포함이 되어있으나, 요금제에 따라 대인/대물이 포함되어있지 않은
                                                            요금제도 있습니다.
                                                            <br />
                                                            *요금제에 대인/대물보험이 포함되어 있지 않아 현지에서 구매하시는 경우, SLP(Supplemental Liability Protection)의 구매가 가능하며, 해당 보험의 단일보상한도는 USD300,000이며, 무보험 차량 보험(UM/UIM)은
                                                            커버되지 않습니다. (단, 무보험 차량보험이 필수인 주의 경우 커버가 가능하며 단일 보상한도는 USD300,000 입니다.)
                                                        </li>
                                                        <li>
                                                            1-2) 긴급차량출동서비스(Roadside Plus /USD4.99~USD5.99 + 세금/Day) : 알라모렌터카 한국 총판(www.alamo.co.kr) 을 통해 베이직 플러스 요금제를 예약하신 경우에 한해서만 긴급 출동서비스가 포함 되어 있으며,
                                                            베이직 플러스 요금제를 제외한 다른 요금제에는 긴급출동 서비스가 포함되어 있지 않으며, 현지 지점에서 구매가 가능합니다.
                                                        </li>
                                                        <li>
                                                            1-3) 자손 보험(PAI/PEC ; Personal Accident Insurance, USD6.50+세금/Day) : 알라모렌터카 한국 총판 (www.alamo.co.kr) 에서 제공하는 요금제에 포함되어 있지 않으며, 현지 지점에서 구매가 가능합니다.
                                                            <br />* 알래스카의 경우 현지 법 규정에 의해 렌터카사의 자손보험 판매가 불가 합니다.
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    2) 추가운전자 등록 (Additional Driver / 1인당 USD15+세금/Day) : <br />주 운전자와 함께 현지 지점으로 방문하여 등록 해주셔야 하며, 주 운전자와 동일한 필수 지참 서류를 제시해야 합니다.추가운전자로 등록한
                                                    운전자만 렌터카를 운전할 수 있으며, 추가운전자 등록 후 이름 변경 및 교체는 허용되지 않습니다.*추가 운전자가 배우자일 경우 영문가족증명서를 지참하시면 추가 운전자 등록 비용이 면제 됩니다.
                                                </li>
                                                <li>
                                                    3) 연료 (FSO ; Upfront Fuel Service ) : <br />
                                                    기본적으로 차량 픽업 시, 연료가 가득 채워진 상태로 제공되며, 반납시 연료를 가득 채워서 반납하여야 합니다.(연료비는 개인 부담 항목입니다.)
                                                    <br />
                                                    연료가 가득 채워지지 않은 상태로 받으신 경우, 차량 인수 시 지점 직원에게 이 부분을 고지하신 후 차량 반납시 문제되지 않도록 지점 직원의 확인을 받으시길 바랍니다.
                                                    <br />
                                                    현지 지점을 통해 FSO 항목을 구입하거나 예약한 요금제에 포함되어 있을 경우 반납 시 연료를 채우지 않고 반납할 수 있습니다.
                                                    <br />* 뉴욕 맨하탄 지역에서 픽업하시는 경우, 베이직플러스 요금제 연료 1탱크 옵션 포함사항이 적용되지 않습니다.
                                                    <br />
                                                    FSO 옵션을 현지 지점에서 별도 구매하시면, 처음 계약서 작성 시, 이용 차량 등급의 평균 연료 탱크를 기준으로 금액이 책정되며 반납시 실제 이용하신 차량의 연료탱크를 기준으로 요금이 다시 책정됩니다.
                                                    <br />
                                                    이때 사용하지 않고 남은 연료에 대해서는 환불되지 않습니다.
                                                </li>
                                                <li>
                                                    4) 차량 등급 변경/업그레이드 비용 (CAR CLASS CHANGE) : <br />
                                                    현지에서 예약하신 등급이 아닌 다른 등급 차량으로 변경하실 경우, 현지 요금 기준으로 추가 요금이 부과됩니다.
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>

                                    <ul className="guide-explan number Fs_xsm">
                                        <div className="guide-title fwb Fs_xsm">주의사항</div>
                                        <li>
                                            1. 사고 시에는 경찰 진술서(Police report)를 꼭 발급 받으셔야 하며, 즉시 차량을 인수받은 알라모 현지 지점으로 알려주셔야 합니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            2. 알라모렌터카에서는 응급상황을 대비하여 24시간 긴급 전화 서비스를 제공하고 있습니다.
                                            <br />
                                            한국어 통역서비스 역시 24시간 제공되므로 Korean Speaker 혹은 Korean interpreter를 요청하시면 통역서비스를 받으실 수 있습니다.
                                            <br />
                                            단, 로밍폰으로 이용 시 통화료가 부과되며 비용은 본인 부담입니다.
                                            <br />
                                            ☎미국 : 1-800-803-4444
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            3. 렌탈 기간 중 교통 법규 위반 및 유료 도로 통행료 등을 납부하지 않은 경우:
                                            <br />
                                            - 대납이 가능한 경우: 카메라에 찍힌 톨비, 교통 법규 위반과 같은 경우, 차량 반납 후에 알라모렌터카를 통해 별도의 행정수수료 비용과 함께 대납이 이루어집니다. 이때 고객님의 렌탈 정보를 해당 범칙금 발부 업체로 이관하는
                                            데에 따른 행정수수료비 USD10~25이 범칙금외에 별도로 부과됩니다.
                                            <br />
                                            - 대납이 불가능한 경우: 직접 발부 받은 범칙금 티켓의 경우 대납이 불가하며, 고객님께서 직접 납부를 해주셔야 합니다.
                                            <br />* 범칙금/유료도로 납부는 범칙금/유료도로 발부 업체 및 알라모렌터카 본사 규정에 따르며, 납부 방식은 사전 고지 없이 변경될 수 있습니다.
                                            <br />
                                            <br />
                                        </li>
                                        <li>
                                            4. 차량 반납 시, 대여하신 장비(차량 키/GPS 네비게이션/카시트 등)를 반납하지 않고 한국에 가지고 오시거나 분실 하실 경우 패널티가 청구되며, 패널티 비용은 각 장비 및 해당 지점의 규정에 따라 상이 합니다.
                                            <br />
                                            * 보험, 추가 옵션 등 비용이 발생 되는 모든 요금은 본사 정책에 따라 변동될 수 있습니다.
                                            <br />
                                            * 기타 문의사항은 예약하신 여행사나 알라모렌터카 (02-739-3110)로 연락 주시기 바랍니다.
                                            <br />
                                            * 이 외 자세한 내용은 하기 ‘알라모 서비스-이용 가이드북’ 혹은 홈페이지 상단 ‘이용가이드’ 를 통해서 확인 가능합니다.
                                            <br />
                                            <br />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </article>

                        <article className="l-button flex jc-ct">
                            <button type="button" className="button link button--cancle mr10" onClick={() => openModal("rsv-cancle")}>
                                예약취소
                            </button>
                            <button type="button" className="button link button--primary">
                                예약수정
                            </button>
                        </article>

                        {/* <!-- 픽업완료, 예약취소, 노쇼(no show) --> */}
                        <article className="l-button flex jc-ct">
                            <button type="button" className="button link button--primary">
                                확인
                            </button>
                        </article>
                    </div>
                </section>

                {/* <!-- Modal content S --> */}
                <div id="rsv-cancle" className="modal">
                    <div className="modal-content2">
                        <div className="modal-title Title03">예약취소</div>
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                            <p>예약 픽업일자 : 2021-01-11 12:00</p>
                            <div className="ask-box mt10">예약을 취소하시겠습니까?</div>
                            <div className="l-button mt30 flex">
                                <button type="button" className="button link button--cancle mr10">
                                    예약유지
                                </button>
                                <button type="button" className="button link button--primary">
                                    예약취소 처리
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
export default PickupScheduled;
