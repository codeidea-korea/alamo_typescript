import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Tab } from '@/base-components/Headless'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import { Popover } from '../../base-components/Headless'
import {
  Highlight,
  Preview,
  PreviewComponent,
  Source,
} from '../../base-components/PreviewComponent'

const CouponRegist = () => {
  const [daterange, setDaterange] = useState('')
  const [daterange2, setDaterange2] = useState('')
  const [buttonModalPreview, addMember] = useState(false)
  const [isDelete, setIsDelete] = useState(false)
  const [memberAdd, setMemberAdd] = useState(false)

  const [upload, setUpload] = useState(false)

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

  function handleCheckboxClick(): void {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table tbody input[type="checkbox"]',
    )
    let count = 0
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        count++
      }
    })
    setCheckedCount(count)
  }

  const [checkedCount, setCheckedCount] = useState<number>(0) // 체크박스 카운트
  // 체크 관련 코드 끝

  // 선택삭제 모달
  const [deleteConfirm, setdeleteConfirm] = useState(false)
  const [NumberCheck2, setNumberCheck2] = useState(false)

  const [RegistBtn, setRegistBtn] = useState(false) //등록
  const [RegistBtn2, setRegistBtn2] = useState(false) //정상등록
  const [IsDelete2, setIsDelete2] = useState(false) //삭제
  const [IsDelete3, setIsDelete3] = useState(false) //삭제확인
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">쿠폰 상세/수정</h2>
      </div>

      {/* BEGIN: Page Layout */}
      <Tab.Group>
        <Tab.List className="nav-tabs">
          <Tab className="flex-none	">
            <Link to="/marketing/coupon_detail">
              <Tab.Button className="text-base font-bold" as="button">
                쿠폰 상세
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
              <td className="w-44 bg-slate-100 text-center font-semibold">
                브랜드명
              </td>
              <td colSpan={3}>
                <select
                  className="form-select"
                  aria-label=".form-select-lg example"
                >
                  <option>전체</option>
                  <option>브랜드1</option>
                  <option>브랜드2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-44 bg-slate-100  text-center font-semibold">
                쿠폰명
              </td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                  value="abcd"
                />
              </td>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                쿠폰 상태
              </td>
              <td>
                <div className="mt-2 flex flex-col sm:flex-row">
                  <div className="form-check mr-2">
                    <input
                      id="coupon_state-1"
                      className="form-check-input"
                      type="radio"
                      name="coupon_state"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="coupon_state-1"
                    >
                      사용
                    </label>
                  </div>
                  <div className="form-check mr-2 mt-2 sm:mt-0">
                    <input
                      id="coupon_state-2"
                      className="form-check-input"
                      type="radio"
                      name="coupon_state"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="coupon_state-2"
                    >
                      미사용
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                쿠폰유형
              </td>
              <td>
                <div className="form-check">
                  <input
                    id="checkbox-switch-5"
                    className="form-check-input"
                    type="radio"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-switch-5"
                  >
                    차량 업그레이드
                  </label>
                </div>
              </td>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                쿠폰발급 방식
              </td>
              <td>
                <div className="flex">
                  <div className="form-check">
                    <input
                      id="checkbox-switch-4"
                      className="form-check-input"
                      type="radio"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-4"
                    >
                      자동
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                발급조건
              </td>
              <td>
                <div className="flex">
                  <select
                    className="form-select mr-2"
                    aria-label=".form-select-lg example"
                  >
                    <option>선택</option>
                    <option>신규회원</option>
                    <option>이용횟수</option>
                    <option>수동발급</option>
                  </select>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control"
                  />
                </div>
              </td>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                본사 쿠폰 코드
              </td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                  value="abcd"
                />
              </td>
            </tr>
            <tr>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                발급대상
              </td>
              <td>
                <div className="mt-2 flex flex-col sm:flex-row">
                  <div className="form-check mr-2">
                    <input
                      id="issued_subject-1"
                      className="form-check-input"
                      type="checkbox"
                      name="issued_subject"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="issued_subject-1"
                    >
                      전체(회원/비회원)
                    </label>
                  </div>
                  <div className="form-check mr-2 mt-2 sm:mt-0">
                    <input
                      id="issued_subject-2"
                      className="form-check-input"
                      type="checkbox"
                      name="issued_subject"
                      value=""
                    />
                    <label
                      className="form-check-label"
                      htmlFor="issued_subject-2"
                    >
                      회원
                    </label>
                  </div>
                </div>
              </td>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                차량대여일수
              </td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control mr-2 w-24"
                  value="1"
                />
                <span className="mr-5">일 ~</span>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control mr-2 w-24"
                  value="5"
                />
                <span>일 까지</span>
              </td>
            </tr>
            <tr>
              <td className="z w-44 bg-slate-100 text-center font-semibold">
                예약가능기간
              </td>
              <td>
                <div className="relative mr-2 w-72">
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
              <td className="w-44 bg-slate-100 text-center font-semibold">
                중복발행 여부
              </td>
              <td>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control"
                  value="1"
                />
              </td>
            </tr>
            <tr>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                픽업가능기간
              </td>
              <td>
                <div className="relative mr-2 w-72">
                  <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
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
                    className="form-control block pl-12"
                  />
                </div>
              </td>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                D-3 만료 메시지 발송
              </td>
              <td>
                <div className="mt-2 flex flex-col sm:flex-row">
                  <div className="form-check mr-2">
                    <input
                      id="expiration_message-1"
                      className="form-check-input"
                      type="radio"
                      name="expiration_message"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="expiration_message-1"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check mr-2 mt-2 sm:mt-0">
                    <input
                      id="expiration_message-2"
                      className="form-check-input"
                      type="radio"
                      name="expiration_message"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="expiration_message-2"
                    >
                      N
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                이용안내
              </td>
              <td colSpan={3}>
                <textarea
                  name="comment"
                  id="validation-form-6"
                  className="form-control"
                  placeholder=""
                >
                  이용안내 관련
                </textarea>
              </td>
            </tr>
            <tr>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                최종수정자
              </td>
              <td>홍길동</td>
              <td className="w-44 bg-slate-100 text-center font-semibold">
                최종수정일시
              </td>
              <td>2023-01-17 11:11:11</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="intro-y box mt-6">
        <div className="flex flex-row items-center border-b border-slate-200/60 p-3">
          <h2 className="mr-auto text-base font-medium">쿠폰 대상(회원)</h2>
          <div className="ml-auto">
            <button
              type="button"
              className="btn btn-sm btn-danger mr-2 w-24"
              onClick={() => {
                setdeleteConfirm(true)
                handleCheckboxClick()
              }}
            >
              삭제
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary mr-2 w-24 bg-white"
              onClick={() => setUpload(true)}
            >
              일괄 업로드
            </button>
            <button
              className="btn btn-sm btn-primary-soft w-24"
              onClick={() => {
                setMemberAdd(true)
              }}
            >
              회원추가
            </button>
          </div>
        </div>
        <div className="overflow-x-auto p-3">
          <table className="check_table table whitespace-nowrap">
            <thead className="table-dark text-center">
              <tr>
                <th>
                  <input
                    id="checkbox-only-switch-all"
                    type="checkbox"
                    className="form-check-input check_all"
                    onChange={handleCheckAll}
                    onClick={handleCheckboxClick}
                  />
                </th>
                <th>번호</th>
                <th>회원아이디</th>
                <th>한글 이름</th>
                <th>회원 이메일</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>
                  <input
                    id="checkbox-only-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>99</td>
                <td>abc</td>
                <td>홍길동</td>
                <td>abc@email.com</td>
              </tr>
              <tr>
                <td>
                  <input
                    id="checkbox-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                </td>
                <td>99</td>
                <td>abc</td>
                <td>홍길동</td>
                <td>abc@email.com</td>
              </tr>
              <tr>
                <td>
                  <input
                    id="checkbox-only-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>99</td>
                <td>abc</td>
                <td>홍길동</td>
                <td>abc@email.com</td>
              </tr>
            </tbody>
          </table>
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
      </div>

      {/* 국가/주 설정 */}
      <div className="intro-y box mt-6">
        <div className="flex flex-row items-center border-b border-slate-200/60 p-3">
          <h2 className="mr-auto text-base font-medium">국가/주 설정</h2>
        </div>
        <div className="grid grid-cols-12 gap-4 p-3">
          <div className="col-span-6">
            <table className="table-border table">
              <thead className="table-dark text-center">
                <tr>
                  <th colSpan={2}>국가/주</th>
                </tr>
                <tr>
                  <th className="bg-slate-100 text-dark">번호</th>
                  <th className="bg-slate-100 text-dark">국가/주/도시/지점</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="w-20 text-center">1</td>
                  <td>
                    <div className="flex w-full items-center">
                      뉴질랜드 New Zealand
                      <div className="ml-auto flex items-center gap-2">
                        <button className="btn btn-danger btn-sm">
                          <Lucide icon="Minus" className="h-4 w-4"></Lucide>
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
                        <button className="btn btn-danger btn-sm">
                          <Lucide icon="Minus" className="h-4 w-4"></Lucide>
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-span-6">
            <table className="table-border table">
              <thead className="table-dark">
                <tr>
                  <th colSpan={2} className="text-center">
                    국가/주
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-slate-100 ">국가/주/도시/지점</td>
                  <td>
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
                    <div className="mt-3 flex gap-2">
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
      </div>

      <div className="mt-3 flex gap-2">
        <button className="btn btn-danger" onClick={() => setIsDelete(true)}>
          삭제 (쿠폰 상태가 사용일 경우)
        </button>
        <button className="btn btn-danger" onClick={() => setIsDelete2(true)}>
          삭제 (정상 삭제)
        </button>
        <Link to="/marketing/coupon">
          <button className="btn w-24 bg-white">취소</button>
        </Link>
        <button
          className="btn btn-primary w-24"
          onClick={() => setRegistBtn(true)}
        >
          수정
        </button>
        <div className="ml-auto">
          <Link to="/marketing/coupon">
            <button className="btn btn-primary w-24">확인</button>
          </Link>
        </div>
      </div>
      {/* END: Page Layout */}

      {/* 삭제 */}
      <Dialog
        open={isDelete}
        onClose={() => {
          setIsDelete(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">쿠폰 삭제</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsDelete(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              쿠폰 상태를 확인해주세요.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsDelete(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제 */}
      <Dialog
        open={IsDelete2}
        onClose={() => {
          setIsDelete2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">삭제</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsDelete2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              정말 삭제하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 w-24"
              onClick={() => {
                setIsDelete2(false)
              }}
            >
              확인
            </Button>
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsDelete2(false)
                setIsDelete3(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제 */}
      <Dialog
        open={IsDelete3}
        onClose={() => {
          setIsDelete3(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsDelete3(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              정상적으로 삭제되었습니다
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Link to="/marketing/coupon">
              <button
                type="button"
                className="btn btn-primary ml-3 w-24"
                onClick={() => {
                  setIsDelete2(false)
                  setIsDelete3(false)
                }}
              >
                확인
              </button>
            </Link>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* BEGIN: 회원추가 모달 */}
      <Dialog
        size="xl"
        open={memberAdd}
        onClose={() => {
          setMemberAdd(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">회원추가</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setMemberAdd(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="">
              <table className="table-bordered table w-full">
                <tbody>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      회원유형
                    </td>
                    <td colSpan={3}>
                      <div className="mt-2 flex flex-col sm:flex-row">
                        <div className="form-check mr-2">
                          <input
                            id="membership_type-1"
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="membership_type-1"
                          >
                            일반회원
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            id="membership_type-2"
                            className="form-check-input"
                            type="checkbox"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="membership_type-2"
                          >
                            여행사회원
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100  text-center font-semibold">
                      아이디
                    </td>
                    <td>
                      <input
                        id="member_id"
                        type="text"
                        className="form-control"
                      />
                    </td>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      한글 이름
                    </td>
                    <td>
                      <input
                        id="member_ko_name"
                        type="text"
                        className="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      휴대폰번호
                    </td>
                    <td>
                      <input
                        id="member_phone"
                        type="number"
                        className="form-control"
                      />
                    </td>
                    <td className="w-44 bg-slate-100 text-center font-semibold">
                      이메일
                    </td>
                    <td>
                      <input
                        id="member_email"
                        type="email"
                        className="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-3 text-center">
                <button
                  type="button"
                  className="btn btn-outline-secondary ml-auto mr-3 w-20 bg-white"
                >
                  초기화
                </button>
                <button
                  type="button"
                  className="btn btn-primary ml-auto mr-3 w-20"
                >
                  조회
                </button>
              </div>
            </div>

            <div className="box mt-5">
              <div className="overflow-x-auto p-5">
                <table className="table whitespace-nowrap">
                  <thead className="table-dark text-center">
                    <tr>
                      <th>
                        <input
                          id="checkbox-switch-1"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                      </th>
                      <th>번호</th>
                      <th>브랜드</th>
                      <th>회원유형</th>
                      <th>가입유형</th>
                      <th>여행사명</th>
                      <th>아이디</th>
                      <th>한글 이름 / 담당자명</th>
                      <th>휴대폰번호</th>
                      <th>이메일</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    <tr>
                      <td>
                        <input
                          id="checkbox-switch-1"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                      </td>
                      <td>99</td>
                      <td>알라모</td>
                      <td>일반회원</td>
                      <td>자사회원</td>
                      <td></td>
                      <td>abc1</td>
                      <td>홍길동</td>
                      <td>010-1111-1111</td>
                      <td>abc@email.com</td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          id="checkbox-switch-1"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                      </td>
                      <td>98</td>
                      <td>내셔널</td>
                      <td>여행사회원</td>
                      <td>자사회원</td>
                      <td>정성투어</td>
                      <td>abc2</td>
                      <td>김아무개</td>
                      <td>010-1111-1111</td>
                      <td>abc@email.com</td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          id="checkbox-switch-1"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                      </td>
                      <td>97</td>
                      <td>엔터프라이즈</td>
                      <td>일반회원</td>
                      <td>네이버</td>
                      <td></td>
                      <td>abc1</td>
                      <td>박희동</td>
                      <td>010-1111-1111</td>
                      <td>abc@email.com</td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          id="checkbox-switch-1"
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                      </td>
                      <td>96</td>
                      <td>내셔널</td>
                      <td>일반회원</td>
                      <td>카카오</td>
                      <td></td>
                      <td>abc1</td>
                      <td>최둘리</td>
                      <td>010-1111-1111</td>
                      <td>abc@email.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setMemberAdd(false)
              }}
            >
              추가
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 일괄업로드 */}
      <Dialog
        size="md"
        open={upload}
        onClose={() => {
          setUpload(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">일괄 등록</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setUpload(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="border-b border-slate-200/60 pb-5">
              <div className="font-bold">엑셀 업로드</div>
              <div className="filebox mt-2 flex">
                <div className="left_icon btn-secondary flex items-center border px-3 py-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    icon-name="file"
                    data-lucide="file"
                    className="lucide lucide-file h-4 w-4"
                  >
                    <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                  </svg>
                </div>
                <input
                  id="fileName"
                  className="upload-name text_line flex-1 truncate border border-secondary p-2 text-slate-500"
                  value="첨부파일"
                  placeholder=""
                  readOnly
                />
                <label
                  htmlFor="file"
                  className="file_search btn-secondary cursor-pointer border p-2"
                >
                  파일선택
                </label>
                <input type="file" id="file" />
              </div>
              <div className="mt-2 text-xs">
                <p>
                  * 대량등록의 경우 정상 등록 가능 확인이{' '}
                  <span className="text-danger">최대 30분 시간이</span>{' '}
                  소요됩니다.
                </p>
                <p>* 등록가능한 확장자 : xlsx, csv, xls</p>
              </div>
            </div>
            <div className="pt-5">
              <button type="button" className="btn btn-secondary w-full">
                포멧 다운로드
              </button>
              <div className="mt-2 text-xs">
                <p>* 포멧에 맞춰서 파일을 업로드 해주세요</p>
                <p>
                  * 최대 <span className="text-danger">3,000건</span>까지
                  가능합니다.
                </p>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 w-24"
              onClick={() => {
                setUpload(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setUpload(false)
                setRegistBtn2(true)
              }}
            >
              등록
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 선택 삭제 모달 */}
      <Dialog
        open={deleteConfirm}
        onClose={() => {
          setdeleteConfirm(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">선택 삭제</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setdeleteConfirm(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              삭제 처리하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setdeleteConfirm(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setdeleteConfirm(false)
                  setNumberCheck2(true)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제 개수체크 모달 */}
      <Dialog
        open={NumberCheck2}
        onClose={() => {
          setNumberCheck2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setNumberCheck2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              총 <span className="text-primary">{checkedCount}개</span>가 &#91;
              삭제 &#93; 처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setNumberCheck2(false)
                  setdeleteConfirm(false)
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
              정상적으로 수정되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <Link to="/marketing/coupon">
                <button
                  type="button"
                  onClick={() => {
                    setRegistBtn(false)
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
              <button
                type="button"
                onClick={() => {
                  setUpload(false)
                  setRegistBtn2(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
export default CouponRegist
