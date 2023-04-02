// import {
//     Lucide,
//     Litepicker,
//     Modal,
//     ModalHeader,
//     ModalBody,
//   } from "@/base-components";
import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Tab } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import TourList from './components/TourList'

const MemberTour = () => {
  const [daterange, setDaterange] = useState('')
  const [buttonModalPreview, tourMember] = useState(false)
  const [buttonModalPreview2, danialApproval] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">회원관리</h2>
      </div>

      {/* BEGIN: Page Layout */}
      <div className="p-3">
        <Tab.Group>
          <Tab.List className="nav-tabs">
            <Tab className="flex-none	">
              <Link to="/member/normal">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
                  일반회원
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none">
              <Link to="/member/tour">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-slate-200 border-b-transparent bg-white px-5 py-2.5 text-base font-bold text-slate-800 dark:border-transparent dark:border-x-darkmode-400 dark:border-t-darkmode-400 dark:border-b-darkmode-600 dark:bg-transparent dark:text-white">
                  여행사
                </button>
              </Link>
            </Tab>
          </Tab.List>
        </Tab.Group>

        <div className="intro-y box p-3">
          <table className="table-bordered table w-full">
            <tbody>
              <tr>
                <td className="w-44 bg-slate-100 text-center font-semibold">
                  가입일자
                </td>
                <td colSpan={5}>
                  <div className="flex">
                    <div className="relative mr-5">
                      <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                        <Lucide icon="Calendar" className="h-4 w-4" />
                      </div>
                      <Litepicker
                        value={daterange}
                        onChange={setDaterange}
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
                        className="form-control block w-60 pl-12"
                      />
                    </div>
                    <label htmlFor="check01" className="check_button">
                      <input type="checkbox" id="check01" className="hidden" />
                      <span className="btn ml-2 inline-block w-16">1개월</span>
                    </label>
                    <label htmlFor="check02" className="check_button">
                      <input type="checkbox" id="check02" className="hidden" />
                      <span className="btn ml-2 inline-block w-16">3개월</span>
                    </label>
                    <label htmlFor="check03" className="check_button">
                      <input type="checkbox" id="check03" className="hidden" />
                      <span className="btn ml-2 inline-block w-16">6개월</span>
                    </label>
                    <label htmlFor="check04" className="check_button">
                      <input type="checkbox" id="check04" className="hidden" />
                      <span className="btn ml-2 inline-block w-16">1년</span>
                    </label>
                  </div>
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  픽업예정 건수
                </td>
                <td>
                  <div className="flex items-center">
                    <input
                      id="pickup_cout"
                      type="text"
                      className="form-control mr-2"
                    />
                    ~
                    <input
                      id="pickup_cout"
                      type="text"
                      className="form-control ml-2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center font-semibold">
                  여행사명
                </td>
                <td>
                  <input id="tour_name" type="text" className="form-control" />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  사업자번호
                </td>
                <td>
                  <input
                    id="business_number"
                    type="number"
                    className="form-control"
                  />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  수수료율(%)
                </td>
                <td>
                  <div className="flex items-center">
                    <input
                      id="fee_rate"
                      type="number"
                      className="form-control mr-2"
                    />
                    ~
                    <input
                      id="fee_rate"
                      type="number"
                      className="form-control ml-2"
                    />
                  </div>
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  렌티드 건수
                </td>
                <td>
                  <div className="flex items-center">
                    <input
                      id="rented_cout"
                      type="text"
                      className="form-control mr-2"
                    />
                    ~
                    <input
                      id="rented_cout"
                      type="text"
                      className="form-control ml-2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center font-semibold">
                  부서명
                </td>
                <td>
                  <input id="department" type="text" className="form-control" />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  세금계산서용 이메일
                </td>
                <td>
                  <input id="tax_email" type="text" className="form-control" />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  담당자명
                </td>
                <td>
                  <input
                    id="manger_name"
                    type="text"
                    className="form-control"
                  />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  담당자 전화번호
                </td>
                <td>
                  <input
                    id="manger_number"
                    type="number"
                    className="form-control"
                  />
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center font-semibold">
                  회원상태
                </td>
                <td colSpan={3}>
                  <div className="flex">
                    <div className="form-check mr-5">
                      <input
                        id="check-all"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label className="form-check-label" htmlFor="check-all">
                        전체
                      </label>
                    </div>
                    <div className="form-check mr-5">
                      <input
                        id="check_status-1"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check_status-1"
                      >
                        승인완료
                      </label>
                    </div>
                    <div className="form-check mr-5">
                      <input
                        id="check_status-2"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check_status-2"
                      >
                        승인거부
                      </label>
                    </div>
                    <div className="form-check mr-5">
                      <input
                        id="check_status-3"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check_status-3"
                      >
                        승인대기
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        id="check_status-4"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="check_status-4"
                      >
                        탈퇴
                      </label>
                    </div>
                  </div>
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  담당자 이메일
                </td>
                <td>
                  <input
                    id="manager_email"
                    type="email"
                    className="form-control"
                  />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  대표 연락처
                </td>
                <td>
                  <input id="ceo_number" type="number" className="form-control" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-center">
          <button className="btn btn-outline-secondary ml-auto mr-3 w-20 bg-white">
            초기화
          </button>
          <button className="btn btn-primary ml-auto mr-3 w-20">조회</button>
        </div>

        <TourList />
      </div>
    </>
  )
}
export default MemberTour
