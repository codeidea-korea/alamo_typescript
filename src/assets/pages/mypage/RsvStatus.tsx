import {useEffect, useState} from "react";
import $ from "jquery";
import {useNavigate} from "react-router-dom";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import {addDays} from "date-fns";
import {DateRangePicker} from "react-date-range"; // theme css file

import DatePicker from "react-datepicker";
import {ko} from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";

const RsvStatus = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
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
        $(".sub .tab_btn > li").css({width: "calc(100% / " + n + ")"});
        $(".modal .tab_btn > li").css({width: "calc(100% / " + m + ")"});

        $("#tab-btn li a").click(function (event) {
            event.preventDefault();
            $(".all").hide();
            var selectAtt = $(this).attr("data-category");

            $("#tab-btn li a").removeClass("active_tab");
            $(this).addClass("active_tab");

            $("." + selectAtt).fadeIn();
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
    const [start, setStart] = useState<any>("");
    const [end, setEnd] = useState<any>("");
    const date: any = (month: any) => {
        let startM = month;
        if (month < 9) {
            startM = month + 1;
            return "0" + startM;
        } else {
            startM = month + 1;
            return startM;
        }
    };
    const [calen, setCalen] = useState(false);

    return (
        <>
            <main className="sub" id="rsv_status">
                <div className="sub-vis"></div>
                <section className="contents">
                    <div className="inner">
                        <article className="sub_title Title01 tac">예약현황</article>
                        <article className="search-box form flex pa30 ico shadow" style={{alignItems: "center"}} id="DatePick">
                            <span className="mr5" style={{flex: "1.2"}}>
                                <input type="text" value={start + " ~ " + end} readOnly onClick={() => openModal("calendar")} />
                                <span className="ui-datepicker-trigger"></span>
                            </span>

                            <span className="mr5" style={{flex: "1"}}>
                                <svg viewBox="0 0 56.7 56.7" className="search_icon">
                                    <path d="M42.8 7.3C33-2.4 17.1-2.4 7.3 7.3c-9.8 9.8-9.8 25.7 0 35.5 8.7 8.7 22.2 9.7 32 2.9l9.6 9.6c1.8 1.8 4.7 1.8 6.4 0 1.8-1.8 1.8-4.7 0-6.4l-9.6-9.6c6.8-9.8 5.8-23.3-2.9-32zm-6.2 29.3c-6.4 6.4-16.7 6.4-23.1 0s-6.4-16.7 0-23.1c6.4-6.4 16.7-6.4 23.1 0 6.4 6.4 6.4 16.8 0 23.1z"></path>
                                </svg>
                                <input type="text" autoComplete="off" className="search_input mr5" data-test-id="search-input" placeholder="검색" />
                            </span>
{/*                             <button type="button" className="button search_btn">
                                <span className="ico">검색</span>
                            </button> */}
                        </article>

                        <article className="tab_l-box l-box">
                            <ul id="tab-btn" className="tab_btn pb5">
                                <li>
                                    <a className="active_tab" href="#" data-category="all">
                                        전체
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="tab1">
                                        픽업예정
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="tab2">
                                        픽업완료
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="tab3">
                                        예약취소
                                    </a>
                                </li>
                                <li>
                                    <a href="#" data-category="tab4">
                                        NO SHOW
                                    </a>
                                </li>
                            </ul>
                            <div className="l-board-box mt10">
                                {/* <!-- rsv_status list S --> */}
                                <div className="rsv_status_list">
                                    <ul className="l-box">
                                        <li className="box_cont open drop all tab1">
                                            <div className="Note1 cont_title arrow pa30 toggle_btn toggle flex ai-ct toggle_tit active" onClick={toggleHandle}>
                                                <span>예약번호</span>
                                                <span className="fwb ml5">1111103</span>
                                                <button type="button" className="button button--primary step Fs_sm ml10">
                                                    픽업예정
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.5px" height="7x" viewBox="0 0 50 80">
                                                        <polyline
                                                            fill="none"
                                                            stroke="#fff"
                                                            strokeWidth="6"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            points="
                  0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="cont_info view hidden toggle_cont">
                                                <table className="table01 mb10">
                                                    <tbody>
                                                        <tr>
                                                            <td className="FS_sm flex">
                                                                <span className="line">요금제&요금</span>
                                                                <span className="point">지금결제</span>
                                                            </td>
                                                            <td className="tar ico">
                                                                <img src="/img/icon/receipt.png" alt="" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb10 fwb">기본할인요금제</td>
                                                            <td className="tar">
                                                                <span className="Fs_sm pay">
                                                                    USD <b className="Title03">110.40</b>/KRW <b className="Title03">103,999</b>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="box_cont rental-point mb20">
                                                    <div className="cont_info">
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
                                                <div className="l-button flex jc-ct">
                                                    <button type="button" className="button link button--cancle mr5">
                                                        예약취소
                                                    </button>
                                                    <button type="button" className="button link button--primary">
                                                        예약수정
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="box_cont open drop mt10 all tab4">
                                            <div className="Note1 cont_title arrow pa30 toggle_btn toggle flex toggle_tit2 active" onClick={toggleHandle2}>
                                                <span>예약번호</span>
                                                <span className="fwb ml5">1111103</span>
                                                <button type="button" className="button button--disabled step Fs_sm ml10">
                                                    NO SHOW
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.5px" height="7x" viewBox="0 0 50 80">
                                                        <polyline
                                                            fill="none"
                                                            stroke="#808386"
                                                            strokeWidth="6"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            points="
                  0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="cont_info view hidden toggle_cont2">
                                                <table className="table01 mb10">
                                                    <tbody>
                                                        <tr>
                                                            <td className="FS_sm">
                                                                <span className="line">요금제&요금</span>
                                                                <span className="point02">현지결제</span>
                                                            </td>
                                                            <td className="tar ico">
                                                                <img src="/img/icon/receipt.png" alt="" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb10 fwb">기본할인요금제</td>
                                                            <td className="tar">
                                                                <span className="Fs_sm">
                                                                    USD <b className="Title03">110.40</b>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="box_cont rental-point mb20">
                                                    <div className="cont_info">
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
                                            </div>
                                        </li>
                                        <li className="box_cont open drop mt10 all tab2">
                                            <div className="Note1 cont_title arrow pa30 toggle_btn toggle flex toggle_tit3 active" onClick={toggleHandle3}>
                                                <span>예약번호</span>
                                                <span className="fwb ml5">1111103</span>
                                                <button type="button" className="button button--disabled step Fs_sm ml10">
                                                    픽업완료
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.5px" height="7x" viewBox="0 0 50 80">
                                                        <polyline
                                                            fill="none"
                                                            stroke="#808386"
                                                            strokeWidth="6"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            points="
                  0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="cont_info view hidden toggle_cont3">
                                                <table className="table01 mb10">
                                                    <tbody>
                                                        <tr>
                                                            <td className="FS_sm">
                                                                <span className="line">요금제&요금</span>
                                                                <span className="point">지금결제</span>
                                                            </td>
                                                            <td className="tar ico">
                                                                <img src="/img/icon/receipt.png" alt="" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb10 fwb">기본할인요금제</td>
                                                            <td className="tar">
                                                                <span className="Fs_sm">
                                                                    USD <b className="Title03">110.40</b>/KRW <b className="Title03">103,999</b>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="box_cont rental-point mb20">
                                                    <div className="cont_info">
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
                                            </div>
                                        </li>
                                        <li className="box_cont open drop mt10 all tab3">
                                            <div className="Note1 cont_title arrow pa30 toggle_btn toggle flex toggle_tit4 active" onClick={toggleHandle4}>
                                                <span>예약번호</span>
                                                <span className="fwb ml5">1111103</span>
                                                <button type="button" className="button button--disabled step Fs_sm ml10">
                                                    <span className="error">예약취소</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="3.5px" height="7x" viewBox="0 0 50 80">
                                                        <polyline
                                                            fill="none"
                                                            stroke="#d83028"
                                                            strokeWidth="6"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            points="
                  0.375,0.375 45.63,38.087 0.375,75.8 "></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="cont_info view hidden toggle_cont4">
                                                <table className="table01 mb10">
                                                    <tbody>
                                                        <tr>
                                                            <td className="FS_sm">
                                                                <span className="line">요금제&요금</span>
                                                                <span className="point02">현지결제</span>
                                                            </td>
                                                            <td className="tar ico">
                                                                <img src="/img/icon/receipt.png" alt="" />
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="mb10 fwb">기본할인요금제</td>
                                                            <td className="tar">
                                                                <span className="Fs_sm">
                                                                    USD <b className="Title03">110.40</b>
                                                                </span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className="box_cont rental-point mb20">
                                                    <div className="cont_info">
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
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* <!-- User Guide list E --> */}
                            </div>
                        </article>
                    </div>
                </section>
                <div id="calendar" className="modal">
                    <div className="modal-content2">
                        <div className="modal-title Title03">픽업일자 기준으로 조회됩니다.</div>
                        <span className="close fwb">&times;</span>
                        <div className="cont_info">
                            <DateRangePicker
                                locale={ko}
                                onChange={(item) => {
                                    setState([item.selection]);
                                    setStart(`${item.selection.startDate?.getFullYear()}-${date(item.selection.startDate?.getMonth())}-${item.selection.startDate?.getDate()}`);
                                    setEnd(`${item.selection.endDate?.getFullYear()}-${date(item.selection.endDate?.getMonth())}-${item.selection.endDate?.getDate()}`);
                                }}
                                moveRangeOnFirstSelection={false}
                                months={2}
                                ranges={state}
                                direction="horizontal"
                            />
                            <div className="l-button mt30">
                                <button type="button" className="button full_button link button--primary">
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};
export default RsvStatus;
