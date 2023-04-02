import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import VerticalBarChart from '@/components/VerticalBarChart'

// import VerticalBarChart from '@/components/vertical-bar-chart/Main'

function Rented() {
  const [daterange, setDaterange] = useState('')
  const [daterange2, setDaterange2] = useState('')
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">렌티드</h2>
      </div>
      {/* BEGIN: Page Layout */}
      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table">
          <tr>
            <td className="bg-slate-100">브랜드</td>
            <td colSpan={4}>
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
          </tr>
          <tr>
            <td className="bg-slate-100">구분</td>
            <td colSpan={3}>
              <div className="flex items-center gap-3">
                <div>
                  <input
                    id="checkbox-switch-5"
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-switch-5"
                  >
                    직판
                  </label>
                </div>
                <div>
                  <input
                    id="checkbox-switch-6"
                    className="form-check-input"
                    type="checkbox"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-switch-6"
                  >
                    간판
                  </label>
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
      <div className="intro-y box mt-6">
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
                <td rowSpan={2}>구분</td>
                <td rowSpan={2}>지불방식</td>
                <td rowSpan={2}>건수/판매가</td>
                <td colSpan={4}>(기간 1) 2021-01-01~2021-01-30</td>
                <td colSpan={4}>(기간 2) 2022-01-01~2022-01-30</td>
                <td colSpan={3}>성장률</td>
              </tr>
              <tr className="bg-slate-50 text-center">
                <td>예약확정</td>
                <td>렌티드</td>
                <td>비율</td>
                <td>전환율</td>
                <td>예약확정</td>
                <td>렌티드</td>
                <td>비율</td>
                <td>전환율</td>
                <td>예약확정</td>
                <td>렌티드</td>
                <td>전환율</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={7}>직판</td>
                <td rowSpan={3}>지금결제</td>
                <td>건수</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="bg-success/20 text-center">
                <td>소계</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={3}>현지결제</td>
                <td>건수</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="bg-success/20 text-center">
                <td>소계</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="bg-primary/20 text-center">
                <td>소계</td>
                <td>-</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={7}>간판</td>
                <td rowSpan={3}>지금결제</td>
                <td>건수</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="bg-success/20 text-center">
                <td>소계</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="text-center">
                <td rowSpan={3}>현지결제</td>
                <td>건수</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="text-center">
                <td>판매가</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="bg-success/20 text-center">
                <td>소계</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="bg-primary/20 text-center">
                <td>소계</td>
                <td>-</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
              <tr className="bg-danger/20 text-center font-bold">
                <td>총계</td>
                <td>-</td>
                <td>-</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%</td>
                <td>10%</td>
                <td>300</td>
                <td>30</td>
                <td>10%P</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
      <div className="box mt-8">
        <div className="flex flex-row border-b border-slate-200/60 p-3">
          <h2 className="mr-auto text-lg font-bold">
            (기간 1) 2021-01-01~2021-01-30
          </h2>
        </div>
        <div className="var_chart flex items-center">
          <div className="p-3">
            <div className="text-center font-bold">직판/지금결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">직판/현지결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">간판/지금결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">간판/현지결제</div>
            <VerticalBarChart height={300} />
          </div>
        </div>
      </div>

      <div className="box mt-8">
        <div className="flex flex-row border-b border-slate-200/60 p-3">
          <h2 className="mr-auto text-lg font-bold">
            (기간 2) 2022-01-01~2022-01-30
          </h2>
        </div>
        <div className="var_chart flex items-center">
          <div className="p-3">
            <div className="text-center font-bold">직판/지금결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">직판/현지결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">간판/지금결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">간판/현지결제</div>
            <VerticalBarChart height={300} />
          </div>
        </div>
      </div>

      <div className="box mt-8">
        <div className="flex flex-row border-b border-slate-200/60 p-3">
          <h2 className="mr-auto text-lg font-bold">성장률</h2>
        </div>
        <div className="var_chart flex items-center">
          <div className="p-3">
            <div className="text-center font-bold">직판/지금결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">직판/현지결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">간판/지금결제</div>
            <VerticalBarChart height={300} />
          </div>
          <div className="p-3">
            <div className="text-center font-bold">간판/현지결제</div>
            <VerticalBarChart height={300} />
          </div>
        </div>
      </div>

      {/* END: Page Layout */}
    </>
  )
}

export default Rented
