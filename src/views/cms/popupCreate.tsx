import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import ClassicEditor from '@/base-components/Ckeditor/ClassicEditor'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import bannerImg from '@/assets/images/profile-14.jpg'

const PopupMngRegist = () => {
  const [daterange, setDaterange] = useState('')
  const [date, setDate] = useState('')
  const [registModal, setRegistModal] = useState(false)
  const [registModal2, setRegistModal2] = useState(false)
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive((current) => !current)
  }
  const [editorData, setEditorData] = useState('<p>Content of the editor.</p>')

  const [isOpenA, setIsOpenA] = useState(false)

  const handleA01Click = () => {
    setIsOpenA(true)
  }

  const handleA02Click = () => {
    setIsOpenA(false)
  }

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">팝업 등록</h2>
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
                    <div className="form-check gap-2" onClick={handleA01Click}>
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
                    <div className="form-check gap-2" onClick={handleA02Click}>
                      <input
                        id="newsevent-select-2"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
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
                        name="horizontal_radio_button2"
                        value="horizontal-check1"
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
                        name="horizontal_radio_button2"
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
              {!isOpenA ? (
                <>
                  <tr>
                    <td className="whitespace-nowrap  bg-slate-100 ">이미지</td>
                    <td colSpan={5}>
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
                        ※ JPG, PNG, SVG만 가능 / 000px x 000px
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap bg-slate-100 ">url</td>
                    <td colSpan={5}>
                      <input
                        id="regular-form-1"
                        type="text"
                        className="form-control w-1/2"
                        placeholder=""
                      />
                    </td>
                  </tr>
                </>
              ) : (
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
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex-center flex gap-2">
          <Link to="/cms/popup">
            <button className="btn w-24 bg-white">취소</button>
          </Link>
          <button
            className="btn btn-primary w-24"
            onClick={() => setRegistModal(true)}
          >
            등록
          </button>
        </div>
      </div>

      {/* 등록 컨펌 */}
      <Dialog
        open={registModal}
        onClose={() => {
          setRegistModal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setRegistModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              팝업은 최대 1개만 노출가능합니다.
              <br />
              해당 게시물을 노출하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setRegistModal(false)
              }}
              className="mr-1 w-24"
            >
              취소
            </Button>
            <button
              type='button'
              className="w-24 btn-primary btn"
              onClick={() => {
                setRegistModal2(true)
              }}
            >
              확인
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 컨펌2 */}
      <Dialog
        open={registModal2}
        onClose={() => {
          setRegistModal2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setRegistModal2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              정상적으로 등록되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setRegistModal2(false)
              }}
              className="mr-1 w-24"
            >
              취소
            </Button>
            <Link to="/cms/popup">
              <button
                type="button"
                className="btn-primary btn w-24"
                onClick={() => {
                  setRegistModal2(false)
                }}
              >
                확인
              </button>
            </Link>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
export default PopupMngRegist
