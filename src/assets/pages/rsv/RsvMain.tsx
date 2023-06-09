import { useEffect, useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper";
import { addDays } from "date-fns";

import { Swiper, SwiperSlide } from "swiper/react";
import { DateRangePicker } from "react-date-range"; // theme css file

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const RsvMain = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  useEffect(() => {
    $(".modal .close").click(function () {
      $(".modal").hide();
      $("body").removeClass("noneScroll");
    });
  }, []);
  useEffect(() => {
    $(".view").show();
    $(".hidden").hide();
    $(".toggle_btn").on("click", function () {
      if ($(this).hasClass("toggle")) {
        $(this).removeClass("toggle");
      } else {
        $(this).addClass("toggle");
      }
    });
    $(".modal .close_btn").click(function () {
      $(".modal").hide();
      $("body").removeClass("noneScroll");
    });
  }, []);
  const handleToggle = () => {
    $(".toggle_cont").slideToggle();
  };
  const handleToggle2 = () => {
    $(".toggle_cont2").slideToggle();
  };
  const handleToggle3 = () => {
    $(".toggle_cont3").slideToggle();
  };

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
  useEffect(() => {
    $("#rsv_main").on("click", () => {
      $(".tooltip_cont").hide();
      $(".tooltip_cont2").hide();
      $(".tooltip_cont3").hide();
    });
  }, []);

  const [return2, setReturn2] = useState(true);

  const tooltipHandle4 = () => {
    $(".tooltip_cont4").show();
  };

  interface Idate {
    key?: string | undefined;
    startDate?: Date;
    endDate?: Date;
  }
  const [state, setState] = useState<Idate[]>([
    {
      key: "selection",
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
    },
  ]);
  //체크여부 온오프
  const [isChecked, setIsChecked] = useState(true); // 초기값 설정

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  //토글 에로우
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };

  const [isToggled2, setIsToggled2] = useState(false);

  const handleToggleClick2 = () => {
    setIsToggled2(!isToggled2);
  };

  const label = isChecked ? "같은 지점에서 반납" : "다른 지점에서 반납";
  return (
    <>
      <main className="sub" id="rsv_main">
        <div className="sub-vis"></div>
        <section className="contents">
          <div className="inner">
            <article className="sub_title Title01 tac">렌터카 예약하기</article>
            {/* <!-- 예약하기 form --> */}
            <section id="" className="box_cont rsv-box mb50">
              <form className="rsv-form">
                <fieldset>
                  <div className="flex item-center mb-2">
                    <div className="flex item-center">
                      <input
                        type="checkbox"
                        name="same-info"
                        id="same-info"
                        className="mr10"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="same-info">{label}</label>
                    </div>
                    <div
                      className="l-tooltip"
                      onClick={tooltipHandle}
                      style={{ display: isChecked ? "block" : "none" }}
                    >
                      <div x-show="true">
                        <img
                          className="ml5"
                          src="/img/icon/question.svg"
                          alt="설명툴팁"
                        />
                      </div>
                      <div
                        className="tooltip Fs_sm pa10 tooltip_cont right"
                        style={{ display: "none" }}
                      >
                        렌터카 요금은 24시간 단위로 1일 요금이 책정됩니다.{" "}
                        <br />
                        예) 오후 1시 픽업 시, 다음날 오후 1시까지 요금 동일
                      </div>
                    </div>
                    <div
                      className="l-tooltip ml-auto"
                      onClick={tooltipHandle4}
                      style={{ display: isChecked ? "none" : "block" }}
                    >
                      <b className="color_blue">대여기간 1일</b>
                      <div x-show="true" className="inline-block">
                        <img
                          className="ml5"
                          src="/img/icon/question.svg"
                          alt="설명툴팁"
                        />
                      </div>
                      <div
                        className="tooltip Fs_sm pa10 tooltip_cont4 right"
                        style={{ display: "none" }}
                      >
                        렌터카 요금은 24시간 단위로 1일 요금이 책정됩니다.{" "}
                        <br />
                        예) 오후 1시 픽업 시, 다음날 오후 1시까지 요금 동일
                      </div>
                    </div>
                  </div>
                  {/* 같은 지점일 때 */}
                  <div
                    className="rsv-form_input mt10 pc_only"
                    style={{ display: isChecked ? "block" : "none" }}
                  >
                    <div
                      className="wd_80"
                      onClick={() => openModal("pickup_location")}
                    >
                      <label className="rsv-form_label mb5">
                        픽업 지점(PICK-UP) 선택
                      </label>
                      <p className="Fs_sm summary">영문 또는 한글명 검색</p>
                      <input
                        className="input-txt-style"
                        type="text"
                        id="jPickLocCode"
                        name="pickUpLocation"
                        placeholder="영문/한글 도시이름"
                        hidden
                        defaultValue=""
                      />
                    </div>
                    <button
                      type="button"
                      className="button button--primary step Fs_sm rsvbutton"
                      onClick={() => openModal("point-search")}
                    >
                      <span className="mr5 fs12">단계별 검색</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6px"
                        height="12px"
                        viewBox="0 0 50 80"
                      >
                        <polyline
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="6"
                          strokeLinejoin="round"
                          points="0.375,0.375 45.63,38.087 0.375,75.8 "
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="rsv-form_input mt10 pc_only"
                    style={{ display: isChecked ? "block" : "none" }}
                  >
                    <div
                      className="wd_80"
                      onClick={() => openModal("pickup_location")}
                    >
                      말라가 공항 - 스페인
                      <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                      <input
                        className="input-txt-style"
                        type="text"
                        id="jPickLocCode"
                        name="pickUpLocation"
                        placeholder="영문/한글 도시이름"
                        hidden
                        defaultValue=""
                      />
                    </div>
                    <button
                      type="button"
                      className="button button--primary step Fs_sm rsvbutton"
                      onClick={() => openModal("point-search")}
                    >
                      <span className="mr5 fs12">단계별 검색</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6px"
                        height="12px"
                        viewBox="0 0 50 80"
                      >
                        <polyline
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="6"
                          strokeLinejoin="round"
                          points="0.375,0.375 45.63,38.087 0.375,75.8 "
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className="rsv-form_input mt10 pc_only"
                    style={{ display: isChecked ? "none" : "block" }}
                  >
                    <div
                      className="wd_80"
                      onClick={() => openModal("pickup_location")}
                    >
                      <label className="rsv-form_label mb5">
                        픽업 지점 선택
                      </label>
                      말라가 공항 - 스페인
                      <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                      <input
                        className="input-txt-style"
                        type="text"
                        id="jPickLocCode"
                        name="pickUpLocation"
                        placeholder="영문/한글 도시이름"
                        hidden
                        defaultValue=""
                      />
                    </div>
                    <button
                      type="button"
                      className="button button--primary step Fs_sm rsvbutton"
                      onClick={() => openModal("point-search")}
                    >
                      <span className="mr5 fs12">단계별 검색</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6px"
                        height="12px"
                        viewBox="0 0 50 80"
                      >
                        <polyline
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="6"
                          strokeLinejoin="round"
                          points="0.375,0.375 45.63,38.087 0.375,75.8 "
                        />
                      </svg>
                    </button>
                  </div>

                  <div
                    className="rsv-form_input mt10 pc_only"
                    style={{ display: isChecked ? "none" : "block" }}
                  >
                    <div
                      className="wd_80"
                      onClick={() => openModal("dropoff_location")}
                    >
                      <label className="rsv-form_label mb5">
                        반납 지점 선택
                      </label>
                      말라가 공항 - 스페인
                      <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                      <input
                        className="input-txt-style"
                        type="text"
                        id="jPickLocCode"
                        name="pickUpLocation"
                        placeholder="영문/한글 도시이름"
                        hidden
                        defaultValue=""
                      />
                    </div>
                    <button
                      type="button"
                      className="button button--primary step Fs_sm rsvbutton"
                      onClick={() => openModal("point-search")}
                    >
                      <span className="mr5 fs12">단계별 검색</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6px"
                        height="12px"
                        viewBox="0 0 50 80"
                      >
                        <polyline
                          fill="none"
                          stroke="#FFFFFF"
                          strokeWidth="6"
                          strokeLinejoin="round"
                          points="0.375,0.375 45.63,38.087 0.375,75.8 "
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="rsv-form_input pb0 mt10">
                    <div className="rsv-form_title rent-period pb10">
                      픽업 / 반납 일시
                    </div>
                    <div
                      className="l-period-group"
                      onClick={() => openModal("rsv_date")}
                    >
                      <div className="period-group">
                        <span className="date">23.01.07(토)</span>
                        <span className="time">09:00</span>
                      </div>
                      <div className="period-group">
                        <span className="date" data-returndate="">
                          23.01.08(일)
                        </span>
                        <span className="time">09:00</span>
                      </div>
                    </div>
                    <div className="period-badge Fs_sm pc_only">1일</div>
                    <div className="period-badge Fs_sm mo_only">
                      <img src="/img/icon/arrow-1day.svg" alt="" />
                      <span>1일</span>
                    </div>
                  </div>
                  <div className="flex mt10">
                    <div className="rsv-form_input pb0 wd_50 mr10">
                      <div className="rsv-form_title driver-age pb10 flex items-center space-between">
                        운전자 연령
                        <div
                          className="l-tooltip px14"
                          onClick={tooltipHandle2}
                        >
                          <div x-show="true">
                            <img
                              className="ml5"
                              src="/img/icon/question.svg"
                              alt="설명툴팁"
                            />
                          </div>
                          <div
                            className="tooltip Fs_sm pa10 tooltip_cont2 center"
                            style={{ display: "none" }}
                          >
                            대부분의 주에서는 만 21세 이상부터 렌터카 차량
                            이용이 가능합니다. 다만, 만 21세 ~ 만 25세 미만에
                            해당하는 운전자(추가운전자 포함)의 경우 underage fee
                            약$25 + TAX(일당/인당)가 추가 청구 됩니다. 미주,
                            캐나다 지점에서 이용할 경우에 해당하며, 각 주마다
                            규정이 상이 할 수 있습니다.
                            <br />
                            <br />
                            underage Fee가 부과되는 나이에 해당할 경우, 아래의
                            영드라이버 할인 요금을 추천해 드립니다.
                            <br />
                            <br />
                            ★ 영 드라이버 할인 요금(미국 적용)
                            <br />- 포함사항 : 차량대여요금 + 자차보험 +
                            대인/대물보험 + 세금 + 주운전자 underage fee +
                            추가운전자 1인등록비(만 25세이상)
                          </div>
                        </div>
                      </div>
                      <select id="driver-age">
                        <option value="" disabled hidden>
                          연령선택
                        </option>
                        <option value="">25세 미만</option>
                        <option value="">25세 이상</option>
                      </select>
                    </div>

                    <div className="rsv-form_input pb0 wd_50">
                      <div className="rsv-form_title coupon pb10 flex space-between">
                        쿠폰
                        <div
                          className="l-tooltip px14"
                          onClick={tooltipHandle3}
                        >
                          <div x-show="true">
                            <img
                              className="ml5"
                              src="/img/icon/question.svg"
                              alt="설명툴팁"
                            />
                          </div>
                          <div
                            className="tooltip Fs_sm pa10 tooltip_cont3 right"
                            style={{ display: "none" }}
                          >
                            적용할 쿠폰을 선택해주세요 .사용 가능한 쿠폰이
                            자동으로 보여집니다.
                          </div>
                        </div>
                      </div>
                      <select id="driver-age">
                        <option value="" disabled hidden>
                          쿠폰선택
                        </option>
                        <option value="">쿠폰1</option>
                      </select>
                    </div>
                  </div>
                  <div className="l-button mt30">
                    <button
                      type="button"
                      className="full_button button button--primary mt20"
                      onClick={() => navigate("/rsv_vihicle")}
                    >
                      실시간 차량 조회
                    </button>
                  </div>
                </fieldset>
              </form>
            </section>
          </div>
        </section>
      </main>

      {/* 픽업 지점 모달 */}
      <div id="pickup_location" className="modal">
        <div className="modal-content2">
          <div className="modal-title dummytitle"></div>
          <span className="close fwb">&times;</span>
          <div className="cont_info">
            <div className="search-box flex search">
              <svg viewBox="0 0 56.7 56.7" className="search_icon">
                <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
              </svg>
              <input
                type="text"
                autoComplete="off"
                className="search_input mr5"
                data-test-id="search-input"
                placeholder="영문/한글 도시 이름"
              />
              {/* <button type="button" className="button search_btn">
                                <span className="ico">검색</span>
                            </button> */}
            </div>
            {/* <!-- 지점 리스트 S --> */}
            <ul className="point_detail">
              <li className="guide_title pa20 close_btn">
                <div>
                  말라가 공항 - (스페인)
                  <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                </div>
              </li>
              <li className="guide_title pa20 close_btn">
                <div>
                  말라가 공항 - (스페인)
                  <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                </div>
              </li>
            </ul>
            {/* <!-- 지점 리스트 E --> */}
          </div>
        </div>
      </div>

      {/* <!-- 반납 지점 modal --> */}
      <div id="dropoff_location" className="modal">
        <div className="modal-content2">
          <div className="modal-title Title03"></div>
          <span className="close fwb">&times;</span>
          <div className="cont_info">
            <div className="search-box flex search">
              <svg viewBox="0 0 56.7 56.7" className="search_icon">
                <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
              </svg>
              <input
                type="text"
                autoComplete="off"
                className="search_input mr5"
                data-test-id="search-input"
                placeholder="영문/한글 도시 이름"
              />
            </div>
            {/* <!-- 지점 리스트 S --> */}
            <ul className="point_detail">
              <li className="guide_title pa20 close_btn">
                <div>
                  말라가 공항 - (스페인)
                  <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                </div>
              </li>
              <li className="guide_title pa20 close_btn">
                <div>
                  말라가 공항 - (스페인)
                  <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                </div>
              </li>
            </ul>
            {/* <!-- 지점 리스트 E --> */}
          </div>
        </div>
      </div>

      {/* <!-- 날짜 예약 modal --> */}
      {/* <!-- 날짜 예약 modal --> */}
      <div id="rsv_date" className="modal">
        <div className="modal-content2 type2">
          <span className="close fwb">&times;</span>
          <div className="cont_info mt20">
            <div className="box_cont open drop">
              <div
                className={`cont_title arrow toggle_btn ${
                  isToggled ? "toggle" : ""
                }`}
                onClick={() => {
                  handleToggleClick();
                  handleToggle();
                }}
              >
                픽업 / 반납 날짜를 선택해주세요.
              </div>
              <div
                className="cont_info view pa10 toggle_cont datepicker"
                id="DatePick"
              >
                <DateRangePicker
                  locale={ko}
                  onChange={(item) => setState([item.selection])}
                  moveRangeOnFirstSelection={false}
                  months={2}
                  ranges={state}
                  direction="horizontal"
                />
              </div>
            </div>

            <table className="table02 mt10">
              <thead>
                <tr>
                  <th>요일</th>
                  <th>운영시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>월요일</td>
                  <td>08:00 ~ 23:59</td>
                </tr>
                <tr>
                  <td>금요일</td>
                  <td>08:00 ~ 23:59</td>
                </tr>
              </tbody>
            </table>
            <div className="rsv_time">
              <div className="box_cont open drop">
                <div
                  className={`cont_title arrow toggle_btn ${
                    isToggled2 ? "toggle" : ""
                  }`}
                  onClick={() => {
                    handleToggleClick2();
                    handleToggle3();
                  }}
                >
                  시간을 선택해주세요.
                </div>
                <div className="cont_info view pa10 flex jc-sb toggle_cont3 time_info">
                  <div className="mr5">
                    <div className="pickup-return">
                      <input type="radio" id="pickup" name="pickup-return" />
                      <label className="" htmlFor="pickup">
                        픽업
                      </label>
                    </div>
                    <div
                      className="swiper timeswiper t-swiper"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Swiper
                        // install Swiper modules\
                        modules={[EffectCoverflow]}
                        direction="vertical"
                        spaceBetween={0}
                        slidesPerView={3}
                        effect="coverflow"
                        coverflowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 0,
                          modifier: 3,
                          slideShadows: false,
                        }}
                        centeredSlides={true}
                      >
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          8:00
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          8:30
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          9:00
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          9:30
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          10:00
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          10:30
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          11:00
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          11:30
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          12:00
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>

                  <div className="">
                    <div className="pickup-return">
                      <input type="radio" id="return" name="pickup-return" />
                      <label className="" htmlFor="return">
                        반납
                      </label>
                    </div>
                    <div
                      className="swiper timeswiper2 t-swiper"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <Swiper
                        // install Swiper modules\
                        modules={[EffectCoverflow]}
                        direction="vertical"
                        spaceBetween={0}
                        slidesPerView={3}
                        effect="coverflow"
                        coverflowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 0,
                          modifier: 3,
                          slideShadows: false,
                        }}
                        centeredSlides={true}
                      >
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          8:00
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          8:30
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          9:00
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          9:30
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          10:00
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          10:30
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          11:00
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          11:30
                        </SwiperSlide>
                        <SwiperSlide className="tac flex jc-ct ai-ct">
                          12:00
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="l-button mt30">
              <button
                type="button"
                className="button full_button link button--primary close_btn"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="rsv_date" className="modal">
        <div className="modal-content2">
          <span className="close fwb">&times;</span>
          <div className="cont_info mt20">
            <div className="box_cont open drop">
              <div
                className="cont_title arrow toggle_btn"
                onClick={handleToggle}
              >
                날짜를 선택해주세요.
              </div>
              <div className="cont_info view pa10 toggle_cont" id="DatePick">
                <DatePicker
                  selected={startDate}
                  locale={ko}
                  onChange={(date: any) => setStartDate(date)}
                  inline
                />
              </div>
            </div>
            <table className="table02 mt10">
              <thead>
                <tr>
                  <th>요일</th>
                  <th>운영시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>월요일</td>
                  <td>08:00 ~ 23:59</td>
                </tr>
                <tr>
                  <td>금요일</td>
                  <td>08:00 ~ 23:59</td>
                </tr>
              </tbody>
            </table>
            <div
              className="l-button mt30"
              onClick={() => openModal("rsv_time")}
            >
              <button
                type="button"
                className="button full_button link button--primary"
              >
                다음
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="rsv_time" className="modal modal2">
        <div className="modal-content2">
          <span className="close fwb">&times;</span>
          <div className="cont_info mt20">
            <div className="box_cont open drop">
              <div
                className="cont_title arrow toggle_btn toggle"
                onClick={handleToggle2}
              >
                날짜를 선택해주세요.
              </div>
              <div
                className="cont_info view hidden pa10 toggle_cont2"
                id="DatePick"
              >
                <DatePicker
                  selected={startDate}
                  locale={ko}
                  onChange={(date: any) => setStartDate(date)}
                  inline
                />
              </div>
            </div>
            <div className="box_cont open drop">
              <div
                className="cont_title arrow toggle_btn"
                onClick={handleToggle3}
              >
                시간을 선택해주세요.
              </div>
              <div className="cont_info view pa10 flex jc-sb toggle_cont3">
                <div className="mr5">
                  <div className="button full_button button--primary">픽업</div>
                  <div
                    className="swiper timeswiper t-swiper"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Swiper
                      // install Swiper modules\
                      modules={[EffectCoverflow]}
                      direction="vertical"
                      spaceBetween={0}
                      slidesPerView={5}
                      effect="coverflow"
                      coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 3,
                        slideShadows: false,
                      }}
                      centeredSlides={true}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        8:00
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        8:30
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        9:00
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        9:30
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        10:00
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        10:30
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        11:00
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        11:30
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        12:00
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>

                <div className="">
                  <div className="button full_button button--disabled">
                    반납
                  </div>
                  <div
                    className="swiper timeswiper2 t-swiper"
                    style={{ width: "100%", height: "100%" }}
                  >
                    <Swiper
                      // install Swiper modules\
                      modules={[EffectCoverflow]}
                      direction="vertical"
                      spaceBetween={0}
                      slidesPerView={5}
                      effect="coverflow"
                      coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 0,
                        modifier: 3,
                        slideShadows: false,
                      }}
                      centeredSlides={true}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log("slide change")}
                    >
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        8:00
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        8:30
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        9:00
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        9:30
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        10:00
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        10:30
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        11:00
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        11:30
                      </SwiperSlide>
                      <SwiperSlide className="tac flex jc-ct ai-ct">
                        12:00
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
            <table className="table02 mt10">
              <thead>
                <tr>
                  <th>요일</th>
                  <th>운영시간</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>월요일</td>
                  <td>08:00 ~ 23:59</td>
                </tr>
                <tr>
                  <td>금요일</td>
                  <td>08:00 ~ 23:59</td>
                </tr>
              </tbody>
            </table>
            <div className="l-button mt30">
              <button
                type="button"
                className="button full_button link button--primary"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default RsvMain;
