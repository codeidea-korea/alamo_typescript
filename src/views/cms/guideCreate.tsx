import { SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'

import ClassicEditor from '@/base-components/Ckeditor/ClassicEditor'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

const UserguideMngRegist = () => {
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  const [editorData, setEditorData] = useState('<p>Content of the editor.</p>')

  // 컨펌 모달
  const [deleteConfirm, setdeleteConfirm] = useState(false)
  const [deleteConfirm2, setdeleteConfirm2] = useState(false)
  const [deleteConfirm3, setdeleteConfirm3] = useState(false)


  // 노출순서 모달
  const [selectedOption, setSelectedOption] = useState('option1')

  const handleSelectChange = (event: {
    target: { value: SetStateAction<string> }
  }) => {
    setSelectedOption(event.target.value)
    setdeleteConfirm3(true)
  }

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">이용가이드 등록</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
              <td className="" colSpan={7}>
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">국가</td>
              <td>
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">
                이용가이드 구분
              </td>
              <td>
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">노출 여부</td>
              <td>
                <div className="flex  gap-2">
                  <div className="form-check gap-2">
                    <input
                      id="radio-dis-switch-4"
                      className="form-check-input"
                      type="radio"
                      name="horizontal_radio_button"
                      value="horizontal-check1"
                    />
                    <label
                      className="form-radio-label"
                      htmlFor="radio-dis-switch-4"
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
              <td className="whitespace-nowrap  bg-slate-100 ">노출 순서</td>
              <td>
                <select
                  value={selectedOption}
                  onChange={handleSelectChange}
                  className="form-select w-56"
                >
                  <option value="option1" disabled>선택</option>
                  <option value="option2">Option 1</option>
                  <option value="option3">Option 2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">제목</td>
              <td colSpan={7}>
                <input
                  type="text"
                  className="form-control w-full"
                  placeholder="제목을 입력해 주세요"
                />
              </td>
            </tr>
            <tr>
              <td className="whitespace-nowrap bg-slate-100 ">내용</td>
              <td colSpan={7}>
                <ClassicEditor value={editorData} onChange={setEditorData} />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-3">
        <div className="flex-center flex gap-3">
          <Link to="/cms/guide">
            <button className="btn w-24 bg-white">취소</button>
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => setdeleteConfirm(true)}
          >
            등록(고정 3개 이상 등록 시 )
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setdeleteConfirm2(true)}
          >
            등록(정상등록)
          </button>
        </div>
      </div>

      {/* 컨펌 모달 */}
      <Dialog
        open={deleteConfirm}
        onClose={() => {
          setdeleteConfirm(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
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
              고정 게시글은 3개까지 등록 가능합니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
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

      <Dialog
        open={deleteConfirm2}
        onClose={() => {
          setdeleteConfirm2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setdeleteConfirm2(false)
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
              <Link to="/cms/guide">
                <button
                  type="button"
                  onClick={() => {
                    setdeleteConfirm2(false)
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

      <Dialog
        open={deleteConfirm3}
        onClose={() => {
          setdeleteConfirm3(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setdeleteConfirm3(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              다른 게시물 노출순서가 변경됩니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setdeleteConfirm3(false)
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
export default UserguideMngRegist
