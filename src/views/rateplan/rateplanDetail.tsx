import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Menu, Popover } from '@/base-components/Headless'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import {
  Highlight,
  Preview,
  PreviewComponent,
  Source,
} from '../../base-components/PreviewComponent'

const RateplanMngRevice = () => {
  const [notifyrange, setNotifyrange] = useState('')
  const [notifyrange2, setNotifyrange2] = useState('')
  const [programmaticDropdown, setProgrammaticDropdown] = useState(false)
  const [optionModal, setOptionModal] = useState(false)
  const [RegistBtn, setRegistBtn] = useState(false)
  const [RegistBtn2, setRegistBtn2] = useState(false)
  const [noShowModal, setNoShowModal] = useState(false)
  const [noShowModal2, setNoShowModal2] = useState(false)
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">요금제 상세/수정</h2>
      </div>
      <div className="box mt-3 p-3">
        <table className="table-bordered table">
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
            <td colSpan={3}>
              <select className="form-select w-56">
                <option value="">전체</option>
                <option value="">option1</option>
                <option value="">option2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">요금 타입</td>
            <td colSpan={3}>
              <div className="flex flex-row gap-2">
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-4"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button2"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-radio-label"
                    htmlFor="radio-dis-switch-4"
                  >
                    지금결제
                  </label>
                </div>
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-2"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button2"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-radio-label"
                    htmlFor="radio-dis-switch-2"
                  >
                    현지결제
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">요금제명</td>
            <td colSpan={3}>
              <input type="text" className="form-control" />
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">요금제 코드</td>
            <td colSpan={3}>
              <table className="table-border table">
                <thead className="table-dark text-center">
                  <tr>
                    <th>CONTRACT ID</th>
                    <th>PRODUCT CODE</th>
                    <th>IATA</th>
                    <th>CorpDiscountNumber</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                    <td>
                      <input type="text" className="form-control" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">예약기간</td>
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
            <td className="whitespace-nowrap  bg-slate-100 ">대여기간</td>
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
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">자동포함옵션</td>
            <td colSpan={3}>
              <div className="flex flex-row">
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-1"
                  >
                    자차
                  </label>
                </div>
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-2"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-2"
                  >
                    대인/대물
                  </label>
                </div>
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-3"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-3"
                  >
                    대인/대물
                  </label>
                </div>
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-4"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-4"
                  >
                    긴급출동서비스
                  </label>
                </div>
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-5"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-5"
                  >
                    네비게이션
                  </label>
                </div>
                <div className="form-check mr-2">
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
                    추가운전자 1인 등록비
                  </label>
                </div>
                <div className="form-check mr-2">
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
                    영드라이버피
                  </label>
                </div>
                <div className="form-check mr-2">
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
                    세금
                  </label>
                </div>
                <div className="form-check mr-2">
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
                    연료
                  </label>
                </div>
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-40"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-40"
                  >
                    면책금보험
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">수동포함옵션</td>
            <td colSpan={3}>
              <div className="flex">
                <div className="form-check mr-2">
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
                    GPS Navigation Device
                  </label>
                </div>
                <div className="form-check mr-2">
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
                    Additional Driver
                  </label>
                </div>
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-12"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-12"
                  >
                    개발시 항목 추후 추가예정
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
            <td colSpan={3}>
              <div className="flex gap-2">
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-5"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-radio-label"
                    htmlFor="radio-dis-switch-5"
                  >
                    Y
                  </label>
                </div>
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-6"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button"
                    value="horizontal-check2"
                  />
                  <label
                    className="form-radio-label"
                    htmlFor="radio-dis-switch-6"
                  >
                    N
                  </label>
                </div>
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-7"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button"
                    value="horizontal-check2"
                  />
                  <label
                    className="form-radio-label"
                    htmlFor="radio-dis-switch-7"
                  >
                    관리자용
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">
              국가/주/도시/지점
            </td>
            <td colSpan={3}>
              <div className="grid grid-cols-12 gap-4">
                <div className="intro-y col-span-6">
                  <table className="table-border table">
                    <thead className="table-dark text-center">
                      <tr>
                        <th colSpan={2}>국가/주/도시/지점 연결정보</th>
                      </tr>
                      <tr>
                        <th className="bg-slate-100 text-dark">번호</th>
                        <th className="bg-slate-100 text-dark">
                          국가/주/도시/지점
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="w-20 text-center">1</td>
                        <td>
                          <div className="flex w-full items-center">
                            뉴질랜드 New Zealand
                            <div className="ml-auto flex items-center gap-2">
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => setOptionModal(true)}
                              >
                                <Lucide icon="Filter" className="h-4 w-4" />
                              </button>
                              <button className="btn btn-danger btn-sm">
                                <Lucide
                                  icon="Minus"
                                  className="h-4 w-4"
                                ></Lucide>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                      {/* <tr>
                        <td className="w-20 text-center">2</td>
                        <td>
                          <div className="flex items-center w-full">
                            뉴질랜드 New Zealand
                            <div className="ml-auto flex items-center gap-2">
                              <Dropdown>
                                <DropdownToggle className="btn btn-primary btn-sm">
                                  <Lucide icon="Filter" className="w-4 h-4" />
                                </DropdownToggle>
                                <DropdownMenu className="w-350">
                                  <DropdownContent>
                                    <DropdownHeader>
                                      자동포함옵션
                                    </DropdownHeader>
                                    <DropdownDivider />
                                    <DropdownItem>
                                      <div className="flex flex-row">
                                        <div className="form-check mr-2">
                                          <input
                                            id="checkbox-display-switch-3"
                                            className="form-check-input"
                                            type="checkbox"
                                            name="horizontal_checkbox_button"
                                            value="horizontal-check1"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="checkbox-display-switch-3"
                                          >
                                            자차
                                          </label>
                                        </div>
                                        <div className="form-check mr-2">
                                          <input
                                            id="checkbox-display-switch-4"
                                            className="form-check-input"
                                            type="checkbox"
                                            name="horizontal_checkbox_button"
                                            value="horizontal-check1"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="checkbox-display-switch-4"
                                          >
                                            자손
                                          </label>
                                        </div>
                                        <div className="form-check mr-2">
                                          <input
                                            id="checkbox-display-switch-5"
                                            className="form-check-input"
                                            type="checkbox"
                                            name="horizontal_checkbox_button"
                                            value="horizontal-check1"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="checkbox-display-switch-5"
                                          >
                                            대인/대물손
                                          </label>
                                        </div>
                                        <div className="form-check mr-2">
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
                                            GPS
                                          </label>
                                        </div>
                                      </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <div className="flex flex-row">
                                        <div className="form-check mr-2">
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
                                            추가운전자 1인 등록비
                                          </label>
                                        </div>
                                      </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <div className="flex flex-row">
                                        <div className="form-check mr-2">
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
                                            UnderageFee
                                          </label>
                                        </div>
                                      </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <div className="flex flex-row">
                                        <div className="form-check mr-2">
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
                                            세금
                                          </label>
                                        </div>
                                        <div className="form-check mr-2">
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
                                            연료
                                          </label>
                                        </div>
                                        <div className="form-check mr-2">
                                          <input
                                            id="checkbox-display-switch-12"
                                            className="form-check-input"
                                            type="checkbox"
                                            name="horizontal_checkbox_button"
                                            value="horizontal-check1"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="checkbox-display-switch-12"
                                          >
                                            면책금(괌)
                                          </label>
                                        </div>
                                      </div>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownHeader>
                                      수동포함옵션
                                    </DropdownHeader>
                                    <DropdownDivider />
                                    <DropdownItem>
                                      <div className="flex flex-row">
                                        <div className="form-check mr-2">
                                          <input
                                            id="checkbox-display-switch-13"
                                            className="form-check-input"
                                            type="checkbox"
                                            name="horizontal_checkbox_button"
                                            value="horizontal-check1"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="checkbox-display-switch-13"
                                          >
                                            세금
                                          </label>
                                        </div>
                                        <div className="form-check mr-2">
                                          <input
                                            id="checkbox-display-switch-14"
                                            className="form-check-input"
                                            type="checkbox"
                                            name="horizontal_checkbox_button"
                                            value="horizontal-check1"
                                          />
                                          <label
                                            className="form-check-label"
                                            htmlFor="checkbox-display-switch-14"
                                          >
                                            연료
                                          </label>
                                        </div>
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
                                            면책금(괌)
                                          </label>
                                        </div>
                                      </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <div className="flex flex-row">
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
                                            추가요금 항목 1
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
                                            추가요금 항목 2
                                          </label>
                                        </div>
                                      </div>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <div className="flex flex-row">
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
                                            추가요금 항목 3
                                          </label>
                                        </div>
                                      </div>
                                    </DropdownItem>
                                    <DropdownDivider />
                                    <DropdownFooter>
                                      <button
                                        type="button"
                                        className="btn btn-primary py-1 px-2 ml-auto"
                                      >
                                        확인
                                      </button>
                                    </DropdownFooter>
                                  </DropdownContent>
                                </DropdownMenu>
                              </Dropdown>
                              <button className="btn btn-danger btn-sm">
                                <Lucide
                                  icon="Minus"
                                  className="w-4 h-4"
                                ></Lucide>
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
                <div className="intro-y col-span-6">
                  <table className="table-border table">
                    <thead className="table-dark">
                      <tr>
                        <th colSpan={2} className="text-center">
                          국가/주/도시/지점 연결
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-slate-100 ">국가/주/도시/지점</td>
                        <td>
                          <div className="">
                            <Preview>
                              <div className="">
                                <Popover className="inline-block w-44">
                                  {({ close }) => (
                                    <>
                                      <Popover.Button as={Button}>
                                        국가선택
                                        <Lucide
                                          icon="ChevronDown"
                                          className="ml-2 h-4 w-4"
                                        />
                                      </Popover.Button>
                                      <Popover.Panel placement="bottom-start">
                                        <div className="p-2">
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox01"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox01"
                                            >
                                              뉴질랜드 New Zealand
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox02"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox02"
                                            >
                                              호주 Australia
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox03"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox03"
                                            >
                                              괌 Guam
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox04"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox04"
                                            >
                                              독일 Germany
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox05"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox05"
                                            >
                                              미국(United States)
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox06"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox06"
                                            >
                                              사이판 Saipan
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox07"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox07"
                                            >
                                              스위스 Switzerland
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox08"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox08"
                                            >
                                              스페인 Spain
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox09"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox09"
                                            >
                                              아일랜드 Ireland
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox10"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox10"
                                            >
                                              영국 United Kingdom
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox11"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox11"
                                            >
                                              오스트리아 Austria
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox12"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox12"
                                            >
                                              캐나다 Canada
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox13"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox13"
                                            >
                                              팔라우 Palau
                                            </label>
                                          </div>
                                          <div className="form-check mr-2">
                                            <input
                                              id="checkbox14"
                                              className="form-check-input"
                                              type="checkbox"
                                              name="horizontal_checkbox_button"
                                              value="horizontal-check1"
                                            />
                                            <label
                                              className="form-check-label"
                                              htmlFor="checkbox14"
                                            >
                                              필리핀 Philippines
                                            </label>
                                          </div>
                                        </div>
                                      </Popover.Panel>
                                    </>
                                  )}
                                </Popover>
                              </div>
                            </Preview>

                            {/* 국가 선택 시 */}
                            <div className="mt-2">
                              <div className="bg-slate-100 p-2">주</div>
                              <div className="box flex flex-col gap-2 p-3">
                                <div className="flex items-center gap-2">
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
                                      전체
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
                                      주 1
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
                                      주 2
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="mt-2">
                              <div className="bg-slate-100 p-2">도시</div>
                              <div className="box flex flex-col gap-2 p-3">
                                <div className="flex items-center gap-2">
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
                                      전체
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
                                      도시 1
                                    </label>
                                  </div>
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
                                      도시 2
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mt-2">
                              <div className="bg-slate-100 p-2">지점</div>
                              <div className="box flex flex-col gap-2 p-3">
                                <div className="flex items-center gap-2">
                                  <div className="form-check mr-2">
                                    <input
                                      id="checkbox-display-switch-30"
                                      className="form-check-input"
                                      type="checkbox"
                                      name="horizontal_checkbox_button"
                                      value="horizontal-check1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="checkbox-display-switch-30"
                                    >
                                      전체
                                    </label>
                                  </div>
                                  <div className="form-check mr-2">
                                    <input
                                      id="checkbox-display-switch-31"
                                      className="form-check-input"
                                      type="checkbox"
                                      name="horizontal_checkbox_button"
                                      value="horizontal-check1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="checkbox-display-switch-31"
                                    >
                                      지점 1
                                    </label>
                                  </div>
                                  <div className="form-check mr-2">
                                    <input
                                      id="checkbox-display-switch-32"
                                      className="form-check-input"
                                      type="checkbox"
                                      name="horizontal_checkbox_button"
                                      value="horizontal-check1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="checkbox-display-switch-32"
                                    >
                                      지점 2
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <button className="btn btn-primary btn-sm">
                              <Lucide icon="Plus" className="h-4 w-4"></Lucide>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap bg-slate-100 ">최종수정자</td>
            <td>홍길동</td>
            <td className="whitespace-nowrap bg-slate-100 ">최종수정일시</td>
            <td>2022-11-11 11:11:11</td>
          </tr>
        </table>
      </div>
      <div className="pt-3">
        <div className="flex-center flex gap-3">
          <button
            type="button"
            className="btn btn-dark w-24"
            onClick={() => setNoShowModal(true)}
          >
            미노출
          </button>
          <Link to="/rateplan/rateplan">
            <button className="btn w-24 bg-white">취소</button>
          </Link>
          <button className="btn btn-primary w-24"
            onClick={() =>
              setRegistBtn2(true)
            }
          >등록</button>
        </div>
      </div>

      <Dialog
        open={noShowModal}
        onClose={() => {
          setNoShowModal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">미노출</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setNoShowModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              해당 요금제 노출상태를 미노출로 변경하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 text-center">
            <Button
              type="button"
              className="mr-2 w-24"
              onClick={() => {
                setNoShowModal(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              className="w-24"
              onClick={() => {
                setNoShowModal2(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* 미노출 확인 */}
      <Dialog
        open={noShowModal2}
        onClose={() => {
          setNoShowModal2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setNoShowModal2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              미노출 처리되었습니다
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 text-center">
            <Button
              type="button"
              variant="primary"
              className="w-24"
              onClick={() => {
                setNoShowModal(false)
                setNoShowModal2(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

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

      {/*최종 등록 버튼*/}
      <Dialog
        open={RegistBtn2}
        onClose={() => {
          setRegistBtn2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setRegistBtn2(false)
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
              <Link to="/rateplan/rateplan">
                <button
                  type="button"
                  onClick={() => {
                    setRegistBtn2(false)
                  }}
                  className="btn btn-primary w-24"
                >
                  확인
                </button>
              </Link>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
export default RateplanMngRevice
