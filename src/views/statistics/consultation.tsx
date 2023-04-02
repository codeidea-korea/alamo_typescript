import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

function ConsultationSta() {
  const [daterange, setDaterange] = useState('')
  const [daterange2, setDaterange2] = useState('')
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">상담 통계</h2>
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
          </tr>
        </table>
      </div>
      <div className="flex-center mt-3 flex gap-3">
        <button className="btn w-24 bg-white">초기화</button>
        <button className="btn btn-primary w-24">조회</button>
      </div>

      <div className="box mt-6 p-3">
        <table className="table-bordered table-hover table">
          <tr className="bg-slate-100 text-center">
            <td>브랜드</td>
            <td>지난주(9월 2주)</td>
            <td>금주(9월 3주)</td>
            <td>성장률</td>
          </tr>
          <tr className="text-center">
            <td>총 상담 건수</td>
            <td>34</td>
            <td>18</td>
            <td>-48%</td>
          </tr>
          <tr className="text-center">
            <td>알라모</td>
            <td>34</td>
            <td>18</td>
            <td>-48%</td>
          </tr>
          <tr className="text-center">
            <td>네셔널</td>
            <td>34</td>
            <td>18</td>
            <td>-48%</td>
          </tr>
        </table>
      </div>

      {/* 하위테이블 시작 */}
      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <div className="box">
            <div className="border-slate-200/6 space-between flex border-b p-3">
              <h2 className="mr-auto text-lg font-bold">상담유형</h2>
            </div>
            <div className="table-scroll flex flex-row border-b border-slate-200/60 p-3">
              <div className="w-full overflow-x-auto">
                <table className="table-bordered table">
                  <tr className="bg-slate-100 text-center">
                    <td rowSpan={2}>유형구분</td>
                    <td colSpan={2}>2021-10-01~2021-10-31</td>
                    <td colSpan={2}>2022-10-01~2023-10-31</td>
                    <td rowSpan={2}>기간 1/ 기간 2 성장률</td>
                  </tr>
                  <tr className="bg-slate-50 text-center">
                    <td>건수</td>
                    <td>비율</td>
                    <td>건수</td>
                    <td>비율</td>
                  </tr>
                  <tr className="text-center">
                    <td>견적 문의</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>견적 문의</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>견적 문의</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>견적 문의</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>견적 문의</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>견적 문의</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="border-slate-200/6 space-between flex border-b p-3">
              <h2 className="mr-auto text-lg font-bold">예약고객 vs 비예약</h2>
            </div>
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <div className="w-full overflow-x-auto">
                <table className="table-bordered table">
                  <tr className="bg-slate-100 text-center">
                    <td rowSpan={2}>구분</td>
                    <td colSpan={2}>2021-10-01~2021-10-31</td>
                    <td colSpan={2}>2022-10-01~2023-10-31</td>
                    <td rowSpan={2}>기간 1/ 기간 2 성장률</td>
                  </tr>
                  <tr className="bg-slate-50 text-center">
                    <td>건수</td>
                    <td>비율</td>
                    <td>건수</td>
                    <td>비율</td>
                  </tr>
                  <tr className="text-center">
                    <td>예약고객</td>
                    <td>10 / 20%</td>
                    <td>-</td>
                    <td>32 / 30%</td>
                    <td>-</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>비예약고객</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="border-slate-200/6 space-between flex border-b p-3">
              <h2 className="mr-auto text-lg font-bold">직판/간판</h2>
            </div>
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <div className="w-full overflow-x-auto">
                <table className="table-bordered table">
                  <tr className="bg-slate-100 text-center">
                    <td rowSpan={2}>구분</td>
                    <td colSpan={2}>2021-10-01~2021-10-31</td>
                    <td colSpan={2}>2022-10-01~2023-10-31</td>
                    <td rowSpan={2}>기간 1/ 기간 2 성장률</td>
                  </tr>
                  <tr className="bg-slate-50 text-center">
                    <td>건수</td>
                    <td>비율</td>
                    <td>건수</td>
                    <td>비율</td>
                  </tr>
                  <tr className="text-center">
                    <td>직판</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>간판</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="border-slate-200/6 space-between flex border-b p-3">
              <h2 className="mr-auto text-lg font-bold">상담 지역</h2>
            </div>
            <div className="table-scroll flex flex-row border-b border-slate-200/60 p-3">
              <div className="w-full overflow-x-auto">
                <table className="table-bordered table">
                  <tr className="bg-slate-100 text-center">
                    <td rowSpan={2}>구분</td>
                    <td colSpan={2}>2021-10-01~2021-10-31</td>
                    <td colSpan={2}>2022-10-01~2023-10-31</td>
                    <td rowSpan={2}>기간 1/ 기간 2 성장률</td>
                  </tr>
                  <tr className="bg-slate-50 text-center">
                    <td>건수</td>
                    <td>비율</td>
                    <td>건수</td>
                    <td>비율</td>
                  </tr>
                  <tr className="text-center">
                    <td>미국</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>호주</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>호주</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>호주</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>호주</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>호주</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="border-slate-200/6 space-between flex border-b p-3">
              <h2 className="mr-auto text-lg font-bold">문의채널</h2>
            </div>
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <div className="w-full overflow-x-auto">
                <table className="table-bordered table">
                  <tr className="bg-slate-100 text-center">
                    <td rowSpan={2}>구분</td>
                    <td colSpan={2}>2021-10-01~2021-10-31</td>
                    <td colSpan={2}>2022-10-01~2023-10-31</td>
                    <td rowSpan={2}>기간 1/ 기간 2 성장률</td>
                  </tr>
                  <tr className="bg-slate-50 text-center">
                    <td>건수</td>
                    <td>비율</td>
                    <td>건수</td>
                    <td>비율</td>
                  </tr>
                  <tr className="text-center">
                    <td>전화</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                  <tr className="text-center">
                    <td>게시판</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>10</td>
                    <td>20%</td>
                    <td>30%</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* END: Page Layout */}
    </>
  )
}

export default ConsultationSta
