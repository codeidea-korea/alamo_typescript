import { useState } from 'react'
import { Link } from 'react-router-dom'

import useGetList, { ReturnType } from '@/hooks/useGetList'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'
import TinySlider from '@/base-components/TinySlider'

import LoadingBox from '@/components/LoadingBox'

interface Item {}

interface Data {
  list: Item[]
  count: number
}

interface ResponseData extends ReturnType {
  data: Data | undefined
}

export default function MainList() {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/contents/main',
    key: 'getMainList',
  })

  const [showImage, setshowImage] = useState(false)

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

// 미노출 모달
const [Confirm, setConfirm] = useState(false)
const [NumberCheck, setNumberCheck] = useState(false)

// 선택삭제 모달
const [deleteConfirm, setdeleteConfirm] = useState(false)
const [NumberCheck2, setNumberCheck2] = useState(false)

  return (
    <>
      <LoadingBox className="box mt-6" loading={isLoading || isRefetching}>
        <div className="border-slate-200/6 space-between flex border-b p-3">
          <div className="flex items-center gap-2">
            <button className="btn btn-sm btn-outline-danger w-20"
            onClick={() =>
              {
              setdeleteConfirm(true)
              handleCheckboxClick()
              }
            }
            >삭제</button>
            <Link
              to="/cms/main/create"
              className="btn btn-sm btn-outline-primary w-20"
            >
              콘텐츠 등록
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
        <div className="flex flex-row border-b border-slate-200/60 p-3">
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
                  <th>전시영역</th>
                  <th>노출 수량</th>
                  <th>이미지보기</th>
                  <th>노출기간</th>
                  <th>노출여부</th>
                  <th>최종수정자</th>
                  <th>등록일시</th>
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
                  <td className="w-56">알라모</td>
                  <td className="w-32">
                    <Link
                      to="/cms/main/detail"
                      className="text-primary underline underline-offset-4"
                    >
                      메인 비쥬얼
                    </Link>
                  </td>
                  <td className="w-24">1/3</td>
                  <td className="w-32">
                    <button
                      className="text-primary underline underline-offset-4"
                      type="button"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault()
                        setshowImage(true)
                      }}
                    >
                      이미지보기
                    </button>
                  </td>
                  <td>2022-11-11 00:00:00 ~ 9999-11-11 00:00:00 </td>
                  <td className="w-24">Y</td>
                  <td className="w-32">홍길동</td>
                  <td>2022-11-11 11:11:11</td>
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
                  <td>98</td>
                  <td className="w-56">알라모</td>
                  <td className="w-32">
                    <Link
                      to="/cms/main/detail"
                      className="text-primary underline underline-offset-4"
                    >
                      메인 비쥬얼
                    </Link>
                  </td>
                  <td className="w-24">1/3</td>
                  <td className="w-32">
                    <button
                      className="text-primary underline underline-offset-4"
                      type="button"
                      onClick={(event: React.MouseEvent) => {
                        event.preventDefault()
                        setshowImage(true)
                      }}
                    >
                      이미지보기
                    </button>
                  </td>
                  <td>2022-11-11 00:00:00 ~ 9999-11-11 00:00:00 </td>
                  <td className="w-24">Y</td>
                  <td className="w-32">홍길동</td>
                  <td>2022-11-11 11:11:11</td>
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
      </LoadingBox>

      {/* 이미지 롤링 팝업*/}
      <Dialog
        size="md"
        open={showImage}
        onClose={() => {
          setshowImage(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">이미지 보기</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setshowImage(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="p-10">
            <TinySlider
              options={{
                controls: true,
              }}
            >
              <div className="h-32 px-2">
                <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                  <h3 className="flex h-full items-center justify-center text-2xl font-medium">
                    1
                  </h3>
                </div>
              </div>
              <div className="h-32 px-2">
                <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                  <h3 className="flex h-full items-center justify-center text-2xl font-medium">
                    2
                  </h3>
                </div>
              </div>
              <div className="h-32 px-2">
                <div className="h-full rounded-md bg-slate-100 dark:bg-darkmode-400">
                  <h3 className="flex h-full items-center justify-center text-2xl font-medium">
                    3
                  </h3>
                </div>
              </div>
            </TinySlider>
          </Dialog.Description>
          <Dialog.Footer>
            <button
              type="button"
              onClick={() => {
                setshowImage(false)
              }}
              className="btn btn-primary w-24"
            >
              확인
            </button>
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

      
    </>
  )
}
