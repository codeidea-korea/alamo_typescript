import { useState } from 'react'
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

export default function MemberList() {
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
    url: '/users',
    key: 'getUsers',
  })
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

  const [memberIntro, setmemberIntro] = useState(false)
  const [ResetPassword, setResetPassword] = useState(false)
  const [Deletedetails, setDeletedetails] = useState(false)
  const [Deletedetails2, setDeletedetails2] = useState(false)
  const [Correction, setCorrection] = useState(false)

  return (
    <div className="intro-y box mt-6 p-3">
      <div className="mb-3 flex flex-row items-center">
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
        </div>
        <div className="form-check form-switch ml-auto mt-0 w-auto">
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
              <th>브랜드</th>
              <th>가입유형</th>
              <th>아이디</th>
              <th>한글 이름</th>
              <th>영문 성</th>
              <th>영문 이름</th>
              <th>휴대폰 번호</th>
              <th>이메일</th>
              <th>마케팅 수신동의</th>
              <th>예약횟수</th>
              <th>이용횟수</th>
              <th>상담횟수</th>
              <th>최종 로그인일시</th>
              <th>가입일시</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {data?.list.map((item) => (
              <tr key={item.id}>
                <td>
                  <input
                    id="checkbox-switch-1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>{item.id}</td>
                <td>{item.brandId}</td>
                <td>자사회원</td>
                <td
                  className="link text-primary underline"
                  onClick={() => setmemberIntro(true)}
                >
                  {item.name}
                </td>
                <td
                  className="link text-primary underline"
                  onClick={() => setmemberIntro(true)}
                >
                  홍길동
                </td>
                <td
                  className="link text-primary underline"
                  onClick={() => setmemberIntro(true)}
                >
                  HONG
                </td>
                <td>GILDONG</td>
                <td>010-0000-0000</td>
                <td>abc@email.com</td>
                <td>Y</td>
                <td className="link text-primary underline">
                  <Link to="/reservation">22</Link>
                </td>
                <td className="link text-primary underline">
                  <Link to="/reservation">3</Link>
                </td>
                <td className="link text-primary underline">
                  <Link to="/cscenter/counseling">10</Link>
                </td>
                <td>2023-01-16 11:11:11</td>
                <td>2023-01-16 11:11:11</td>
              </tr>
            ))}
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
      {/* BEGIN: Modal 회원 상세/수정 */}
      <Dialog
        open={memberIntro}
        onClose={() => {
          setmemberIntro(false)
        }}
        size="xl"
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">회원 상세/수정</h2>
            <Button
              className="btn btn-rounded-secondary hidden rounded-full p-1 sm:flex"
              type="button"
              onClick={() => {
                setmemberIntro(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </Button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="p-3">
              <div className="intro-y box">
                <table className="table-bordered table w-full">
                  <tbody>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        브랜드
                      </td>
                      <td colSpan={3}>
                        <input
                          id="member_id"
                          type="text"
                          className="form-control"
                          defaultValue="알라모"
                          disabled
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100  text-center font-semibold">
                        가입유형
                      </td>
                      <td>
                        <input
                          id="member_id"
                          type="text"
                          className="form-control"
                          defaultValue="자사회원"
                          disabled
                        />
                      </td>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        마케팅 수신동의
                      </td>
                      <td>
                        <div className="flex flex-row gap-2">
                          <div className="form-check">
                            <input
                              id="marketing_agree-1"
                              className="form-check-input"
                              type="radio"
                              name="marketing_agree"
                              defaultChecked
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
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        아이디
                      </td>
                      <td>
                        <input
                          id="id"
                          type="text"
                          className="form-control"
                          defaultValue="abc1"
                          disabled
                        />
                      </td>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
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
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        한글 이름
                      </td>
                      <td colSpan={3}>
                        <input
                          id="name_kr"
                          type="text"
                          className="form-control"
                          defaultValue="홍길동"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        영문 성
                      </td>
                      <td>
                        <input
                          id="first_name_en"
                          type="text"
                          className="form-control"
                          defaultValue="HONG"
                        />
                      </td>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        영문 이름
                      </td>
                      <td>
                        <input
                          id="last_name_en"
                          type="text"
                          className="form-control"
                          defaultValue="GILDONG"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        휴대폰번호
                      </td>
                      <td>
                        <input
                          id="phone_number"
                          type="number"
                          className="form-control"
                        />
                      </td>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        이메일
                      </td>
                      <td>
                        <input
                          id="email"
                          type="text"
                          className="form-control"
                          defaultValue="abc@email.com"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        가입일시
                      </td>
                      <td>2022-11-11 11:11:11</td>
                      <td className="w-44 bg-slate-100 text-center font-semibold">
                        최종 로그인일시
                      </td>
                      <td>2022-11-11 11:11:11</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="intro-y box mt-5">
                <div className="overflow-x-auto p-3">
                  <table className="table whitespace-nowrap">
                    <thead className="table-dark text-center">
                      <tr>
                        <th>예약횟수</th>
                        <th>이용횟수</th>
                        <th>상담횟수</th>
                      </tr>
                    </thead>
                    <tbody className="text-center">
                      <tr>
                        <td className="link">
                          <Link to="/reservation">22</Link>
                        </td>
                        <td className="link">
                          <Link to="/reservation">3</Link>
                        </td>
                        <td className="link">
                          <Link
                            to="/cscenter/counseling"
                            onClick={() => {
                              setmemberIntro(false)
                            }}
                          >
                            10
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-8 text-center">
            <Button
              variant="danger"
              type="button"
              onClick={() => {
                setDeletedetails(true)
              }}
              className="mr-1 w-24"
            >
              삭제
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                setmemberIntro(false)
              }}
              className="mr-1 w-24"
            >
              취소
            </Button>
            <Button
              variant="primary"
              className="w-24"
              type="button"
              onClick={() => {
                setCorrection(true)
              }}
            >
              수정
            </Button>
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
                  setmemberIntro(false)
                  setDeletedetails(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 수정 확인*/}
      <Dialog
        open={Correction}
        onClose={() => {
          setCorrection(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setCorrection(false)
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
                  setCorrection(false)
                  setmemberIntro(false)
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
