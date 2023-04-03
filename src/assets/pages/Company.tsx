const Company = () => {
    return (
        <>
            <main className="sub" id="company">
                <div className="sub-vis">
                    <div className="txt tac">
                        <p className="Fs_sm fwb mb5">회사소개</p>
                        <p className="Title02 fwb mb10">알라모는 미국 최대 브랜드</p>
                        <p className="mb20">
                            <span className="fwb">
                                엔터프라이즈 홀딩스 산하 알라모, 내셔널,
                                <br className="mo_br" /> 엔터프라이즈 렌터카
                            </span>
                            의 한국 공식 예약사이트 입니다.
                        </p>
                        <p>
                            <span className="fwb">유럽, 미국, 캐나다, 괌, 사이판 등</span> 전세계에서 최고의
                            <br /> 해외 렌터카 서비스를 제공하며 전문{" "}
                            <span className="fwb">
                                한국어 상담 서비스,
                                <br className="mo_br" /> 24시간 실시간 예약
                            </span>{" "}
                            등이 가능합니다.
                        </p>
                    </div>
                </div>

                <section className="contents">
                    <div className="inner">
                        {/* <!-- sub title --> */}
                        <article className="sub_title Title01 tac">CONTACT</article>
                        <article className="box_cont">
                            <div className="adress">
                                <p className="Fs_sm summary">주소</p>(03162) 서울시 종로구 인사동 5길 25 하나로 빌딩 701호 (주)투어마케팅코리아
                            </div>
                            <div className="cal mt20">
                                <p className="Fs_sm summary">연락처</p>02-739-3110
                            </div>
                            <div className="time mt20">
                                <p className="Fs_sm summary">업무시간</p>평일(월~금) 오전 9시 ~ 오후5시 (주말 및 공휴일 휴무)
                            </div>
                        </article>
                        <article className="map tac">
                            <div id="map_container"></div>
                            <div id="map"></div>
                        </article>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Company;
