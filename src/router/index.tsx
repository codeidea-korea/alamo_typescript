import { useLocation, useRoutes } from 'react-router-dom'

import { useAppSelector } from '@/stores/hooks'
import { selectSideMenu } from '@/stores/sideMenuSlice'

import RequireAuth from '@/components/RequireAuth'

import SideMenu from '../layouts/SideMenu'

// import Tax from '../views/calculate/tax'
import CommonPage from '../views/common-page/common_page'
import FaqDetail from '../views/cscenter/faq_detail'
import FaqRegist from '../views/cscenter/faqCreate'
import Dashboard from '../views/dashboard/dashboard'
import Login from '../views/login'

// 고객센터
import Counseling from '../views/cscenter/counseling'
import Inquiry from '../views/cscenter/inquiry'
import InquiryDetail from '../views/cscenter/inquiry_detail'
import Faq from '../views/cscenter/faq'
import FaqCreate from '../views/cscenter/faqCreate'

// 약관관리
import Reservation from '../views/reservation'


// 회원관리
import Normal from '../views/member/normal'
import Tour from '../views/member/tour'

// cms
import Main from '../views/cms/main'
// import MainDetail from '../views/cms/mainDetail'
import MainContMngRevice from '../views/cms/mainDetail'
import MainCreate from '@/views/cms/mainCreate'
import CmsGeneral from '../views/cms/general'
import GeneralDetail from '../views/cms/generalDetail'
import GeneralCreate from '../views/cms/generalCreate'
import News from '../views/cms/news'
import NewsCreate from '../views/cms/newsCreate'
import NewsDetail from '../views/cms/newsDetail'
import Term from '../views/cms/term'
import TermCreate from '../views/cms/termCreate'
import TermDetail from '../views/cms/termDetail'
import Popup from '../views/cms/popup'
import PopupCreate from '../views/cms/popupCreate'
import PopupDetail from '../views/cms/popupDetail'
import Guide from '../views/cms/guide'
import GuideCreate from '../views/cms/guideCreate'
import GuideDetail from '../views/cms/guideDetail'
import ReservationManage from '../views/cms/reservation'
import ReservationCreate from '../views/cms/reservationCreate'
import ReservationDetail from '../views/cms/reservationDetail'

// 지점관리
import Branch from '../views/branch/branch'
import Vehicle from '../views/branch/vehicle'

// 요금제관리
import Rateplan from '../views/rateplan/rateplan'
import RateplanCreate from '../views/rateplan/rateplanCreate'
import RateplanDetail from '../views/rateplan/rateplanDetail'
import Charge from '../views/rateplan/charge'
import Discount from '../views/rateplan/discount'
import DiscountCreate from '../views/rateplan/discountCreate'
import DiscountDetail from '../views/rateplan/discountDetail'

// 마케팅 관리
import Coupon from '../views/marketing/coupon'
import CouponDetail from '../views/marketing/couponDetail'
import CouponRegist from '../views/marketing/couponCreate'
import CouponUseStatus from '../views/marketing/couponStatus'
import Newsletter from '../views/marketing/newsletter'
import NotificationTalk from '../views/marketing/notification'
import Push from '../views/marketing/push'

// 정산관리
import Data from '../views/calculate/data'
import Remittance from '../views/calculate/remittance'
import Settlement from '../views/calculate/settlement'
import Tax from '../views/calculate/tax'

// 통계
import StatisticsGeneral from '../views/statistics/general'
import Region from '../views/statistics/region'
import Rented from '../views/statistics/rented'
import ReservationDetails from '../views/statistics/reservationDetails'
import WeeklyReport from '../views/statistics/weeklyReport'
import CancelBooking from '../views/statistics/cancelBooking'
import Consultation from '../views/statistics/consultation'

