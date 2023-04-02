import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import useGetList, { ReturnType } from '@/hooks/useGetList'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

interface Item {}

interface Data {
  list: Item[]
  count: number
}

interface ResponseData extends ReturnType {
  data: Data | undefined
}

export default function NewsletterList() {
  const {
    page,
    setPage,
    pageSize,
    setPageSize,
    data,
    isLoading,
    isRefetching,
  }: ResponseData = useGetList({
    url: '/contents/news-letters',
    key: 'getNewsLetterList',
  })
  const [upload, setUpload] = useState(false)
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

  const [RegistBtn, setRegistBtn] = useState(false)

  const [memberIntro, setmemberIntro] = useState(false)
  const [ResetPassword, setResetPassword] = useState(false)
  const [Deletedetails, setDeletedetails] = useState(false)
  const [Deletedetails2, setDeletedetails2] = useState(false)
  const [Correction, setCorrection] = useState(false)



  

  return (
    <div className="intro-y box mt-6 p-3">
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
            onClick={() => setUpload(true)}
          >
            일괄 업로드
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
              <th>브랜드</th>
              <th>뉴스레터 상태</th>
              <th>회원아이디</th>
              <th>신청자명</th>
              <th>이메일</th>
              <th>신청일시</th>
              <th>최종발송일시</th>
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
              <td>발송</td>
              <td>
                <button
                  className="text-primary underline"
                  onClick={() => setmemberIntro(true)}
                >
                  abc1
                </button>
              </td>
              <td>홍길동</td>
              <td>abc@email.com</td>
              <td>2023-01-16 11:11:11</td>
              <td>2023-01-16 11:11:11</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="space-between flex items-center p-5">
        <span className="btn btn-sm btn-secondary-soft w-24">총 30,000건</span>
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

      {/* 일괄업로드 */}
      <Dialog
        size="md"
        open={upload}
        onClose={() => {
          setUpload(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">일괄 등록</h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setUpload(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="border-b border-slate-200/60 pb-5">
              <div className="font-bold">엑셀 업로드</div>
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
                <p>
                  * 대량등록의 경우 정상 등록 가능 확인이{' '}
                  <span className="text-danger">최대 30분 시간이</span>{' '}
                  소요됩니다.
                </p>
                <p>* 등록가능한 확장자 : xlsx, csv, xls</p>
              </div>
            </div>
            <div className="pt-5">
              <button type="button" className="btn btn-secondary w-full">
                포멧 다운로드
              </button>
              <div className="mt-2 text-xs">
                <p>* 포멧에 맞춰서 파일을 업로드 해주세요</p>
                <p>
                  * 최대 <span className="text-danger">3,000건</span>까지
                  가능합니다.
                </p>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              className="ml-3 w-24"
              onClick={() => {
                setUpload(false)
              }}
            >
              취소
            </Button>
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setUpload(false)
                setRegistBtn(true)
              }}
            >
              등록
            </Button>
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
