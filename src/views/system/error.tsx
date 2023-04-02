import { useState } from 'react'
import { useQuery } from 'react-query'

import request from '@/utils/request'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import ErrorList from './components/ErrorList'

const ErrorMng = () => {
  const [daterange, setDaterange] = useState('')

  const [trClick, SetClick] = useState(false)
  const ToggleClick = () => {
    SetClick((trClick) => !trClick)
  }

  return (
    <>
      <div className="mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">오류게시판 관리</h2>
      </div>

      {/* BEGIN: Page Layout */}
      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table">
          <tbody>
            <tr className="text-center">
              <td className="w-40 bg-slate-100">발생일자</td>
              <td>
                <div className="relative w-72">
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
                    className="form-control pl-16"
                  />
                </div>
              </td>
              <td className="w-40 bg-slate-100">브랜드</td>
              <td className="text-left">
                <select name="" id="" className="form-select w-56">
                  <option value="">전체</option>
                  <option value="">옵션1</option>
                  <option value="">옵션2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-40 bg-slate-100">분류</td>
              <td>
                <div className="flex items-center gap-3">
                  <select name="" id="" className="form-select w-32">
                    <option value="">대분류 전체</option>
                    <option value="">옵션1</option>
                    <option value="">옵션2</option>
                  </select>
                  <select name="" id="" className="form-select w-32">
                    <option value="">중분류 전체</option>
                    <option value="">옵션1</option>
                    <option value="">옵션2</option>
                  </select>
                  <select name="" id="" className="form-select w-32">
                    <option value="">소분류 전체</option>
                    <option value="">옵션1</option>
                    <option value="">옵션2</option>
                  </select>
                </div>
              </td>
              <td className="w-40 bg-slate-100">내용</td>
              <td>
                <input type="text" className="form-control" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3 text-center">
        <button className="btn mr-2 mb-2 inline-block w-24 bg-white">
          초기화
        </button>
        <button className="btn btn-primary mb-2 w-24">조회</button>
      </div>

      <ErrorList />
      {/* END: Page Layout */}
    </>
  )
}

export default ErrorMng
