import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import ClassicEditor from '@/base-components/Ckeditor/ClassicEditor'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import bannerImg from '@/assets/images/profile-14.jpg'

const PopupMngRevice = () => {
  const [daterange, setDaterange] = useState('')
  const [date, setDate] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive((current) => !current)
  }
  const [editorData, setEditorData] = useState('<p>Content of the editor.</p>')

  const [Deletedetails, setDeletedetails] = useState(false) // 삭제버튼
  const [Deletedetails2, setDeletedetails2] = useState(false) //삭제확인

  const [Correction, setCorrection] = useState(false) //수정
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">팝업 상세/수정</h2>
      </div>
      <div className="mt-3">
        <div className="box overflow-x-auto p-3">
          <table className="table-bordered table">
            <tbody>
              <tr>
                <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
                <td className="" colSpan={5}>
                  <select
                    className="form-select w-56"
                    aria-label=".form-select-sm example"
                  >
                    <option>전체</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap  bg-slate-100 ">팝업 구분</td>
                <td>
                  <div className="flex gap-2">
                    <div className="form-check gap-2">
                      <input
                        id="newsevent-select-1"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="newsevent-select-1"
                      >
                        시스템점검 안내
                      </label>
                    </div>
                    <div className="form-check gap-2">
                      <input
                        id="newsevent-select-2"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                        disabled
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="newsevent-select-2"
                      >
                        이벤트 안내
                      </label>
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap  bg-slate-100 ">노출일자</td>
                <td>
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
              </tr>
              <tr>
                <td className="whitespace-nowrap bg-slate-100 ">제목</td>
                <td className="">
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control w-full"
                    placeholder=""
                  />
                </td>
                <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
                <td>
                  <div className="flex gap-2">
                    <div className="form-check gap-2">
                      <input
                        id="radio-dis-switch-1"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                        defaultChecked
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="radio-dis-switch-1"
                      >
                        Y
                      </label>
                    </div>
                    <div className="form-check gap-2">
                      <input
                        id="radio-dis-switch-2"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
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
                <td className="whitespace-nowrap bg-slate-100 ">내용</td>
                <td colSpan={5}>
                  <ClassicEditor value={editorData} onChange={setEditorData} />
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap bg-slate-100 ">점검일자</td>
                <td colSpan={5}>
                  <div className="flex items-center gap-2">
                    <div className="relative w-44">
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
                        className="form-control pl-16"
                      />
                    </div>
                    <select
                      className="form-select w-24"
                      aria-label=".form-select-sm example"
                    >
                      <option>00시</option>
                      <option>01시</option>
                      <option>02시</option>
                    </select>
                    <select
                      className="form-select w-24"
                      aria-label=".form-select-sm example"
                    >
                      <option>00분</option>
                      <option>01분</option>
                      <option>02분</option>
                    </select>
                    <span>~</span>
                    <div className="relative w-44">
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
                        className="form-control pl-16"
                      />
                    </div>
                    <select
                      className="form-select w-24"
                      aria-label=".form-select-sm example"
                    >
                      <option>00시</option>
                      <option>01시</option>
                      <option>02시</option>
                    </select>
                    <select
                      className="form-select w-24"
                      aria-label=".form-select-sm example"
                    >
                      <option>00분</option>
                      <option>01분</option>
                      <option>02분</option>
                    </select>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="whitespace-nowrap bg-slate-100 ">최종수정자</td>
                <td>홍길동</td>
                <td className="whitespace-nowrap bg-slate-100 ">
                  최종수정일시
                </td>
                <td>2022-11-11 11:11:11</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex-center flex gap-2">
          <button
            className="btn btn-danger w-24"
            onClick={() => setDeletedetails(true)}
          >
            삭제
          </button>
          <Link to="/cms/popup">
            <button className="btn w-24 bg-white">취소</button>
          </Link>
          <button
            className="btn btn-primary w-24"
            onClick={() => setCorrection(true)}
          >
            수정
          </button>
        </div>
      </div>

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
              <Link to="/cms/popup">
                <button
                  type="button"
                  onClick={() => {
                    setDeletedetails2(false)
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

      {/* 수정 확인 */}
      <Dialog
        open={Correction}
        onClose={() => {
          setCorrection(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setCorrection(false)
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
              <Link to="/cms/news">
                <button
                  type="button"
                  onClick={() => {
                    setCorrection(false)
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
export default PopupMngRevice
