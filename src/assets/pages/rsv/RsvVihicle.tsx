import { SetStateAction, useEffect, useState } from "react";
import $ from "jquery";
import { Link, useNavigate } from "react-router-dom";

const RsvVihicle = () => {
  const navigation = useNavigate();
  useEffect(() => {
    $(".modal .close").click(function () {
      $(".modal").hide();
      $("body").removeClass("noneScroll");
    });

    $(".view").show();
    $(".hidden").hide();

    var n = $(".sub .tab_btn > li").length;
    var m = $(".modal .tab_btn > li").length;
    $(".sub .tab_btn > li").css({ width: "calc(100% / " + n + ")" });
    $(".modal .tab_btn > li").css({ width: "calc(100% / " + m + ")" });

    $("#tab-btn li a").click(function (event) {
      event.preventDefault();
      var selectAtt = $(this).attr("data-category");

      $("#tab-btn li a").removeClass("active_tab");
      $(this).addClass("active_tab");

      $(".all").hide();
      $("." + selectAtt).show();
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
  useEffect(() => {
    $("#rsv_vihicle").on("click", () => {
      $(".tooltip_cont").hide();
      $(".tooltip_cont2").hide();
    });
  }, []);
  const toggleHandle = () => {
    $(".toggle_cont").toggle();
    $(".toggle_tit").toggleClass("active");
  };

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <main className="sub rsv-page" id="rsv_vihicle">
        <div className="sub-vis">
          <ul className="step-pc">
            <li className="ico">
              <img src="/img/icon/step01-ing.png" alt="" />
              <p>차량 및 <br />요금제 선택</p>
            </li>
            <li className="step_com ico">
              <img src="/img/icon/step02-exp.png" alt="" />
              <p>요금확인 및 <br />옵션추가</p>
            </li>
            <li className="step_com ico">
              <img src="/img/icon/step03-exp.png" alt="" />
              <p>운전자 정보</p>
            </li>
            <li className="step_com ico">
              <img src="/img/icon/step04-exp.png" alt="" />
              <p>예약완료</p>
            </li>
          </ul>
        </div>

        <div className="contents">
          <div className="inner">
            <ul className="step-mo mb10">
              <li className="step_ing ico">
                <img src="/img/icon/step01-ing.png" alt="" />
              </li>
              <li className="step_exp ico">
                <img src="/img/icon/step02-exp_mo.png" alt="" />
              </li>
              <li className="step_exp ico">
                <img src="/img/icon/step03-exp_mo.png" alt="" />
              </li>
              <li className="step_exp ico">
                <img src="/img/icon/step04-exp_mo.png" alt="" />
              </li>
            </ul>

            {/* <!-- sub title --> */}
            <section className="Title01 tac">차량 및 요금제 선택</section>

            {/* <!-- 대여일정 --> */}
            <section className="l-box rental-point df">
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
                  className="cont_title arrow toggle_btn toggle active toggle_tit"
                  onClick={toggleHandle}
                >
                  픽업(PICK-UP) / 반납(DROP-OFF) 지점
                </div>
                <div className="cont_info view hidden pa30 toggle_cont">
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
            </section>

            {/* <!-- 차량등급 --> */}
            <section className="l-box" id="vihicle">
              <div className="box_title Title03 mb0">
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
                    렌터카 요금은 24시간 단위로 1일 요금이 책정됩니다.
                    <br />
                    예) 오후 1시 픽업 시, 다음날 오후 1시까지 요금 동일
                  </div>
                </div>
              </div>
              <div className="refer-ment Fs_sm">
                차량 등급 예약 후 차종은 현지에서 확정 됩니다.
              </div>
              <div className="l-vihicle-box mt10">
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
                  <div className="box_cont open car-rate mb20 compact all ">
                    <div className="cont_left">
                      <h3 className="cont_title Title03 flex">
                        중소형
                        <div className="flex ml-auto items-center arrow_non">
                          <span
                            className="detail Fs_sm fwn modal-btn"
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
                      </h3>
                      <div className="cont_info">
                        <div className="l-car-list">
                          <div className="car-list">
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
                                    <img
                                      src="/img/icon/seat.svg"
                                      alt="승차인원"
                                    />
                                    4
                                  </span>
                                  <span className="baggage">
                                    <img
                                      src="/img/icon/baggage.svg"
                                      alt="수하물"
                                    />
                                    2
                                  </span>
                                  <span className="door">
                                    <img
                                      src="/img/icon/door.svg"
                                      alt="문갯수"
                                    />
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
                          <div className="car-list_price">
                            <span className="price-info Fs_sm">
                              USD <b className="Title03">147.00 ~ 150.00</b>
                            </span>
                            <span
                              className="price-detail modal-btn ml-auto"
                              onClick={() => openModal("vihicle-detail")}
                            >
                              자세히 보기
                              <img
                                className="arrow_r"
                                src="/img/icon/arrow_r.svg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cont_right">
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          기본할인요금제
                          <span className="Fs_sm summary fwn">
                            추가 운전자 1인 등록비용, 세금, 연료 1탱크, 긴급출동
                            서비스
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          베이직플러스
                          <span className="Fs_sm summary fwn">
                            추가 운전자 1인 등록비용, 세금, 연료 1탱크, 긴급출동
                            서비스
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          영드라이버할인
                          <span className="Fs_sm summary fwn">
                            베이직패키지,추가운전자 1인 등록비용,Underage
                            Fee,세금{" "}
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="box_cont open car-rate mb20 medium all ">
                    <div className="cont_left">
                      <h3 className="cont_title Title03 flex">
                        중형
                        <div className="flex ml-auto items-center arrow_non">
                          <span
                            className="detail Fs_sm fwn modal-btn"
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
                      </h3>
                      <div className="cont_info">
                        <div className="l-car-list">
                          <div className="car-list">
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
                                    <img
                                      src="/img/icon/seat.svg"
                                      alt="승차인원"
                                    />
                                    4
                                  </span>
                                  <span className="baggage">
                                    <img
                                      src="/img/icon/baggage.svg"
                                      alt="수하물"
                                    />
                                    2
                                  </span>
                                  <span className="door">
                                    <img
                                      src="/img/icon/door.svg"
                                      alt="문갯수"
                                    />
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
                          <div className="car-list_price">
                            <span className="price-info Fs_sm">
                              USD <b className="Title03">147.00 ~ 150.00</b>
                            </span>
                            <span
                              className="price-detail modal-btn ml-auto"
                              onClick={() => openModal("vihicle-detail")}
                            >
                              자세히 보기
                              <img
                                className="arrow_r"
                                src="/img/icon/arrow_r.svg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cont_right">
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          기본할인요금제
                          <span className="Fs_sm summary fwn">
                            추가 운전자 1인 등록비용, 세금, 연료 1탱크, 긴급출동
                            서비스
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          베이직플러스
                          <span className="Fs_sm summary fwn">
                            추가 운전자 1인 등록비용, 세금, 연료 1탱크, 긴급출동
                            서비스
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          영드라이버할인
                          <span className="Fs_sm summary fwn">
                            베이직패키지,추가운전자 1인 등록비용,Underage
                            Fee,세금{" "}
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="box_cont open car-rate mb20 large all ">
                    <div className="cont_left">
                      <h3 className="cont_title Title03 flex">
                        대형
                        <div className="flex ml-auto items-center arrow_non">
                          <span
                            className="detail Fs_sm fwn modal-btn"
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
                      </h3>
                      <div className="cont_info">
                        <div className="l-car-list">
                          <div className="car-list">
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
                                    <img
                                      src="/img/icon/seat.svg"
                                      alt="승차인원"
                                    />
                                    4
                                  </span>
                                  <span className="baggage">
                                    <img
                                      src="/img/icon/baggage.svg"
                                      alt="수하물"
                                    />
                                    2
                                  </span>
                                  <span className="door">
                                    <img
                                      src="/img/icon/door.svg"
                                      alt="문갯수"
                                    />
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
                          <div className="car-list_price">
                            <span className="price-info Fs_sm">
                              USD <b className="Title03">147.00 ~ 150.00</b>
                            </span>
                            <span
                              className="price-detail modal-btn ml-auto"
                              onClick={() => openModal("vihicle-detail")}
                            >
                              자세히 보기
                              <img
                                className="arrow_r"
                                src="/img/icon/arrow_r.svg"
                                alt=""
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="cont_right">
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          기본할인요금제
                          <span className="Fs_sm summary fwn">
                            추가 운전자 1인 등록비용, 세금, 연료 1탱크, 긴급출동
                            서비스
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          베이직플러스
                          <span className="Fs_sm summary fwn">
                            추가 운전자 1인 등록비용, 세금, 연료 1탱크, 긴급출동
                            서비스
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="rate mb20">
                        <div className="rate-title fwb">
                          영드라이버할인
                          <span className="Fs_sm summary fwn">
                            베이직패키지,추가운전자 1인 등록비용,Underage
                            Fee,세금{" "}
                          </span>
                        </div>
                        <ul className="mt10">
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_local")}
                          >
                            현지결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </span>
                          </li>
                          <li
                            className="Fs_xsm"
                            onClick={() => navigation("/rsv_pay_now")}
                          >
                            지금결제
                            <span className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- 차량 list E --> */}
              </div>
            </section>

            <section>
              <div className="l-button flex jc-ct">
                <button
                  type="button"
                  className="button link button--primary w-full"
                  onClick={() => navigation("/rsv_pay_now")}
                >
                  다음 (지금결제)
                </button>
                <button
                  type="button"
                  className="button link button--primary ml10 w-full"
                  onClick={() => navigation("/rsv_pay_local")}
                >
                  다음 (현지결제)
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* <!-- Modal content S --> */}
        {/* <!-- 기본사양 --> */}
        <div id="spec" className="modal">
          <div className="modal-content2">
            <div className="modal-title Title03">기본사양</div>
            <span className="close fwb">&times;</span>
            <div className="cont_info">
              <ul className="Fs_sm summary">
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
        </div>

        {/* <!-- 요금 및 사양 --> */}
        <div id="vihicle-detail" className="modal">
          <div className="modal-content2 tab">
            <div className="modal-title Title03">중소형</div>
            <span className="close fwb">&times;</span>
            <div className="cont_info tab">
              <div className="car-list">
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
                    <img src="/img/page/car_sample.png" loading="lazy" alt="" />
                  </figure>
                </div>
              </div>
              <div className="car-detail">
                <ul className="tab-group fwb">
                  <li
                    className={`tab_item ${activeTab === 1 ? "active" : ""}`}
                    onClick={() => handleTabClick(1)}
                  >
                    요금제 선택
                  </li>
                  <li
                    className={`tab_item ${activeTab === 2 ? "active" : ""}`}
                    onClick={() => handleTabClick(2)}
                  >
                    차량정보
                  </li>
                </ul>
                <div className={`tab_inner ${activeTab === 1 ? "active" : ""}`}>
                  <div className="cont_right">
                    <div className="rate mb20">
                      <div className="rate-title fwb">
                        기본할인요금제
                        <p className="Fs_sm summary fwn">
                          추가 운전자 1인 등록비용, 세금, 연료 1탱크, 긴급출동
                          서비스
                        </p>
                      </div>
                      <ul className="mt10">
                        <a href="/rsv_pay_local" className="w-full">
                          <li className="Fs_xsm w-full">
                            현지결제
                            <p className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </p>
                          </li>
                        </a>
                        <a href="/rsv_pay_now" className="w-full">
                          <li className="Fs_xsm w-full">
                            지금결제
                            <p className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </p>
                          </li>
                        </a>
                      </ul>
                    </div>
                    <div className="rate mb20">
                      <div className="rate-title fwb">
                        베이직플러스
                        <p className="Fs_sm summary fwn">
                          추가 운전자 1인 등록비용, 세금, 연료 1탱크, 긴급출동
                          서비스
                        </p>
                      </div>
                      <ul className="mt10">
                        <a href="/rsv_pay_local" className="w-full">
                          <li className="Fs_xsm w-full">
                            현지결제
                            <p className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </p>
                          </li>
                        </a>
                        <a href="/rsv_pay_now" className="w-full">
                          <li className="Fs_xsm w-full">
                            지금결제
                            <p className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </p>
                          </li>
                        </a>
                      </ul>
                    </div>
                    <div className="rate">
                      <div className="rate-title fwb">
                        영드라이버할인
                        <p className="Fs_sm summary fwn">
                          베이직패키지,추가운전자 1인 등록비용,Underage Fee,세금{" "}
                        </p>
                      </div>
                      <ul className="mt10">
                        <a href="/rsv_pay_local" className="w-full">
                          <li className="Fs_xsm w-full">
                            현지결제
                            <p className="price-info Fs_sm">
                              USD <b className="Title03 primary">147.00</b>
                            </p>
                          </li>
                        </a>
                        <a href="/rsv_pay_now" className="w-full">
                          <li className="Fs_xsm w-full">
                            지금결제
                            <p className="price-info Fs_sm">
                              USD <b className="Title03 primary">150.00</b>
                            </p>
                          </li>
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={`tab_inner ${activeTab === 2 ? "active" : ""}`}>
                  <ul className="Fs_sm summary mt20">
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
            </div>
          </div>
        </div>
        {/* <!-- Modal content E --> */}
      </main>
    </>
  );
};
export default RsvVihicle;
