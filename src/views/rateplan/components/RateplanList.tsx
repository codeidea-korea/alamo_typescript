import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Menu } from '@/base-components/Headless'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

export default function RateplanList() {
  const [optionModal, setOptionModal] = useState(false)
  
  const [RegistBtn, setRegistBtn] = useState(false)

  return (
    <div className="mt-5 grid grid-cols-12 gap-4">
      <div className="intro-y box col-span-3 p-3">
        <div className="w-full overflow-x-auto">
          <table className="table-bordered table">
            <thead className="table-dark text-center">
              <tr>
                <th>국가/주/도시/지점 연결정보</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-center">
                <td className="bg-white">
                  <div className="flex items-center gap-2">
                    <select className="form-select w-24">
                      <option value="">국가 선택</option>
                      <option value="">option1</option>
                      <option value="">option2</option>
                    </select>
                    <select className="form-select w-24">
                      <option value="">주 선택</option>
                      <option value="">option1</option>
                      <option value="">option2</option>
                    </select>
                    <select className="form-select w-24">
                      <option value="">도시 선택</option>
                      <option value="">option1</option>
                      <option value="">option2</option>
                    </select>
                    <select className="form-select w-24">
                      <option value="">지점 선택</option>
                      <option value="">option1</option>
                      <option value="">option2</option>
                    </select>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <table className="table-bordered table w-full">
          <thead className="table-dark text-center">
            <tr>
              <th className="w-20">번호</th>
              <th>국가/주/도시/지점</th>
            </tr>
          </thead>
          <tbody className="bg-white text-center">
            <tr>
              <td className="bg-slate-100">99</td>
              <td>
                <div className="flex items-center">
                  미국
                  <div className="ml-auto">
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => setOptionModal(true)}
                    >
                      <Lucide icon="Filter" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="space-between flex items-center p-5">
          <span className="btn btn-sm btn-secondary-soft w-24">
            총 30,000건
          </span>
        </div>
      </div>
      <div className="intro-y box col-span-9 p-3">
        <div className="box w-full overflow-x-auto">
          <table className="table-bordered table">
            <thead className="table-dark text-center">
              <tr>
                <th colSpan={17}>
                  <div className="ml-2 flex items-center">
                    <Link
                      to="/rateplan/rateplan/create"
                      className="btn btn-outline btn-sm text-white"
                    >
                      요금제 등록
                    </Link>
                    <select
                      className="form-select-sm form-select mr-2 ml-auto w-24 text-dark"
                      aria-label="Default select example"
                    >
                      <option>100개</option>
                      <option>option1</option>
                      <option>option2</option>
                    </select>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-center">
              <tr className="bg-slate-100">
                <td className="" rowSpan={2}>
                  번호
                </td>
                <td rowSpan={2}>브랜드</td>
                <td rowSpan={2}>요금제명</td>
                <td rowSpan={2}>CONTRACT ID</td>
                <td rowSpan={2}>PRODUCT CODE</td>
                <td rowSpan={2}>IATA</td>
                <td rowSpan={2}>
                  CorpDiscount
                  <br />
                  Number
                </td>
                <td rowSpan={2}>적용타입</td>
                <td colSpan={6}>요금제 연결 현황</td>
                <td rowSpan={2}>노출여부</td>
                <td rowSpan={2}>최종수정자</td>
                <td rowSpan={2}>최종수정일시</td>
              </tr>
              <tr className="bg-slate-100">
                <td className="bg-slate-50">전체 연결정보</td>
                <td className="bg-slate-50">국가별</td>
                <td className="bg-slate-50">주별</td>
                <td className="bg-slate-50">도시별</td>
                <td className="bg-slate-50">도시별</td>
                <td className="bg-slate-50">지점별</td>
              </tr>
              <tr>
                <td>99</td>
                <td>내셔널</td>
                <td>
                  <Link
                    to="/rateplan/rateplan/detail"
                    className="text-primary underline"
                  >
                    2022 보험플러스 GPS_CA0LS1
                  </Link>
                </td>
                <td>J0002NFG1</td>
                <td>TMK</td>
                <td>-</td>
                <td>-</td>
                <td>현지결제</td>
                <td>
                  <button type="button" className='btn btn-primary btn-sm'>연결 정보</button>
                </td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>Y</td>
                <td>홍길동</td>
                <td>2022-11-11 11:11:11</td>
              </tr>
              <tr>
                <td>99</td>
                <td>내셔널</td>
                <td>
                  <Link
                    to="/rateplan/rateplan/detail"
                    className="text-primary underline"
                  >
                    2022 보험플러스 GPS_CA0LS1
                  </Link>
                </td>
                <td>J0002NFG1</td>
                <td>TMK</td>
                <td>-</td>
                <td>-</td>
                <td>현지결제</td>
                <td>
                  <button type="button" className='btn btn-primary btn-sm'>연결 정보</button>
                </td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>Y</td>
                <td>홍길동</td>
                <td>2022-11-11 11:11:11</td>
              </tr>
              <tr>
                <td>99</td>
                <td>내셔널</td>
                <td>
                  <Link
                    to="/rateplan/rateplan/detail"
                    className="text-primary underline"
                  >
                    2022 보험플러스 GPS_CA0LS1
                  </Link>
                </td>
                <td>J0002NFG1</td>
                <td>TMK</td>
                <td>-</td>
                <td>-</td>
                <td>현지결제</td>
                <td>
                  <button type="button" className='btn btn-primary btn-sm'>연결 정보</button>
                </td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>22</td>
                <td>Y</td>
                <td>홍길동</td>
                <td>2022-11-11 11:11:11</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="space-between flex items-center p-5">
          <span className="btn btn-sm btn-secondary-soft w-24">
            총 30,000건
          </span>
          <div className="intro-y col-span-12 flex flex-wrap items-center sm:flex-row sm:flex-nowrap">
            <nav className="w-full sm:mr-auto sm:w-auto">
              <ul className="pagination">
                <li className="page-item">
                  <Link className="page-link" to="">
                    <Lucide icon="ChevronsLeft" className="h-4 w-4" />
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    <Lucide icon="ChevronLeft" className="h-4 w-4" />
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    ...
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    1
                  </Link>
                </li>
                <li className="page-item active">
                  <Link className="page-link" to="">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    ...
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    <Lucide icon="ChevronRight" className="h-4 w-4" />
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" to="">
                    <Lucide icon="ChevronsRight" className="h-4 w-4" />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex-end flex items-center">
            <input
              id="regular-form-1"
              type="text"
              className="form-control form-control-sm mr-1 w-12 text-center"
              defaultValue={1}
            />
            / 200
          </div>
        </div>
      </div>
      <Dialog
        open={optionModal}
        onClose={() => {
          setOptionModal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">자동포함옵션</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setOptionModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="flex flex-row py-1">
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-15"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-15"
                >
                  자차
                </label>
              </div>
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-16"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-16"
                >
                  자손
                </label>
              </div>
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-17"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-17"
                >
                  대인/대물
                </label>
              </div>
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-18"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-18"
                >
                  GPS
                </label>
              </div>
            </div>
            <div className="flex flex-row py-1">
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-19"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-19"
                >
                  추가운전자 1인 등록비
                </label>
              </div>
            </div>
            <div className="flex flex-row py-1">
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-20"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-20"
                >
                  UnderageFee
                </label>
              </div>
            </div>
            <div className="flex flex-row py-1">
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-21"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-21"
                >
                  세금
                </label>
              </div>
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-22"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-22"
                >
                  연료
                </label>
              </div>
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-23"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-23"
                >
                  면책금(괌)
                </label>
              </div>
            </div>
            <div className="mt-4 font-bold">수동포함옵션</div>
            <div className="flex flex-row py-1">
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-24"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-24"
                >
                  세금
                </label>
              </div>
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-25"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-25"
                >
                  연료
                </label>
              </div>
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-26"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-26"
                >
                  면책금(괌)
                </label>
              </div>
            </div>
            <div className="flex flex-row py-1">
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-27"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-27"
                >
                  추가요금 항목 1
                </label>
              </div>
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-28"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-28"
                >
                  추가요금 항목 2
                </label>
              </div>
            </div>
            <div className="flex flex-row py-1">
              <div className="form-check mr-2">
                <input
                  id="checkbox-display-switch-29"
                  className="form-check-input"
                  type="checkbox"
                  name="horizontal_checkbox_button"
                  value="horizontal-check1"
                />
                <label
                  className="form-check-label"
                  htmlFor="checkbox-display-switch-29"
                >
                  추가요금 항목 3
                </label>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 text-center">
            <Button
              type="button"
              variant="primary"
              className="w-24"
              onClick={() => {
                setRegistBtn(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 버튼*/}
      <Dialog
        open={RegistBtn}
        onClose={() => {
          setRegistBtn(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setRegistBtn(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정상적으로 등록되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setRegistBtn(false)
                  setOptionModal(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </div>
  )
}
