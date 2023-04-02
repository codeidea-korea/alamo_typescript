import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import GeneralList from './components/GeneralList'

const ContentManage = () => {
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">일반콘텐츠 관리</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">노출시작일시</td>
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
              <td className="" colSpan={3}>
                <select
                  className="form-select w-56"
                  aria-label=".form-select-sm example"
                >
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">전시구분</td>
              <td>
                <div className="flex flex-row gap-2">
                  <div className="form-check">
                    <input
                      id="checkbox-display-switch-1"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-1"
                    >
                      멤버십 안내
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="checkbox-display-switch-2"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-2"
                    >
                      현지 긴급 연락처
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="checkbox-display-switch-3"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-3"
                    >
                      회사소개
                    </label>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
              <td colSpan={3}>
                <div className="flex flex-row gap-2">
                  <div className="form-check">
                    <input
                      id="checkbox-display-switch-5"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-5"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="checkbox-display-switch-6"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-6"
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

      <GeneralList />
    </>
  )
}
export default ContentManage
