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

import MemberList from './components/MemberList'

const MemberNormal = () => {
  const [daterange, setDaterange] = useState('')

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
                <Tab.Button className="text-base font-bold" as="button">
                  일반회원
                </Tab.Button>
              </Link>
            </Tab>
            <Tab className="flex-none">
              <Link to="/member/tour">
                <Tab.Button className="text-base font-bold" as="button">
                  여행사
                </Tab.Button>
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
                <td colSpan={3}>
                  <div className="flex">
                    <div className="relative">
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
                  브랜드
                </td>
                <td>
                  <select
                    className="form-select"
                    aria-label=".form-select-lg example"
                  >
                    <option>전체</option>
                    <option>브랜드1</option>
                    <option>브랜드2</option>
                  </select>
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  예약횟수
                </td>
                <td>
                  <div className="flex items-center">
                    <input
                      id="rsv_count"
                      type="text"
                      className="form-control mr-2"
                    />
                    ~
                    <input
                      id="rsv_count"
                      type="text"
                      className="form-control ml-2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center font-semibold">
                  가입유형
                </td>
                <td>
                  <select
                    className="form-select"
                    aria-label=".form-select-lg example"
                  >
                    <option>전체</option>
                    <option>자사회원</option>
                    <option>카카오</option>
                    <option>네이버</option>
                    <option>구글</option>
                  </select>
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  한글 이름
                </td>
                <td>
                  <input id="name_kr" type="text" className="form-control" />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  영문 성/이름
                </td>
                <td>
                  <div className="flex">
                    <input
                      id="first_name_en"
                      type="text"
                      className="form-control mr-2"
                    />
                    <input
                      id="last_name_en"
                      type="text"
                      className="form-control"
                    />
                  </div>
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  이용횟수
                </td>
                <td>
                  <div className="flex items-center">
                    <input
                      id="regular-form-1"
                      type="text"
                      className="form-control mr-2"
                    />
                    ~
                    <input
                      id="regular-form-1"
                      type="text"
                      className="form-control ml-2"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center font-semibold">
                  아이디
                </td>
                <td>
                  <input id="id" type="text" className="form-control" />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  휴대폰 번호
                </td>
                <td>
                  <input
                    id="phone_number"
                    type="number"
                    className="form-control"
                  />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  이메일
                </td>
                <td>
                  <input id="email" type="text" className="form-control" />
                </td>
                <td className="bg-slate-100 text-center font-semibold">
                  마케팅 수신동의
                </td>
                <td>
                  <div className="mt-2 flex flex-col sm:flex-row">
                    <div className="form-check mr-2">
                      <input
                        id="marketing_agree-1"
                        className="form-check-input"
                        type="checkbox"
                        name="marketing_agree"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="marketing_agree-1"
                      >
                        Y
                      </label>
                    </div>
                    <div className="form-check mr-2 mt-2 sm:mt-0">
                      <input
                        id="marketing_agree-2"
                        className="form-check-input"
                        type="checkbox"
                        name="marketing_agree"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="marketing_agree-2"
                      >
                        N
                      </label>
                    </div>
                  </div>
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

        <MemberList />
      </div>
    </>
  )
}
export default MemberNormal
