import { useEffect, useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const RsvDriverLocal = () => {
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
  const tooltipHandle6 = () => {
    $(".tooltip_cont6").show();
  };
  useEffect(() => {
    $("#rsv-page").on("click", () => {
      $(".tooltip_cont").hide();
      $(".tooltip_cont2").hide();
      $(".tooltip_cont3").hide();
      $(".tooltip_cont4").hide();
      $(".tooltip_cont5").hide();
      $(".tooltip_cont6").hide();
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
  // 체크
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table input[type="checkbox"]'
    );
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked;
    });
    setIsAllChecked(event.target.checked);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table input[type="checkbox"]'
    );
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
      <main className="sub rsv-page rsv-driver" id="rsv-page">
        <div className="sub-vis">
          <ul className="step-pc">
            <li className="step_com ico">
              <img src="/img/icon/step-com.png" alt="" />
              <p>차량 및 요금제 선택</p>
            </li>
            <li className="step_com ico">
              <img src="/img/icon/step-com.png" alt="" />
              <p>요금확인 및 옵션추가</p>
            </li>
            <li className="ico">
              <img src="/img/icon/step03-ing.png" alt="" />
              <p>운전자 정보</p>
            </li>
            <li className="step_com ico">
              <img src="/img/icon/step04-exp.png" alt="" />
              <p>예약완료</p>
            </li>
          </ul>
        </div>

        <section className="contents">
          <div className="inner">
            <ul className="step-mo mb10">
              <li className="step_com ico">
                <img src="/img/icon/step-com_mo.png" alt="" />
              </li>
              <li className="step_com ico">
                <img src="/img/icon/step-com_mo.png" alt="" />
              </li>
              <li className="step_ing ico">
                <img src="/img/icon/step03-ing.png" alt="" />
              </li>
              <li className="step_exp ico">
                <img src="/img/icon/step04-exp_mo.png" alt="" />
              </li>
            </ul>

            {/* <!-- sub title --> */}
            <article className="sub_title Title01 tac">운전자 정보</article>

            {/* <!-- 대여일정 --> */}
            <article className="l-box rental-point df">
              <div className="box_title Title03">
                대여일정
                <div className="l-tooltip" onClick={tooltipHandle}>
                  <div x-show="true">
                    <img
                      className="ml5"
                      src="/img/icon/question.svg"
                      alt="설명툴팁"
                    />
                  </div>
                  <div
                    className="tooltip Fs_sm pa10 tooltip_cont"
                    style={{ display: "none" }}
                  >
                    렌터카 요금은 24시간 단위로 1일 요금이 책정됩니다. <br />
                    예) 오후 1시 픽업 시, 다음날 오후 1시까지 요금 동일
                  </div>
                </div>
                <div className="clar">대여기간 : 1일</div>
              </div>
              <div className="box_cont open drop">
                <div
                  className="cont_title arrow toggle_btn toggle toggle_tit active"
                  onClick={toggleHandle}
                >
                  픽업(PICK-UP) / 반납(DROP-OFF) 지점
                </div>
                <div className="cont_info view hidden toggle_cont">
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

            {/* <!-- 차량등급 --> */}
            <article className="l-box vihicle">
              <div className="box_title Title03">
                차량등급(Vihicle)
                <div className="l-tooltip" onClick={tooltipHandle2}>
                  <div x-show="true">
                    <img
                      className="ml5"
                      src="/img/icon/question.svg"
                      alt="설명툴팁"
                    />
                  </div>
                  <div
                    className="tooltip Fs_sm pa10 tooltip_cont2"
                    style={{ display: "none" }}
                  >
                    차량등급 툴팁
                  </div>
                </div>
              </div>
              {/* //   <!-- 차량 등급 공통 S --> */}
              <div className="box_cont open mb10">
                <h3
                  className="cont_title arrow toggle_btn toggle toggle_tit2 mfs14"
                  onClick={toggleHandle2}
                >
                  중소형
                </h3>
                <div className="cont_info view toggle_cont2">
                  <div className="l-car-list">
                    {/* <!-- 차종 정보 S --> */}
                    <div className="car-list">
                      <div className="refer-ment Fs_sm">
                        차량 등급 예약 후 차종은 현지에서 확정 됩니다.
                      </div>
                      <div className="car-list_txt">
                        <div className="car-list_info Fs_sm">
                          <div className="info-sameclass">
                            <p className="info-sameclass_tit Fs_xsm mb5">
                              [동급차종]
                            </p>
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
                          <img
                            src="/img/page/car_sample.png"
                            loading="lazy"
                            alt=""
                          />
                        </figure>
                      </div>
                    </div>
                    {/* <!-- 차종 정보 S --> */}

                    {/* <!-- PC버전 기본 사양 S --> */}
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
                        <li>
                          · 그 외 추가 옵션 (Additional options available)
                        </li>
                      </ul>
                    </div>
                    {/* <!-- PC버전 기본사양 E --> */}

                    {/* <!-- MO버전 기본사양 S --> */}
                    <div className="car-list_price ">
                      <span
                        className="price-detail modal-btn"
                        onClick={() => openModal("spec")}
                      >
                        기본 사양 보기
                      </span>
                      <img
                        className="arrow_r"
                        src="/img/icon/arrow_r.svg"
                        alt=""
                      />
                    </div>
                    {/* <!-- MO버전 기본사양 E --> */}
                  </div>
                </div>
              </div>
              {/* <!-- 차량 등급 공통 S --> */}
            </article>

            {/* <!-- 요금 및 옵션 --> */}
            <article className="l-box rates-options">
              <div className="box_title Title03">
                요금 및 옵션
                <div className="l-tooltip" onClick={tooltipHandle3}>
                  <div x-show="true">
                    <img
                      className="ml5"
                      src="/img/icon/question.svg"
                      alt="설명툴팁"
                    />
                  </div>
                  <div
                    className="tooltip Fs_sm pa10 tooltip_cont3 left_0"
                    style={{ display: "none" }}
                  >
                    운전자정보 툴팁
                  </div>
                </div>
                <div className="clar">
                  <span className="line fwb point">기본할인요금제</span>
                  <span>현지결제</span>
                </div>
              </div>

              {/* <!-- 1. 차량 대여 요금 --> */}
              <div className="box_cont open drop">
                <div
                  className="cont_title arrow toggle_btn toggle toggle_tit3 active"
                  onClick={toggleHandle3}
                >
                  1. 차량 대여 요금
                  <span className="price-info Fs_sm">
                    USD <b className="Title03">50.00</b>
                  </span>
                </div>
                <div className="cont_info view hidden toggle_cont3">
                  <p className="primary mb10">
                    Time & Distance(USD 85.00 / Per Rental)
                  </p>
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
                          자차보험
                          <p className="Fs_xsm">COLLISION DAMAGE WAIVER FULL</p>
                        </td>
                        <td className="tar wd10">포함</td>
                      </tr>
                    </tbody>
                  </table>
                  <ul className="Fs_xsm">
                    <li className="fwb error">주의</li>
                    <li>
                      일부 대여지점에서는 보험, 세금 등의 조건이 적용되지 않을
                      수 있으니, 차량 대여 요금의 포함 내역을 재 확인해주시기
                      바랍니다.
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!-- 2. 추가옵션 --> */}
              <div className="box_cont open drop mt10">
                <div
                  className="cont_title arrow toggle_btn toggle toggle_tit4 active"
                  onClick={toggleHandle4}
                >
                  2. 추가옵션
                  <span className="price-info Fs_sm">
                    USD <b className="Title03">50.00</b>
                  </span>
                </div>
                <div className="cont_info view hidden toggle_cont4">
                  <table className="table01">
                    <tbody>
                      <tr>
                        <td>
                          Booster seat
                          <p className="Fs_xsm">
                            (USD 6.99 / Day: USD 70.00 / 30Days)
                          </p>
                        </td>
                        <td className="tar wd10">1</td>
                      </tr>
                      <tr>
                        <td>
                          Infant child seat
                          <p className="Fs_xsm">
                            (USD 6.99 / Day: USD 70.00 / 30Days)
                          </p>
                        </td>
                        <td className="tar wd10">1</td>
                      </tr>
                      <tr>
                        <td>
                          Child toddler seat
                          <p className="Fs_xsm">
                            (USD 6.99 / Day: USD 70.00 / 30Days)
                          </p>
                        </td>
                        <td className="tar wd10">1</td>
                      </tr>
                      <tr>
                        <td>
                          Navigational system
                          <p className="Fs_xsm">
                            (USD 6.99 / Day: USD 70.00 / 30Days / Week :
                            USD319.99 / Month : USD 49.98)
                          </p>
                        </td>
                        <td className="tar wd10">1</td>
                      </tr>
                      <tr>
                        <td>
                          Satellite radio
                          <p className="Fs_xsm">
                            (USD 6.99 / Day: USD 70.00 / 30Days / Week :
                            USD319.99 / Month : USD 49.98)
                          </p>
                        </td>
                        <td className="tar wd10">1</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* <!-- 3. 세금 및 기타 부가요금 --> */}
              <div className="box_cont open drop mt10">
                <div
                  className="cont_title arrow toggle_btn toggle toggle_tit5 active"
                  onClick={toggleHandle5}
                >
                  3. 세금 및 기타 부가요금
                  <span className="price-info Fs_sm">
                    USD <b className="Title03">110.40</b>
                  </span>
                </div>
                <div className="cont_info view hidden toggle_cont5">
                  <table className="table01 mb10">
                    <tbody>
                      <tr>
                        <td>
                          <span className="Fs_xsm mr5">[세금]</span>AIRPORT
                          CONCESSION FEE 11.11 PCT
                        </td>
                        <td className="tar wd10">USD 10.00</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="Fs_xsm mr5">[기타]</span>CUSTOMER
                          FACILITY CHARGE 9.00/DAY
                        </td>
                        <td className="tar wd10">USD 10.00</td>
                      </tr>
                      <tr>
                        <td>
                          <span className="Fs_xsm mr5">[세금]</span>TOURISM
                          COMMISSION REC 3.50 PCT
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
                    <li>
                      일부 대여지점에서는 보험, 세금 등의 조건이 적용되지 않을
                      수 있으니, 차량 대여 요금의 포함 내역을 재확인해주시기
                      바랍니다.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* <!-- 결제 금액 --> */}
            <article className="l-box payment">
              <div className="box_title Title03">
                결제 금액
                <div className="l-tooltip" onClick={tooltipHandle4}>
                  <div x-show="true">
                    <img
                      className="ml5"
                      src="/img/icon/question.svg"
                      alt="설명툴팁"
                    />
                  </div>
                  <div
                    className="tooltip Fs_sm pa10 tooltip_cont4 left_0"
                    style={{ display: "none" }}
                  >
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
                    <li>
                      - 해당 추가 옵션 및 편도 이용 금액은 세금 및 기타
                      항목이불포함된 가격입니다.
                    </li>
                    <li>
                      - 예약 완료 후 최종 예상 금액을 확인하실 수 있으며 현지
                      지점에서 지불하시기 바랍니다.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="box_cont open drop mt10">
                <div
                  className="cont_title arrow toggle_btn toggle toggle_tit6 active"
                  onClick={toggleHandle6}
                >
                  취소 수수료 및 환불 규정
                </div>
                <div className="cont_info view hidden toggle_cont6">
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
                        <li>
                          - 현지 픽업 시간 기준 48시간 전 : 무료취소 가능하며
                          전액환불
                        </li>
                        <li>
                          - 현지 픽업 시간 기준 48시간 ~ 1시간 전 : 1일
                          대여요금이 패널티로 부과되어 차감 후 환불
                        </li>
                        <li>
                          - 현지 픽업 시간 기준 1시간 이내 또는 픽업 시간 이후 :
                          환불 불가
                        </li>
                      </ul>
                    </li>
                    <li>
                      예약완료 후 수정이 불가하므로, 예약 시 반드시 취소료 적용
                      시점을 확인 해 주시길 바랍니다.
                    </li>
                    <li>
                      취소료 적용 환율은 예약 결제시 적용된 환율과 동일합니다.
                    </li>
                    <li>
                      사전 반납시, 이용 하지 않은 대여 기간에 대해서 환불이
                      불가합니다.
                    </li>
                    <li>
                      이벤트 및 제휴 항공사 마일리지 적립은 적용되지 않습니다.
                    </li>
                    <li>
                      환불 요청은 픽업 1시간 전까지만 신청이 가능하며 그
                      이후에는 환불이 불가합니다.
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* <!-- 운전자 정보 --> */}
            <article className="l-box driver">
              <div className="box_title Title03">
                운전자 정보
                <div className="l-tooltip" onClick={tooltipHandle5}>
                  <div x-show="true">
                    <img
                      className="ml5"
                      src="/img/icon/question.svg"
                      alt="설명툴팁"
                    />
                  </div>
                  <div
                    className="tooltip Fs_sm pa10 tooltip_cont5 left_0"
                    style={{ display: "none" }}
                  >
                    운전자정보 툴팁
                  </div>
                </div>
                {/* <div className="clar">25세이상</div> */}
              </div>
              {/* <!-- 운전자 정보 입력 form --> */}
              <div className="box_cont open drop">
                <div
                  className="cont_title arrow toggle_btn toggle_tit7"
                  onClick={toggleHandle7}
                >
                  운전자 정보
                </div>
                <div className="cont_info view toggle_cont7">
                  <form
                    className="cmxform"
                    id="sign-form"
                    method="get"
                    action=""
                  >
                    <fieldset>
                      <div className="lookup_input">
                        <label htmlFor="same-info">
                          <input
                            type="checkbox"
                            name="same-info"
                            id="same-info"
                            className="mr5"
                          />
                          회원정보와 동일
                        </label>
                      </div>

                      <div className="form_input mt20">
                        <div className="mr10">
                          <label htmlFor="name" className="import">
                            주 운전자 명
                          </label>
                          <input
                            type="text"
                            placeholder="주 운전자 한글명을 기재해 주세요."
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      <div className="lookup_input mt20">
                        <div className="mr5">
                          <label htmlFor="first_name" className="import">
                            여권 성{" "}
                            <span className="Fs_sm summary">(여권상)</span>
                          </label>
                          <input
                            type="text"
                            placeholder="여권 영문 성"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                      <div className="lookup_input mt20">
                        <div>
                          <label htmlFor="last_name" className="import">
                            여권 이름{" "}
                            <span className="Fs_sm summary">(여권상)</span>
                          </label>
                          <input
                            type="text"
                            placeholder="여권 영문 이름"
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      <div className="form_input phone-nm mt20">
                        <label htmlFor="phone" className="import">
                          휴대폰번호
                        </label>
                        <div className="lookup_input">
                          <input
                            type="text"
                            id="phone_number_value"
                            defaultValue="+82"
                          />
                          <select id="phone_number" className="mr5">
                            <option value="+82">대한민국 +82</option>
                            <option value="+1 670">
                              미국령북마리아나제도 +1 670
                            </option>
                            <option value="+61 8 9164">
                              크리스마스 섬 제도 +61 8 9164
                            </option>
                          </select>
                          <input
                            type="number"
                            placeholder="휴대폰번호를 입력해주세요"
                            autoComplete="off"
                          />
                        </div>
                      </div>

                      <div className="form_input mt20">
                        <label htmlFor="email" className="import">
                          이메일
                        </label>
                        <input
                          type="email"
                          placeholder="이메일을 입력해주세요."
                          id="email"
                          name="email"
                          autoComplete="off"
                        />
                      </div>

                      <div className="form_input mt20">
                        <label htmlFor="flight" className="box_title">
                          도착항공편
                          <div className="l-tooltip" onClick={tooltipHandle6}>
                            <div x-show="true">
                              <img
                                className="ml5"
                                src="/img/icon/question.svg"
                                alt="설명툴팁"
                              />
                            </div>
                            <div
                              className="tooltip Fs_sm pa10 tooltip_cont6"
                              style={{ display: "none" }}
                            >
                              항공편 연착을 대비하여 도착 항공편 정보를 입력 해
                              주시는 경우, 최대 12시간 혹은 지점 영업 시간 종료
                              전까지 예약이 홀딩 될 수 있습니다.
                              <br />
                              정확하지 않은 항공편 정보 입력 시,지점에서 확인이
                              불가 하므로 정확한 항공사 코드와 편명을 입력
                              해주시길 바랍니다.
                            </div>
                          </div>
                        </label>
                        <input
                          type="text"
                          placeholder="예) KE108"
                          autoComplete="off"
                        />
                      </div>

                      <div className="lookup_input mt20">
                        <div className="mr5">
                          <label htmlFor="mileage">
                            항공사 마일리지 적립 / 멤버십 번호
                          </label>
                          <div className="flex">
                            <select name="select_change" id="id">
                              <option value="" disabled hidden>
                                항공사
                              </option>
                              <option value="KAL">대한한공</option>
                              <option value="AAR">아시아나</option>
                            </select>
                            <input
                              type="text"
                              className="ml5"
                              placeholder="멤버십 번호 입력"
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>

                      <div id="joinAgree" className="mt20 check_table">
                        <div className="agreeAll mb10">
                          <input
                            type="checkbox"
                            id="checkAll"
                            checked={isAllChecked}
                            onChange={handleCheckAll}
                          />
                          <label htmlFor="checkAll">
                            <span className="import fwb">약관 전체 동의</span>
                          </label>
                        </div>
                        <div className="cont_info agree_box view Fs_sm">
                          <div className="agree_check flex items-center">
                            <input
                              type="checkbox"
                              name="join_agree"
                              id="join_agree"
                              onChange={handleCheck}
                            />
                            <label htmlFor="join_agree" className="ml10">
                              사이트 이용약관
                              <span className="ess Fs_xsm">(필수)</span>
                            </label>
                            <button
                              type="button"
                              className="btn_secondary ml-auto"
                              onClick={() => openModal("policy")}
                            >
                              자세히 보기
                            </button>
                          </div>
                          <div className="agree_check flex items-center">
                            <input
                              type="checkbox"
                              name="join_agree"
                              id="join_agree2"
                              onChange={handleCheck}
                            />
                            <label htmlFor="join_agree2" className="ml10">
                              렌터카 이용약관
                              <span className="ess Fs_xsm">(필수)</span>
                            </label>
                            <button
                              type="button"
                              className="btn_secondary ml-auto"
                              onClick={() => openModal("policy2")}
                            >
                              자세히 보기
                            </button>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                  </form>
                </div>
              </div>
            </article>

            <article>
              <div className="l-button flex jc-ct btn_full">
                <button
                  type="button"
                  className="button link button--primary"
                  onClick={() => navigation("/rsv_com_local")}
                >
                  렌터카 예약완료
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* <!-- Modal content S --> */}
        {/* <!-- 기본사양 --> */}
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
        <div id="policy" className="modal">
          <div className="modal-content2">
            <div className="modal-title Title03">사이트 이용약관</div>
            <span className="close fwb">&times;</span>
            <ul className="Fs_sm summary pa30">
              <li>이용약관 내용 들어가는 곳</li>
            </ul>
          </div>
        </div>
        <div id="policy2" className="modal">
          <div className="modal-content2">
            <div className="modal-title Title03">렌터카 이용약관</div>
            <span className="close fwb">&times;</span>
            <ul className="Fs_sm summary pa30">
              <li>이용약관 내용 들어가는 곳</li>
            </ul>
          </div>
        </div>
        {/* <!-- Modal content E --> */}
      </main>
    </>
  );
};
export default RsvDriverLocal;
