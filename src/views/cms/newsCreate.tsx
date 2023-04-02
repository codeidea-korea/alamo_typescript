import { useEffect, useRef } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import ClassicEditor from '@/base-components/Ckeditor/ClassicEditor'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'
import Tippy from '@/base-components/Tippy'

import bannerImg from '@/assets/images/profile-14.jpg'

const NewseventMngRegist = () => {
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive((current) => !current)
  }

  const [editorData, setEditorData] = useState('<p>Content of the editor.</p>')

  // 파일 삭제
  const FileDeleteHandle = (e: any) => {
    const file = e.target.parentElement.parentElement
    file.remove()
  }

  // 등록 버튼
  const [RegistBtn, setRegistBtn] = useState(false)
  const [RegistBtn2, setRegistBtn2] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">뉴스&이벤트 등록</h2>
      </div>
      <div className="mt-3">
        <div className="box overflow-x-auto p-3">
          <table className="table-bordered table">
            <tbody>
              <tr>
                <td className="w-40  whitespace-nowrap bg-slate-100">브랜드</td>
                <td className="" colSpan={5}>
                  <select
                    className="form-select-sm form-select w-56"
                    aria-label=".form-select-sm example"
                  >
                    <option>전체</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="w-40  whitespace-nowrap bg-slate-100">
                  뉴스&이벤트 구분
                </td>
                <td>
                  <div className="flex flex-row">
                    <div className="form-check mr-2">
                      <input
                        id="newsevent-select-1"
                        className="form-check-input mr-2"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="newsevent-select-1"
                      >
                        뉴스
                      </label>
                    </div>
                    <div className="form-check mr-2">
                      <input
                        id="newsevent-select-2"
                        className="form-check-input mr-2"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="newsevent-select-2"
                      >
                        이벤트
                      </label>
                    </div>
                  </div>
                </td>
                <td className="w-40  whitespace-nowrap bg-slate-100">
                  고정여부
                </td>
                <td>
                  <div className="flex flex-row">
                    <div className="form-check mr-2">
                      <input
                        id="radio-tab-switch-1"
                        className="form-check-input mr-2"
                        type="checkbox"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                      />
                      <label htmlFor="radio-tab-switch-1">Y</label>
                    </div>
                  </div>
                </td>
                <td className="w-40  whitespace-nowrap bg-slate-100">
                  노출여부
                </td>
                <td>
                  <div className="flex flex-row">
                    <div className="form-check mr-2">
                      <input
                        id="radio-dis-switch-1"
                        className="form-check-input mr-2"
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
                    <div className="form-check mr-2">
                      <input
                        id="radio-dis-switch-2"
                        className="form-check-input mr-2"
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
                <td className="w-40  whitespace-nowrap bg-slate-100">
                  노출일자
                </td>
                <td colSpan={5}>
                  <div className="relative w-72">
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
                <td className="w-40  whitespace-nowrap bg-slate-100">
                  첨부파일
                </td>
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
                    ※ JPG, PNG, SVG, PDF, DOC, HWP 최대 3개까지 가능
                  </span>
                  <div className="mt-3">
                    <span className="relative mr-2">
                      <Lucide
                        icon="XCircle"
                        className="absolute right-[-7px] top-[-7px] ml-4 h-5 w-5 cursor-pointer fill-black text-white"
                        onClick={FileDeleteHandle}
                      ></Lucide>
                      <Tippy
                        as="a"
                        href="#"
                        className="tooltip"
                        content="파일명"
                        options={{
                          theme: 'light',
                        }}
                        download
                      >
                        <Lucide
                          icon="FileText"
                          className="inline-block h-6 w-6"
                        />
                      </Tippy>
                    </span>
                    <span className="relative mr-2">
                      <Lucide
                        icon="XCircle"
                        className="absolute right-[-7px] top-[-7px] ml-4 h-5 w-5 cursor-pointer fill-black text-white"
                        onClick={FileDeleteHandle}
                      ></Lucide>
                      <Tippy
                        as="a"
                        href="#"
                        className="tooltip"
                        content="파일명"
                        options={{
                          theme: 'light',
                        }}
                        download
                      >
                        <Lucide
                          icon="FileText"
                          className="inline-block h-6 w-6"
                        />
                      </Tippy>
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="w-40 whitespace-nowrap bg-slate-100">제목</td>
                <td colSpan={5}>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control w-full"
                    placeholder=""
                  />
                </td>
              </tr>
              <tr>
                <td className="w-40 whitespace-nowrap bg-slate-100">내용</td>
                <td colSpan={5}>
                  <ClassicEditor value={editorData} onChange={setEditorData} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex-center flex gap-2">
          <button className="btn w-24 bg-white">취소</button>
          <button
            className="btn btn-primary"
            onClick={() => setRegistBtn2(true)}
          >
            등록 (상단고정 게시글 3개 있을 경우)
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setRegistBtn(true)}
          >
            등록 (정상등록 시)
          </button>
        </div>
      </div>

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
              <Link to="/cms/news">
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
              상단 고정 게시글은 최대 3개까지만 가능합니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
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
export default NewseventMngRegist
