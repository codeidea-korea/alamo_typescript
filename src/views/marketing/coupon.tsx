import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Menu } from '@/base-components/Headless'
import { Tab } from '@/base-components/Headless'
import { Popover } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'
import { Preview } from '@/base-components/PreviewComponent'

import CouponList from './components/CouponList'

const Coupon = () => {
  const [daterange, setDaterange] = useState('')
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold"></h2>
      </div>
      <Tab.Group>
        <Tab.List className="nav-tabs">
          <Tab className="flex-none	">
            <Link to="/marketing/coupon">
              <Tab.Button className="text-base font-bold" as="button">
                쿠폰 발급대상
              </Tab.Button>
            </Link>
          </Tab>
          <Tab className="flex-none">
            <Link to="/marketing/coupon/status">
              <Tab.Button className="text-base font-bold" as="button">
                쿠폰 사용현황
              </Tab.Button>
            </Link>
          </Tab>
        </Tab.List>
      </Tab.Group>

      <div className="intro-y box p-3">
        <table className="table-bordered table w-full">
          <tbody>
            <tr>
              <td className="w-60 bg-slate-100 text-center font-semibold">
                <select className="form-select">
                  <option>예약가능기간</option>
                  <option>픽업가능기간</option>
                </select>
              </td>
              <td colSpan={3}>
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
                    className="form-control block pl-12"
                  />
                </div>
              </td>
              <td className="bg-slate-100 text-center font-semibold">브랜드</td>
              <td>
                <select className="form-select">
                  <option>전체</option>
                  <option>브랜드1</option>
                  <option>브랜드2</option>
                </select>
              </td>
              <td className="bg-slate-100 text-center font-semibold">
                쿠폰상태
              </td>
              <td>
                <div className="flex gap-2">
                  <div className="form-check mr-2">
                    <input
                      id="radio-switch-6"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_radio_button"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-6"
                    >
                      사용
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="radio-switch-7"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_radio_button"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-7"
                    >
                      미사용
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="bg-slate-100 text-center font-semibold">
                발급조건
              </td>
              <td>
                <select className="form-select w-28">
                  <option>전체</option>
                  <option>신규회원</option>
                  <option>이용횟수</option>
                  <option>수동발급</option>
                </select>
              </td>
              <td className="bg-slate-100 text-center font-semibold">
                쿠폰대상
              </td>
              <td className="w-80">
                <div className="flex gap-5">
                  <div className="form-check">
                    <input
                      id="radio-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_radio_button"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-4"
                    >
                      전체(회원/비회원)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="radio-switch-5"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_radio_button"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-5"
                    >
                      회원
                    </label>
                  </div>
                </div>
              </td>
              <td className="w-24 bg-slate-100 text-center font-semibold">
                국가/주
              </td>
              <td>
                <div className="flex gap-2">
                  <Preview>
                    <div className="">
                      <Popover className="inline-block">
                        {({ close }) => (
                          <>
                            <Popover.Button as={Button}>
                              국가선택
                              <Lucide
                                icon="ChevronDown"
                                className="ml-2 h-4 w-4"
                              />
                            </Popover.Button>
                            <Popover.Panel
                              placement="bottom-start"
                              className="w-48"
                            >
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

                  <Preview>
                    <div className="">
                      <Popover className="inline-block">
                        {({ close }) => (
                          <>
                            <Popover.Button as={Button}>
                              주 선택
                              <Lucide
                                icon="ChevronDown"
                                className="ml-2 h-4 w-4"
                              />
                            </Popover.Button>
                            <Popover.Panel
                              placement="bottom-start"
                              className="w-48"
                            >
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
                                    주 option1
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
                                    주 option2
                                  </label>
                                </div>
                              </div>
                            </Popover.Panel>
                          </>
                        )}
                      </Popover>
                    </div>
                  </Preview>
                </div>
              </td>
              <td className="bg-slate-100 text-center font-semibold">
                중복발행여부
              </td>
              <td>
                <div className="flex flex-row gap-2">
                  <div className="form-check mr-2">
                    <input
                      id="radio-switch-8"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_radio_button"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-8"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="radio-switch-9"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_radio_button"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-9"
                    >
                      N
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3">
        <div className="flex-center flex gap-2">
          <button className="btn w-24 bg-white">초기화</button>
          <button className="btn btn-primary w-24">조회</button>
        </div>
      </div>

      <CouponList />
    </>
  )
}
export default Coupon
