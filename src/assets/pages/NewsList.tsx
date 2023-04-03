import { useEffect } from "react";
import $ from "jquery";

const NewsList = () => {
  useEffect(() => {
    // 탭버튼 li수에 맞춰 너비값 변경
    var n = $(".sub .tab_btn > li").length;
    var m = $(".modal .tab_btn > li").length;
    $(".sub .tab_btn > li").css({ width: "calc(100% / " + n + ")" });
    $(".modal .tab_btn > li").css({ width: "calc(100% / " + m + ")" });

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
  }, []);
  function openModal(modalname: any) {
    $("#" + modalname).show();
    $("body").addClass("noneScroll");
  }

  return (
    <>
      <main className="sub news_list" id="news_list">
        <div className="sub-vis"></div>
        <section className="contents">
          <div className="inner">
            <article className="sub_title Title01 tac">뉴스&이벤트</article>

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

            <article className="l-box">
              <div className="l-board-box mt10">
                <ul id="tab-btn" className="tab_btn pb5">
                  <li>
                    <a className="active_tab" href="#" data-category="all">
                      전체
                    </a>
                  </li>
                  <li>
                    <a href="#" data-category="news">
                      뉴스
                    </a>
                  </li>
                  <li>
                    <a href="#" data-category="event">
                      이벤트
                    </a>
                  </li>
                </ul>

                {/* <!-- news list S --> */}
                <div className="board-box mt10">
                  <div className="box_cont open drop news all">
                    <div
                      className="guide_title arrow"
                      onClick={() => openModal("news01")}
                    >
                      <p className="Fs_sm summary">
                        2022-12-15 <span className="new_icon mo_icon">NEW</span>
                      </p>
                      <div className="flex mo_tit">
                        <span className="new_icon">NEW</span>
                        <span className="mr5 fwb">[공지]</span>
                        <span className="title">
                          긴급출동 서비스가 추가된 미국 베이직 플러스 요금제
                          안내(06/30 ~ 이후)
                        </span>
                        <span className="wd_5 file_icon">
                          <img src="/img/icon/flie_icon.png" alt="" />
                          <img
                            src="/img/icon/mo_file_icon.svg"
                            className="mo_icon"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div id="news01" className="modal">
                      <div className="modal-content2">
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                          <div className="board_view">
                            {/* <!-- 제목 컨텐츠 영역 --> */}
                            <div className="board_view_top pb20">
                              <p className="fwb mb5">[공지]</p>
                              <h3 className="tit mb5">
                                긴급출동 서비스가 추가된 미국 베이직 플러스
                                요금제 안내 (06/30 ~ 이후)
                              </h3>
                              <p className="Fs_sm summary">2022-12-15</p>
                            </div>

                            {/* <!-- 게시물 내용 컨텐츠 영역 --> */}
                            <div className="board_view_con">
                              <div className="video-container">
                                <iframe src="https://www.youtube.com/embed/mgBFGwsmdOQ"></iframe>
                              </div>
                              긴급출동 블라블라
                            </div>

                            {/* <!-- 첨부파일 컨텐츠 영역 --> */}
                            <div className="board_view_file">
                              <p className="tit">첨부파일</p>
                              <div className="file_box">
                                <p className="file_each mb10">
                                  <a>첨부파일1.pdf</a>
                                </p>
                                <p className="file_each">
                                  <a>첨부파일2.pdf</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="box_cont open drop news all">
                    <div
                      className="guide_title arrow"
                      onClick={() => openModal("news02")}
                    >
                      <p className="Fs_sm summary">2022-12-15</p>
                      <div className="flex mo_tit">
                        <span className="mr5 fwb">[공지]</span>
                        <span className="title">
                          픽업을 더 빠르게, 미국 Online Check in & Skip the
                          Counter
                        </span>
                      </div>
                    </div>
                    <div id="news02" className="modal">
                      <div className="modal-content2">
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                          <div className="board_view">
                            {/* <!-- 제목 컨텐츠 영역 --> */}
                            <div className="board_view_top pb20">
                              <p className="fwb mb5">[공지]</p>
                              <h3 className="tit mb5">
                                긴급출동 서비스가 추가된 미국 베이직 플러스
                                요금제 안내 (06/30 ~ 이후)
                              </h3>
                              <p className="Fs_sm summary">2022-12-15</p>
                            </div>

                            {/* <!-- 게시물 내용 컨텐츠 영역 --> */}
                            <div className="board_view_con">
                              <div className="video-container">
                                <iframe src="https://www.youtube.com/embed/mgBFGwsmdOQ"></iframe>
                              </div>
                              긴급출동 블라블라
                            </div>

                            {/* <!-- 첨부파일 컨텐츠 영역 --> */}
                            <div className="board_view_file">
                              <p className="tit">첨부파일</p>
                              <div className="file_box"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="box_cont open drop event all">
                    <div
                      className="guide_title arrow"
                      onClick={() => openModal("event01")}
                    >
                      <p className="Fs_sm summary">2022-12-15</p>
                      <div className="flex mo_tit">
                        <span className="mr5 fwb primary">[이벤트]</span>
                        <span className="title">
                          차량 방역을 강화한 알라모렌터카와 함께 안전한
                          여행하세요!
                        </span>
                        <span className="wd_5 file_icon">
                          <img src="/img/icon/flie_icon.png" alt="" />
                          <img
                            src="/img/icon/mo_file_icon.svg"
                            className="mo_icon"
                            alt=""
                          />
                        </span>
                      </div>
                    </div>
                    <div id="event01" className="modal">
                      <div className="modal-content2">
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                          <div className="board_view">
                            {/* <!-- 제목 컨텐츠 영역 --> */}
                            <div className="board_view_top pb20">
                              <p className="fwb mb5">[공지]</p>
                              <h3 className="tit mb5">
                                긴급출동 서비스가 추가된 미국 베이직 플러스
                                요금제 안내 (06/30 ~ 이후)
                              </h3>
                              <p className="Fs_sm summary">2022-12-15</p>
                            </div>

                            {/* <!-- 게시물 내용 컨텐츠 영역 --> */}
                            <div className="board_view_con">
                              <div className="video-container">
                                <iframe src="https://www.youtube.com/embed/mgBFGwsmdOQ"></iframe>
                              </div>
                              긴급출동 블라블라
                            </div>

                            {/* <!-- 첨부파일 컨텐츠 영역 --> */}
                            <div className="board_view_file">
                              <p className="tit">첨부파일</p>
                              <div className="file_box">
                                <p className="file_each mb10">
                                  <a>첨부파일1.pdf</a>
                                </p>
                                <p className="file_each">
                                  <a>첨부파일2.pdf</a>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- board list E --> */}
                <div className="pagination">
                  <a href="#" className="selected">
                    1
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};
export default NewsList;
