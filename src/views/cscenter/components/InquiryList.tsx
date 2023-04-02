import { useState } from 'react'
import { Link } from 'react-router-dom'

import useGetList, { ReturnType } from '@/hooks/useGetList'
import CommonModal from '@/views/modal_del/common-modal'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'
import Tippy from '@/base-components/Tippy'

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

export default function InquiryList() {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/counsel/one-on-one',
    key: 'getOneOnOne',
  })

  // 회원 상세/수정
  const [buttonModalPreview, memberIntro] = useState(false)
  const [Deletedetails, setDeletedetails] = useState(false) // 삭제버튼
  const [Deletedetails2, setDeletedetails2] = useState(false) //삭제확인
  const [Correction, setCorrection] = useState(false) // 수정확인
  const [ResetPassword, setResetPassword] = useState(false) // 비밀번호 초기화

  // 여행사 상세/수정
  const [Travelagency, setTravelagency] = useState(false)

  // 예약확정
  const [Reservation, setReservation] = useState(false)

  // 파일 삭제
  const FileDeleteHandle = (e: any) => {
    const file = e.target.parentElement.parentElement
    file.remove()
  }

  // 승인거부 모달
  const [Rejected, setRejected] = useState(false)
  // 승인완료 모달
  const [Approved, setApproved] = useState(false)
  const [Approved2, setApproved2] = useState(false)

  // 미노출 모달
  const [Confirm, setConfirm] = useState(false)
  const [NumberCheck, setNumberCheck] = useState(false)

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

  const [checkedCount, setCheckedCount] = useState<number>(0)// 체크박스 카운트
  // 체크 관련 코드 끝

  // 승인거부 사유 선택 안했을 시
  const [Rejected2, setRejected2] = useState(false)
  const [Rejected3, setRejected3] = useState(false)

  return (
    <>
      <div className="intro-y box mt-6 p-3">
        <div className="flex flex-col items-center sm:flex-row">
          <div className="mr-auto text-base font-medium">
            <button
              className="btn btn-sm btn-outline-dark mr-2 w-20"
              onClick={() => {
                setConfirm(true)
                handleCheckboxClick()
              }}
            >
              미노출
            </button>
          </div>
          <div className="form-check form-switch mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto">
            <select className="form-select-sm form-select">
              <option>100개</option>
              <option>200개</option>
            </select>
          </div>
        </div>
        <div className="check_table mt-3 overflow-x-auto">
          <table className="table-hover table whitespace-nowrap">
            <thead className="table-dark text-center">
              <tr>
                <th>
                  <input
                    id="checkbox-switch-1"
                    className="form-check-input check_all"
                    onChange={handleCheckAll}
                    onClick={handleCheckboxClick}
                    type="checkbox"
                  />
                </th>
                <th>번호</th>
                <th>브랜드</th>
                <th>1:1문의 구분</th>
                <th>구분</th>
                <th>회원여부</th>
                <th>작성자명(여행사명)</th>
                <th>작성자 이메일</th>
                <th>예약번호</th>
                <th>제목</th>
                <th>고객 첨부파일</th>
                <th>관리자 첨부파일</th>
                <th>노출여부</th>
                <th>답변여부</th>
                <th>등록일시</th>
                <th>답변자</th>
                <th>답변일시</th>
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
                <td>알라모</td>
                <td>제휴항공사 마일리지</td>
                <td>직판</td>
                <td>회원</td>
                <td>
                  <button
                    type="button"
                    className="text-primary underline"
                    onClick={() => {
                      memberIntro(true)
                    }}
                  >
                    홍길동
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="text-primary underline"
                    onClick={() => {
                      memberIntro(true)
                    }}
                  >
                    a1@a.co.kr
                  </button>
                </td>
                <td>
                  <Link
                    to=""
                    className="underline"
                    onClick={() => {
                      setReservation(true)
                    }}
                  >
                    1111
                  </Link>
                </td>
                <td>
                  <a
                    href="/cscenter/inquiry_detail"
                    className="text-primary underline"
                  >
                    항공사 마일리지 적립 정상적으로 ....(2)
                  </a>
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
                <td>답변대기</td>
                <td>2022-11-11 11:11:11</td>
                <td>홍길동</td>
                <td>2022-11-11 11:11:11</td>
              </tr>
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
                <td>알라모</td>
                <td>제휴항공사 마일리지</td>
                <td>직판</td>
                <td>회원</td>
                <td>
                  <button
                    type="button"
                    className="text-primary underline"
                    onClick={() => {
                      setTravelagency(true)
                    }}
                  >
                    알라모
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="text-primary underline"
                    onClick={() => {
                      memberIntro(true)
                    }}
                  >
                    a1@a.co.kr
                  </button>
                </td>
                <td>
                  <Link
                    to=""
                    className="underline"
                    onClick={() => {
                      setReservation(true)
                    }}
                  >
                    1111
                  </Link>
                </td>
                <td>
                  <a href="/inquiry_detail" className="text-primary underline">
                    항공사 마일리지 적립 정상적으로 ....(2)
                  </a>
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
                <td>답변중</td>
                <td>2022-11-11 11:11:11</td>
                <td>홍길동</td>
                <td>2022-11-11 11:11:11</td>
              </tr>
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
                <td>알라모</td>
                <td>제휴항공사 마일리지</td>
                <td>직판</td>
                <td>회원</td>
                <td>
                  <button
                    type="button"
                    className="text-primary underline"
                    onClick={() => {
                      memberIntro(true)
                    }}
                  >
                    홍길동
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="text-primary underline"
                    onClick={() => {
                      memberIntro(true)
                    }}
                  >
                    a1@a.co.kr
                  </button>
                </td>
                <td>
                  <Link
                    to=""
                    className="underline"
                    onClick={() => {
                      setReservation(true)
                    }}
                  >
                    1111
                  </Link>
                </td>
                <td>
                  <a href="/inquiry_detail" className="text-primary underline">
                    항공사 마일리지 적립 정상적으로 ....(2)
                  </a>
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
                <td>답변완료</td>
                <td>2022-11-11 11:11:11</td>
                <td>홍길동</td>
                <td>2022-11-11 11:11:11</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <span className="btn btn-sm btn-secondary-soft">총 30,000건</span>
          <div>
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
      <CommonModal
        // 회원상세/수정 관련 모달
        buttonModalPreview={buttonModalPreview}
        memberIntro={memberIntro}
        Deletedetails={Deletedetails}
        setDeletedetails={setDeletedetails}
        Deletedetails2={Deletedetails2}
        setDeletedetails2={setDeletedetails2}
        Correction={Correction}
        setCorrection={setCorrection}
        ResetPassword={ResetPassword}
        setResetPassword={setResetPassword}
        // 예약확정서
        Reservation={Reservation}
        setReservation={setReservation}
        // 여행사 상세/수정
        Travelagency={Travelagency}
        setTravelagency={setTravelagency}
        // 파일삭제
        FileDeleteHandle={FileDeleteHandle}
        // 승인거부 사유 모달
        Rejected={Rejected}
        setRejected={setRejected}
        Rejected2={Rejected2}
        setRejected2={setRejected2} //승인거부 사유 미 선택 시
        Rejected3={Rejected3}
        setRejected3={setRejected3} // 승인거부 처리 완료
        // 승인완료
        Approved={Approved}
        setApproved={setApproved} //승인완료 컨펌
        Approved2={Approved2}
        setApproved2={setApproved2} //승인완료
      />

      {/* 개수체크 모달 */}
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
    </>
  )
}
