import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import RateplanList from './components/RateplanList'

const RateplanMng = () => {
  const [notifyrange, setNotifyrange] = useState('')
  const [notifyrange2, setNotifyrange2] = useState('')
  const [programmaticDropdown, setProgrammaticDropdown] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">요금제 관리</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
        <table className="table-bordered table">
          <tr>
            <td className="whitespace-nowrap bg-slate-100 ">브랜드</td>
            <td>
              <select className="form-select w-56">
                <option value="">전체</option>
                <option value="">option1</option>
                <option value="">option2</option>
              </select>
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">요금제명</td>
            <td colSpan={3}>
              <input type="text" className="form-control w-56" />
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap bg-slate-100   ">예약기간</td>
            <td>
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
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">CONTRACT ID</td>
            <td>
              <input type="text" className="form-control w-56" />
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">PRODUCT CODE</td>
            <td>
              <input type="text" className="form-control w-56" />
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100">대여기간</td>
            <td>
              <div className="relative inline-block">
                <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                  <Lucide icon="Calendar" className="h-4 w-4" />
                </div>
                <Litepicker
                  value={notifyrange2}
                  onChange={setNotifyrange2}
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
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">IATA</td>
            <td>
              <input type="text" className="form-control w-56" />
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">
              CorpDiscountNumber
            </td>
            <td>
              <input type="text" className="form-control w-56" />
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">
              국가/주/도시/지점코드
            </td>
            <td>
              <div className="flex items-center gap-3">
                <select className="form-select w-28">
                  <option value="">국가 선택</option>
                  <option value="">option1</option>
                  <option value="">option2</option>
                </select>
                <select className="form-select w-28" disabled>
                  <option value="">주 선택</option>
                  <option value="">option1</option>
                  <option value="">option2</option>
                </select>
                <select className="form-select w-28" disabled>
                  <option value="">도시 선택</option>
                  <option value="">option1</option>
                  <option value="">option2</option>
                </select>
                <select className="form-select w-28" disabled>
                  <option value="">지점 선택</option>
                  <option value="">option1</option>
                  <option value="">option2</option>
                </select>
              </div>
            </td>
            <td className="whitespace-nowrap  bg-slate-100">요금 타입</td>
            <td>
              <div className="flex flex-row">
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-11"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-11"
                  >
                    지금결제
                  </label>
                </div>
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-12"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-12"
                  >
                    현지결제
                  </label>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
            <td>
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
                    Y
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
                    N
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="pt-3">
        <div className="flex-center flex gap-3">
          <button className="btn w-24 bg-white">초기화</button>
          <button className="btn btn-primary w-24">조회</button>
        </div>
      </div>

      <RateplanList />
    </>
  )
}
export default RateplanMng
