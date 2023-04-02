import { createSlice } from '@reduxjs/toolkit'

import { icons } from '../base-components/Lucide'
import { RootState } from './store'

export interface Menu {
  icon?: keyof typeof icons
  title: string
  pathname?: string
  subMenu?: Menu[]
  ignore?: boolean
  ord?: number
}

export interface SideMenuState {
  menu: Array<Menu | 'divider'>
}

const initialState: SideMenuState = {
  menu: [
    {
      icon: 'Users',
      title: '고객센터',
      pathname: 'cscenter',
      subMenu: [
        {
          ord: 1,
          pathname: '/cscenter/counseling',
          title: '상담 관리',
        },
        {
          ord: 2,
          pathname: '/cscenter/inquiry',
          title: '1:1문의 관리',
        },
        {
          ord: 3,
          pathname: '/cscenter/faq',
          title: 'FAQ 관리',
        },
      ],
    },
    {
      icon: 'Clock',
      pathname: '/reservation',
      title: '예약관리',
    },
    {
      icon: 'Hexagon',
      title: 'CMS 관리',
      subMenu: [
        {
          ord: 1,
          pathname: '/cms/main',
          title: '메인 콘텐츠 관리',
        },
        {
          ord: 2,
          pathname: '/cms/news',
          title: '뉴스&이벤트 관리',
        },
        {
          ord: 3,
          pathname: '/cms/term',
          title: '약관 관리',
        },
        {
          ord: 4,
          pathname: '/cms/popup',
          title: '팝업 관리',
        },
        {
          ord: 5,
          pathname: '/cms/general',
          title: '일반 콘텐츠 관리',
        },
        {
          ord: 6,
          pathname: '/cms/reservation',
          title: '예약안내 관리',
        },
        {
          ord: 7,
          pathname: '/cms/guide',
          title: '이용가이드 관리',
        },
      ],
    },
    {
      icon: 'Smartphone',
      title: '지점/차량정보 관리',
      subMenu: [
        {
          ord: 1,
          pathname: '/branch/branch',
          title: '지점 관리',
        },
        {
          ord: 2,
          pathname: '/branch/vehicle',
          title: '차량정보 관리',
        },
      ],
    },
    {
      icon: 'DollarSign',
      title: '요금제 관리',
      subMenu: [
        {
          ord: 1,
          pathname: '/rateplan/rateplan',
          title: '요금제 관리',
        },
        {
          ord: 2,
          pathname: '/rateplan/charge',
          title: '요금상세항목 관리',
        },
        {
          ord: 3,
          pathname: '/rateplan/discount',
          title: '요금할인 관리',
        },
      ],
    },
    {
      icon: 'Volume2',
      title: '마케팅 관리',
      subMenu: [
        {
          ord: 1,
          pathname: '/marketing/coupon',
          title: '쿠폰 관리',
        },
        {
          ord: 2,
          pathname: '/marketing/newsletter',
          title: '뉴스레터신청 관리',
        },
        {
          ord: 3,
          pathname: '/marketing/notification',
          title: '알림톡 현황',
        },
        {
          ord: 4,
          pathname: '/marketing/push',
          title: '푸시발송 관리',
        },
      ],
    },
    {
      icon: 'User',
      title: '회원 관리',
      subMenu: [
        {
          ord: 1,
          pathname: '/member/normal',
          title: '일반회원',
        },
        {
          ord: 2,
          pathname: '/member/tour',
          title: '여행사',
        },
      ],
    },
    {
      icon: 'TrendingUp',
      title: '정산 관리',
      subMenu: [
        {
          ord: 1,
          pathname: '/calculate/data',
          title: '정산데이터 변환',
        },
        {
          ord: 2,
          pathname: '/calculate/remittance',
          title: '입금일/송금일/환율 관리',
        },
        {
          ord: 3,
          pathname: '/calculate/tax',
          title: '여행사 세금계산서 요청',
        },
        {
          ord: 4,
          pathname: '/calculate/settlement',
          title: '정산 결재',
        },
      ],
    },
    {
      icon: 'PieChart',
      title: '통계',
      subMenu: [
        {
          ord: 1,
          pathname: '/statistics/general',
          title: '일반 현황',
        },
        {
          ord: 2,
          pathname: '/statistics/consultation',
          title: '상담 통계',
        },
        {
          ord: 3,
          pathname: '/statistics/weeklyReport',
          title: '주간보고',
        },
        {
          ord: 4,
          pathname: '/statistics/rented',
          title: '렌티드',
        },
        {
          ord: 5,
          pathname: '/statistics/cancelBooking',
          title: '부킹/취소 윈도우',
        },
        {
          ord: 6,
          pathname: '/statistics/region',
          title: '지역별',
        },
        {
          ord: 7,
          pathname: '/statistics/reservationDetails',
          title: '예약상세',
        },
      ],
    },
    {
      icon: 'Settings',
      pathname: '/system',
      title: '시스템관리',
      subMenu: [
        {
          ord: 1,
          pathname: '/system/error',
          title: '오류게시판 관리',
        },
        {
          ord: 2,
          pathname: '/system/notice',
          title: '공지사항 관리',
        },
        {
          ord: 3,
          pathname: '/system/authority',
          title: '권한 관리',
        },
        {
          ord: 4,
          pathname: '/system/code',
          title: '공통코드 관리',
        },
      ],
    },
  ],
}

export const sideMenuSlice = createSlice({
  name: 'sideMenu',
  initialState,
  reducers: {},
})

export const selectSideMenu = (state: RootState) => state.sideMenu.menu

export default sideMenuSlice.reducer
