import { useState } from 'react'
import { Link } from 'react-router-dom'

import useGetList, { ReturnType } from '@/hooks/useGetList'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'
import Tippy from '@/base-components/Tippy'

import LoadingBox from '@/components/LoadingBox'
import PageCount from '@/components/common/PageCount'
import PageSize from '@/components/common/PageSize'

export interface Item {
  brandId: number
  contents: string
  fixed: boolean
  id: number
  modifiedAt: string
  modifiedId: number
  title: string
  views: number
  visabled: boolean
}

interface Data {
  list: Item[]
  count: number
}

interface ResponseData extends ReturnType {
  data: Data | undefined
}

export default function NoticeList() {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    selectedNotice,
    setSelectedNotice,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/contents/notice',
    key: 'getNotice',
  })
  const handleDelete = () => {
    console.log(selectedNotice)
  }

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
    <LoadingBox
      className="intro-y box mt-6 p-3"
      loading={isLoading || isRefetching}
    >
      <div className="flex gap-2">
        <button
          className="btn btn-sm btn-outline-danger w-20"
          onClick={() => {
            setdeleteConfirm(true)
            handleCheckboxClick()
          }}
        >
          삭제
        </button>
        <button
          className="btn btn-sm btn-outline-dark w-20"
          onClick={() => {
            setConfirm(true)
            handleCheckboxClick()
          }}
        >
          미노출
        </button>
        <Link to="/system/notice/create">
          <button className="btn btn-sm btn-outline-primary">
            공지사항 등록
          </button>
        </Link>
        <PageSize pageSize={pageSize} setPageSize={setPageSize} />
      </div>

      <table className="table-hover check_table mt-3 table">
        <thead className="table-dark text-center">
          <tr>
            <th className="w-10">
              <input
                id="checkbox-only-switch-all"
                className="form-check-input"
                type="checkbox"
                onChange={handleCheckAll}
                onClick={handleCheckboxClick}
              />
            </th>
            <th>번호</th>
            <th>브랜드</th>
            <th>제목</th>
            <th>첨부파일</th>
            <th>노출여부</th>
            <th>고정여부</th>
            <th>조회수</th>
            <th>최종수정자</th>
            <th>최종수정일시</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td>
              <input
                id="checkbox-only-switch-1"
                className="form-check-input"
                type="checkbox"
                onChange={handleCheck}
                onClick={handleCheckboxClick}
              />
            </td>
            <td>2</td>
            <td>알라모</td>
            <td>
              <Link to={`/system/notice/2`}>
                <p className="truncate text-primary underline">
                  2023년 외교부 공식 서포터스 모파랑 22기 최종 합격자 명단
                </p>
              </Link>
            </td>
            <td>
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
                <Lucide icon="FileText" className="inline-block h-4 w-4" />
              </Tippy>
            </td>
            <td>Y</td>
            <td>N</td>
            <td>0</td>
            <td>0</td>
            <td>2023-03-28 04:54:53</td>
          </tr>
          <tr className="text-center">
            <td>
              <input
                id="checkbox-only-switch-1"
                className="form-check-input"
                type="checkbox"
                onChange={handleCheck}
                onClick={handleCheckboxClick}
              />
            </td>
            <td>2</td>
            <td>알라모</td>
            <td>
              <Link to={`/system/notice/2`}>
                <p className="truncate text-primary underline">
                  2023년 외교부 공식 서포터스 모파랑 22기 최종 합격자 명단
                </p>
              </Link>
            </td>
            <td>
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
                <Lucide icon="FileText" className="inline-block h-4 w-4" />
              </Tippy>
            </td>
            <td>Y</td>
            <td>N</td>
            <td>0</td>
            <td>0</td>
            <td>2023-03-28 04:54:53</td>
          </tr>
        </tbody>
      </table>
      <PageCount
        data={data}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
      />

      {/* 미노출 개수체크 모달 */}
      <Dialog
        open={NumberCheck}
        onClose={() => {
          setNumberCheck(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setNumberCheck(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              총 <span className="text-primary">{checkedCount}개</span>가 &#91;
              미노출 &#93; 처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setNumberCheck(false)
                  setConfirm(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 미노출 모달 */}
      <Dialog
        open={Confirm}
        onClose={() => {
          setConfirm(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">미노출</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirm(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              미노출 처리하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setConfirm(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setNumberCheck(true)
                }}
                className="btn btn-primary w-24"
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
    </LoadingBox>
  )
}
