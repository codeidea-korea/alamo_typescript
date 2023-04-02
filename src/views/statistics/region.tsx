import { SetStateAction, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

declare module 'react-datepicker'

function Region() {
  const [daterange, setDaterange] = useState('')
  const [daterange2, setDaterange2] = useState('')
  // 체크
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)

  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table input[type="checkbox"]',
    )
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked
    })
    setIsAllChecked(event.target.checked)
  }

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table input[type="checkbox"]',
    )
    let allChecked = true
    checkboxes.forEach((checkbox) => {
      if (checkbox !== event.target) {
        checkbox.checked = checkbox.checked || false
      }
      allChecked = allChecked && checkbox.checked
    })
    setIsAllChecked(allChecked)
  }

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [startDate2, setStartDate2] = useState<Date | null>(null)
  const [startDate3, setStartDate3] = useState<Date | null>(null)
  const [startDate4, setStartDate4] = useState<Date | null>(null)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">지역별</h2>
      </div>
      {/* BEGIN: Page Layout */}
      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table">
          <tr>
            <td className="bg-slate-100">브랜드</td>
            <td colSpan={5}>
              <select name="" id="" className="form-control w-60">
                <option value="">전체</option>
                <option value="">옵션1</option>
                <option value="">옵션2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="bg-slate-100">기간 1</td>
            <td colSpan={5}>
              <div className="flex items-center gap-2">
                <div className="relative w-36">
                  <div className="absolute z-10 flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
                    <Lucide icon="Calendar" className="h-4 w-4" />
                  </div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy년 MM월"
                    showMonthYearPicker
                    className="form-control pl-14"
                  />
                </div>
                ~
                <div className="relative w-36">
                  <div className="absolute z-10 flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
                    <Lucide icon="Calendar" className="h-4 w-4" />
                  </div>
                  <DatePicker
                    selected={startDate2}
                    onChange={(date) => setStartDate2(date)}
                    dateFormat="yyyy년 MM월"
                    showMonthYearPicker
                    className="form-control pl-14"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-slate-100">기간 2</td>
            <td colSpan={5}>
              <div className="flex items-center gap-2">
                <div className="relative w-36">
                  <div className="absolute z-10 flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
                    <Lucide icon="Calendar" className="h-4 w-4" />
                  </div>
                  <DatePicker
                    selected={startDate3}
                    onChange={(date) => setStartDate3(date)}
                    dateFormat="yyyy년 MM월"
                    showMonthYearPicker
                    className="form-control pl-14"
                  />
                </div>
                ~
                <div className="relative w-36">
                  <div className="absolute z-10 flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
                    <Lucide icon="Calendar" className="h-4 w-4" />
                  </div>
                  <DatePicker
                    selected={startDate4}
                    onChange={(date) => setStartDate4(date)}
                    dateFormat="yyyy년 MM월"
                    showMonthYearPicker
                    className="form-control pl-14"
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-slate-100">예약상태</td>
            <td>
              <div className="flex gap-2">
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
                    예약
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-7"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-7"
                  >
                    취소
                  </label>
                </div>
              </div>
            </td>
            <td className="w-40  whitespace-nowrap bg-slate-100">렌트상태</td>
            <td>
              <div className="flex flex-row gap-2">
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-8"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-8"
                  >
                    예약확정
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-9"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-9"
                  >
                    렌티드
                  </label>
                </div>
              </div>
            </td>
            <td className="w-40  whitespace-nowrap bg-slate-100">지불방식</td>
            <td>
              <div className="flex flex-row gap-2">
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-10"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-10"
                  >
                    전체
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
                    현지결제
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
                    지금결제
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-slate-100">지역</td>
            <td colSpan={5}>
              <div className="check_table">
                <div className="flex items-center gap-3">
                  <div>
                    <input
                      id="checkbox-switch-5"
                      className="form-check-input"
                      type="checkbox"
                      checked={isAllChecked}
                      onChange={handleCheckAll}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-5"
                    >
                      전체
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-6"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-6"
                    >
                      하와이
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-7"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-7"
                    >
                      미서부
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-8"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-8"
                    >
                      미국본토(미서부제외)
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-9"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-9"
                    >
                      캐나다
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-10"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-10"
                    >
                      독일
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-11"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-11"
                    >
                      스페인
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-12"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-12"
                    >
                      아일랜드
                    </label>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div>
                    <input
                      id="checkbox-switch-13"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-13"
                    >
                      스위스
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-14"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-14"
                    >
                      영국
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-15"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-15"
                    >
                      오스트리아
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-16"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-16"
                    >
                      호주
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-17"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-17"
                    >
                      뉴질랜드
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-18"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-18"
                    >
                      괌
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-19"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-19"
                    >
                      사이판
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-20"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-20"
                    >
                      필리핀
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-21"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-21"
                    >
                      팔라우
                    </label>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="flex-center mt-3 flex gap-3">
        <button className="btn w-24 bg-white">초기화</button>
        <button className="btn btn-primary w-24">조회</button>
      </div>

      {/* 하위테이블 시작 */}
      <div className="box mt-6">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="ml-auto flex gap-2">
            <button className="btn btn-sm btn-primary w-20">다운로드</button>
            <select
              className="form-select-sm form-select w-24"
              aria-label="Default select example"
            >
              <option>100개</option>
              <option>option1</option>
              <option>option2</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row border-b border-slate-200/60 p-3">
          <div className="w-full overflow-x-auto">
            <table className="table-bordered table">
              <tr className="bg-slate-100 text-center">
                <td rowSpan={2}>년도</td>
                <td rowSpan={2}>지역</td>
                <td colSpan={3}>1월</td>
                <td colSpan={3}>2월</td>
                <td colSpan={3}>3월</td>
                <td colSpan={3}>총계</td>
              </tr>
              <tr className="bg-slate-50 text-center">
                <td>건수</td>
                <td>판매가</td>
                <td>비율</td>
                <td>건수</td>
                <td>판매가</td>
                <td>비율</td>
                <td>건수</td>
                <td>판매가</td>
                <td>비율</td>
                <td>건수</td>
                <td>판매가</td>
                <td>비율</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={4}>2021년</td>
                <td>전지역</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
              </tr>
              <tr className="text-center">
                <td>하와이</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
              </tr>
              <tr className="text-center">
                <td>미서부</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
                <td>233</td>
                <td>303,000.00</td>
                <td>7%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* END: Page Layout */}
    </>
  )
}

export default Region
