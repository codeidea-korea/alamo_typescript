import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

const ChargeItem = () => {
  const [notifyrange, setNotifyrange] = useState('')
  const [programmaticDropdown, setProgrammaticDropdown] = useState(false)
  const [buttonModalPreview, memberIntro] = useState(false)
  const [buttonModalPreview2, deLete] = useState(false)

  const [RegistBtn, setRegistBtn] = useState(false)
  const [RegistBtn2, setRegistBtn2] = useState(false)

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
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">요금제상세항목 관리</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
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
            <td className="whitespace-nowrap  bg-slate-100 ">국문명</td>
            <td>
              <input type="text" className="form-control" />
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">영문명</td>
            <td>
              <input type="text" className="form-control" />
            </td>
            <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
            <td>
              <div className="flex flex-row">
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-8"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-8"
                  >
                    Y
                  </label>
                </div>
                <div className="form-check mr-2">
                  <input
                    id="checkbox-display-switch-9"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                    defaultChecked
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-9"
                  >
                    N
                  </label>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="pt-3">
        <div className="flex-center flex gap-3">
          <button className="btn w-24 bg-white">초기화</button>
          <button className="btn btn-primary w-24">조회</button>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-12 gap-4">
        <div className="intro-y box col-span-4 p-3">
          <div className="w-full overflow-x-auto">
            <table className="table-bordered table">
              <thead className="table-dark text-center">
                <tr>
                  <th colSpan={2}>
                    <div className="ml-2 flex items-center">
                      요금제상세항목
                      <button className="btn btn-primary btn-sm ml-auto mr-2">
                        <Lucide icon="Edit" className="h-4 w-4"></Lucide>
                      </button>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <tr>
                  <td className="bg-slate-100 text-center">영문명</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td className="bg-slate-100 text-center">국문명</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
                <tr>
                  <td className="bg-slate-100 text-center">도움말 노출여부</td>
                  <td>
                    <div className="flex flex-row gap-2">
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
                  <td className="bg-slate-100 text-center">도움말</td>
                  <td>
                    <textarea
                      className="form-control resize-none p-3"
                      rows={3}
                      placeholder=""
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <td className="bg-slate-100 text-center">비고</td>
                  <td>
                    <input type="text" className="form-control" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pt-3">
            <div className="flex">
              <button className="btn btn-secondary w-24">초기화</button>
              <div className="ml-auto flex gap-3">
                <button className="btn w-24 bg-white">취소</button>
                <button className="btn btn-primary w-24"
                  onClick={() =>
                    setRegistBtn(true)
                  }
                >등록</button>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <div className="flex-center flex">
              <div className="flex gap-3">
                <button
                  type="button"
                  className="btn btn-danger w-24"
                  onClick={() => {
                    memberIntro(true)
                  }}
                >
                  삭제
                </button>
                <button className="btn w-24 bg-white">취소</button>
                <button className="btn btn-primary w-24"
                  onClick={() =>
                    setRegistBtn2(true)
                  }
                >수정</button>
              </div>
            </div>
          </div>
        </div>
        <div className="intro-y box col-span-8 p-3">
          <div className="box w-full overflow-x-auto">
            <table className="table-bordered table-hover check_table table">
              <thead className="table-dark text-center">
                <tr>
                  <th colSpan={17}>
                    <div className="flex items-center">
                      <button
                        className="btn btn-danger btn-sm ml-2 w-20 "
                        onClick={() => {
                          setdeleteConfirm(true)
                          handleCheckboxClick()
                        }}
                      >
                        삭제
                      </button>
                      <select
                        className="form-select-sm form-select ml-auto w-24 text-dark"
                        aria-label="Default select example"
                      >
                        <option>100개</option>
                        <option>option1</option>
                        <option>option2</option>
                      </select>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white text-center">
                <tr className="bg-slate-100">
                  <td>
                    <input
                      id="checkbox-only-switch-all"
                      className="form-check-input check_all"
                      type="checkbox"
                      onChange={handleCheckAll}
                      onClick={handleCheckboxClick}
                    />
                  </td>
                  <td className="w-20">번호</td>
                  <td>브랜드</td>
                  <td>영문명</td>
                  <td>국문명</td>
                  <td>도움말</td>
                  <td>도움말 노출여부</td>
                  <td>비고</td>
                </tr>
                <tr className="cursor-pointer">
                  <td>
                    <input
                      id="checkbox-switch-1"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                      onClick={handleCheckboxClick}
                    />
                  </td>
                  <td>99</td>
                  <td>내셔널</td>
                  <td>UNLIMITED MILE</td>
                  <td>무제한 마일리지</td>
                  <td>
                    <div className="truncate ">
                      안내블라블라 내용입니다…안내블라블라 내용입니다…
                    </div>
                  </td>
                  <td>Y</td>
                  <td>스크릿비고</td>
                </tr>
                <tr className="cursor-pointer">
                  <td>
                    <input
                      id="checkbox-switch-1"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                      onClick={handleCheckboxClick}
                    />
                  </td>
                  <td>99</td>
                  <td>내셔널</td>
                  <td>UNLIMITED MILE</td>
                  <td>무제한 마일리지</td>
                  <td>
                    <div className="truncate ">
                      안내블라블라 내용입니다…안내블라블라 내용입니다…
                    </div>
                  </td>
                  <td>Y</td>
                  <td>스크릿비고</td>
                </tr>
                <tr className="cursor-pointer">
                  <td>
                    <input
                      id="checkbox-switch-1"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                      onClick={handleCheckboxClick}
                    />
                  </td>
                  <td>99</td>
                  <td>내셔널</td>
                  <td>UNLIMITED MILE</td>
                  <td>무제한 마일리지</td>
                  <td>
                    <div className="truncate ">
                      안내블라블라 내용입니다…안내블라블라 내용입니다…
                    </div>
                  </td>
                  <td>Y</td>
                  <td>스크릿비고</td>
                </tr>
                <tr className="cursor-pointer">
                  <td>
                    <input
                      id="checkbox-switch-1"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                      onClick={handleCheckboxClick}
                    />
                  </td>
                  <td>99</td>
                  <td>내셔널</td>
                  <td>UNLIMITED MILE</td>
                  <td>무제한 마일리지</td>
                  <td>
                    <div className="truncate ">
                      안내블라블라 내용입니다…안내블라블라 내용입니다…
                    </div>
                  </td>
                  <td>Y</td>
                  <td>스크릿비고</td>
                </tr>
              </tbody>
            </table>
          </div>
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

      {/* 삭제 컨펌 */}
      <Dialog
        open={buttonModalPreview}
        onClose={() => {
          memberIntro(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                memberIntro(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div>
              <div className="p-5 text-center text-lg">
                정말 삭제하시겠습니까?
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 text-center">
            <Button
              type="button"
              className="mr-3 w-24"
              onClick={() => {
                memberIntro(false)
              }}
            >
              취소
            </Button>
            <button
              type="button"
              className="btn btn-danger w-24"
              onClick={() => {
                deLete(true)
                memberIntro(false)
              }}
            >
              삭제
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제 완료 */}
      <Dialog
        open={buttonModalPreview2}
        onClose={() => {
          deLete(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                deLete(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div>
              <div className="p-5 text-center text-lg">
                정상적으로 삭제되었습니다.
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 text-center">
            <Button
              type="button"
              variant="primary"
              className="w-24"
              onClick={() => {
                deLete(false)
              }}
            >
              확인
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
export default ChargeItem
