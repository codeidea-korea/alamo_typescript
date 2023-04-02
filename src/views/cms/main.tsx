import { useState } from 'react'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import MainList from './components/MainList'

const MainContMng = () => {
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">메인 콘텐츠 관리</h2>
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
              <td className="">
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
              <td className="whitespace-nowrap  bg-slate-100 ">전시영역</td>
              <td className="">
                <div className="flex flex-row">
                  <div className="form-check mr-2">
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
                      메인 비쥬얼
                    </label>
                  </div>
                  <div className="form-check mr-2">
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
                      메인 퀵메뉴
                    </label>
                  </div>
                  <div className="form-check mr-2">
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
                      메인 띠배너
                    </label>
                  </div>
                  <div className="form-check mr-2">
                    <input
                      id="checkbox-display-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-4"
                    >
                      메인 카드배너
                    </label>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">노출영역</td>
              <td className="w-20">
                <div className="flex flex-row gap-2">
                  <div className="form-check gap-2">
                    <input
                      id="switch-1"
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="switch-1"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check gap-2">
                    <input
                      id="switch-2"
                      className="form-check-input"
                      type="checkbox"
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="switch-2"
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
        <div className="flex-center flex gap-2">
          <button className="btn w-24 bg-white">초기화</button>
          <button className="btn btn-primary w-24">조회</button>
        </div>
      </div>
      <MainList />
    </>
  )
}
export default MainContMng
