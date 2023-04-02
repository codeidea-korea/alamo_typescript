import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import GuideList from './components/GuideList'

const UserguideMng = () => {
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">이용가이드 관리</h2>
      </div>
      <div className="box mt-5 overflow-x-auto p-5">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">등록일자</td>
              <td className="">
                <div className="relative w-60">
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
              <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
              <td className="" colSpan={5}>
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">국가</td>
              <td>
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">
                이용가이드 구분
              </td>
              <td>
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">제목/내용</td>
              <td>
                <input
                  type="text"
                  className="form-control w-48"
                  placeholder="제목을 입력해 주세요"
                />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
              <td>
                <div className="flex gap-2">
                  <div className="form-check">
                    <input
                      id="checkbox-display-switch-10"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-10"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="checkbox-display-switch-11"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-11"
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
      <div className="mt-3">
        <div className="flex-center flex gap-3">
          <button className="btn w-24 bg-white">초기화</button>
          <button className="btn btn-primary w-24">조회</button>
        </div>
      </div>

      <GuideList />
    </>
  )
}
export default UserguideMng
