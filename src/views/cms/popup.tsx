import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import PopupList from './components/PopupList'

const PopupMng = () => {
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)
  const [showImage, setshowImage] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">팝업 관리</h2>
      </div>
      <div className="mt-3">
        <div className="box overflow-x-auto p-3">
          <table className="table-bordered table">
            <tbody>
              <tr>
                <td className="whitespace-nowrap  bg-slate-100 ">노출일시</td>
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
                <td className="whitespace-nowrap  bg-slate-100 ">팝업 구분</td>
                <td>
                  <div className="flex flex-row gap-2">
                    <div className="form-check gap-2">
                      <input
                        id="newsevent-select-1"
                        className="form-check-input"
                        type="checkbox"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                        defaultChecked
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="newsevent-select-1"
                      >
                        시스템점검 안내
                      </label>
                    </div>
                    <div className="form-check gap-2">
                      <input
                        id="newsevent-select-2"
                        className="form-check-input"
                        type="checkbox"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                        defaultChecked
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="newsevent-select-2"
                      >
                        이벤트 안내
                      </label>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap  bg-slate-100 ">제목/내용</td>
                <td>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control w-72"
                    placeholder=""
                  />
                </td>
                <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
                <td>
                  <div className="flex gap-2">
                    <div className="form-check gap-2">
                      <input
                        id="radio-dis-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                        defaultChecked
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="radio-dis-switch-1"
                      >
                        Y
                      </label>
                    </div>
                    <div className="form-check gap-2">
                      <input
                        id="radio-dis-switch-2"
                        className="form-check-input"
                        type="checkbox"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="radio-dis-switch-2"
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
      <div className="mt-3">
        <div className="flex-center flex gap-2">
          <button className="btn w-24 bg-white">초기화</button>
          <button className="btn btn-primary w-24">조회</button>
        </div>
      </div>

      <PopupList />
      
    </>
  )
}
export default PopupMng
