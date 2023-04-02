import { useState } from 'react'
import { Link } from 'react-router-dom'

import Lucide from '@/base-components/Lucide'

import BranchList from './components/BranchList'

const BranchMng = () => {
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">지점 관리</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
              <td>
                <select className="form-select w-56">
                  <option value="">전체</option>
                  <option value="">option1</option>
                  <option value="">option2</option>
                </select>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
              <td>
                <div className="flex flex-row gap-2">
                  <div className="form-check mr-2">
                    <input
                      id="checkbox-switch-1"
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-1"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check mr-2 mt-0">
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
                      N
                    </label>
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">국문명 유무</td>
              <td>
                <div className="flex flex-row gap-2">
                  <div className="form-check mr-2">
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
                  <div className="form-check mr-2 mt-0">
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
                      N
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">지점코드</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">지점 국문명</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">지점 영문명</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">주 코드</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">주 국문명</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">주 영문명</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">도시 코드</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">도시 국문명</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">도시 영문명</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">국가 코드</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">국가 국문명</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">국가 영문명</td>
              <td>
                <input type="text" placeholder="" className="form-control" />
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
      {/* <div className="mt-8 flex">
        <button
          onClick={() => toggleMenu()}
          className="btn btn-warning all_open w-24"
        >
          전체
          <Lucide icon="ChevronDown" className="ml-2 h-4 w-4" />
        </button>
      </div> */}

      <BranchList />
    </>
  )
}
export default BranchMng
