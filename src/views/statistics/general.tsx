import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import GeneralList from './components/GeneralList'

function GeneralInfo() {
  const [daterange, setDaterange] = useState('')
  const [daterange2, setDaterange2] = useState('')
  const [daterange3, setDaterange3] = useState('')

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
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">일별 현황</h2>
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
            <td>
              <div className="relative w-60">
                <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
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
            <td className="bg-slate-100">기간 2</td>
            <td>
              <div className="relative w-60">
                <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
                  <Lucide icon="Calendar" className="h-4 w-4" />
                </div>
                <Litepicker
                  value={daterange2}
                  onChange={setDaterange2}
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
            <td className="bg-slate-100">기간 3</td>
            <td>
              <div className="relative w-60">
                <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
                  <Lucide icon="Calendar" className="h-4 w-4" />
                </div>
                <Litepicker
                  value={daterange3}
                  onChange={setDaterange3}
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
              <div className="mt-2 flex items-center gap-2">
                사용여부
                <div className="flex items-center">
                  <div className="form-check mr-5">
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
                      Y
                    </label>
                  </div>
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

      <GeneralList />
    </>
  )
}

export default GeneralInfo
