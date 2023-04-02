import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'
import Tippy from '@/base-components/Tippy'

const NotificationTalk = () => {
  const [daterange, setDaterange] = useState('')

  const [memberIntro, setmemberIntro] = useState(false)
  const [ResetPassword, setResetPassword] = useState(false)
  const [Deletedetails, setDeletedetails] = useState(false)
  const [Deletedetails2, setDeletedetails2] = useState(false)
  const [Correction, setCorrection] = useState(false)
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">알림톡 현황</h2>
      </div>

      {/* BEGIN: Page Layout */}
      <div className="">
        <div className="intro-y box mt-3 p-3">
          <table className="table-bordered table w-full">
            <tbody>
              <tr>
                <td className="w-32 bg-slate-100 text-center font-semibold">
                  발송 일자
                </td>
                <td colSpan={3}>
                  <div className="flex">
                    <div className="relative mr-2 w-60">
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
                        className="form-control block pl-12"
                      />
                    </div>
                    <label htmlFor="check01" className="check_button">
                      <input type="checkbox" id="check01" className="hidden" />
                      <span className="btn ml-2 inline-block w-16">1개월</span>
                    </label>
                    <label htmlFor="check02" className="check_button">
                      <input type="checkbox" id="check02" className="hidden" />
                      <span className="btn ml-2 inline-block w-16">3개월</span>
                    </label>
                    <label htmlFor="check03" className="check_button">
                      <input type="checkbox" id="check03" className="hidden" />
                      <span className="btn ml-2 inline-block w-16">6개월</span>
                    </label>
                    <label htmlFor="check04" className="check_button">
                      <input type="checkbox" id="check04" className="hidden" />
                      <span className="btn ml-2 inline-block w-16">1년</span>
                    </label>
                  </div>
                </td>
                <td className="w-32 bg-slate-100 text-center font-semibold">
                  브랜드
                </td>
                <td>
                  <select
                    className="form-select"
                    aria-label=".form-select-lg example"
                  >
                    <option>전체</option>
                    <option>브랜드1</option>
                    <option>브랜드2</option>
                  </select>
                </td>
                <td className="w-32 bg-slate-100 text-center font-semibold">
                  템플릿명
                </td>
                <td>
                  <select
                    className="form-select"
                    aria-label=".form-select-lg example"
                  >
                    <option>전체</option>
                    <option>템플릿명1</option>
                    <option>템플릿명2</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="w-32 bg-slate-100 text-center font-semibold">
                  회원아이디
                </td>
                <td>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control"
                  />
                </td>
                <td className="w-32 bg-slate-100 text-center font-semibold">
                  휴대폰번호
                </td>
                <td>
                  <input
                    id="regular-form-1"
                    type="number"
                    className="form-control"
                  />
                </td>
                <td className="w-32 bg-slate-100 text-center font-semibold">
                  발송메시지
                </td>
                <td>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control"
                  />
                </td>
                <td className="w-32 bg-slate-100 text-center font-semibold">
                  발송상태
                </td>
                <td>
                  <div className="mt-2 flex flex-col sm:flex-row">
                    <div className="form-check mr-5">
                      <input
                        id="radio-switch-4"
                        className="form-check-input"
                        type="checkbox"
                        name="horizontal_radio_button"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-4"
                      >
                        성공
                      </label>
                    </div>
                    <div className="form-check mr-2">
                      <input
                        id="radio-switch-5"
                        className="form-check-input"
                        type="checkbox"
                        name="horizontal_radio_button"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-5"
                      >
                        실패
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-3 text-center">
          <button className="btn btn-outline-secondary ml-auto mr-3 w-24 bg-white">
            초기화
          </button>
          <button className="btn btn-primary ml-auto mr-3 w-24">조회</button>
        </div>
        <div className="intro-y box mt-6 p-3">
          <div className="mb-5 flex flex-col items-center sm:flex-row">
            <div className="form-check form-switch mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto">
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
            <table className="table whitespace-nowrap">
              <thead className="table-dark text-center">
                <tr>
                  <th>번호</th>
                  <th>브랜드</th>
                  <th>발송일시</th>
                  <th>템플릿명</th>
                  <th>예약번호</th>
                  <th>회원 아이디</th>
                  <th>이름</th>
                  <th>휴대폰번호</th>
                  <th>발송메시지</th>
                  <th>버튼명</th>
                  <th>버튼링크</th>
                  <th>발송상태</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>99</td>
                  <td>알라모</td>
                  <td>2023-01-16</td>
                  <td>예약확정서</td>
                  <td>100011</td>
                  <td>
                    <button
                      className="text-primary underline"
                      onClick={() => {
                        setmemberIntro(true)
                      }}
                    >
                      abc1
                    </button>
                  </td>
                  <td>홍길동</td>
                  <td>010-1111-1111</td>
                  <td>
                    <Tippy
                      className="tooltip"
                      content="툴팁내용 알림톡 발송이 잘 되었나요"
                      options={{ theme: 'light' }}
                    >
                      알림톡 발송이 잘 되었나요
                    </Tippy>
                  </td>
                  <td>예약확정서 보러가기</td>
                  <td>http://www.alamo.com</td>
                  <td>발송중</td>
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
      {/* END: Page Layout */}

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
    </>
  )
}
export default NotificationTalk
