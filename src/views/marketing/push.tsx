import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import PushList from './components/PushList'

const PushSend = () => {
  const [daterange, setDaterange] = useState('')

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">푸시발송 관리</h2>
      </div>

      {/* BEGIN: Page Layout */}
      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table w-full">
          <tbody>
            <tr>
              <td className="w-32 bg-slate-100 text-center font-semibold">
                신청일자
              </td>
              <td>
                <div className="relative mr-2 w-72">
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
                제목/내용
              </td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                />
              </td>
              <td className="bg-slate-100 text-center font-semibold">
                발송구분
              </td>
              <td>
                <div className="mt-2 flex flex-col sm:flex-row">
                  <div className="form-check mr-5">
                    <input
                      id="checkbox-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-4"
                    >
                      즉시발송
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="checkbox-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-4"
                    >
                      예약발송
                    </label>
                  </div>
                </div>
              </td>
              <td className="bg-slate-100 text-center font-semibold">
                APP OS 구분
              </td>
              <td>
                <div className="mt-2 flex flex-col sm:flex-row">
                  <div className="form-check mr-5">
                    <input
                      id="checkbox-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-4"
                    >
                      AOS
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="checkbox-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      checked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-4"
                    >
                      IOS
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

      <PushList />
    </>
  )
}
export default PushSend
