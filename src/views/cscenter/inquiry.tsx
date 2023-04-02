import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'
import Tippy from '@/base-components/Tippy'

import InquiryList from './components/InquiryList'

const Inquiry = () => {
  const [notifyrange, setNotifyrange] = useState('')

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">1:1문의 관리</h2>
      </div>

      <div className="intro-y box mt-3 p-3">
        <div className="overflow-x-auto">
          <table className="table-bordered table whitespace-nowrap">
            <tbody>
              <tr>
                <td className="bg-slate-100 text-center">등록일자</td>
                <td colSpan={3}>
                  <div className='flex'>
                    <div className="relative inline-block">
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
                    <label htmlFor="check01" className='check_button' >
                      <input type="checkbox" id="check01" className="hidden"/>
                      <span className="btn ml-2 w-16 inline-block">1개월</span>
                    </label>
                    <label htmlFor="check02" className='check_button' >
                      <input type="checkbox" id="check02" className="hidden"/>
                      <span className="btn ml-2 w-16 inline-block">3개월</span>
                    </label>
                    <label htmlFor="check03" className='check_button' >
                      <input type="checkbox" id="check03" className="hidden"/>
                      <span className="btn ml-2 w-16 inline-block">6개월</span>
                    </label>
                    <label htmlFor="check04" className='check_button' >
                      <input type="checkbox" id="check04" className="hidden"/>
                      <span className="btn ml-2 w-16 inline-block">1년</span>
                    </label>
                  </div>
                </td>
                <td className="bg-slate-100 text-center">브랜드</td>
                <td colSpan={3}>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option>전체</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">구분</td>
                <td>
                  <div className="flex flex-col sm:flex-row">
                    <div className="form-check mr-3">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-1"
                      >
                        직판
                      </label>
                    </div>
                    <div className="form-check mr-3 sm:mt-0">
                      <input
                        id="checkbox-switch-2"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-2"
                      >
                        간판
                      </label>
                    </div>
                  </div>
                </td>
                <td className="bg-slate-100 text-center">회원/비회원</td>
                <td>
                  <div className="flex flex-col sm:flex-row">
                    <div className="form-check mr-3">
                      <input
                        id="checkbox-switch-3"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-3"
                      >
                        회원
                      </label>
                    </div>
                    <div className="form-check mr-3 sm:mt-0">
                      <input
                        id="checkbox-switch-4"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-4"
                      >
                        비회원
                      </label>
                    </div>
                  </div>
                </td>
                <td className="bg-slate-100 text-center">답변여부</td>
                <td colSpan={3}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="form-check mr-3">
                      <input
                        id="checkbox-switch-5"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-5"
                      >
                        답변대기
                      </label>
                    </div>
                    <div className="form-check mr-3 sm:mt-0">
                      <input
                        id="checkbox-switch-6"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-6"
                      >
                        답변완료
                      </label>
                    </div>
                    <div className="form-check mr-3 sm:mt-0">
                      <input
                        id="checkbox-switch-7"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-7"
                      >
                        답변중
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">1:1문의 구분</td>
                <td>
                  <select
                    className="form-select sm:mr-2"
                    aria-label="Default select example"
                  >
                    <option>전체</option>
                    <option>견적문의</option>
                    <option>예약 확인/변경/취소</option>
                    <option>일반문의</option>
                    <option>사후처리</option>
                    <option>제휴항공사 마일리지</option>
                    <option>컴플레인</option>
                    <option>LOST AND FOUND</option>
                    <option>타사이트예약</option>
                  </select>
                </td>
                <td className="bg-slate-100 text-center">작성자명</td>
                <td>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </td>
                <td className="bg-slate-100 text-center">작성자 이메일</td>
                <td colSpan={3}>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">제목/내용</td>
                <td colSpan={3}>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </td>
                <td className="bg-slate-100 text-center">답변자</td>
                <td>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control w-40"
                    placeholder=""
                  />
                </td>
                <td className="bg-slate-100 text-center">노출여부</td>
                <td>
                  <div className="flex flex-col sm:flex-row">
                    <div className="form-check mr-3">
                      <input
                        id="checkbox-switch-8"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-8"
                      >
                        Y
                      </label>
                    </div>
                    <div className="form-check mr-3 sm:mt-0">
                      <input
                        id="checkbox-switch-9"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-9"
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
      </div>
      <div className="intro-y mt-3 text-center">
        <button className="btn mr-2 mb-2 inline-block w-24 bg-white">
          초기화
        </button>
        <button className="btn btn-primary mb-2 w-24">조회</button>
      </div>

      <InquiryList />
    </>
  )
}
export default Inquiry
