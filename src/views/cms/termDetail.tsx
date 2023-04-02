import { useState } from 'react'
import { Link } from 'react-router-dom'

import ClassicEditor from '@/base-components/Ckeditor/ClassicEditor'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

const TermMngRevice = () => {
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)
  const [showImage, setshowImage] = useState(false)
  const [editorData, setEditorData] = useState('<p>Content of the editor.</p>')

  const [isOpenA, setIsOpenA] = useState(false)

  const handleA01Click = () => {
    setIsOpenA(true)
  }

  const handleA02Click = () => {
    setIsOpenA(false)
  }
  // 모달
  const [Confirm, setConfirm] = useState(false)
  const [Confirm2, setConfirm2] = useState(false)
  const [Confirm3, setConfirm3] = useState(false)

  // 컨텐츠 추가삭제
  const [containers, setContainers] = useState<number[]>([1])

  const handleAddContainer = () => {
    setContainers([...containers, containers.length + 1])
  }

  const handleRemoveContainer = (index: number) => {
    if (index !== 0) {
      setContainers(containers.filter((_, i) => i !== index))
    }
  }

  const handleRemoveAllContainers = () => {
    setContainers([1])
  }

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">약관 수정</h2>
      </div>
      <div className="mt-3">
        <div className="box overflow-x-auto p-3">
          <table className="table-bordered table">
            <tbody>
              <tr>
                <td className="w-48  whitespace-nowrap bg-slate-100">브랜드</td>
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
                <td className="whitespace-nowrap  bg-slate-100 ">
                  약관 구분 / 국가선택
                </td>
                <td>
                  <div className="flex flex-row">
                    <div className="form-check mr-2" onClick={handleA02Click}>
                      <input
                        id="newsevent-select-1"
                        className="form-check-input mr-2"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-check1"
                        defaultChecked
                      />
                      <label
                        className="form-radio-label"
                        htmlFor="newsevent-select-1"
                      >
                        공통 약관
                      </label>
                    </div>
                    <div
                      className="form-check mr-2  shrink-0"
                      onClick={handleA01Click}
                    >
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
                        국가별 약관
                      </label>
                      {isOpenA && (
                        <select name="" id="" className="form-select ml-2 w-52">
                          <option value="">국가선택</option>
                          <option value="">option2</option>
                          <option value="">option3</option>
                        </select>
                      )}
                    </div>
                  </div>
                </td>
                <td className="whitespace-nowrap  bg-slate-100">노출여부</td>
                <td className="w-60">
                  {isOpenA ? (
                    <div className="flex flex-row">
                      <div className="form-check gap-2">
                        <input
                          id="radio01"
                          className="form-check-input"
                          type="radio"
                          name="radio02"
                          defaultChecked
                        />
                        <label className="form-radio-label" htmlFor="radio01">
                          Y
                        </label>
                        <input
                          id="radio02"
                          className="form-check-input"
                          type="radio"
                          name="radio02"
                        />
                        <label className="form-radio-label" htmlFor="radio02">
                          N
                        </label>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-row">
                      <div className="form-check mr-2">
                        <input
                          id="radio3"
                          className="form-check-input mr-2"
                          type="radio"
                          name="radio01"
                          defaultChecked
                        />
                        <label className="form-radio-label" htmlFor="radio3">
                          Y
                        </label>
                      </div>
                    </div>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {!isOpenA ? (
        <div className="mt-6">
          <div className="box">
            <div className="border-slate-200/6 space-between flex border-b p-3">
              <h2 className="mr-auto text-base font-medium">약관 내용</h2>
            </div>
            <div className="box overflow-x-auto p-3">
              <table className="table-bordered table">
                <tbody>
                  <tr>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      약관 유형
                    </td>
                    <td className="">
                      <select
                        className="form-select w-56"
                        aria-label=".form-select-sm example"
                      >
                        <option>이용약관</option>
                        <option>개인정보취급방침</option>
                        <option>제 3자 제공 동의</option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      사용여부
                    </td>
                    <td>
                      <div className="flex flex-row gap-2">
                        <div className="form-check">
                          <input
                            id="radio04"
                            className="form-check-input mr-2"
                            type="radio"
                            name="radio04"
                          />
                          <label className="form-radio-label" htmlFor="radio04">
                            Y
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            id="radio05"
                            className="form-check-input mr-2"
                            type="radio"
                            name="radio04"
                          />
                          <label className="form-radio-label" htmlFor="radio05">
                            N
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap bg-slate-100 ">내용</td>
                    <td colSpan={3}>
                      <ClassicEditor
                        value={editorData}
                        onChange={setEditorData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      약관 유형
                    </td>
                    <td className="">
                      <select
                        className="form-select w-56"
                        aria-label=".form-select-sm example"
                      >
                        <option>개인정보취급방침</option>
                        <option>이용약관</option>
                        <option>제 3자 제공 동의</option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      사용여부
                    </td>
                    <td>
                      <div className="flex flex-row">
                        <div className="form-check mr-2">
                          <input
                            id="radio06"
                            className="form-check-input mr-2"
                            type="radio"
                            name="radio05"
                          />
                          <label className="form-radio-label" htmlFor="radio06">
                            Y
                          </label>
                        </div>
                        <div className="form-check mr-2">
                          <input
                            id="radio07"
                            className="form-check-input mr-2"
                            type="radio"
                            name="radio05"
                          />
                          <label className="form-radio-label" htmlFor="radio07">
                            N
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap bg-slate-100 ">내용</td>
                    <td colSpan={3}>
                      <ClassicEditor
                        value={editorData}
                        onChange={setEditorData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      약관 유형
                    </td>
                    <td className="">
                      <select
                        className="form-select w-56"
                        aria-label=".form-select-sm example"
                      >
                        <option>제 3자 제공 동의</option>
                        <option>개인정보취급방침</option>
                        <option>이용약관</option>
                      </select>
                    </td>
                    <td className="whitespace-nowrap  bg-slate-100 ">
                      사용여부
                    </td>
                    <td>
                      <div className="flex flex-row">
                        <div className="form-check mr-2">
                          <input
                            id="radio08"
                            className="form-check-input mr-2"
                            type="radio"
                            name="radio06"
                          />
                          <label className="form-radio-label" htmlFor="radio08">
                            Y
                          </label>
                        </div>
                        <div className="form-check mr-2">
                          <input
                            id="radio09"
                            className="form-check-input mr-2"
                            type="radio"
                            name="radio06"
                          />
                          <label className="form-radio-label" htmlFor="radio09">
                            N
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap bg-slate-100 ">내용</td>
                    <td colSpan={3}>
                      <ClassicEditor
                        value={editorData}
                        onChange={setEditorData}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap bg-slate-100 ">
                      최종수정자
                    </td>
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
        </div>
      ) : (
        <>
          <div>
            {containers.map((_, index) => (
              <div className="container mt-6" key={index}>
                {/* container 내용 */}
                <div className="box">
                  <div className="border-slate-200/6 space-between flex border-b p-3">
                    <h2 className="mr-auto text-base font-medium">약관 내용</h2>
                  </div>
                  <div className="box overflow-x-auto p-3">
                    <table className="table-bordered table">
                      <tbody>
                        <tr>
                          <td className="whitespace-nowrap  bg-slate-100 ">
                            약관 유형
                          </td>
                          <td className="">
                            <div className="flex items-center gap-2">
                              <select
                                className="form-select mr-2 w-56"
                                aria-label=".form-select-sm example"
                              >
                                <option>선택</option>
                                <option>필수지참사항</option>
                                <option>대여안내</option>
                                <option>보험안내</option>
                                <option>비용지불</option>
                                <option>예약변경 및 취소</option>
                                <option>추가옵션사항</option>
                                <option>기타사항</option>
                              </select>

                              {index !== 0 && (
                                <button
                                  onClick={() => handleRemoveContainer(index)}
                                  className="btn btn-danger"
                                >
                                  <Lucide icon="Minus" className="h-5 w-5" />
                                </button>
                              )}
                              <button
                                onClick={handleAddContainer}
                                className="btn-primary btn"
                              >
                                <Lucide
                                  icon="Plus"
                                  className="inline-block h-4 w-4 align-text-bottom"
                                />
                                <span className="ml-2 inline-block">추가</span>
                              </button>
                            </div>
                          </td>
                          <td className="whitespace-nowrap  bg-slate-100 ">
                            사용여부
                          </td>
                          <td>
                            <div className="flex flex-row gap-2">
                              <div className="form-check">
                                <input
                                  id="radio04"
                                  className="form-check-input mr-2"
                                  type="radio"
                                  name="radio04"
                                />
                                <label
                                  className="form-radio-label"
                                  htmlFor="radio04"
                                >
                                  Y
                                </label>
                              </div>
                              <div className="form-check">
                                <input
                                  id="radio05"
                                  className="form-check-input mr-2"
                                  type="radio"
                                  name="radio04"
                                />
                                <label
                                  className="form-radio-label"
                                  htmlFor="radio05"
                                >
                                  N
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap bg-slate-100 ">
                            내용
                          </td>
                          <td colSpan={3}>
                            <ClassicEditor
                              value={editorData}
                              onChange={setEditorData}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="whitespace-nowrap bg-slate-100 ">
                            최종수정자
                          </td>
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
              </div>
            ))}
            <div className="mt-3 flex justify-end">
              <button
                onClick={handleRemoveAllContainers}
                className="btn btn-pending ml-auto"
              >
                <Lucide icon="Trash" className="h-4 w-4" />
                <span className="ml-2 inline-block">전체 삭제</span>
              </button>
            </div>
          </div>
        </>
      )}

      <div className="mt-3">
        <div className="flex-center flex gap-2">
          <Link to="/cms/term">
            <button className="btn w-24 bg-white">취소</button>
          </Link>

          <button
            className="btn btn-primary w-24"
            onClick={() => setConfirm3(true)}
          >
            수정
          </button>
        </div>
      </div>

      <Dialog
        open={Confirm3}
        onClose={() => {
          setConfirm3(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirm3(false)
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
              <Link to="/cms/term">
                <button
                  type="button"
                  onClick={() => {
                    setConfirm3(false)
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
export default TermMngRevice
