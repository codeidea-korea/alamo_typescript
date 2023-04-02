import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useGetList, { ReturnType } from '@/hooks/useGetList'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

export interface Item {
  id: number
  brandId: number
  signupCaseCode: string
  userStatusCode: string
  allowedMarkettingCode: string
  userId: string
  password: string
  name: string
  firstNameEng: string
  lastNameEng: string
  phoneNo: string
  mobilePhoneNo: string
  email: string
  createdAt: string
  travelCorpId: number
  corpDetailId: number
  deleted: boolean
  deletedAt: null
}

interface Data {
  list: Item[]
  count: number
}

interface ResponseData extends ReturnType {
  data: Data | undefined
}

export default function TourList() {
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
    url: '/users/corp/travels',
    key: 'getTourList',
  })
  const [isComplete, setIsComplete] = useState(false)
  const [isComplete2, setIsComplete2] = useState(false)
  const [isComplete3, setIsComplete3] = useState(false)
  const [isComplete4, setIsComplete4] = useState(false)
  const [isRefusal, setIsRefusal] = useState(false)
  const [isRefusal2, setIsRefusal2] = useState(false)
  const [isRefusal3, setIsRefusal3] = useState(false)
  const [isRefusal4, setIsRefusal4] = useState(false)
  const [isEmail, setIsEmail] = useState(false)
  const [isEmail2, setIsEmail2] = useState(false)
  const [memberModal, setMemberModal] = useState(false)

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

  // 여행사 수성상세 삭제모달
  const [Delete, setDelete] = useState(false)
  // 여행사 수성상세 수정모달
  const [Change, setChange] = useState(false)

  const [ResetPassword, setResetPassword] = useState(false)
  const [Deletedetails, setDeletedetails] = useState(false)
  const [Deletedetails2, setDeletedetails2] = useState(false)

  return (
    <div className="intro-y box mt-5 p-3">
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
            className="btn btn-sm btn-outline-success mr-2 w-20"
            onClick={() => {
              setIsComplete(true)
              handleCheckboxClick()
            }}
          >
            승인완료
          </button>
          <button
            className="btn btn-sm btn-outline-dark mr-2 w-20"
            onClick={() => {
              setIsRefusal(true)
              handleCheckboxClick()
            }}
          >
            승인거부
          </button>
          <button
            className="btn btn-sm btn-outline-primary-soft mr-2"
            onClick={() => {
              setIsEmail(true)
              handleCheckboxClick()
            }}
          >
            가입안내 이메일 재발송
          </button>
        </div>
        <div className="form-check form-switch mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto">
          <button className="btn btn-sm btn-primary mr-2 w-20">다운로드</button>
          <select
            className="form-select-sm form-select w-20"
            aria-label=".form-select-lg example"
          >
            <option>100개</option>
            <option>200개</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="check_table table whitespace-nowrap">
          <thead className="table-dark text-center">
            <tr>
              <th>
                <input
                  id="checkbox-only-switch-all"
                  type="checkbox"
                  className="form-check-input check_all"
                  onChange={handleCheckAll}
                  onClick={handleCheckboxClick}
                />
              </th>
              <th>번호</th>
              <th>담당자명</th>
              <th>부서명</th>
              <th>여행사명</th>
              <th>회원 상태</th>
              <th>수수료</th>
              <th>승인거부사유</th>
              <th>여행사번호</th>
              <th>세금계산서 발행여부</th>
              <th>세금계산서용 이메일</th>
              <th>아이디</th>
              <th>대표 연락처</th>
              <th>담당자 전화번호</th>
              <th>담당자 이메일</th>
              <th>마케팅 수신동의</th>
              <th>예약횟수</th>
              <th>이용횟수</th>
              <th>최종 로그인시</th>
              <th>가입/탈퇴일시</th>
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
              <td
                className="link text-primary underline"
                onClick={() => setMemberModal(true)}
              >
                나담당
              </td>
              <td>마케팅팀</td>
              <td
                className="link text-primary underline"
                onClick={() => setMemberModal(true)}
              >
                정성투어
              </td>
              <td>승인완료</td>
              <td>5%</td>
              <td>증빙서류 미비</td>
              <td
                className="link text-primary underline"
                onClick={() => setMemberModal(true)}
              >
                2001
              </td>
              <td>세금계산서 발행</td>
              <td>abc@email.com</td>
              <td>abc1</td>
              <td>010-0000-0000</td>
              <td>010-1111-1111</td>
              <td>abc13@email.com</td>
              <td>Y</td>
              <td className="link text-primary underline">
                <Link to="/reservation">22</Link>
              </td>
              <td className="link text-primary underline">
                <Link to="/reservation">3</Link>
              </td>
              <td>2023-01-16 11:11:11</td>
              <td>2023-01-16 11:11:11</td>
            </tr>
          </tbody>
        </table>
        <div className="mt-3 flex items-center justify-between">
          <span className="btn btn-sm btn-secondary-soft w-24">
            총 30,000건
          </span>
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

      {/* 모달 승인완료 */}
      <Dialog
        open={isComplete3}
        onClose={() => {
          setIsComplete3(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">승인완료</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsComplete3(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              승인완료 처리하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 mr-2 w-24"
              onClick={() => {
                setIsComplete3(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              className="btn btn-primary w-24"
              onClick={() => {
                setIsComplete3(false)
                setIsComplete4(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={isComplete4}
        onClose={() => {
          setIsComplete4(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsComplete4(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              승인완료 처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsComplete4(false)
                setIsComplete3(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 승인완료 */}
      <Dialog
        open={isComplete}
        onClose={() => {
          setIsComplete(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">승인완료</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsComplete(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              승인완료 처리하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 mr-2 w-24"
              onClick={() => {
                setIsComplete(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              className="btn btn-primary w-24"
              onClick={() => {
                setIsComplete(false)
                setIsComplete2(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={isComplete2}
        onClose={() => {
          setIsComplete2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsComplete2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              총 <span className="text-primary">{checkedCount}개</span>가 &#91;
              승인완료 &#93; 처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsComplete2(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={isRefusal}
        onClose={() => {
          setIsRefusal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">승인거부</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsRefusal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              <select
                className="form-select"
                aria-label=".form-select-lg example"
              >
                <option>선택</option>
                <option>세금계산서 발행</option>
                <option>세금계산서 미발행</option>
                <option>원천징수 영수증 발행</option>
              </select>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 w-24"
              onClick={() => {
                setIsRefusal(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsRefusal2(true)
                setIsRefusal(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 모달승인거부 */}
      <Dialog
        open={isRefusal3}
        onClose={() => {
          setIsRefusal3(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">승인거부</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsRefusal3(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              <select
                className="form-select"
                aria-label=".form-select-lg example"
              >
                <option>선택</option>
                <option>세금계산서 발행</option>
                <option>세금계산서 미발행</option>
                <option>원천징수 영수증 발행</option>
              </select>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 w-24"
              onClick={() => {
                setIsRefusal3(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsRefusal3(false)
                setIsRefusal4(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      {/* 모달 승인거부 확인 */}
      <Dialog
        open={isRefusal4}
        onClose={() => {
          setIsRefusal4(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsRefusal4(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              승인거부 처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsRefusal3(false)
                setIsRefusal4(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={isRefusal2}
        onClose={() => {
          setIsRefusal2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsRefusal2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              총 <span className="text-primary">{checkedCount}개</span>가 &#91;
              승인거부 &#93; 처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsRefusal2(false)
                setIsRefusal(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={isEmail}
        onClose={() => {
          setIsEmail(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              가입안내 이메일 재발송
            </h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsEmail(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              이메일을 재발송하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 mr-2 w-24"
              onClick={() => {
                setIsEmail(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              className="btn btn-primary w-24"
              onClick={() => {
                setIsEmail(false)
                setIsEmail2(true)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={isEmail2}
        onClose={() => {
          setIsEmail2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsEmail2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              총 <span className="text-primary">{checkedCount}개</span>가 &#91;
              가입안내 이메일 재발송 &#93; 처리되었습니다
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsEmail2(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      <Dialog
        size="xl"
        open={memberModal}
        onClose={() => {
          setMemberModal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              여행사 회원 상세/수정
            </h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setMemberModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="flex flex-row items-center pb-2">
              <h2 className="mr-auto text-base font-medium">여행사 정보</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="table-bordered table w-full">
                <tbody>
                  <tr>
                    <td className="w-40 bg-slate-100 text-center font-semibold">
                      여행사번호
                    </td>
                    <td colSpan={3}>
                      <input
                        id="member_id"
                        type="text"
                        className="form-control"
                        value="11223"
                        disabled
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40 bg-slate-100  text-center font-semibold">
                      사업자번호
                    </td>
                    <td>
                      <input
                        id="member_id"
                        type="number"
                        className="form-control"
                        value="111-11-1111"
                        disabled
                      />
                    </td>
                    <td className="w-40 bg-slate-100 text-center font-semibold">
                      여행사명
                    </td>
                    <td>
                      <input
                        id="member_id"
                        type="text"
                        className="form-control"
                        value="투어여행사"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40 bg-slate-100 text-center font-semibold">
                      대표명
                    </td>
                    <td>
                      <input
                        id="id"
                        type="text"
                        className="form-control"
                        value="홍길동"
                      />
                    </td>
                    <td className="w-40 bg-slate-100 text-center font-semibold">
                      대표연락처
                    </td>
                    <td>
                      <input
                        id="id"
                        type="text"
                        className="form-control"
                        value="010-0000-0000"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40 bg-slate-100 text-center font-semibold">
                      사업자등록증 증빙
                    </td>
                    <td colSpan={3}>
                      <div>
                        <div className="filebox mt-2 flex">
                          <div className="left_icon btn-secondary flex items-center border px-3 py-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              icon-name="file"
                              data-lucide="file"
                              className="lucide lucide-file h-4 w-4"
                            >
                              <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                              <polyline points="14 2 14 8 20 8"></polyline>
                            </svg>
                          </div>
                          <input
                            id="fileName"
                            className="upload-name text_line flex-1 truncate border border-secondary p-2 text-slate-500"
                            value="첨부파일"
                            placeholder=""
                            readOnly
                          />
                          <label
                            htmlFor="file"
                            className="file_search btn-secondary cursor-pointer border p-2"
                          >
                            파일선택
                          </label>
                          <input type="file" id="file" />
                        </div>
                        <div className="mt-2 text-xs">
                          <p>* 최대 3개까지 가능. JPG, PNG, GIF</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="w-40 bg-slate-100 text-center font-semibold">
                      수수료율
                    </td>
                    <td colSpan={3}>
                      <input
                        id="first_name_en"
                        type="text"
                        className="form-control mr-2 w-24"
                        value="5"
                      />
                      %
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-5 flex flex-row items-center pb-2">
                <h2 className="mr-auto text-base font-medium">부서 정보</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-bordered table w-full">
                  <tbody>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        부서선택
                      </td>
                      <td colSpan={3}>
                        <div className="flex">
                          <select
                            className="form-select mr-2"
                            aria-label=".form-select-lg example"
                          >
                            <option>선택</option>
                            <option>부서1</option>
                          </select>
                          <input
                            id="member_id"
                            type="text"
                            className="form-control"
                            value=""
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100  text-center font-semibold">
                        세금계산서 발행여부
                      </td>
                      <td>
                        <div className="flex flex-col sm:flex-row">
                          <div className="form-check mr-5">
                            <input
                              id="tax_invoice-1"
                              className="form-check-input"
                              type="radio"
                              name="tax_invoice"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="tax_invoice-1"
                            >
                              Y
                            </label>
                          </div>
                          <div className="form-check mr-5">
                            <input
                              id="tax_invoice-2"
                              className="form-check-input"
                              type="radio"
                              name="tax_invoice"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="tax_invoice-2"
                            >
                              N
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              id="tax_invoice-3"
                              className="form-check-input"
                              type="radio"
                              name="tax_invoice"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="tax_invoice-3"
                            >
                              원천징수 영수증
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        세금계선서용 이메일
                      </td>
                      <td>
                        <input
                          id="tax_email"
                          type="text"
                          className="form-control"
                          value="abc@email.com"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        은행명
                      </td>
                      <td>
                        <select
                          className="form-select"
                          aria-label=".form-select-lg example"
                        >
                          <option>선택</option>
                          <option>은행1</option>
                        </select>
                      </td>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        계좌명
                      </td>
                      <td>
                        <input
                          id="account_name"
                          type="text"
                          className="form-control"
                          value="계좌명"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        계좌번호
                      </td>
                      <td colSpan={3}>
                        <input
                          id="account_number"
                          type="text"
                          className="form-control"
                          value="111111-11-111111"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        계좌서류 증빙
                      </td>
                      <td colSpan={3}>
                        <div>
                          <div className="filebox mt-2 flex">
                            <div className="left_icon btn-secondary flex items-center border px-3 py-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                icon-name="file"
                                data-lucide="file"
                                className="lucide lucide-file h-4 w-4"
                              >
                                <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z"></path>
                                <polyline points="14 2 14 8 20 8"></polyline>
                              </svg>
                            </div>
                            <input
                              id="fileName"
                              className="upload-name text_line flex-1 truncate border border-secondary p-2 text-slate-500"
                              value="첨부파일"
                              placeholder=""
                              readOnly
                            />
                            <label
                              htmlFor="file"
                              className="file_search btn-secondary cursor-pointer border p-2"
                            >
                              파일선택
                            </label>
                            <input type="file" id="file" />
                          </div>
                          <div className="mt-2 text-xs">
                            <p>* 최대 3개까지 가능. JPG, PNG, GIF</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-5 flex flex-row items-center pb-2">
                <h2 className="mr-auto text-base font-medium">담당자 정보</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="table-bordered table w-full">
                  <tbody>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        담당자 아이디
                      </td>
                      <td>
                        <input
                          id="manager_id"
                          type="text"
                          className="form-control"
                          value="aaa"
                          disabled
                        />
                      </td>
                      <td className="w-40 bg-slate-100  text-center font-semibold">
                        비밀번호
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-primary"
                          onClick={() => setResetPassword(true)}
                        >
                          비밀번호 초기화
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        담당자명
                      </td>
                      <td>
                        <input
                          id="manager_name"
                          type="text"
                          className="form-control"
                          value="나담당"
                        />
                      </td>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        담당자 연락처
                      </td>
                      <td>
                        <input
                          id="manager_number"
                          type="text"
                          className="form-control"
                          value="010-0000-0000"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        담당자 휴대폰번호
                      </td>
                      <td>
                        <input
                          id="manager_phone"
                          type="number"
                          className="form-control"
                          value="010-0000-0000"
                        />
                      </td>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        담당자 이메일
                      </td>
                      <td>
                        <input
                          id="manager_email"
                          type="text"
                          className="form-control"
                          value="abc@email.com"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        마케팅 수신동의
                      </td>
                      <td>
                        <div className="flex flex-col sm:flex-row">
                          <div className="form-check mr-5">
                            <input
                              id="marketing_agree-1"
                              className="form-check-input"
                              type="radio"
                              name="marketing_agree"
                              value=""
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="marketing_agree-1"
                            >
                              Y
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              id="marketing_agree-2"
                              className="form-check-input"
                              type="radio"
                              name="marketing_agree"
                              value=""
                            />
                            <label
                              className="form-check-label"
                              htmlFor="marketing_agree-2"
                            >
                              N
                            </label>
                          </div>
                        </div>
                      </td>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        상태
                      </td>
                      <td>승인대기</td>
                    </tr>
                    <tr>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        가입일시
                      </td>
                      <td>2022-11-11 11:11:11</td>
                      <td className="w-40 bg-slate-100 text-center font-semibold">
                        최종 로그인일시
                      </td>
                      <td>2022-11-11 11:11:11</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <button
              type="button"
              className="btn btn-danger mr-2 w-24"
              onClick={() => {
                setDeletedetails(true)
              }}
            >
              삭제
            </button>
            <button
              type="button"
              className="btn btn-ouline-secondary mr-2 w-24"
              onClick={() => {
                setMemberModal(false)
              }}
            >
              취소
            </button>
            <button
              type="button"
              className="btn btn-dark mr-2 w-24"
              onClick={() => setIsRefusal3(true)}
            >
              승인거부
            </button>
            <button
              type="button"
              className="btn btn-success mr-2 w-24"
              onClick={() => setIsComplete3(true)}
            >
              승인완료
            </button>
            <button
              type="button"
              onClick={() => {
                setChange(true)
              }}
              className="btn btn-primary w-24"
            >
              수정
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

      {/* 비밀번호초기화 모달 */}
      <Dialog
        open={ResetPassword}
        onClose={() => {
          setResetPassword(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setResetPassword(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              비밀번호가 초기화되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setResetPassword(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제버튼 */}
      <Dialog
        open={Deletedetails}
        onClose={() => {
          setDeletedetails(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setDeletedetails(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정말 삭제하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <Button
                variant="outline-secondary"
                type="button"
                onClick={() => {
                  setDeletedetails(false)
                }}
                className="mr-1 w-24"
              >
                취소
              </Button>
              <button
                type="button"
                onClick={() => {
                  setDeletedetails2(true)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제버튼 확인 */}
      <Dialog
        open={Deletedetails2}
        onClose={() => {
          setDeletedetails2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setDeletedetails2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정상적으로 삭제되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setDeletedetails2(false)
                  setDeletedetails(false)
                  setMemberModal(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 수정 버튼*/}
      <Dialog
        open={Change}
        onClose={() => {
          setChange(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setChange(false)
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
                  setChange(false)
                  setMemberModal(false)
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
