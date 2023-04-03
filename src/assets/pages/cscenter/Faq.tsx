import { useEffect } from "react";
import $ from "jquery";

const Faq = () => {
  useEffect(() => {
    var n = $(".sub .tab_btn > li").length;
    var m = $(".modal .tab_btn > li").length;
    $(".sub .tab_btn > li").css({ width: "calc(100% / " + n + ")" });
    $(".modal .tab_btn > li").css({ width: "calc(100% / " + m + ")" });
  }, []);

  useEffect(() => {
    $("#tab-btn li a").click(function (event) {
      event.preventDefault();
      var selectAtt = $(this).attr("data-category");

      $("#tab-btn li a").removeClass("active_tab");
      $(this).addClass("active_tab");

      $(".all").hide();
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
      <main className="sub" id="FAQ">
        <div className="sub-vis"></div>
        <section className="contents">
          <div className="inner">
            <article className="sub_title Title01 tac">FAQ</article>

            <article className="search-box form flex pa30">
              <span className="mr5" style={{ flex: "2" }}>
                <img
                  className="search_ic"
                  src="/img/icon/search_ic.svg"
                  alt=""
                />
                <input
                  type="text"
                  autoComplete="off"
                  className="search_input mr5"
                  data-test-id="search-input"
                  placeholder="검색"
                />
              </span>
              <button type="button" className="button search_btn">
                <span className="ico">검색</span>
              </button>
            </article>

            <article className="search-box form flex mo_search">
              <span className="mr5" style={{ flex: "2" }}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="search_icon"
                >
                  <path
                    d="M12 11.3724L8.64799 8.02038C9.4535 7.05336 9.85518 5.81301 9.76947 4.55737C9.68376 3.30173 9.11726 2.12747 8.18782 1.27887C7.25838 0.430275 6.03756 -0.0273262 4.77932 0.00126329C3.52108 0.0298528 2.32231 0.542432 1.43237 1.43237C0.542432 2.32231 0.0298528 3.52108 0.00126329 4.77932C-0.0273262 6.03756 0.430275 7.25838 1.27887 8.18782C2.12747 9.11726 3.30173 9.68376 4.55737 9.76947C5.81301 9.85518 7.05336 9.4535 8.02038 8.64799L11.3724 12L12 11.3724ZM0.903585 4.89829C0.903585 4.10822 1.13787 3.33588 1.57682 2.67895C2.01576 2.02203 2.63965 1.51001 3.36959 1.20766C4.09952 0.905315 4.90273 0.826206 5.67762 0.980343C6.45252 1.13448 7.16431 1.51494 7.72298 2.07361C8.28165 2.63228 8.66211 3.34407 8.81625 4.11897C8.97038 4.89386 8.89128 5.69707 8.58893 6.427C8.28658 7.15694 7.77456 7.78083 7.11764 8.21977C6.46071 8.65872 5.68837 8.893 4.89829 8.893C3.83919 8.89183 2.82381 8.47058 2.07491 7.72168C1.32601 6.97278 0.90476 5.9574 0.903585 4.89829Z"
                    fill="#A8ABAE"
                  />
                </svg>
                <input
                  type="text"
                  autoComplete="off"
                  className="search_input mr5"
                  data-test-id="search-input"
                  placeholder="검색"
                />
                <svg
                  width="11"
                  height="14"
                  viewBox="0 0 11 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="refresh_icon"
                >
                  <path
                    d="M6.9987 7.66675L4.33203 10.3334L6.9987 13.0001"
                    stroke="#808386"
                  />
                  <path
                    d="M1.62391 8C1.0952 7.08424 0.893171 6.01608 1.05092 4.97048C1.20867 3.92489 1.71684 2.96387 2.49219 2.24486C3.26754 1.52585 4.2641 1.09148 5.3186 1.0129C6.3731 0.934327 7.42302 1.21621 8.29637 1.81237C9.16972 2.40854 9.81471 3.28363 10.1257 4.29429C10.4366 5.30496 10.3951 6.39127 10.008 7.37528C9.62084 8.35928 8.91098 9.18262 7.9947 9.71043C7.07842 10.2382 6.01005 10.4392 4.96462 10.2804"
                    stroke="#808386"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </article>

            <article>
              <ul id="tab-btn" className="tab_btn pb5">
                <li>
                  <a className="active_tab" href="#" data-category="all">
                    전체
                  </a>
                </li>
                <li>
                  <a href="#" data-category="rsv">
                    예약
                  </a>
                </li>
                <li>
                  <a href="#" data-category="vehicle">
                    보유차량
                  </a>
                </li>
                <li>
                  <a href="#" data-category="use">
                    이용방법
                  </a>
                </li>
                <li>
                  <a href="#" data-category="europe">
                    유럽
                  </a>
                </li>
                <li>
                  <a href="#" data-category="etc">
                    기타
                  </a>
                </li>
                <li>
                  <a href="#" data-category="terms">
                    이용조건
                  </a>
                </li>
                <li>
                  <a href="#" data-category="laws">
                    교통법규
                  </a>
                </li>
              </ul>

              {/* <!-- FAQ list S --> */}
              <div className="board-box mt10">
                <div className="box_cont open drop rsv all">
                  <div
                    className="cont_title pa20 arrow toggle_btn toggle active toggle_tit"
                    onClick={toggleHandle}
                  >
                    <span className="primary mr5">Q .</span>예약 관련 문의
                  </div>
                  <div className="cont_info view pa20 hidden toggle_cont">
                    <p className="primary mb10">
                      현지에서 계약서 작성 시 고객님께서 추가/변경하는 부분이
                      없다면, 예약 확정서 상의 최종 예상 요금 이외에 별도의
                      비용이 발생하지 않습니다. 서명된 부분에 대해서는 추후
                      환불이 불가하오니금액 추가를 원치 않는 경우, 렌탈 계약서
                      상 포함된 항목이 없는지 꼼꼼히 확인하신 후
                      서명해주시길바랍니다.{" "}
                    </p>
                  </div>
                </div>

                <div className="box_cont open drop vehicle all">
                  <div
                    className="cont_title pa20 arrow toggle_btn toggle active toggle_tit2"
                    onClick={toggleHandle2}
                  >
                    <span className="primary mr5">Q .</span>보유차량 관련 문의
                  </div>
                  <div className="cont_info view pa20 hidden toggle_cont2">
                    <p className="primary mb10">FAQ 내용</p>
                  </div>
                </div>

                <div className="box_cont open drop use all">
                  <div
                    className="cont_title pa20 arrow toggle_btn toggle active toggle_tit3"
                    onClick={toggleHandle3}
                  >
                    <span className="primary mr5">Q .</span>이용방법 관련 문의
                  </div>
                  <div className="cont_info view pa20 hidden toggle_cont3">
                    <p className="primary mb10">FAQ 내용</p>
                  </div>
                </div>

                <div className="box_cont open drop europe all">
                  <div
                    className="cont_title pa20 arrow toggle_btn toggle active toggle_tit4"
                    onClick={toggleHandle4}
                  >
                    <span className="primary mr5">Q .</span>유럽 관련 문의
                  </div>
                  <div className="cont_info view pa20 hidden toggle_cont4">
                    <p className="primary mb10">FAQ 내용</p>
                  </div>
                </div>

                <div className="box_cont open drop etc all">
                  <div
                    className="cont_title pa20 arrow toggle_btn toggle active toggle_tit5"
                    onClick={toggleHandle5}
                  >
                    <span className="primary mr5">Q .</span>기타 관련 문의
                  </div>
                  <div className="cont_info view pa20 hidden toggle_cont5">
                    <p className="primary mb10">FAQ 내용</p>
                  </div>
                </div>

                <div className="box_cont open drop terms all">
                  <div
                    className="cont_title pa20 arrow toggle_btn toggle active toggle_tit6"
                    onClick={toggleHandle6}
                  >
                    <span className="primary mr5">Q .</span>이용조건 관련 문의
                  </div>
                  <div className="cont_info view pa20 hidden toggle_cont6">
                    <p className="primary mb10">FAQ 내용</p>
                  </div>
                </div>

                <div className="box_cont open drop laws all">
                  <div
                    className="cont_title pa20 arrow toggle_btn toggle active toggle_tit7"
                    onClick={toggleHandle7}
                  >
                    <span className="primary mr5">Q .</span>교통법규 관련 문의
                  </div>
                  <div className="cont_info view pa20 hidden toggle_cont7">
                    <p className="primary mb10">FAQ 내용</p>
                  </div>
                </div>
              </div>
              {/* <!-- FAQ list E --> */}

              <div className="pagination">
                <a
                  href="/board/board_list.php?board_id=notice&amp;page=1"
                  className="selected"
                >
                  1
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};
export default Faq;
