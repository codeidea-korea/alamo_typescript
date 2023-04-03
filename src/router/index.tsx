import React, {Children} from "react";
import {Link, useRoutes} from "react-router-dom";
import CarInfo from "../assets/pages/CarInfo";
import Faq from "../assets/pages/cscenter/Faq";
import InqueryList from "../assets/pages/cscenter/InqueryList";
import InquiryRegist from "../assets/pages/cscenter/InquiryRegist";
import NmInquiryRegist from "../assets/pages/cscenter/NmInquiryRegist";
import UserGuide from "../assets/pages/cscenter/UserGuide";
import Join from "../assets/pages/join/Join";
import JoinCom from "../assets/pages/join/JoinCom";
import JoinSimple from "../assets/pages/join/JoinSimple";
import JoinTp from "../assets/pages/join/JoinTp";
import JoinTpCom from "../assets/pages/join/JoinTpCom";
import FindLogin from "../assets/pages/login/FindLogin";
import IdSendGuide from "../assets/pages/login/IdSendGuide";
import Login from "../assets/pages/login/Login";
import LoginGuide from "../assets/pages/login/LoginGuide";
import LoginTp from "../assets/pages/login/LoginTp";
import NmRsv from "../assets/pages/login/NmRsv";
import PwChange from "../assets/pages/login/PwChange";
import PwSendGuide from "../assets/pages/login/PwSendGuide";
import Main from "../assets/pages/Main";
import NewsList from "../assets/pages/NewsList";
import RsvMain from "../assets/pages/rsv/RsvMain";
import RsvVihicle from "../assets/pages/rsv/RsvVihicle";
import RsvPayNow from "../assets/pages/rsv/RsvPayNow";
import BaseLayout from "../layouts/BaseLayout";
import RsvPayLocal from "../assets/pages/rsv/RsvPayLocal";
import RsvDriverNow from "../assets/pages/rsv/RsvDriverNow";
import RsvDriverLocal from "../assets/pages/rsv/RsvDriverLocal";
import RsvComNow from "../assets/pages/rsv/RsvComNow";
import RsvComLocal from "../assets/pages/rsv/RsvComLocal";
import RsvNodify from "../assets/pages/rsv/RsvNodify";
import RsvNodifyView from "../assets/pages/rsv/RsvNodifyView";
import RsvNodifyCom from "../assets/pages/rsv/RsvNodifyCom";
import Mypage from "../assets/pages/mypage/Mypage";
import MypageSimple from "../assets/pages/mypage/MypageSimple";
import MypageTp from "../assets/pages/mypage/MypageTp";
import Company from "../assets/pages/Company";
import Membership from "../assets/pages/Membership";
import PersonalInfo from "../assets/pages/mypage/PersonalInfo";
import PersonalInfoSimple from "../assets/pages/mypage/PersonalInfoSimple";
import PersonalInfoTp from "../assets/pages/mypage/PersonalInfoTp";
import Withdrawal from "../assets/pages/mypage/Withdrawal";
import RsvStatus from "../assets/pages/mypage/RsvStatus";
import PickupScheduled from "../assets/pages/mypage/PickupScheduled";
import Coupon from "../assets/pages/mypage/Coupon";
import LinkList from "../assets/pages/Link";
import LinkLayout from "../layouts/LinkLayout";

function Router() {
    const routes = [
        {
            path: "/",
            element: <BaseLayout />,
            children: [
                {
                    path: "",
                    element: <Main />,
                },
                // 로그인
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "nm_rsv",
                    element: <NmRsv />,
                },
                {
                    path: "login_guide",
                    element: <LoginGuide />,
                },
                {
                    path: "login_TP",
                    element: <LoginTp />,
                },
                {
                    path: "find_login",
                    element: <FindLogin />,
                },
                {
                    path: "id_send_guide",
                    element: <IdSendGuide />,
                },
                {
                    path: "pw_send_guide",
                    element: <PwSendGuide />,
                },
                {
                    path: "pw_change",
                    element: <PwChange />,
                },
                // 회원가입
                {
                    path: "join",
                    element: <Join />,
                },
                {
                    path: "join_com",
                    element: <JoinCom />,
                },
                {
                    path: "join_TP",
                    element: <JoinTp />,
                },
                {
                    path: "join_TP_com",
                    element: <JoinTpCom />,
                },
                {
                    path: "join_simple",
                    element: <JoinSimple />,
                },
                // 고객센터
                {
                    path: "faq",
                    element: <Faq />,
                },
                {
                    path: "inquiry_list",
                    element: <InqueryList />,
                },
                {
                    path: "inquiry_regist",
                    element: <InquiryRegist />,
                },
                {
                    path: "nm_inquiry_regist",
                    element: <NmInquiryRegist />,
                },
                {
                    path: "user_guide",
                    element: <UserGuide />,
                },
                // 뉴스&이벤트
                {
                    path: "news_list",
                    element: <NewsList />,
                },
                // 보유차량
                {
                    path: "car_info",
                    element: <CarInfo />,
                },
                // 렌터카 예약하기
                {
                    path: "rsv_main",
                    element: <RsvMain />,
                },
                {
                    path: "rsv_vihicle",
                    element: <RsvVihicle />,
                },
                {
                    path: "rsv_pay_now",
                    element: <RsvPayNow />,
                },
                {
                    path: "rsv_pay_local",
                    element: <RsvPayLocal />,
                },
                {
                    path: "rsv_driver_now",
                    element: <RsvDriverNow />,
                },
                {
                    path: "rsv_driver_local",
                    element: <RsvDriverLocal />,
                },
                {
                    path: "rsv_com_now",
                    element: <RsvComNow />,
                },
                {
                    path: "rsv_com_local",
                    element: <RsvComLocal />,
                },
                {
                    path: "rsv_nodify",
                    element: <RsvNodify />,
                },
                {
                    path: "rsv_nodify_view",
                    element: <RsvNodifyView />,
                },
                {
                    path: "rsv_nodify_com",
                    element: <RsvNodifyCom />,
                },
                // 마이페이지
                {
                    path: "mypage",
                    element: <Mypage />,
                },
                {
                    path: "mypage_simple",
                    element: <MypageSimple />,
                },
                {
                    path: "mypage_TP",
                    element: <MypageTp />,
                },
                {
                    path: "personal_info",
                    element: <PersonalInfo />,
                },
                {
                    path: "personal_info_simple",
                    element: <PersonalInfoSimple />,
                },
                {
                    path: "personal_info_TP",
                    element: <PersonalInfoTp />,
                },
                {
                    path: "withdrawal",
                    element: <Withdrawal />,
                },
                {
                    path: "rsv_status",
                    element: <RsvStatus />,
                },
                {
                    path: "pickup_scheduled",
                    element: <PickupScheduled />,
                },
                {
                    path: "coupon",
                    element: <Coupon />,
                },
                // 회사소개
                {
                    path: "company",
                    element: <Company />,
                },
                // 멤버십
                {
                    path: "membership",
                    element: <Membership />,
                },
            ],
        },
        {
            path: "/link",
            element: <LinkLayout />,
            children: [
                {
                    path: "",
                    element: <LinkList />,
                },
            ],
        },
    ];
    return useRoutes(routes);
}

export default Router;
