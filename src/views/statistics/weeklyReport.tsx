import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

function WeeklyReport() {
  const [daterange, setDaterange] = useState('')
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
        <h2 className="mr-auto text-lg font-bold">주간보고</h2>
      </div>
      {/* BEGIN: Page Layout */}
      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table">
          <tr>
            <td className="bg-slate-100">브랜드</td>
            <td>
              <select name="" id="" className="form-control w-60">
                <option value="">전체</option>
                <option value="">옵션1</option>
                <option value="">옵션2</option>
              </select>
            </td>
            <td className="bg-slate-100">년월</td>
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
          </tr>
          <tr>
            <td className="bg-slate-100">지역</td>
            <td colSpan={3}>
              <div className='check_table'>
                <div className="flex items-center gap-3">
                  <div>
                    <input
                      id="checkbox-switch-5"
                      className="form-check-input"
                      type="checkbox"
                      checked={isAllChecked} onChange={handleCheckAll}
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

      {/* 예약추이 시작 */}
      <div className="box mt-6">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="intro-y flex items-center">
            <h2 className="mr-auto text-lg font-bold">예약추이</h2>
          </div>
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
                <td rowSpan={3}>월</td>
                <td rowSpan={2}>구분</td>
                <td colSpan={24}>주간</td>
              </tr>
              <tr className="bg-slate-50 text-center">
                <td colSpan={2}>
                  1주
                  <br />
                  (2022/10/31~2022/11/06)
                </td>
                <td colSpan={2}>
                  1주
                  <br />
                  (2021/10/31~2021/11/06)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  2주
                  <br />
                  (2022/11/07~2022/11/14)
                </td>
                <td colSpan={2}>
                  2주
                  <br />
                  (2021/11/07~2021/11/14)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  3주
                  <br />
                  (2022/11/15~2022/11/22)
                </td>
                <td colSpan={2}>
                  3주
                  <br />
                  (2021/11/15~2021/11/22)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  4주
                  <br />
                  (2022/11/23~2022/08/31)
                </td>
                <td colSpan={2}>
                  4주
                  <br />
                  (2021/11/23~2021/08/31)
                </td>
                <td colSpan={2}>성장률</td>
              </tr>
              <tr className="bg-slate-300 text-center font-bold">
                <td>총계</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={2} className="bg-slate-100">
                  8월
                </td>
                <td>건수</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={2} className="bg-slate-100">
                  9월
                </td>
                <td>건수</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <div className="box mt-8 p-3">
        <div className="flex gap-6">
          <table className="table-bordered table">
            <tr className="bg-slate-100 text-center">
              <td rowSpan={2}>구분</td>
              <td colSpan={6}>월간</td>
            </tr>
            <tr className="bg-slate-50 text-center">
              <td colSpan={2}>2022년 8월</td>
              <td colSpan={2}>2021년 8월</td>
              <td colSpan={2}>성장률</td>
            </tr>
            <tr className="bg-slate-300 text-center font-bold">
              <td>총계</td>
              <td>$1300</td>
              <td>$1300</td>
              <td>$1300</td>
              <td>$1300</td>
              <td>-18%</td>
              <td>-18%</td>
            </tr>
            <tr className="text-center">
              <td>건수</td>
              <td>300</td>
              <td>5%</td>
              <td>300</td>
              <td>5%</td>
              <td colSpan={2}>5%</td>
            </tr>
            <tr className="text-center">
              <td>판매가</td>
              <td>$ 10,000.50</td>
              <td>5%</td>
              <td>$ 10,000.50</td>
              <td>5%</td>
              <td colSpan={2}>5%</td>
            </tr>
          </table>

          <table className="table-bordered table">
            <tr className="bg-slate-100 text-center">
              <td rowSpan={2}>구분</td>
              <td colSpan={6}>누적연간</td>
            </tr>
            <tr className="bg-slate-50 text-center">
              <td colSpan={2}>2022년 8월</td>
              <td colSpan={2}>2021년 8월</td>
              <td colSpan={2}>성장률</td>
            </tr>
            <tr className="bg-slate-300 text-center font-bold">
              <td>총계</td>
              <td>$1300</td>
              <td>$1300</td>
              <td>$1300</td>
              <td>$1300</td>
              <td>-18%</td>
              <td>-18%</td>
            </tr>
            <tr className="text-center">
              <td>건수</td>
              <td>300</td>
              <td>5%</td>
              <td>300</td>
              <td>5%</td>
              <td colSpan={2}>5%</td>
            </tr>
            <tr className="text-center">
              <td>판매가</td>
              <td>$ 10,000.50</td>
              <td>5%</td>
              <td>$ 10,000.50</td>
              <td>5%</td>
              <td colSpan={2}>5%</td>
            </tr>
          </table>
        </div>
      </div>

      {/* 취소율 시작 예약추이와 동일*/}
      <div className="box mt-8">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="intro-y flex items-center">
            <h2 className="mr-auto text-lg font-bold">취소율</h2>
          </div>
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
                <td rowSpan={3}>월</td>
                <td rowSpan={2}>구분</td>
                <td colSpan={24}>주간</td>
              </tr>
              <tr className="bg-slate-50 text-center">
                <td colSpan={2}>
                  1주
                  <br />
                  (2022/10/31~2022/11/06)
                </td>
                <td colSpan={2}>
                  1주
                  <br />
                  (2021/10/31~2021/11/06)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  2주
                  <br />
                  (2022/11/07~2022/11/14)
                </td>
                <td colSpan={2}>
                  2주
                  <br />
                  (2021/11/07~2021/11/14)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  3주
                  <br />
                  (2022/11/15~2022/11/22)
                </td>
                <td colSpan={2}>
                  3주
                  <br />
                  (2021/11/15~2021/11/22)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  4주
                  <br />
                  (2022/11/23~2022/08/31)
                </td>
                <td colSpan={2}>
                  4주
                  <br />
                  (2021/11/23~2021/08/31)
                </td>
                <td colSpan={2}>성장률</td>
              </tr>
              <tr className="bg-slate-300 text-center font-bold">
                <td>총계</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={2} className="bg-slate-100">
                  8월
                </td>
                <td>건수</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={2} className="bg-slate-100">
                  9월
                </td>
                <td>건수</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      {/* 라이브 시작 예약추이와 동일*/}
      <div className="box mt-8">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="intro-y flex items-center">
            <h2 className="mr-auto text-lg font-bold">라이브</h2>
          </div>
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
                <td rowSpan={3}>월</td>
                <td rowSpan={2}>구분</td>
                <td colSpan={24}>주간</td>
              </tr>
              <tr className="bg-slate-50 text-center">
                <td colSpan={2}>
                  1주
                  <br />
                  (2022/10/31~2022/11/06)
                </td>
                <td colSpan={2}>
                  1주
                  <br />
                  (2021/10/31~2021/11/06)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  2주
                  <br />
                  (2022/11/07~2022/11/14)
                </td>
                <td colSpan={2}>
                  2주
                  <br />
                  (2021/11/07~2021/11/14)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  3주
                  <br />
                  (2022/11/15~2022/11/22)
                </td>
                <td colSpan={2}>
                  3주
                  <br />
                  (2021/11/15~2021/11/22)
                </td>
                <td colSpan={2}>성장률</td>
                <td colSpan={2}>
                  4주
                  <br />
                  (2022/11/23~2022/08/31)
                </td>
                <td colSpan={2}>
                  4주
                  <br />
                  (2021/11/23~2021/08/31)
                </td>
                <td colSpan={2}>성장률</td>
              </tr>
              <tr className="bg-slate-300 text-center font-bold">
                <td>총계</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>$1300</td>
                <td>-18%</td>
                <td>20%</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={2} className="bg-slate-100">
                  8월
                </td>
                <td>건수</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={2} className="bg-slate-100">
                  9월
                </td>
                <td>건수</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
                <td>300</td>
                <td>5%</td>
                <td>300</td>
                <td>5%</td>
                <td colSpan={2}>5%</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      {/* END: Page Layout */}
    </>
  )
}

export default WeeklyReport
