import { useState } from 'react'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import { ChartData, ChartOptions } from 'chart.js/auto'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'
import Litepicker from '@/base-components/Litepicker'

import Chart from '@/base-components/Chart'

import { getColor } from '../../utils/colors'

const Dashboard = () => {
  const chartColors = () => [
    getColor('primary'),
    getColor('primary', 0.9),
    getColor('pending', 0.9),
    getColor('secondary', 1),
    getColor('warning', 0.9),
    getColor('info', 0.9),
    getColor('success', 0.9),
    getColor('dark', 0.9),
    getColor('danger', 0.9),
    getColor('dark', 0.4),
  ]
  const data: ChartData = useMemo(() => {
    return {
      labels: [
        '견적문의',
        '예약 확인/변경/취소',
        '일반문의',
        '사후처리',
        '제휴항공사 마일리지',
        '컴플레인',
        'LOST AND FOUND',
        '타사이트예약',
        '이하 추가 공통토드',
      ],
      datasets: [
        {
          data: [34, 23, 32, 45, 11, 2, 32, 4, 3],
          backgroundColor: chartColors(),
          hoverBackgroundColor: chartColors(),
          borderWidth: 0,
          borderColor: getColor('white'),
        },
      ],
    }
  }, [])
  const data2 = useMemo(() => {
    return {
      labels: [
        '하와이',
        '미서부',
        '미국본토',
        '캐나다',
        '독일',
        '스페인',
        '아일랜드',
        '스위스',
        '영국',
        '오스트리아',
        '호주',
        '뉴질랜드',
        '괌',
        '사이판',
      ],
      datasets: [
        {
          data: [33, 3, 42, 3, 24, 23, 22, 22, 66, 32, 24, 53, 74, 22, 1],
          backgroundColor: chartColors(),
          hoverBackgroundColor: chartColors(),
          borderWidth: 0,
          borderColor: getColor('white'),
        },
      ],
    }
  }, [])
  const data3 = useMemo(() => {
    return {
      labels: ['전화', '게시판'],
      datasets: [
        {
          data: [132, 2233],
          backgroundColor: chartColors(),
          hoverBackgroundColor: chartColors(),
          borderWidth: 0,
          borderColor: getColor('white'),
        },
      ],
    }
  }, [])

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            color: getColor('slate.500', 0.8),
          },
          datalabels: {
            // datalables 플러그인 세팅
            formatter: function (value: any, context: any) {
              var idx = context.dataIndex // 각 데이터 인덱스

              // 출력 텍스트
              return context.chart.data.labels[idx] + value + '%'
            },
            align: 'top', // 도넛 차트에서 툴팁이 잘리는 경우 사용
            font: {
              // font 설정
              weight: 'bold',
              size: '12px',
            },
            color: '#222', // font color
          },
        },
      },
      cutout: '40%',
    }
  }, [])

  const data4 = useMemo(() => {
    return {
      labels: [
        '지역1',
        '지역2',
        '지역3',
        '지역4',
        '지역5',
        '지역6',
        '지역7',
        '지역8',
        '지역9',
        '지역10',
      ],
      datasets: [
        {
          label: '올해',
          data: [0, 200, 250, 200, 500, 450, 850, 1050, 950, 1100],
          borderWidth: 2,
          borderColor: getColor('primary'),
          backgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          tension: 0.4,
        },
        {
          label: '전년',
          data: [0, 300, 400, 560, 320, 600, 720, 850, 690, 805],
          borderWidth: 2,
          borderDash: [2, 2],
          borderColor: getColor('slate.400', 0.6),
          backgroundColor: 'transparent',
          pointBorderColor: 'transparent',
          tension: 0.4,
        },
      ],
    }
  }, [])

  const options2 = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: getColor('slate.500', 0.8),
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 12,
            },
            color: getColor('slate.500', 0.8),
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            font: {
              size: 12,
            },
            color: getColor('slate.500', 0.8),
          },
          grid: {
            color: getColor('slate.500', 0.3),
            borderDash: [2, 2],
            drawBorder: false,
          },
        },
      },
    }
  }, [])



    //알람 현황 모달
    const [notifiModal, setNotifiModal] = useState(false)
    const [notifyrange, setNotifyrange] = useState('')

  return (
    <>
      <div className="mt-5 grid grid-cols-12 gap-6">
        <div className="intro-y col-span-12 lg:col-span-6">
          <div className="box">
            <div className="flex flex-col items-center border-b border-slate-200/60 p-3 sm:flex-row">
              <h2 className="mr-auto text-base font-bold">
                일일 예약 현황
                <span className="text-blue-600">(2022-10-10)</span>
              </h2>
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-bordered mt-3 table whitespace-nowrap">
                  <thead className="bg-slate-100 text-center">
                    <tr>
                      <th rowSpan={2}>브랜드</th>
                      <th rowSpan={2}>지불방식</th>
                      <th colSpan={2}>2021-10-09(전년일)</th>
                      <th colSpan={2}>2022-10-10(올해전일)</th>
                      <th rowSpan={2}>성장률</th>
                    </tr>
                    <tr>
                      <th>예약건수</th>
                      <th>판매가</th>
                      <th>예약건수</th>
                      <th>판매가</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td rowSpan={4}>알라모</td>
                      <td>직판</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>직판</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                    <tr className="bg-success/20 font-semibold">
                      <td>예약소계</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td className="font-normal">30%</td>
                    </tr>
                    <tr className="bg-primary/20 font-semibold">
                      <td>취소소계</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td className="font-normal">30%</td>
                    </tr>
                    <tr>
                      <td rowSpan={4}>내서널</td>
                      <td>직판</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>직판</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                    <tr className="bg-success/20 font-semibold">
                      <td>예약소계</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td className="font-normal">30%</td>
                    </tr>
                    <tr className="bg-primary/20 font-semibold">
                      <td>취소소계</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td className="font-normal">30%</td>
                    </tr>
                    <tr className="bg-danger/20 font-semibold">
                      <td colSpan={2}>합계</td>
                      <td>1,088</td>
                      <td>USD 2,003.00</td>
                      <td>1,088</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-6">
          <div className="box">
            <div className="flex flex-col items-center border-b border-slate-200/60 p-3 sm:flex-row">
              <h2 className="mr-auto text-base font-bold">
                최근 일주일 예약 현황{' '}
                <span className="text-blue-600">(2022-01-4 ~ 2022-10-10)</span>
              </h2>
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-bordered mt-3 table whitespace-nowrap">
                  <thead className="bg-slate-100 text-center">
                    <tr>
                      <th rowSpan={2}>브랜드</th>
                      <th rowSpan={2}>구분</th>
                      <th colSpan={2}>전년</th>
                      <th colSpan={2}>금주</th>
                      <th rowSpan={2}>성장률</th>
                    </tr>
                    <tr>
                      <th>예약건수</th>
                      <th>판매가</th>
                      <th>예약건수</th>
                      <th>판매가</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td rowSpan={4}>알라모</td>
                      <td>직판</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>직판</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                    <tr className="bg-success/20 font-semibold">
                      <td>예약소계</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td className="font-normal">30%</td>
                    </tr>
                    <tr className="bg-primary/20 font-semibold">
                      <td>취소소계</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td className="font-normal">30%</td>
                    </tr>
                    <tr>
                      <td rowSpan={4}>내서널</td>
                      <td>직판</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>직판</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                    <tr className="bg-success/20 font-semibold">
                      <td>예약소계</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td className="font-normal">30%</td>
                    </tr>
                    <tr className="bg-primary/20 font-semibold">
                      <td>취소소계</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td>311</td>
                      <td>USD 2,003.00</td>
                      <td className="font-normal">30%</td>
                    </tr>
                    <tr className="bg-danger/20 font-semibold">
                      <td colSpan={2}>합계</td>
                      <td>1,088</td>
                      <td>USD 2,003.00</td>
                      <td>1,088</td>
                      <td>USD 2,003.00</td>
                      <td>30%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="box">
            <div className="flex flex-col items-center border-b border-slate-200/60 p-3 sm:flex-row">
              <h2 className="mr-auto text-base font-bold">당일 예약 목록</h2>
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-bordered mt-3 table whitespace-nowrap">
                  <thead className="bg-slate-100 text-center">
                    <tr>
                      <th>예약번호</th>
                      <th>예약자명</th>
                      <th>픽업일자/지점</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                    <tr>
                      <td>1234511</td>
                      <td>홍길동11</td>
                      <td>2022-10-11 / 밀라가공항(MALAGA AIRPORT OFF SITE)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="box">
            <div className="flex flex-col items-center border-b border-slate-200/60 p-3 sm:flex-row">
              <h2 className="mr-auto text-base font-bold">
                1:1 문의 답변대기 목록
              </h2>
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-bordered mt-3 table whitespace-nowrap">
                  <thead className="bg-slate-100 text-center">
                    <tr>
                      <th>알림일자</th>
                      <th>작성자</th>
                      <th>제목</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <span className="mr-1 text-red-500">New</span>
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <span className="mr-1 text-red-500">New</span>
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>2022-03-02</td>
                      <td>홍길동</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry_detail" className="underline">
                          제목이 노출됩니다.
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-4">
          <div className="box">
            <div className="flex flex-col items-center border-b border-slate-200/60 p-3 sm:flex-row">
              <h2 className="mr-auto text-base font-bold">알림 현황</h2>
            </div>
            <div className="p-3">
              <div className="overflow-x-auto">
                <table className="table-bordered mt-3 table">
                  <thead className="bg-slate-100 text-center">
                    <tr>
                      <th>알림일자</th>
                      <th>제목</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td className="whitespace-nowrap">2022-03-02</td>
                      <td className="text-left">
                        <Link to="/system/notice" className="underline"
                          >
                          신규 공지사항이 등록되었습니다. 0000(공지사항 글 번호
                          또는 제목) 공지사항이 수정되었습니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">2022-03-02</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry" className="underline">
                          000님의 1:1문의가 등록되었습니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">2022-03-02</td>
                      <td className="text-left">
                        <Link to="/branch/vehicle" className="underline">
                          신규 지점/차량정보/차량제원 피드가 등록되었습니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">2022-03-02</td>
                      <td className="text-left">
                        <Link to="/system/notice" className="underline">
                          신규 공지사항이 등록되었습니다. 0000(공지사항 글 번호
                          또는 제목) 공지사항이 수정되었습니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">2022-03-02</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry" className="underline">
                          000님의 1:1문의가 등록되었습니다.
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap">2022-03-02</td>
                      <td className="text-left">
                        <Link to="/branch/vehicle" className="underline">
                          신규 지점/차량정보/차량제원 피드가 등록되었습니다.
                        </Link>
                      </td>
                    </tr>

                    <tr>
                      <td className="whitespace-nowrap">2022-03-02</td>
                      <td className="text-left">
                        <Link to="/cscenter/inquiry" className="underline">
                          000님의 1:1문의가 등록되었습니다.
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-12">
          <div className="box">
            <div className="flex flex-col items-center border-b border-slate-200/60 p-3 sm:flex-row">
              <h2 className="mr-auto text-base font-bold">
                최근 일주일 상담 현황{' '}
                <span className="text-blue-600">(2022-10-4 ~ 2022-10-10)</span>
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-6 p-3">
              <div className="col-span-12 lg:col-span-4">
                <p className="mb-3 text-center text-base font-bold">
                  상담유형별
                </p>
                <Chart type="doughnut" data={data} options={options} />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <p className="mb-3 text-center text-base font-bold">지역별</p>
                <Chart type="doughnut" data={data2} options={options} />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <p className="mb-3 text-center text-base font-bold">
                  문의채널별
                </p>
                <Chart type="doughnut" data={data3} options={options} />
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y col-span-12 lg:col-span-12">
          <div className="box">
            <div className="flex flex-col items-center border-b border-slate-200/60 p-3 sm:flex-row">
              <h2 className="mr-auto text-base font-bold">
                최근 일주일 예약 추이{' '}
                <span className="text-blue-600">(2022-10-4 ~ 2022-10-10)</span>
              </h2>
            </div>
            <div className="grid grid-cols-12 gap-6 p-5">
              <div className="col-span-12 lg:col-span-4">
                <p className="mb-3 text-center text-base font-bold">
                  지역별 상위 10개
                </p>
                <Chart type="line" data={data4} options={options2} />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <p className="mb-3 text-center text-base font-bold">
                  요금제별 상위 10개
                </p>
                <Chart type="line" data={data4} options={options2} />
              </div>
              <div className="col-span-12 lg:col-span-4">
                <p className="mb-3 text-center text-base font-bold">
                  차량코드별 상위 10개
                </p>
                <Chart type="line" data={data4} options={options2} />
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* 알림현황 모달 */}
      <Dialog
        size="md"
        open={notifiModal}
        onClose={() => {
          setNotifiModal(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">알림 현황</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setNotifiModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <table className="table-bordered table">
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <tbody>
                <tr>
                  <td className="bg-slate-100 text-center">수신일</td>
                  <td>
                    <div className="relative inline-block w-56">
                      <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                        <Lucide icon="Calendar" className="h-4 w-4" />
                      </div>
                      <Litepicker
                        value={notifyrange}
                        onChange={setNotifyrange}
                        options={{
                          autoApply: false,
                          singleMode: false,
                          numberOfColumns: 2,
                          numberOfMonths: 2,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                        className="form-control mx-auto block w-56 pl-12"
                      />
                    </div>
                    <button className="btn btn-rounded-dark mr-1 mb-2 ml-2 w-20 p-1">
                      조회
                    </button>
                    <button className="btn btn-rounded btn-dark-soft mr-1 mb-2 w-20 p-1">
                      초기화
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-6 text-red-500">
              1달 전 알림은 확인 여부와 무관하게 삭제됩니다.{' '}
            </p>
            <table className="table-bordered mt-1 table">
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <thead className="bg-slate-100 text-center">
                <tr>
                  <th>알림일자</th>
                  <th>제목</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">2022-03-02</td>
                  <td>제목</td>
                </tr>
              </tbody>
            </table>
          </Dialog.Description>
          <Dialog.Footer>
            <button type="button" className="btn btn-primary w-20"
             onClick={() => {
              setNotifiModal(false)
            }}
            >
              확인
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* 알림현황 모달 끝 */}
    </>
  )
}
export default Dashboard
