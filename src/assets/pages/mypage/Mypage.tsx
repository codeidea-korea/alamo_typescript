import { useEffect, useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const navigation = useNavigate();
  useEffect(() => {
    $(".modal .close").click(function () {
      $(".modal").hide();
      $("body").removeClass("noneScroll");
    });

    $(".view").show();
    $(".hidden").hide();
  }, []);
  function openModal(modalname: any) {
    $("#" + modalname).show();
    $("body").addClass("noneScroll");
  }
  const toggleHandle = () => {
    $(".toggle_cont").toggle();
  };
  const toggleHandle2 = () => {
    $(".toggle_cont2").toggle();
  };
  const toggleHandle3 = () => {
    $(".toggle_cont3").toggle();
  };
  const toggleHandle4 = () => {
    $(".toggle_cont4").toggle();
  };
  const toggleHandle5 = () => {
    $(".toggle_cont5").toggle();
  };

  

   //토글 에로우
   const [active, setActive] = useState(false);

   const handleClick = () => {
     setActive(!active);
   };
   const [active2, setActive2] = useState(false);

   const handleClick2 = () => {
     setActive2(!active2);
   };
   const [active3, setActive3] = useState(false);

   const handleClick3 = () => {
     setActive3(!active3);
   };
   const [active4, setActive4] = useState(false);

   const handleClick4 = () => {
    setActive4(!active4);
  };
 
   

  return (
    <>
      <main className="sub mypage">
        <div className="sub-vis"></div>
        <section className="contents">
          <div className="inner">
            {/* <!-- sub title --> */}
            <article className="sub_title Title01">
              마이페이지
              <div className="mypage-title_ico">
                <div
                  className="ico logout"
                  onClick={() => openModal("confirm")}
                ></div>
                 <div className="ico alarm" onClick={() => openModal("alarm")}></div>
                <div className="ico set" onClick={() => navigation("/setting")}></div>
              </div>
            </article>

            <article className="l-mypage">
              <div className="mypage_top">
                <div className="mypage_top-left box_cont">
                  <div className="top-left_info">
                    <div className="name Title02">
                      <span>홍길동님</span>
                      <button type="button" className="button myinfo step ml10">
                        <span
                          className="Fs_sm"
                          onClick={() => navigation("/personal_info")}
                        >
                          나의정보
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="3.5px"
                            height="7x"
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
                      </button>
                    </div>
                    <div className="id Fs_sm">abcd</div>
                  </div>
                  <button className="button top-left_btn tac Fs_sm">
                    픽업예정
                    <span className="fwb ml5 Title03">
                      100건
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="5px"
                        height="10px"
                        viewBox="0 0 50 80"
                      >
                        <polyline
                          fill="none"
                          stroke="#333"
                          strokeWidth="6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          points="
              0.375,0.375 45.63,38.087 0.375,75.8 "
                        ></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="mypage_top-right box_cont">
                  <ul className="top-right_ico">
                    <li className="cursor tac line ico"  onClick={() => navigation("/rsv_status")}>
                        <img src="/img/icon/Check_File.svg" alt="예약확인" />
                        <p>예약확인</p>
                    </li>
                    <li className="cursor tac line ico" onClick={() => navigation("/rsv_main")}>
                        <img src="/img/icon/Calendar_Plus.svg" alt="예약하기" />
                        <p>예약하기</p>
                    </li>
                    <li className="cursor tac ico" onClick={() => navigation("/news_list")} >
                    <img src="/img/icon/Megaphone.svg" alt="뉴스&이벤트" />
                    <p>뉴스&이벤트</p>
                    </li>
                  </ul>
                </div>
              </div>

              <nav className="mypage_gnb mt30">
                <ul>
                  <li>
                    <a
                      className="arrow"
                      href="#"
                      onClick={() => openModal("point-search")}
                    >
                      지점정보
                    </a>
                  </li>
                  <li>
                    <a className="arrow" href="/car_info">
                      보유차량
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a className="arrow" href="/user_guide">
                      이용가이드
                    </a>
                  </li>
                  <li>
                    <a className="arrow" href="/faq">
                      FAQ
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a className="arrow" href="/inquiry_list">
                      1:1 문의
                    </a>
                  </li>
                  <li>
                    <a>
                      뉴스레터 구독현황
                      <div className="toggle-btn yes">
                        <input type="checkbox" className="checkbox" />
                        <div className="knobs"></div>
                        <div className="layer"></div>
                      </div>
                    </a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a className="arrow" href="/membership">
                      멤버십 안내
                    </a>
                  </li>
                  <li>
                    <a
                      className="arrow"
                      href="#"
                      onClick={() => openModal("emergency_contact")}
                    >
                      현지 긴급 연락처
                    </a>
                  </li>
                </ul>
              </nav>

              <ul className="mypage_bottom mt30">
                <li className="Fs_sm tac line">
                  <a href="/company">알라모 소개</a>
                </li>
                <li className="Fs_sm tac line">
                  <a onClick={() => openModal("tos")}>이용약관</a>
                </li>
                <li className="Fs_sm tac">
                  <a onClick={() => openModal("Privacy_Stat")}>개인정보 취급방침</a>
                </li>
              </ul>
            </article>
          </div>
        </section>

        {/* <!-- Modal content S --> */}
        {/* <!-- 로그아웃 확인 --> */}
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

        
      </main>
    </>
  );
};
export default Mypage;
