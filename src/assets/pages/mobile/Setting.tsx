import { useEffect, useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";



const Setting = () => {
 


  return (
    <>
      <main className="sub rsv-page" id="rsv-page">
      <div className="sub-vis"></div>

        <section className="contents">
          <div className="inner">
            {/* <!-- sub title --> */}
            <article className="sub_title Title01 tac">설정</article>
            <div>
              <div className="box_title Title03">홍길동</div>
              <img src="" alt="" />
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
