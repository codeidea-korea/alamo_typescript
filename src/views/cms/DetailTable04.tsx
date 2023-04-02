import React, { useState } from 'react';
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'
import bannerImg4 from '@/assets/images/profile-7.jpg'

const DetailTable04 = () => {

  const [daterange, setDaterange] = useState('')


  return (
    <>
      {/* table4 */}
      <div className="flex flex-row overflow-x-auto p-3">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className=" text-center" rowSpan={4}>
                <div className="mx-auto mt-3 w-56">
                  <img src={bannerImg4} alt="" />
                </div>
              </td>
              <td className="" rowSpan={4}>
                <div className="flex-center flex items-center">4</div>
              </td>
              <td className="whitespace-nowrap  bg-slate-100">제목</td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control mb-2 mr-3 w-60"
                  placeholder="4번테이블"
                />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">노출기간</td>
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
              <td className="whitespace-nowrap bg-slate-100">노출여부</td>
              <td className="w-24">
                <div className="flex flex-row gap-2">
                  <div className="form-check gap-2">
                    <input
                      id="radio06"
                      className="form-check-input"
                      type="radio"
                      name="radio05"
                      defaultChecked
                    />
                    <label className="form-radio-label" htmlFor="radio06">
                      Y
                    </label>
                  </div>
                  <div className="form-check gap-2">
                    <input
                      id="radio07"
                      className="form-check-input"
                      type="radio"
                      name="radio05"
                    />
                    <label className="form-radio-label" htmlFor="radio07">
                      N
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">이미지</td>
              <td className="">
                <label
                  htmlFor="fileadd"
                  className="btn btn-sm btn-secondary w-16"
                >
                  파일 찾기
                </label>
                <input
                  type="file"
                  name="fileadd"
                  id="fileadd"
                  className="hidden"
                  multiple
                />
                <span className="ml-3 text-xs text-sky-600">
                  ※ JPG, PNG, SVG, PDF, DOC, HWP 만 가능 / 000px x 000px
                </span>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">alt</td>
              <td className="" colSpan={3}>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control mb-2 mr-3 w-60"
                  placeholder=""
                />
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">내용</td>
              <td colSpan={5}>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control mb-2 mr-3"
                  placeholder=""
                />
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">연결URL</td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control mb-2 mr-3"
                  placeholder=""
                />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">연결</td>
              <td className="" colSpan={5}>
                <div className="flex flex-row">
                  <div className="form-check mr-2">
                    <input
                      id="swich01"
                      className="form-check-input"
                      type="radio"
                      name="swich01"
                    />
                    <label className="form-check-label" htmlFor="swich01">
                      본창
                    </label>
                  </div>
                  <div className="form-check mr-2">
                    <input
                      id="swich02"
                      className="form-check-input"
                      type="radio"
                      name="swich01"
                    />
                    <label className="form-check-label" htmlFor="swich02">
                      새탭
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
export default DetailTable04
