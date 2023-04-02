import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import NewsletterList from './components/NewsletterList'

const Newsletter = () => {
  const [daterange, setDaterange] = useState('')
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">뉴스레터 신청 현황</h2>
      </div>

      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table w-full">
          <tbody>
            <tr>
              <td className="w-32 bg-slate-100 text-center font-semibold">
                신청일자
              </td>
              <td colSpan={3}>
                <div className="flex">
                  <div className="relative mr-2 w-60">
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
                      className="form-control block pl-12"
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
              <td className="w-32 bg-slate-100 text-center font-semibold ">
                브랜드
              </td>
              <td colSpan={3}>
                <select
                  className="form-select"
                  aria-label=".form-select-lg example"
                >
                  <option>전체</option>
                  <option>브랜드1</option>
                  <option>브랜드2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-32 bg-slate-100 text-center font-semibold ">
                회원아이디
              </td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                />
              </td>
              <td className="w-32 bg-slate-100 text-center font-semibold ">
                신청자명
              </td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                />
              </td>
              <td className="w-32 bg-slate-100 text-center font-semibold">
                이메일
              </td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                />
              </td>
              <td className="bg-slate-100 text-center font-semibold">
                뉴스레터 상태
              </td>
              <td>
                <select
                  className="form-select"
                  aria-label=".form-select-lg example"
                >
                  <option>전체</option>
                  <option>발송</option>
                  <option>미발송</option>
                  <option>수신거부</option>
                  <option>발송실패</option>
                  <option>구독취소</option>
                  <option>재신청</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-center">
        <button className="btn btn-outline-secondary ml-auto mr-3 w-24 bg-white">
          초기화
        </button>
        <button className="btn btn-primary ml-auto mr-3 w-24">조회</button>
      </div>

      <NewsletterList />
    </>
  )
}
export default Newsletter
