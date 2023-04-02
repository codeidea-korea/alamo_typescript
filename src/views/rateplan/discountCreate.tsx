import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import { Menu, Popover } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import {
  Highlight,
  Preview,
  PreviewComponent,
  Source,
} from '../../base-components/PreviewComponent'

const DiscountMngRegist = () => {
  const [notifyrange, setNotifyrange] = useState('')
  const [notifyrange2, setNotifyrange2] = useState('')
  const [programmaticDropdown, setProgrammaticDropdown] = useState(false)
  const [optionModal, setOptionModal] = useState(false)

  const [RegistBtn, setRegistBtn] = useState(false)
  const [RegistBtn2, setRegistBtn2] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">요금할인 등록</h2>
      </div>
      <div className="box mt-3 p-3">
        <table className="table-bordered table">
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
            <td colSpan={5}>
              <select className="form-select w-56">
                <option value="">전체</option>
                <option value="">option1</option>
                <option value="">option2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">요금적용타입</td>
            <td>
              <select className="form-select w-56">
                <option value="">전체</option>
                <option value="">option1</option>
                <option value="">option2</option>
              </select>
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">구분</td>
            <td>
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
                    직판
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
                    간판
                  </label>
                </div>
              </div>
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
            <td>
              <div className="flex gap-2">
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-1"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-radio-label"
                    htmlFor="radio-dis-switch-1"
                  >
                    Y
                  </label>
                </div>
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-2"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button"
                    value="horizontal-check2"
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
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">
              국가/주/도시/지점
            </td>
            <td colSpan={5}>
              <div className="grid grid-cols-12 gap-4">
                <div className="intro-y col-span-6">
                  <table className="table-border table">
                    <thead className="table-dark text-center">
                      <tr>
                        <th colSpan={2}>선택된 국가/주/도시/지점 목록</th>
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
                                className="btn btn-secondary btn-sm"
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
                      <tr>
                        <td className="w-20 text-center">2</td>
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
                    </tbody>
                  </table>
                </div>
                <div className="intro-y col-span-6">
                  <table className="table-border table">
                    <thead className="table-dark">
                      <tr>
                        <th colSpan={2} className="text-center">
                          국가/주/도시/지점 선택
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="bg-slate-100 ">국가/주/도시/지점</td>
                        <td>
                          {/* 국가선택 */}
                          <div className="gap-2">
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
                                              뉴질랜드 New Zealand
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
                                              호주 Australia
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
                                              괌 Guam
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
                                              독일 Germany
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
                                              미국(United States)
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
                                              사이판 Saipan
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
                                              스위스 Switzerland
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
                                              스페인 Spain
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
                                              htmlFor="checkbox-display-switch-11=2"
                                            >
                                              아일랜드 Ireland
                                            </label>
                                          </div>
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
                                              영국 United Kingdom
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
                                              오스트리아 Austria
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
                                              캐나다 Canada
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
                                              팔라우 Palau
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
                            <button className="btn btn-primary btn-sm mt-2">
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
            <td className="whitespace-nowrap  bg-slate-100 ">차량 코드</td>
            <td colSpan={5}>
              <select className="form-select w-56">
                <option value="">전체</option>
                <option value="">option1</option>
                <option value="">option2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">요금제 코드</td>
            <td colSpan={5}>
              <table className="table-border table">
                <thead className="table-dark text-center">
                  <tr>
                    <th>CONTRACT ID</th>
                    <th>PRODUCT CODE</th>
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
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">이벤트명</td>
            <td colSpan={5}>
              <input type="text" className="form-control w-56" />
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">설정값</td>
            <td colSpan={5}>
              <div className="flex gap-2">
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-3"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button2"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-radio-label"
                    htmlFor="radio-dis-switch-3"
                  >
                    정액
                  </label>
                </div>
                <div className="form-check mr-2 gap-2">
                  <input
                    id="radio-dis-switch-4"
                    className="form-check-input"
                    type="radio"
                    name="horizontal_radio_button2"
                    value="horizontal-check2"
                  />
                  <label
                    className="form-radio-label"
                    htmlFor="radio-dis-switch-4"
                  >
                    정률(%)
                  </label>
                </div>
                <input type="number" className="form-control w-60" />
              </div>
            </td>
          </tr>
          <tr>
            <td className="whitespace-nowrap  bg-slate-100 ">예약기간</td>
            <td colSpan={1}>
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
            <td colSpan={4}>
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
        </table>
      </div>
      <div className="pt-3">
        <div className="flex-center flex gap-3">
          <Link to="/rateplan/discount">
            <button className="btn w-24 bg-white">취소</button>
          </Link>

          <button
            className="btn btn-primary w-24"
            onClick={() => setRegistBtn2(true)}
          >
            등록
          </button>
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
                  대인/대물
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
            <div className="flex flex-row py-1">
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
            <div className="flex flex-row py-1">
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
            <div className="flex flex-row py-1">
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
            <div className="mt-4 font-bold">수동포함옵션</div>
            <div className="flex flex-row py-1">
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
            <div className="flex flex-row py-1">
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
            <div className="flex flex-row py-1">
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
          </Dialog.Description>
          <Dialog.Footer className="px-5 text-center">
            <Button
              type="button"
              variant="primary"
              className="w-24"
              onClick={() => {
                setOptionModal(false)
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
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 버튼*/}
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
              <Link to="/rateplan/discount">
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
export default DiscountMngRegist
