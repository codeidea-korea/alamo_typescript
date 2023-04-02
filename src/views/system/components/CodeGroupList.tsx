import { useState } from 'react'
import { useQuery } from 'react-query'

import useGetList, { ReturnType } from '@/hooks/useGetList'

import request from '@/utils/request'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

import LoadingBox from '@/components/LoadingBox'
import PageCount from '@/components/common/PageCount'
import PageSize from '@/components/common/PageSize'

interface Item {
  groupCode: string
  name: string
  used: boolean
  createdAt: string
  modifiedId: number
  modifiedAt: string
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

export default function CodeGroupList({ setOpen, setOpen2 }: Props) {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/config/common/group-code',
    key: 'getCodeGroupList',
  })
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false)
  const handleCheckAll = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table2 input[type="checkbox"]',
    )
    checkboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked
    })
    setIsAllChecked(event.target.checked)
  }

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const checkboxes = document.querySelectorAll<HTMLInputElement>(
      '.check_table2 input[type="checkbox"]',
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
      '.check_table2 tbody input[type="checkbox"]',
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
    <div className="intro-y box col-span-12 p-5 lg:col-span-6">
      <div className="border-b border-slate-200/60 pb-5">
        <table className="table-bordered table w-full">
          <tbody>
            <tr>
              <td className="bg-slate-100 text-center font-semibold">브랜드</td>
              <td>
                <select className="form-select">
                  <option>전체</option>
                  <option>소속팀1</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="bg-slate-100 text-center font-semibold">
                그룹코드/그룹명
              </td>
              <td>
                <input id="group" type="text" className="form-control" />
              </td>
            </tr>
            <tr>
              <td className="bg-slate-100 text-center font-semibold">
                사용여부
              </td>
              <td>
                <div className="flex flex-row">
                  <div className="form-check mr-2">
                    <input
                      id="checkbox-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-4"
                    >
                      Y
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="checkbox-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-4"
                    >
                      N
                    </label>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3 text-center">
          <button className="btn btn-outline-secondary ml-auto mr-3 w-20 bg-white">
            초기화
          </button>
          <button className="btn btn-primary ml-auto mr-3 w-20">조회</button>
        </div>
      </div>

      <LoadingBox className="mt-5" loading={isLoading || isRefetching}>
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
              className="btn btn-sm btn-outline-dark mr-2 w-20"
              onClick={() => {
                setConfirm(true)
                handleCheckboxClick()
              }}
            >
              미사용
            </button>
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => setOpen(true)}
            >
              그룹코드 등록
            </button>
          </div>
          <div className="form-check form-switch w-auto">
            <PageSize pageSize={pageSize} setPageSize={setPageSize} />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="check_table2 table whitespace-nowrap">
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
                <th>브랜드</th>
                <th>그룹코드</th>
                <th>그룹명</th>
                <th>공통코드 수</th>
                <th>사용여부</th>
                <th>최종수정자</th>
                <th>최종수정일시</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {data?.list.map((item) => (
                <tr key={JSON.stringify(item)}>
                  <td>
                    <input
                      id="checkbox-switch-1"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                      onClick={handleCheckboxClick}
                    />
                  </td>
                  <td></td>
                  <td></td>
                  <td
                    className="link text-primary underline"
                    onClick={() => setOpen2(true)}
                  >
                    {item.groupCode}
                  </td>
                  <td>{item.groupCode}</td>
                  <td>3</td>
                  <td>{item.used ? 'Y' : 'N'}</td>
                  <td>{item.modifiedId}</td>
                  <td>{item.modifiedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <PageCount
          data={data}
          page={page}
          setPage={setPage}
          pageSize={pageSize}
        />
      </LoadingBox>

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
              미사용 &#93; 처리되었습니다.
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
            <h2 className="mr-auto text-base font-medium">미사용</h2>
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
              미사용 처리하시겠습니까?
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
    </div>
  )
}
