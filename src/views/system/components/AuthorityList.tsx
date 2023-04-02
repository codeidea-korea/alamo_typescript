import { useState } from 'react'

import useGetList, { ReturnType } from '@/hooks/useGetList'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

import LoadingBox from '@/components/LoadingBox'
import PageCount from '@/components/common/PageCount'
import PageSize from '@/components/common/PageSize'

interface Item {
  code: number
  groupCode: string
  id: number
  name: string
}

interface Data {
  list: Item[]
  count: number
}

interface ResponseData extends ReturnType {
  data: Data | undefined
}

interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  setOpen2: React.Dispatch<React.SetStateAction<boolean>>
}

export default function AuthorityList({ setOpen, setOpen2 }: Props) {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/config/auth',
    key: 'getAuthority',
  })
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

  // 선택삭제 모달
  const [deleteConfirm, setdeleteConfirm] = useState(false)
  const [NumberCheck2, setNumberCheck2] = useState(false)

  return (
    <LoadingBox
      className="intro-y box mt-6 p-3"
      loading={isLoading || isRefetching}
    >
      <div className="mb-5 flex flex-col items-center sm:flex-row">
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
            onClick={() => setOpen(true)}
          >
            사용자 등록
          </button>
        </div>
        <div className="form-check form-switch w-auto">
          <PageSize pageSize={pageSize} setPageSize={setPageSize} />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="check_table table whitespace-nowrap">
          <thead className="table-dark text-center">
            <tr>
              <th>
                <input
                  id="checkbox-switch-1"
                  className="form-check-input"
                  type="checkbox"
                  onChange={handleCheckAll}
                  onClick={handleCheckboxClick}
                />
              </th>
              <th>번호</th>
              <th>권한</th>
              <th>직위</th>
              <th>소속팀</th>
              <th>아이디</th>
              <th>이름</th>
              <th>휴대폰번호</th>
              <th>이메일</th>
              <th>최종접속일시</th>
              <th>최종수정자</th>
              <th>최종수정일시</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
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
              <td>담당 외 2</td>
              <td>대표</td>
              <td>대표팀</td>
              <td
                className="link text-primary underline"
                onClick={() => setOpen2(true)}
              >
                Abc1
              </td>
              <td
                className="link text-primary underline"
                onClick={() => setOpen2(true)}
              >
                홍길동
              </td>
              <td
                className="link text-primary underline"
                onClick={() => setOpen2(true)}
              >
                010-0000-0000
              </td>
              <td>abc@email.com</td>
              <td>2023-01-16 11:11:11</td>
              <td>2023-01-16 홍길동</td>
              <td>2023-01-16 11:11:11</td>
            </tr>
          </tbody>
        </table>
      </div>

      <PageCount
        data={data}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
      />
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
