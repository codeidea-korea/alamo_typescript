import React from "react";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Outlet,
  useLocation,
  useNavigate,
} from "react-router-dom";

import "../assets/css/app.css";
import $ from "jquery";
import AOS from "aos";
import "aos/dist/aos.css";

const BaseLayout = () => {
  const navigation = useNavigate();
  const url = useLocation().pathname;
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        delay: 0,
        duration: 1000,
        offset: 100,
      });
    }, 400);
  }, []);

  useEffect(() => {
    // top_btn (부드럽게 스크롤)
    $(".top_btn").click("click", function (event) {
      event.preventDefault();
      $("html, body").stop().animate(
        {
          scrollTop: 0,
        },
        300
      );
    });
  }, []);
  useEffect(() => {
    //tab
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

    // 탭버튼 li수에 맞춰 너비값 변경
    var n = $(".sub .tab_btn > li").length;
    var m = $(".modal .tab_btn > li").length;
    $(".sub .tab_btn > li").css({ width: "calc(100% / " + n + ")" });
    $(".modal .tab_btn > li").css({ width: "calc(100% / " + m + ")" });
  }, []);

  const openModal = (modalname: any) => {
    $("#" + modalname).show();
    $("body").addClass("noneScroll");
  };
  useEffect(() => {
    $(".modal .close").click(function () {
      $(".modal").hide();
      $("body").removeClass("noneScroll");
    });
    $(".view").show();
    $(".hidden").hide();
  }, []);

  $(".modal .close_newsletter_com").click(function () {
    $(".modal#newsletter_com").hide();
    $("body").removeClass("noneScroll");
  });

  $(".modal .close_newsletter").click(function () {
    $(".modal#newsletter").hide();
    $("body").removeClass("noneScroll");
  });

  $(".modal .close_membership_modal").click(function () {
    $(".modal#membership_modal").hide();
    $("body").removeClass("noneScroll");
  });

  useEffect(() => {
    // mobile gnb click
    $(document).on("click", ".ham_btn", function () {
      $(this).addClass("active");
      $(".header_mobile").show();
      $(".mobile-menu_gnb").animate(
        {
          right: 0,
        },
        500
      );

      $("html, body").addClass("noneScroll");
      //전체 메뉴 시 컨텐츠 쪽 스크롤 방지
    });

    $(document).on("click", ".ham_btn.active", function () {
      $(".ham_btn").removeClass("active");

      $(".mobile-menu_gnb").animate(
        {
          right: "-100%",
        },
        500
      );
      $(".header_mobile").stop().fadeOut();
      $("html, body").removeClass("noneScroll");
      //전체 메뉴 시 컨텐츠 쪽 스크롤 방지
    });

    $(window).on("scroll", function () {
      var scroll = $(window).scrollTop();
      if (scroll !== undefined) {
        if (scroll >= 50) {
          $("#header").addClass("scroll");
        } else {
          $("#header").removeClass("scroll");
        }
      }
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
  const downloadHandle = () => {
    $(".app_download").hide();
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: {
    target: { checked: boolean | ((prevState: boolean) => boolean) };
  }) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
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

  //토글 에로우
  const [isToggled, setIsToggled] = useState(false);

  const handleToggleClick = () => {
    setIsToggled(!isToggled);
  };

  const [isToggled2, setIsToggled2] = useState(false);

  const handleToggleClick2 = () => {
    setIsToggled2(!isToggled2);
  };

  /* 알림함 토글 */
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
    <React.Fragment>
      <div className="app_download">
        <span onClick={downloadHandle}>
          <img src="./img/icon/x.svg" alt="닫기버튼" />
        </span>
        <img src="/img/logo.png" alt="알라모 로고" />
        <p>
          자유로운 여행을 원한다면!
          <br />
          <b>알라모렌터카!</b>
        </p>
        <button className="button button--primary">앱 다운로드</button>
      </div>
      <header id="header" data-aos="fade-down" data-aos-duration="800">
        <div className="header_head">
          <div className="h_inner">
            {(url === "/join_simple" ||
              url === "/login" ||
              url === "/login_guide" ||
              url === "/login_TP" ||
              url === "/find_login" ||
              url === "/id_send_guide" ||
              url === "/pw_send_guide" ||
              url === "/pw_change" ||
              url === "/join" ||
              url === "/join_com" ||
              url === "/join_TP" ||
              url === "/join_TP_com" ||
              url === "/rsv_main" ||
              url === "/rsv_vihicle" ||
              url === "/rsv_pay_now" ||
              url === "/rsv_pay_local" ||
              url === "/rsv_driver_now" ||
              url === "/rsv_driver_local" ||
              url === "/rsv_com_now" ||
              url === "/rsv_com_local" ||
              url === "/rsv_nodify" ||
              url === "/rsv_nodify_view" ||
              url === "/rsv_nodify_com" ||
              url === "/mypage_simple" ||
              url === "/mypage" ||
              url === "/mypage_TP" ||
              url === "/personal_info_simple" ||
              url === "/personal_info" ||
              url === "/personal_info_TP" ||
              url === "/withdrawal" ||
              url === "/rsv_status" ||
              url === "/pickup_scheduled" ||
              url === "/coupon" ||
              url === "/inquiry_list" ||
              url === "/inquiry_regist" ||
              url === "/nm_inquiry_regist" ||
              url === "/car_info" ||
              url === "/membership" ||
              url === "/news_list" ||
              url === "/faq" ||
              url === "/user_guide" ||
              url === "/nm_rsv" ||
              url === "/setting" ||
              url === "/company") && (
              <>
                <a onClick={() => history.back()} className="back_button">
                  <img src="/img/icon/back_arrow.svg" alt="뒤로가기 버튼" />
                </a>
              </>
            )}

            <h1 className="header_logo">
              <a href="/">
                <img src="/img/logo.png" alt="알라모 로고" />
              </a>
            </h1>
            <nav className="header_gnb">
              <ul>
                <li onClick={() => navigation("/rsv_main")}>차량예약</li>
                <li onClick={() => openModal("point-search")}>지점정보</li>
                <li onClick={() => navigation("/car_info")}>보유차량</li>
                <li onClick={() => navigation("/news_list")}>뉴스&이벤트</li>
                <li>
                  고객센터
                  <ul className="two_depth depth_wrap dw6">
                    <li onClick={() => navigation("/inquiry_list")}>
                      1:1 문의
                    </li>
                    <li onClick={() => navigation("/faq")}>FAQ</li>
                    <li onClick={() => navigation("/user_guide")}>
                      이용가이드
                    </li>
                    <li onClick={() => openModal("newsletter")}>
                      뉴스레터 신청
                    </li>
                    <li onClick={() => openModal("emergency_contact")}>
                      현지 긴급 연락처
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className="header_side">
              <ul className="right-pc">
                <li
                  className="right-pc_btn"
                  onClick={() => navigation("/login")}
                >
                  회원로그인
                </li>
                <li
                  className="right-pc_btn btn-travelpt"
                  onClick={() => navigation("/login_TP")}
                >
                  Travel Partner
                </li>
                {/* <li>
								<b>홍길동님 </b>
								<a href="/pickup_scheduled">
									픽업예정 <span className="primary">1</span>
								</a>
								<a href="#?" className="ml5" onClick={() => openModal("confirm")}>
									<img src="./img/icon/Log_out.png" alt="" style={{width: "24px"}} />
								</a>
							</li> */}
                {/* <li>
								<b>투어코리아여행사 </b>
								홍길동님
								<a href="/pickup_scheduled">
									픽업예정 <span className="primary">1</span>
								</a>
								<a href="#?" className="ml5" onClick={() => openModal("confirm")}>
									<img src="./img/icon/Log_out.png" alt="" style={{width: "24px"}} />
								</a>
							</li> */}
              </ul>
              <div className="right-mo">
                {url !== "/join_simple" &&
                  url !== "/login" &&
                  url !== "/login_guide" &&
                  url !== "/login_TP" &&
                  url !== "/find_login" &&
                  url !== "/id_send_guide" &&
                  url !== "/pw_send_guide" &&
                  url !== "/pw_change" &&
                  url !== "/join" &&
                  url !== "/join_com" &&
                  url !== "/join_TP" &&
                  url !== "/join_TP_com" &&
                  url !== "/rsv_main" &&
                  url !== "/rsv_vihicle" &&
                  url !== "/rsv_pay_now" &&
                  url !== "/rsv_pay_local" &&
                  url !== "/rsv_driver_now" &&
                  url !== "/rsv_driver_local" &&
                  url !== "/rsv_com_now" &&
                  url !== "/rsv_com_local" &&
                  url !== "/rsv_nodify" &&
                  url !== "/rsv_nodify_view" &&
                  url !== "/rsv_nodify_com" &&
                  url !== "/mypage_simple" &&
                  url !== "/mypage" &&
                  url !== "/mypage_TP" &&
                  url !== "/personal_info_simple" &&
                  url !== "/personal_info" &&
                  url !== "/personal_info_TP" &&
                  url !== "/withdrawal" &&
                  url !== "/rsv_status" &&
                  url !== "/pickup_scheduled" &&
                  url !== "/coupon" &&
                  url !== "/inquiry_list" &&
                  url !== "/inquiry_regist" &&
                  url !== "/nm_inquiry_regist" &&
                  url !== "/car_info" &&
                  url !== "/membership" &&
                  url !== "/news_list" &&
                  url !== "/faq" &&
                  url !== "/user_guide" &&
                  url !== "/nm_rsv" &&
                  url !== "/setting" &&
                  url !== "/company" && (
                    <>
                      <a className="img search" href="/rsv_main"></a>
                    </>
                  )}
                <div className="img ham_btn"></div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 모바일 메뉴 --> */}
        <div className="header_mobile">
          <div className="mobile-menu_wrap">
            <div className="mobile-menu_top">
              <div className="set ico">
                <a href="/setting">
                  <img src="/img/icon/setting.png" alt="" />
                </a>
                <a className="img search02" href="/rsv_main"></a>
              </div>

              <a href="/login" className="login-btn fwb tac mt10 w-full">
                회원 로그인
              </a>
              <ul className="sns-box mt10 flex">
                <li className="ico mr5">
                  <img src="/img/icon/naver.svg" alt="네이버" />
                </li>
                <li className="ico mr5">
                  <img src="/img/icon/kakao.svg" alt="카카오" />
                </li>
                <li className="ico">
                  <img src="/img/icon/google.svg" alt="구글" />
                </li>
              </ul>
              {/* 회원로그인 시 */}
              {/* <div className="mobile_top_info mt10">
                <div>
                  <a href="/personal_info">
                    <b className="name">홍길동님</b>
                    <span className="Fs_sm ml10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="6px"
                        height="12px"
                        viewBox="0 0 50 80"
                      >
                        <polyline
                          fill="none"
                          stroke="#fff"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points="
				0.375,0.375 45.63,38.087 0.375,75.8 "
                        ></polyline>
                      </svg>
                    </span>
                  </a>
                </div>
                <div className="flex">
                  <p>
                    <a href="/pickup_scheduled">
                      픽업예정 <span className="summary">1건</span>
                    </a>
                  </p>
                  <p>
                    <a href="/inquiry_list">
                      1:1문의(답변대기) <span className="summary">1건</span>
                    </a>
                  </p>
                </div>
              </div> */}
            </div>
            <div className="overflow_box">
              <ul className="mobile-menu_ico pa15 flex">
                <li className="cursor tac ico line">
                  <a href="/rsv_status">
                    <img src="/img/icon/Check_File.svg" alt="예약확인" />
                    <p className="mt5">예약확인</p>
                  </a>
                </li>
                <li className="cursor tac ico line">
                  <a href="/rsv_main">
                    <img src="/img/icon/Calendar_Plus.svg" alt="예약하기" />
                    <p className="mt5">예약하기</p>
                  </a>
                </li>
                <li className="cursor tac ico">
                  <a href="/news_list">
                    <img src="/img/icon/Megaphone.svg" alt="뉴스&이벤트" />
                    <p className="mt5">뉴스&이벤트</p>
                  </a>
                </li>
              </ul>
              <nav className="mobile-menu_gnb">
                <ul>
                  <li
                    className="arrow"
                    onClick={() => openModal("point-search")}
                  >
                    지점정보
                  </li>
                  <li className="arrow">
                    <a href="/car_info">보유차량</a>
                  </li>
                  <li className="arrow">
                    <a href="/user_guide">이용가이드</a>
                  </li>
                  <li className="arrow">
                    <a href="/news_list">뉴스&이벤트</a>
                  </li>
                  <li className="arrow">
                    <a href="/faq">FAQ</a>
                  </li>
                  <li className="arrow">
                    <a href="/inquiry_list">1:1 문의</a>
                  </li>
                  <li className="arrow" onClick={() => openModal("newsletter")}>
                    뉴스레터 구독신청
                  </li>
                  <li className="arrow"
                  onClick={() => openModal("membership_modal")}
                  >멤버십 안내</li>
                  <li
                    className="arrow"
                    onClick={() => openModal("emergency_contact")}
                  >
                    현지 긴급 연락처
                  </li>
                </ul>
              </nav>
              <ul className="mobile-menu_bottom summary flex jc-ct">
                <li className="Fs_sm tac">
                  <a href="/company">알라모 소개</a>
                </li>
                <li className="Fs_sm tac">이용약관</li>
                <li className="Fs_sm tac">개인정보 취급방침</li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="modal_wrap">
        {/* <!-- 뉴스레터 구독 --> */}
        <div id="newsletter" className="modal">
          <div className="modal-content2">
            <div className="modal-title Title03">뉴스레터 구독신청</div>
            <span className="close fwb">&times;</span>
            <div className="cont_info">
              <form className="cmxform" id="sign-form2" method="get" action="">
                <fieldset>
                  <div className="form_input">
                    <label htmlFor="name_ko">한글이름</label>
                    <input
                      type="text"
                      placeholder="한글 이름을 입력해 주세요."
                      autoComplete="off"
                    />
                  </div>

                  <div className="form_input mt20">
                    <label htmlFor="email">이메일</label>
                    <input
                      type="email"
                      placeholder="abc@gmail.com "
                      id="email"
                      name="email"
                      autoComplete="off"
                    />
                  </div>
                </fieldset>
                <p className="summary mt20">
                  알라모에서 제공하는 뉴스레터를 통해 알찬 정보와
                  <br className="mo_br" /> 다양한 혜택을 누려 보세요.
                </p>
                <div className="l-button flex jc-ct mt30">
                  <button
                    type="button"
                    className="button link button--cancle mr10 close_newsletter"
                  >
                    취소
                  </button>
                  <button
                    type="button"
                    className="button link button--disabled mr10"
                  >
                    신청하기
                  </button>
                  <button
                    type="button"
                    className="button link button--primary"
                    onClick={() => openModal("newsletter_com")}
                  >
                    신청하기
                    <br />
                    (모두 입력 시)
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* <!-- 뉴스레터 구독 완료 --> */}
        <div id="newsletter_com" className="modal modal2">
          <div className="modal-content2">
            <div className="modal-title Title03">뉴스레터 구독신청 완료</div>
            <span className="close fwb">&times;</span>
            <div className="cont_info tac">
              <div className="join_com-img tac ico">
                <img src="/img/page/join_sample.png" alt="회원이미지" />
              </div>
              <div className="Title03">
                뉴스레터 구독신청이 완료 되었습니다.
              </div>
              <div className="mt10 summary">
                즐거운 소식 전하도록 노력하겠습니다.
              </div>
              <div className="l-button flex jc-ct mt30">
                <button
                  type="button"
                  className="button link button--primary close_newsletter_com"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>

        <div id="membership_modal" className="modal">
          <div className="modal-content2">
            <div className="modal-title Title03">멤버십 안내</div>
            <span className="close fwb">&times;</span>
            <div className="cont_info tac">
              <div className="Title03 text-left">
                멤버십 안내입니다.
              </div>
              <div className="mt10 summary text-left">
                멤버십 안내 내용입니다
              </div>
              <div className="l-button flex jc-ct mt30">
                <button
                  type="button"
                  className="button link button--primary close_membership_modal"
                >
                  확인
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- 현지긴급 연락처 --> */}
        <div id="emergency_contact" className="modal">
          <div className="modal-content2">
            <div className="modal-title Title03">현지긴급 연락처</div>
            <span className="close fwb">&times;</span>
            <div className="cont_info">
              <div className="box_ers">
                <p>
                  로드 사이드 서비스 전화번호
                  <br />
                  미국 1-800-803-4444 / 캐나다 1-800-407-4411
                  <br />
                  <br />
                  현지에서 발생되는 사고에 대해 고객 상담실로 문의 가능합니다.
                  <br />
                  전화 연결 후 코리안 스피커(Korean Speaker)를 찾으시면 <br />
                  한국어 통역 서비스를 요청하실 수 있습니다.
                  <br />
                  <br />
                  상기 번호는 별도의 안내 없이 변경 될 수 있으며,
                  <br />
                  계약 시 부여 받으신 Rental Jacket 에 기재 된 번호를 <br />
                  다시 한번 확인 해 주시기 바랍니다.
                </p>
              </div>
              <div className="box_ers mt20">
                <button
                  type="button"
                  className="button full_button button--primary"
                  /*onclick="location.href='tel:+18008034444'"*/
                >
                  미국 : 1-800-803-4444
                </button>
              </div>
            </div>
          </div>
        </div>


        <div id="confirm" className="modal">
          <div className="modal-content">
            <span className="close fwb">&times;</span>
            <p>로그아웃하시겠습니까?</p>
            <button
              type="button"
              className="full_button button button--primary mt30"
              onClick={() => navigation("/")}
            >
              확인
            </button>
          </div>
        </div>

        {/* 알람 */}
        <div id="alarm" className="modal">
          <div className="modal-content2">
            <div className="modal-title Title03">알림함</div>
            <span className="close fwb">&times;</span>
            <div className="cont_info">
            <div className="board-box">
                <div className="box_cont open">
                  <ul className="cont_title toggle_btn toggle active toggle_tit" onClick={toggleHandle}>
                    <li className="Fs_sm summary">2022-09-11</li>
                    <li>
                      <span>안녕하세요 업그레이드 쿠폰이 발행되었습니다testtesttesttesttest.</span>
                      <span className="wd_5 file_icon">
                        <img src="/img/icon/mo_file_icon.svg" className="mo_icon" alt=""/>
                      </span>
                    </li>
                  </ul>
                  <div className="cont_info view pa20 hidden toggle_cont mb10">
                    <p className="primary mb10">알림함 내용</p>
                  </div>
                </div>

                <div className="box_cont open">
                  <ul className="cont_title toggle_btn toggle active toggle_tit2" onClick={toggleHandle2}>
                    <li className="Fs_sm summary">2022-09-11</li>
                    <li><span>안녕하세요 업그레이드 쿠폰이 발행되었습니다.</span></li>
                  </ul>
                  <div className="cont_info view pa20 hidden toggle_cont2 mab10">
                    <p className="primary mb10">알림함 내용</p>
                  </div>
                </div>

                <div className="box_cont open">
                  <ul className="cont_title toggle_btn toggle active toggle_tit3" onClick={toggleHandle3}>
                    <li className="Fs_sm summary">2022-09-11</li>
                    <li><span>안녕하세요 업그레이드 쿠폰이 발행되었습니다.</span></li>
                  </ul>
                  <div className="cont_info view pa20 hidden toggle_cont3 mb10">
                    <p className="primary mb10">알림함 내용</p>
                  </div>
                </div>

                <div className="box_cont open">
                  <ul className="cont_title toggle_btn toggle active toggle_tit4" onClick={toggleHandle4}>
                    <li className="Fs_sm summary">2022-09-11</li>
                    <li><span>안녕하세요 업그레이드 쿠폰이 발행되었습니다.</span>
                      <span className="wd_5 file_icon">
                        <img src="/img/icon/mo_file_icon.svg" className="mo_icon" alt=""/></span>
                    </li>
                  </ul>
                  <div className="cont_info view pa20 hidden toggle_cont4 mb10">
                    <p className="primary mb10">알림함 내용</p>
                  </div>
                </div>


                <div className="box_cont open">
                  <ul className="cont_title toggle_btn toggle active toggle_tit5" onClick={toggleHandle5}>
                    <li className="Fs_sm summary">2022-09-11</li>
                    <li><span>안녕하세요 업그레이드 쿠폰이 발행되었습니다.</span></li>
                  </ul>
                  <div className="cont_info view pa20 hidden toggle_cont5 mb10">
                    <p className="primary mb10">알림함 내용</p>
                  </div>
                </div>


                <div className="box_cont open">
                  <ul className="cont_title toggle_btn toggle active toggle_tit6" onClick={toggleHandle6}>
                    <li className="Fs_sm summary">2022-09-11</li>
                    <li>
                      <span>안녕하세요 업그레이드 쿠폰이 발행되었습니다.</span>
                      <span className="wd_5 file_icon">
                        <img src="/img/icon/mo_file_icon.svg" className="mo_icon" alt=""/>
                      </span>
                    </li>
                  </ul>
                  <div className="cont_info view pa20 hidden toggle_cont6 mb10">
                    <p className="primary mb10">알림함 내용</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* <!-- 단계별 검색 / 지점정보 modal --> */}
        <div id="point-search" className="modal">
          <div className="modal-content2">
            <div className="modal-title Title03">지점정보</div>
            <span className="close fwb">&times;</span>
            <div className="cont_info">
              <ul className="tab_btn flex">
                <li className="tab_item active pa10 fwb class_tab">
                  직접 입력 검색
                </li>
                <li className="tab_item pa10 fwb class_tab">
                  국가/주/도시/지점 선택
                </li>
              </ul>

              <div className="tab_inner active mt30">
                <div className="box_title mb10">
                  직접 입력 검색
                  <div className="clar">
                    <span className="line Fs_sm">즐겨찾기</span>
                    <span className="Fs_sm">최근검색</span>
                  </div>
                </div>
                <div className="flex search">
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
                    placeholder="영문/한글 도시 이름"
                  />
                  <a href="#?" className="reload_ic">
                    <img src="/img/icon/reload_ic.svg" alt="" />
                  </a>
                </div>
                {/* <!-- 지점 리스트 S --> */}
                <ul className="point_detail">
                  <li
                    className={`guide_title arrow toggle_btn arrow_custom pa20 flex ai-ct ${
                      isToggled ? "toggle" : ""
                    }`}
                  >
                    <div className="mr20 starcheck">
                      <input type="checkbox" id="star_check01" />
                      <label
                        htmlFor="star_check01"
                        className="star_check_bg"
                      ></label>
                    </div>
                    <div
                      onClick={() => {
                        handleToggleClick();
                        handleToggle();
                      }}
                      className="w-full"
                    >
                      말라가 공항 - (스페인)
                      <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                    </div>
                  </li>
                  <li className="cont_info view hidden pa30 toggle_cont">
                    <div className="mb10 flex items-center">
                      <div>지점 상세정보</div>
                      <img
                        className="export_ic ml-auto"
                        src="./img/icon/export_ic.svg"
                        alt=""
                      />
                    </div>
                    <div className="detail">
                      <div className="title Fs_sm summary border-bottom pb5">
                        지점 주소
                      </div>
                      <div className="adress ico">
                        <img src="/img/icon/Local.svg" alt="지점주소" />{" "}
                        ENTERPRISE-RENT-A-CAR MALAGA MA 29004 ES
                      </div>
                      <div className="call ico">
                        <img src="/img/icon/Call.svg" alt="전화번호" /> 962-3134
                      </div>
                    </div>
                    <div className="detail mt20">
                      <div className="title Fs_sm summary border-bottom pb5">
                        영업시간
                      </div>
                      <table className="table02 mb10">
                        <thead>
                          <tr>
                            <th>요일</th>
                            <th>영업시간</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>월</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>화</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>수</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>목</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>금</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>토</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>일</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="detail mt20">
                      <div className="title Fs_sm summary  border-bottom pb5">
                        찾아가기
                      </div>
                      <div>
                        Our office is located OFFSITE outside the terminal. Once
                        you have picked up your baggage please follow the exit
                        signs and exit the terminal building. minutes away.
                      </div>
                    </div>
                    <div className="detail mt20">
                      <div className="title Fs_sm summary  border-bottom pb5">
                        위치보기
                      </div>
                      <div id="map_container"></div>
                      <div id="map"></div>
                    </div>
                    <div className="l-button mt30">
                      <button
                        type="button"
                        className="button full_button button--primary"
                      >
                        바로 예약하기
                      </button>
                    </div>
                  </li>
                </ul>

                <ul className="point_detail">
                  <li
                    className={`guide_title arrow toggle_btn arrow_custom pa20 flex ai-ct ${
                      isToggled2 ? "toggle" : ""
                    }`}
                  >
                    <div className="mr20 starcheck">
                      <input type="checkbox" id="star_check02" />
                      <label
                        htmlFor="star_check02"
                        className="star_check_bg"
                      ></label>
                    </div>
                    <div
                      onClick={() => {
                        handleToggleClick2();
                        handleToggle2();
                      }}
                      className="w-full"
                    >
                      말라가 공항 - (스페인)
                      <p className="Fs_sm summary">(MALAGA AIRPORT OFF SITE)</p>
                    </div>
                  </li>
                  <li className="cont_info view hidden pa30 toggle_cont2">
                    <div className="mb10 flex items-center">
                      <div>지점 상세정보</div>
                      <img
                        className="export_ic ml-auto"
                        src="./img/icon/export_ic.svg"
                        alt=""
                      />
                    </div>
                    <div className="detail">
                      <div className="title Fs_sm summary border-bottom pb5">
                        지점 주소
                      </div>
                      <div className="adress ico">
                        <img src="/img/icon/Local.svg" alt="지점주소" />{" "}
                        enterprse-rent-a-car malaga ma 29004 es
                      </div>
                      <div className="call ico">
                        <img src="/img/icon/Call.svg" alt="전화번호" /> 962-3134
                      </div>
                    </div>
                    <div className="detail mt20">
                      <div className="title Fs_sm summary border-bottom pb5">
                        영업시간
                      </div>
                      <table className="table02 mb10">
                        <thead>
                          <tr>
                            <th>요일</th>
                            <th>영업시간</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>월</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>화</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>수</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>목</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>금</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>토</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                          <tr>
                            <td>일</td>
                            <td>08:00 ~ 23:59</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="detail mt20">
                      <div className="title Fs_sm summary  border-bottom pb5">
                        찾아가기
                      </div>
                      <div>
                        Our office is located OFFSITE outside the terminal. Once
                        you have picked up your baggage please follow the exit
                        signs and exit the terminal building. minutes away.
                      </div>
                    </div>
                    <div className="detail mt20">
                      <div className="title Fs_sm summary  border-bottom pb5">
                        위치보기
                      </div>
                      <div id="map_container"></div>
                      <div id="map"></div>
                    </div>
                    <div className="l-button mt30">
                      <button
                        type="button"
                        className="button full_button button--primary"
                      >
                        바로 예약하기
                      </button>
                    </div>
                  </li>
                </ul>
                {/* <!-- 지점 리스트 E --> */}
                <button
                  type="button"
                  className="button full_button button--primary mt30"
                >
                  선택지점 예약하기
                </button>
              </div>

              <div className="tab_inner mt30">
                <div className="box_title mb10">
                  국가/주/도시/지점 선택
                  <div className="clar">
                    <span className="line Fs_sm">즐겨찾기</span>
                    <span className="Fs_sm">최근검색</span>
                  </div>
                </div>
                <ul className="l-box">
                  <li className="box_cont open drop">
                    <div className="cont_title">
                      <span>국가/지역</span>
                      <span className="Fs_sm summary">
                        (Main Country / Region)
                      </span>
                      <br />
                      <select name="" id="" className="mt10">
                        <option value="">선택하세요</option>
                      </select>
                    </div>
                  </li>
                  <li className="box_cont open drop ">
                    <div className="cont_title">
                      <span>주/지방</span>
                      <span className="Fs_sm summary">(State / Territory)</span>
                      <br />
                      <select name="" id="" className="mt10">
                        <option value="">선택하세요</option>
                      </select>
                    </div>
                  </li>
                  <li className="box_cont open drop ">
                    <div className="cont_title">
                      <span>도시</span>
                      <span className="Fs_sm summary">(City)</span>
                      <br />
                      <select name="" id="" className="mt10">
                        <option value="">선택하세요</option>
                      </select>
                    </div>
                  </li>
                  <li className="box_cont open drop ">
                    <div className="cont_title">
                      <span>지점명</span>
                      <span className="Fs_sm summary">(Location Name)</span>
                      <br />
                      <select name="" id="" className="mt10">
                        <option value="">선택하세요</option>
                      </select>
                    </div>
                  </li>
                  <li className="box_cont open drop">
                    <div
                      className="guide_title toggle_btn p20"
                      onClick={() => {
                        handleToggleClick();
                        handleToggle3();
                      }}
                    >
                      <span>지점명</span>
                      <span className="Fs_sm summary">(Location Name)</span>
                      <br />
                      <span className="mt10" style={{ display: "block" }}>
                        힐튼 헤드 아일랜드 공항 HILTON HEAD ISLAND ARPT
                      </span>
                      <span className="Fs_sm summary">
                        HILTON HEAD ISLAND ARPT
                      </span>
                      <br />
                      <div className="flex justy-center mt5 toggle_btn">
                        지점 상세 보기{" "}
                        <div
                          className={`detail_guide toggle_btn ${
                            isToggled ? "toggle" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                    <div className="cont_info view hidden toggle_cont3">
                      <div className="mb10 flex items-center">
                        <div>지점 상세정보</div>
                        <img
                          className="export_ic ml-auto"
                          src="./img/icon/export_ic.svg"
                          alt=""
                        />
                      </div>
                      <div className="detail">
                        <div className="title Fs_sm summary border-bottom pb5">
                          지점 주소
                        </div>
                        <div className="adress ico">
                          <img src="/img/icon/Local.svg" alt="지점주소" />{" "}
                          enterprse-rent-a-car malaga ma 29004 es
                        </div>
                        <div className="call ico">
                          <img src="/img/icon/Call.svg" alt="전화번호" />{" "}
                          962-3134
                        </div>
                      </div>
                      <div className="detail mt20">
                        <div className="title Fs_sm summary border-bottom pb5">
                          영업시간
                        </div>
                        <table className="table02 mb10">
                          <thead>
                            <tr>
                              <th>요일</th>
                              <th>영업시간</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>월</td>
                              <td>08:00 ~ 23:59</td>
                            </tr>
                            <tr>
                              <td>화</td>
                              <td>08:00 ~ 23:59</td>
                            </tr>
                            <tr>
                              <td>수</td>
                              <td>08:00 ~ 23:59</td>
                            </tr>
                            <tr>
                              <td>목</td>
                              <td>08:00 ~ 23:59</td>
                            </tr>
                            <tr>
                              <td>금</td>
                              <td>08:00 ~ 23:59</td>
                            </tr>
                            <tr>
                              <td>토</td>
                              <td>08:00 ~ 23:59</td>
                            </tr>
                            <tr>
                              <td>일</td>
                              <td>08:00 ~ 23:59</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="detail mt20">
                        <div className="title Fs_sm summary  border-bottom pb5">
                          찾아가기
                        </div>
                        <div>
                          Our office is located OFFSITE outside the terminal.
                          Once you have picked up your baggage please follow the
                          exit signs and exit the terminal building. minutes
                          away.
                        </div>
                      </div>
                      <div className="detail mt20">
                        <div className="title Fs_sm summary  border-bottom pb5">
                          위치보기
                        </div>
                        <div id="map_container"></div>
                        <div id="map"></div>
                      </div>
                      <div className="l-button mt30">
                        <button
                          type="button"
                          className="button full_button button--primary"
                        >
                          바로 예약하기
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
                {/* <button
                  type="button"
                  className="button full_button button--disabled mt30"
                >
                  선택지점 예약하기
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet />

      <footer className="footer">
        <div className="inner">
          <div className="top_btn cursor"></div>
          <div className="footer_info Fs_sm ">
            <p className="company Body mb20">
              알라모렌터카 한국총판 (주)투어마케팅 코리아
            </p>
            <p className="mb5">
              <span>주소</span>(110-794) 서울특별시 종로구 인사동5길 25 하나로
              빌딩 701호
            </p>
            <ul className="mb5">
              <li>
                <span>사업자등록번호</span>101-86-05016
              </li>
              <li>
                <span>통신판매업신고번호</span>제2011-서울종로-1316호
              </li>
              <li>
                <span>관광사업자 등록번호</span>제 26002-2004-34호
              </li>
            </ul>
            <ul>
              <li>
                <span>대표자명</span>이재명
              </li>
              <li>
                <span>개인정보관리 책임자</span>김거용
              </li>
              <li>
                <span>TEL</span>02-739-3110
              </li>
              <li>
                <span>FAX</span>02-734-0328
              </li>
            </ul>
            <div className="copy mt20">
              COPYRIGHT ⓒ 1988~ ALAMO RENT A CAR GENERAL SALES AGENCY ALL RIGHTS
              RESERVED
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default BaseLayout;
