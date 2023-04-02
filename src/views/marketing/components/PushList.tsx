import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useGetList, { ReturnType } from '@/hooks/useGetList'

import Button from '@/base-components/Button'
import { ClassicEditor } from '@/base-components/Ckeditor'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

interface Item {}

interface Data {
  list: Item[]
  count: number
}

interface ResponseData extends ReturnType {
  data: Data | undefined
}

export default function PushList() {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/contents/push',
    key: 'getNewsLetterList',
  })
  const [date, setDate] = useState('')
  const [buttonModalPreview, pushRegist] = useState(false)
  const [buttonModalPreview2, pushDetail] = useState(false)
  const [editorData, setEditorData] = useState('<p>Content of the editor.</p>')

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

  const [RegistBtn, setRegistBtn] = useState(false)
  const [RegistBtn2, setRegistBtn2] = useState(false)

  const [Deletedetails, setDeletedetails] = useState(false)
  const [Deletedetails2, setDeletedetails2] = useState(false)

  return (
    <div className="intro-y box mt-6 p-3">
      <div className="mb-3 flex flex-row items-center">
        <div className="mr-auto text-base font-medium">
          <button
            className="btn btn-sm btn-outline-danger mr-2 w-20"
            onClick={() => {
              setdeleteConfirm(true)
              handleCheckboxClick()
            }}
          >
            삭제
          </button>
          <button
            className="btn btn-sm btn-outline-primary w-20"
            onClick={() => pushRegist(true)}
          >
            푸쉬 등록
          </button>
        </div>
        <div className="form-check form-switch mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto">
          <select
            className="form-select-sm form-select w-20"
            aria-label=".form-select-lg example"
          >
            <option>100개</option>
            <option>200개</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="check_table table whitespace-nowrap">
          <thead className="table-dark text-center">
            <tr>
              <th className="w-10">
                <input
                  id="checkbox-only-switch-all"
                  type="checkbox"
                  className="form-check-input check_all"
                  onChange={handleCheckAll}
                  onClick={handleCheckboxClick}
                />
              </th>
              <th>번호</th>
              <th>브랜드</th>
              <th>발송예약 일시</th>
              <th>발송구분</th>
              <th className="w-72">제목</th>
              <th className="w-72">내용</th>
              <th>APP OS 구분</th>
              <th>대상</th>
              <th>최종수정자</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr className="link" onClick={() => pushDetail(true)}>
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
              <td>알라모</td>
              <td>2023-11-11 11:11:11</td>
              <td>즉시발송</td>
              <td>이벤트 안내</td>
              <td>이벤트 안내</td>
              <td>AOS, IOS</td>
              <td>3,023</td>
              <td>홍길동</td>
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
      {/* BEGIN: 푸시 등록 모달 */}
      <Dialog
        size="xl"
        open={buttonModalPreview}
        onClose={() => {
          pushRegist(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">푸시발송 등록</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                pushRegist(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <table className="table-bordered table w-full">
              <tbody>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    발송구분
                  </td>
                  <td>
                    <div className="mt-2 flex flex-col sm:flex-row">
                      <div className="form-check mr-5">
                        <input
                          id="membership_type-1"
                          className="form-check-input"
                          type="radio"
                          name="radio03"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="membership_type-1"
                        >
                          즉시발송
                        </label>
                      </div>
                      <div className="form-check mr-5">
                        <input
                          id="membership_type-2"
                          className="form-check-input"
                          type="radio"
                          name="radio03"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="membership_type-2"
                        >
                          예약발송
                        </label>
                      </div>
                      <div className="relative w-72">
                        <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                          <Lucide icon="Calendar" className="h-4 w-4" />
                        </div>
                        <Litepicker
                          value={date}
                          onChange={setDate}
                          options={{
                            autoApply: false,
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
                      <select className="form-select ml-2 w-24">
                        <option value="">00시</option>
                      </select>
                      <select className="form-select ml-2 w-24">
                        <option value="">00분</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100  text-center font-semibold">
                    수신 대상자
                  </td>
                  <td>
                    <div className="mt-2 flex flex-col sm:flex-row">
                      <div className="form-check mr-5">
                        <input
                          id="membership_type-9"
                          className="form-check-input"
                          type="radio"
                          name="radio02"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="membership_type-9"
                        >
                          회원전체
                        </label>
                      </div>
                      <div className="form-check mr-5">
                        <input
                          id="membership_type-10"
                          className="form-check-input"
                          type="radio"
                          name="radio02"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="membership_type-10"
                        >
                          일괄업로드
                        </label>
                      </div>
                      <label
                        htmlFor="fileadd"
                        className="btn btn-sm btn-secondary w-16"
                      >
                        파일 추가
                      </label>
                      <input
                        type="file"
                        name="fileadd"
                        id="fileadd"
                        className="hidden"
                        multiple
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    제목
                  </td>
                  <td>
                    <input
                      id="push_title"
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    내용
                  </td>
                  <td>
                    <ClassicEditor
                      value={editorData}
                      onChange={setEditorData}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    이미지
                  </td>
                  <td>
                    <div>
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    링크
                  </td>
                  <td>
                    <input
                      id="push_link"
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    APP OS 구분
                  </td>
                  <td>
                    <div className="mt-2 flex flex-col sm:flex-row">
                      <div className="form-check mr-5">
                        <input
                          id="check20"
                          className="form-check-input"
                          type="checkbox"
                          name="check2"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="check20">
                          AOS
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          id="check21"
                          className="form-check-input"
                          type="checkbox"
                          name="check2"
                          defaultChecked
                        />
                        <label className="form-check-label" htmlFor="check21">
                          IOS
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 w-24"
              onClick={() => {
                pushRegist(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                pushRegist(false)
                setRegistBtn(true)
              }}
            >
              등록
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
              정상적으로 수정되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setRegistBtn2(false)
                  pushDetail(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 푸시 상세 모달 */}
      <Dialog
        size="xl"
        open={buttonModalPreview2}
        onClose={() => {
          pushDetail(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              푸시발송 상세/수정
            </h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                pushDetail(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <table className="table-bordered table w-full">
              <tbody>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    발송구분
                  </td>
                  <td>
                    <div className="mt-2 flex flex-col sm:flex-row">
                      <div className="form-check mr-2">
                        <input
                          id="radio-switch-4"
                          className="form-check-input"
                          type="radio"
                          name="radio01"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radio-switch-4"
                        >
                          즉시발송
                        </label>
                      </div>
                      <div className="form-check mr-2">
                        <input
                          id="radio-switch-3"
                          className="form-check-input"
                          type="radio"
                          name="radio01"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radio-switch-3"
                        >
                          예약발송
                        </label>
                      </div>
                      <div className="relative w-60">
                        <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                          <Lucide icon="Calendar" className="h-4 w-4" />
                        </div>
                        <Litepicker
                          value={date}
                          onChange={setDate}
                          options={{
                            autoApply: false,
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
                      <select className="form-select ml-2 w-24">
                        <option value="">00시</option>
                      </select>
                      <select className="form-select ml-2 w-24">
                        <option value="">00분</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100  text-center font-semibold">
                    수신 대상자
                  </td>
                  <td>
                    <div className="mt-2 flex flex-col sm:flex-row">
                      <div className="form-check mr-2">
                        <input
                          id="radio-switch-5"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radio-switch-5"
                        >
                          회원가입
                        </label>
                      </div>
                      <div className="form-check mr-2">
                        <input
                          id="radio-switch-6"
                          className="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="radio-switch-6"
                        >
                          일괄업로드
                        </label>
                      </div>
                      <label
                        htmlFor="fileadd"
                        className="btn btn-sm btn-secondary w-16"
                      >
                        파일 추가
                      </label>
                      <input
                        type="file"
                        name="fileadd"
                        id="fileadd"
                        className="hidden"
                        multiple
                      />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    제목
                  </td>
                  <td>
                    <input
                      id="push_title"
                      type="text"
                      className="form-control"
                      value="푸시발송 제목입니다."
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    내용
                  </td>
                  <td>
                    <ClassicEditor
                      value={editorData}
                      onChange={setEditorData}
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    이미지
                  </td>
                  <td>
                    <div>
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
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    링크
                  </td>
                  <td>
                    <input
                      id="push_link"
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    APP OS 구분
                  </td>
                  <td>
                    <div className="mt-2 flex flex-col sm:flex-row">
                      <div className="form-check mr-5">
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
                          AOS
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
                          IOS
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    최종수정자
                  </td>
                  <td>홍길동</td>
                </tr>
                <tr>
                  <td className="w-44 bg-slate-100 text-center font-semibold">
                    최종수정일시
                  </td>
                  <td>2022-11-11 11:11:11</td>
                </tr>
              </tbody>
            </table>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <button
              type="button"
              className="btn btn-danger mr-3 w-20"
              onClick={() => setDeletedetails(true)}
            >
              삭제
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary mr-3 w-20 bg-white"
              onClick={() => {
                pushDetail(false)
              }}
            >
              취소
            </button>
            <button
              type="button"
              className="btn btn-primary mr-3 w-20"
              onClick={() => {
                setRegistBtn2(true)
              }}
            >
              수정
            </button>
            <div className="mt-5 text-center">
              <button
                type="button"
                className="btn btn-primary mr-3 w-20"
                onClick={() => {
                  pushDetail(false)
                }}
              >
                확인
              </button>
            </div>
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
              type="button"
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
              선택한 항목<span className="font-bold text-primary">(00개)</span>
              을 삭제하시겠습니까?
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

      {/* 삭제버튼 */}
      <Dialog
        open={Deletedetails}
        onClose={() => {
          setDeletedetails(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setDeletedetails(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정말 삭제하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <Button
                variant="outline-secondary"
                type="button"
                onClick={() => {
                  setDeletedetails(false)
                }}
                className="mr-1 w-24"
              >
                취소
              </Button>
              <button
                type="button"
                onClick={() => {
                  setDeletedetails2(true)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제버튼 확인 */}
      <Dialog
        open={Deletedetails2}
        onClose={() => {
          setDeletedetails2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setDeletedetails2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정상적으로 삭제되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setDeletedetails2(false)
                  setDeletedetails(false)
                  pushDetail(false)
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
