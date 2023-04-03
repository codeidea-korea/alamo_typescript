import { useEffect, useState } from "react";
import $ from "jquery";

const Setting = () => {
  //토글 버튼
  const [isOn, setIsOn] = useState<boolean>(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

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
  return (
    <>
      <main className="sub rsv-page" id="rsv-page">
        <div className="sub-vis"></div>

        <section className="contents">
          <div className="inner">
            {/* <!-- sub title --> */}
            <article className="sub_title Title01 tac">설정</article>
            <div className="flex items-center border-b py-10">
              <div className="box_title Title03 mb-0">홍길동</div>
              <a
                href="#?"
                className="ml-auto"
                onClick={() => openModal("confirm")}
              >
                로그아웃
              </a>
            </div>

            <div className="flex items-center border-b py-10">
              <div className="box_title Title03 mb-0">앱 푸시</div>
              <div className="switch-toggle ml-auto">
                <input
                  type="checkbox"
                  className="switch-toggle-checkbox"
                  checked={isOn}
                  onChange={handleToggle}
                  id="switch-toggle-checkbox"
                />
                <label
                  className="switch-toggle-label"
                  htmlFor="switch-toggle-checkbox"
                ></label>
              </div>
            </div>

            <div className="flex flex-col border-b py-10">
              <div className="box_title Title03 mb-0 ">약관 관련</div>
              <a href="#?">
                <div className="flex py-5 items-center w-full mt-5">
                  <div className="shrink-0">회원 이용약관</div>
                  <img
                    className="h-12 w-12 ml-auto"
                    src="/img/icon/arrow_r.svg"
                    alt=""
                  />
                </div>
              </a>
              <a href="#?">
                <div className="flex py-5 items-center w-full">
                  <div className="shrink-0">개인정보 수집 이용동의 </div>
                  <img
                    className="h-12 w-12 ml-auto"
                    src="/img/icon/arrow_r.svg"
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div className="flex flex-col border-b py-10">
              <div className="box_title Title03 mb-0 ">버전 정보</div>
              <a href="#?">
                <div className="flex py-5 items-center w-full mt-5">
                  <div className="shrink-0">현재 버전</div>
                  <div className="ml-auto">4.2.33</div>
                </div>
              </a>
              <a href="#?">
                <div className="flex py-5 items-center w-full">
                  <div className="flex py-5 items-center w-full">
                    <div className="shrink-0">최신 버전</div>
                    <div className="ml-auto">4.2.33</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
      {/* <!-- 로그아웃 확인 --> */}
      <div id="confirm" className="modal">
        <div className="modal-content">
          <span className="close fwb">&times;</span>
          <p>로그아웃하시겠습니까?</p>
          <button
            type="button"
            className="full_button button button--primary mt30"
          >
            확인
          </button>
        </div>
      </div>
    </>
  );
};
export default Setting;