// 시스템
import NoticeError from '../views/system/error'
import Notice from '../views/system/notice'
import NoticeControl from '../views/system/noticeControl'
import Authority from '../views/system/authority'
import Code from '../views/system/code'
import { SetStateAction, useEffect, useState } from 'react'
import SettlementDoc from '@/views/calculate/settlement-doc'
import NoticeDetail from '@/views/system/noticeDetail'
import MainDetail02 from '@/views/cms/mainDetail02'
import MainDetail03 from '@/views/cms/mainDetail03'
import MainDetail04 from '@/views/cms/mainDetail04'

function Router() {
  const { pathname } = useLocation();
  const sideMenuStore = useAppSelector(selectSideMenu)
  
  // useEffect(() => {
  //   console.log(pathname, sideMenuStore);
  // });
  
  const routes = [
    {
      path: '/',
      element: (
        <RequireAuth>
          <SideMenu />
        </RequireAuth>
      ),
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        //고객센터
        {
          path: "/cscenter/counseling",
          element: <Counseling />,
        },
        {
          path: "/cscenter/inquiry",
          element: <Inquiry />,
        },
        {
          path: "/cscenter/inquiry_detail",
          element: <InquiryDetail />,
        },
        {
          path: "/cscenter/faq",
          element: <Faq />,
        },
        {
          path: "/cscenter/faq/create",
          element: <FaqCreate />,
        },
        {
          path: "/cscenter/faq/detail",
          element: <FaqDetail />,
        },
        //예약관리
        {
          path: '/reservation',
          element: <Reservation />,
        },
        //CMS관리
        {
          path: "/cms/main",
          element: <Main />,
        },
        // {
        //   path: "/cms/main/:id",
        //   element: <MainDetail />,
        // },
        {
          path: "/cms/main/detail",
          element: <MainContMngRevice />,
        },
        {
          path: "/cms/main/create",
          element: <MainCreate />,
        },
        {
          path: "/cms/main/detail02",
          element: <MainDetail02 />,
        },
        {
          path: "/cms/main/detail03",
          element: <MainDetail03 />,
        },
        {
          path: "/cms/main/detail04",
          element: <MainDetail04 />,
        },
        {
          path: "/cms/general",
          element: <CmsGeneral />,
        },
        {
          path: "/cms/general/detail",
          element: <GeneralDetail />,
        },
        {
          path: "/cms/general/create",
          element: <GeneralCreate />,
        },
        {
          path: "/cms/news",
          element: <News />,
        },
        {
          path: "/cms/news/create",
          element: <NewsCreate />,
        },
        {
          path: "/cms/news/detail",
          element: <NewsDetail />,
        },
        {
          path: "/cms/term",
          element: <Term />,
        },
        {
          path: "/cms/term/create",
          element: <TermCreate />,
        },
        {
          path: "/cms/term/detail",
          element: <TermDetail />,
        },
        {
          path: "/cms/popup",
          element: <Popup />,
        },
        {
          path: "/cms/popup/create",
          element: <PopupCreate />,
        },
        {
          path: "/cms/popup/:id",
          element: <PopupDetail />,
        },
        {
          path: "/cms/reservation",
          element: <ReservationManage />,
        },
        {
          path: "/cms/reservation/create",
          element: <ReservationCreate />,
        },
        {
          path: "/cms/reservation/:id",
          element: <ReservationDetail />,
        },
        {
          path: "/cms/guide",
          element: <Guide />,
        },
        {
          path: "/cms/guide/create",
          element: <GuideCreate />,
        },
        {
          path: "/cms/guide/:id",
          element: <GuideDetail />,
        },
        // 차량정보 관리
        {
          path: '/branch/branch',
          element: <Branch />,
        },
        {
          path: '/branch/vehicle',
          element: <Vehicle />,
        },
        //회원관리
        {
          path: '/member/normal',
          element: <Normal />,
        },
        {
          path: '/member/tour',
          element: <Tour />,
        },
        // 요금제 관리
        {
          path: '/rateplan/rateplan',
          element: <Rateplan />,
        },
        {
          path: '/rateplan/rateplan/create',
          element: <RateplanCreate />,
        },
        {
          path: '/rateplan/rateplan/:id',
          element: <RateplanDetail />,
        },
        {
          path: "/rateplan/charge",
          element: <Charge />,
        },
        {
          path: "/rateplan/discount",
          element: <Discount />,
        },
        {
          path: "/rateplan/discount/create",
          element: <DiscountCreate />,
        },
        {
          path: "/rateplan/discountg/:id",
          element: <DiscountDetail />,
        },
        //마케팅관리
        {
          path: '/marketing/coupon',
          element: <Coupon />,
        },
        {
          path: "/marketing/coupon/status",
          element: <CouponUseStatus />,
        },
        {
          path: "/marketing/coupon_regist",
          element: <CouponRegist />,
        },
        {
          path: "/marketing/coupon_detail",
          element: <CouponDetail />,
        },
        {
          path: "/marketing/newsletter",
          element: <Newsletter />,
        },
        {
          path: "/marketing/notification",
          element: <NotificationTalk />,
        },
        {
          path: "/marketing/push",
          element: <Push />,
        },
        // // 이용가이드 관리
        // {
        //   path: "userguide-mng",
        //   element: <UserguideMng />,
        // },
        // {
        //   path: "userguide-mng/regist", //이용가이드 등록
        //   element: <UserguideMngRegist />,
        // },
        // {
        //   path: "userguide-mng/revice", //이용가이드 상세/수정
        //   element: <UserguideMngRevice />,
        // },
        // // 팝업 관리
        // {
        //   path: "popup-mng",
        //   element: <PopupMng />,
        // },
        // // 팝업 등록
        // {
        //   path: "popup-mng/regist",
        //   element: <PopupMngRegist />,
        // },
        // // 팝업 상세/수정
        // {
        //   path: "popup-mng/revice",
        //   element: <PopupMngRevice />,
        // },
        // //상담관리
        // {
        //   path: "counseling",
        //   element: <Counseling />,
        // },
        // {
        //   path: "inquiry",
        //   element: <Inquiry />,
        // },
        // {
        //   path: "inquiry_detail",
        //   element: <InquiryDetail />,
        // },
        //정산관리
        {
          path: '/calculate/data',
          element: <Data />,
        },
        {
          path: '/calculate/remittance',
          element: <Remittance />,
        },
        {
          path: '/calculate/tax',
          element: <Tax />,
        },
        {
          path: '/calculate/settlement',
          element: <Settlement />,
        },
        {
          path: '/calculate/settlement/:id',
          element: <SettlementDoc />,
        },
        // 통계
        {
          path: '/statistics/general',
          element: <StatisticsGeneral />,
        },
        {
          path: '/statistics/consultation',
          element: <Consultation />,
        },
        {
          path: '/statistics/weeklyReport',
          element: <WeeklyReport />,
        },
        {
          path: '/statistics/rented',
          element: <Rented />,
        },
        {
          path: '/statistics/cancelbooking',
          element: <CancelBooking />,
        },
        {
          path: '/statistics/region',
          element: <Region />,
        },
        {
          path: '/statistics/reservationDetails',
          element: <ReservationDetails />,
        },
        // 시스템
        {
          path: '/system/error',
          element: <NoticeError />,
        },
        {
          path: '/system/notice',
          element: <Notice />,
        },
        {
          path: '/system/notice/create',
          element: <NoticeControl isCreate />,
        },
        {
          path: '/system/notice/:id',
          element: <NoticeDetail />,
        },
        {
          path: '/system/authority',
          element: <Authority />,
        },
        {
          path: '/system/code',
          element: <Code open={false} setOpen={function (value: SetStateAction<boolean>): void {
            throw new Error('Function not implemented.')
          } } />,
        },
        // //공통페이지
        // {
        //   path: "common_page",
        //   element: <CommonPage />,
        // },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]

  return useRoutes(routes)
}

export default Router
