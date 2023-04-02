import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

const DiscountMng = () => {
  const navigate = useNavigate()
  const [daterange, setDaterange] = useState('')
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)
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
        <h2 className="mr-auto text-lg font-bold">요금할인 관리</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">예약기간</td>
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
              <td className="whitespace-nowrap  bg-slate-100 ">브랜드</td>
              <td>
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
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
                      defaultChecked
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
                      defaultChecked
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
            </tr>
            <tr>
              <td className="whitespace-nowrap  bg-slate-100 ">픽업기간</td>
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
              <td className="whitespace-nowrap  bg-slate-100 ">이벤트명</td>
              <td>
                <input type="text" className="form-control" placeholder="" />
              </td>
              <td className="whitespace-nowrap  bg-slate-100 ">노출여부</td>
              <td>
                <div className="flex flex-row">
                  <div className="form-check mr-2">
                    <input
                      id="checkbox-display-switch-3"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-3"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check mr-2">
                    <input
                      id="checkbox-display-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-display-switch-4"
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
        <div className="flex-center flex gap-3">
          <button className="btn w-24 bg-white">초기화</button>
          <button className="btn btn-primary w-24">조회</button>
        </div>
      </div>
      <div className="box mt-6">
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="flex items-center gap-2">
            <button
              className="btn btn-outline-danger btn-sm w-20"
              onClick={() => {
                setdeleteConfirm(true)
                handleCheckboxClick()
              }}
            >
              삭제
            </button>
            <Link
              to="/rateplan/discount/create"
              className="btn btn-outline-primary btn-sm"
            >
              요금할인 등록
            </Link>
          </div>
          <div className="flex gap-5">
            <select
              className="form-select-sm form-select w-24"
              aria-label="Default select example"
            >
              <option>100개</option>
              <option>option1</option>
              <option>option2</option>
            </select>
          </div>
        </div>
        <div className="flex flex-row border-b border-slate-200/60 p-5">
          <div className="w-full overflow-x-auto">
            <table className="table-hover check_table table">
              <thead className="table-dark text-center">
                <tr>
                  <th className="w-10">
                    <input
                      id="checkbox-only-switch-all"
                      className="form-check-input check_all"
                      type="checkbox"
                      onChange={handleCheckAll}
                      onClick={handleCheckboxClick}
                    />
                  </th>
                  <th className="w-20">번호</th>
                  <th>브랜드</th>
                  <th>구분</th>
                  <th>요금적용타입</th>
                  <th>국가/주/도시/지역</th>
                  <th>차량코드</th>
                  <th>CONTRACT ID</th>
                  <th>Product Code</th>
                  <th>이벤트명</th>
                  <th>설정구분</th>
                  <th>설정값</th>
                  <th>노출여부</th>
                  <th>예약기간</th>
                  <th>픽업기간</th>
                  <th>최종수정자</th>
                  <th>최종수정일시</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr
                  className="cursor-pointer"
                  onClick={() => navigate('/rateplan/discountg/detail')}
                >
                  <td
                    onClick={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    <input
                      id="checkbox-only-switch-1"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                      onClick={handleCheckboxClick}
                    />
                  </td>
                  <td>99</td>
                  <td className="">내셔널</td>
                  <td className="">직판</td>
                  <td className="">국가</td>
                  <td className="">30</td>
                  <td className="">CFAR</td>
                  <td className="">C0010</td>
                  <td className="">P0302</td>
                  <td className="">할인11</td>
                  <td className="">정액</td>
                  <td className="">10,00,000</td>
                  <td className="">Y</td>
                  <td className="">2022-01-01~2022-10-11</td>
                  <td className="">2022-01-01~2022-10-11</td>
                  <td className="">홍길동</td>
                  <td className="">2022-11-11 11:11:11</td>
                </tr>
              </tbody>
            </table>
          </div>
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
    </>
  )
}
export default DiscountMng
