import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import { Tab } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'
import Tippy from '@/base-components/Tippy'

import Alamologo from '@/assets/images/alamo-logo.png'

const CommonModal = (props: any) => {
  // 등록 버튼
  // const [RegistBtn, setRegistBtn] = useState(false)

  //회원 검색
  //const [memberSearch, setmemberSearch] = useState(false)

  // 회원 상세/수정
  // const [buttonModalPreview, memberIntro] = useState(false)

  // const [Deletedetails, setDeletedetails] = useState(false) // 삭제버튼
  // const [Deletedetails2, setDeletedetails2] = useState(false) //삭제확인
  // const [Correction, setCorrection] = useState(false) // 수정확인

  // const [Confirm, setConfirm] = useState(false)

  // 예약확정서
  // const [Reservation, setReservation] = useState(false)

  // 여행사 상세/수정
  // const [Travelagency, setTravelagency] = useState(false)

  // 승인거부 모달
  // const [Rejected, setRejected] = useState(false)

  // 승인거부 사유 선택 안했을 시
  // const [Rejected, setRejected] = useState(false)

   // 대시보드 편집 모달
   //const [DashboardModal, setDashboardModal] = useState(false)

  // 알림모달
   //const [ModifyModal, setModifyModal] = useState(false)

  const navigate = useNavigate()

  return (
    <>
      {/* 등록 버튼*/}
      <Dialog
        open={props.RegistBtn}
        onClose={() => {
          props.setRegistBtn(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setRegistBtn(false)
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
                  props.setRegistBtn(false)
                  props.setDashboardModal(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 이동*/}
      <Dialog
        open={props.RegistBtn2}
        onClose={() => {
          props.setRegistBtn2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setRegistBtn2(false)
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
                  props.setRegistBtn2(false)
                  navigate(props.confirmUrl)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* BEGIN: Modal 회원검색 */}
      <Dialog
        open={props.memberSearch}
        onClose={() => {
          props.setmemberSearch(false)
        }}
        size="xl"
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">회원검색</h2>
            <Button
              className="btn btn-rounded-secondary hidden rounded-full p-1 sm:flex"
              type="button"
              onClick={() => {
                props.setmemberSearch(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </Button>
          </Dialog.Title>
          <Dialog.Description
            style={{
              height: '600px',
              overflowY: 'scroll',
            }}
          >
            <Tab.Group>
              <Tab.List variant="tabs">
                <Tab>
                  <Tab.Button className="w-full py-2 text-center">
                    일반회원
                  </Tab.Button>
                </Tab>
                <Tab>
                  <Tab.Button className="w-full py-2 text-center">
                    여행사
                  </Tab.Button>
                </Tab>
              </Tab.List>
              <Tab.Panels className="border-b border-l border-r">
                <Tab.Panel className="p-5 leading-relaxed">
                  <div className="box col-span-12 overflow-auto p-5">
                    <table className="table-bordered table w-full">
                      <tbody>
                        <tr>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            브랜드
                          </td>
                          <td colSpan={3}>
                            <select className="form-select">
                              <option>전체</option>
                              <option>브랜드1</option>
                              <option>브랜드2</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            가입유형
                          </td>
                          <td>
                            <select className="form-select">
                              <option>선택</option>
                              <option>가입유형1</option>
                              <option>가입유형2</option>
                            </select>
                          </td>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            아이디
                          </td>
                          <td>
                            <input
                              id="id"
                              type="text"
                              className="form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            한글이름
                          </td>
                          <td>
                            <input
                              id="name_kr"
                              type="text"
                              className="form-control"
                            />
                          </td>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            영문 성/이름
                          </td>
                          <td>
                            <input
                              id="name_en"
                              type="text"
                              className="form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            휴대폰번호
                          </td>
                          <td>
                            <input
                              id="phone"
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
                              type="email"
                              className="form-control"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-5 text-center">
                      <button
                        type="button"
                        className="btn btn-ouline-secondary mr-2 w-24"
                      >
                        초기화
                      </button>
                      <button type="button" className="btn btn-primary w-24">
                        조회
                      </button>
                    </div>
                  </div>
                  <div className="intro-y box col-span-12 mt-5 overflow-auto p-5">
                    <div className="overflow-x-auto">
                      <table className="table whitespace-nowrap">
                        <thead className="table-dark text-center">
                          <tr>
                            <th>번호</th>
                            <th>가입유형</th>
                            <th>아이디</th>
                            <th>한글이름</th>
                            <th>영문성</th>
                            <th>영문이름</th>
                            <th>휴대폰번호</th>
                            <th>이메일</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr
                            className="link"
                            onClick={() => props.setmemberSearch(false)}
                          >
                            <td>99</td>
                            <td>자사회원</td>
                            <td>abc1</td>
                            <td>홍길동</td>
                            <td>HONG</td>
                            <td>GILDONG</td>
                            <td>010-0000-0000</td>
                            <td>abc@email.com</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="intro-y col-span-12">
                    <ul className="pagination justify-center">
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
                  </div>
                </Tab.Panel>
                <Tab.Panel className="p-5 leading-relaxed">
                  <div className="intro-y box col-span-12 overflow-auto p-5">
                    <table className="table-bordered table w-full">
                      <tbody>
                        <tr>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            여행사
                          </td>
                          <td colSpan={3}>
                            <select
                              className="form-select"
                              aria-label=".form-select-lg example"
                            >
                              <option>전체</option>
                              <option>여행사1</option>
                              <option>여행사2</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            부서명
                          </td>
                          <td>
                            <select
                              className="form-select"
                              aria-label=".form-select-lg example"
                            >
                              <option>선택</option>
                              <option>부서명1</option>
                              <option>부서명2</option>
                            </select>
                          </td>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            세금계산서용 이메일
                          </td>
                          <td>
                            <input
                              id="tax_email"
                              type="text"
                              className="form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            담당자명
                          </td>
                          <td>
                            <input
                              id="manager_name"
                              type="text"
                              className="form-control"
                            />
                          </td>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            담당자 아이디
                          </td>
                          <td>
                            <input
                              id="namager_id"
                              type="text"
                              className="form-control"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            담당자 휴대폰번호
                          </td>
                          <td>
                            <input
                              id="manager_phone"
                              type="number"
                              className="form-control"
                            />
                          </td>
                          <td className="w-44 bg-slate-100 text-center font-semibold">
                            담당자 이메일
                          </td>
                          <td>
                            <input
                              id="manager_email"
                              type="email"
                              className="form-control"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="mt-5 text-center">
                      <button
                        type="button"
                        className="btn btn-ouline-secondary mr-2 w-24"
                      >
                        초기화
                      </button>
                      <button type="button" className="btn btn-primary w-24">
                        조회
                      </button>
                    </div>
                  </div>
                  <div className="intro-y box col-span-12 mt-5 overflow-auto p-5">
                    <div className="overflow-x-auto">
                      <table className="table whitespace-nowrap">
                        <thead className="table-dark text-center">
                          <tr>
                            <th>번호</th>
                            <th>사업자 번호</th>
                            <th>여행사</th>
                            <th>부서명</th>
                            <th>세금계산서용 이메일</th>
                            <th>아이디</th>
                            <th>담당자명</th>
                            <th>담당자 휴대폰번호</th>
                            <th>담당자 이메일</th>
                          </tr>
                        </thead>
                        <tbody className="text-center">
                          <tr
                            className="link"
                            onClick={() => props.setmemberSearch(false)}
                          >
                            <td>99</td>
                            <td>123-33-11111</td>
                            <td>정성투어</td>
                            <td>마케팅팀</td>
                            <td>abc@email.com</td>
                            <td>abc1</td>
                            <td>홍길동</td>
                            <td>010-0000-0000</td>
                            <td>abc@email.com</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="intro-y col-span-12">
                    <ul className="pagination justify-center">
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
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-8 text-center">
            <Button
              type="button"
              variant="primary"
              onClick={() => {
                props.setmemberSearch(false)
              }}
              className="w-20"
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* BEGIN: Modal 회원 상세/수정 */}
      <Dialog
        open={props.buttonModalPreview}
        onClose={() => {
          props.memberIntro(false)
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
                props.memberIntro(false)
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
                          onClick={() => props.setResetPassword(true)}
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
                              props.memberIntro(false)
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
                props.setDeletedetails(true)
              }}
              className="mr-1 w-24"
            >
              삭제
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                props.memberIntro(false)
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
                props.setCorrection(true)
              }}
            >
              수정
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 삭제버튼 */}
      <Dialog
        open={props.Deletedetails}
        onClose={() => {
          props.setDeletedetails(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setDeletedetails(false)
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
                  props.setDeletedetails(false)
                }}
                className="mr-1 w-24"
              >
                취소
              </Button>
              <button
                type="button"
                onClick={() => {
                  props.setDeletedetails2(true)
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
        open={props.Deletedetails2}
        onClose={() => {
          props.setDeletedetails2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setDeletedetails2(false)
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
                  props.setDeletedetails2(false)
                  props.setDeletedetails(false)
                  props.memberIntro(false)
                  props.setTravelagency(false)
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
        open={props.Correction}
        onClose={() => {
          props.setCorrection(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type='button'
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setCorrection(false)
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
                  props.setCorrection(false)
                  props.memberIntro(false)
                  props.setTravelagency(false)
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
        open={props.ResetPassword}
        onClose={() => {
          props.setResetPassword(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setResetPassword(false)
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
                  props.setResetPassword(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* BEGIN: Modal 예약확정 */}
      <Dialog
        open={props.Reservation}
        onClose={() => {
          props.setReservation(false)
        }}
        size="xl"
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">예약확정서</h2>
            <Button
              className="btn btn-rounded-secondary hidden rounded-full p-1 sm:flex"
              type="button"
              onClick={() => {
                props.setReservation(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </Button>
          </Dialog.Title>
          <Dialog.Description
            style={{
              height: '600px',
              overflowY: 'scroll',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '700px',
                margin: '0px auto',
                fontFamily: 'NanumSquareRound, sans-serif',
                fontSize: '16px',
                color: '#333',
                lineHeight: 1.4,
                background: '#fff',
                marginTop: '20px',
                marginBottom: '20px',
                overflowX: 'hidden',
              }}
            >
              <div
                style={{
                  width: '100%',
                  minHeight: '200px',
                  position: 'relative',
                  background: 'linear-gradient(#295EAC, #193E75, #24272b)',
                }}
              >
                <div style={{ textAlign: 'center', paddingTop: '40px' }}>
                  <img
                    src={Alamologo}
                    alt="알라모 로고"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              </div>

              <div style={{ position: 'relative', marginBottom: '80px' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-80px',
                    width: '100%',
                    height: '80px',
                    background: '#fff',
                    borderRadius: '50px 50px 0 0',
                  }}
                ></div>

                <div style={{ maxWidth: '610px', margin: '0 auto' }}>
                  {/* <!-- 타이틀 --> */}
                  <div style={{ textAlign: 'center' }}>
                    <img
                      src="https://design06.codeidea.io/tourmarketing/em/em_img/Check_fill.png"
                      alt="가입완료 이미지"
                    />
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '20px',
                      fontWeight: 'bold',
                    }}
                  >
                    ALAMO CONFIRMATION
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      fontSize: '36px',
                      fontWeight: 'bold',
                    }}
                  >
                    예약확정
                  </div>
                  <div style={{ marginTop: '10px', textAlign: 'center' }}>
                    <p>
                      홍길동 고객님의 알라모 렌터카 예약이{' '}
                      <span style={{ color: '#005daa', fontWeight: 'bold' }}>
                        확정
                      </span>
                      되었습니다.
                      <br />
                      <span
                        style={{
                          display: 'block',
                          color: '#808386',
                          fontSize: '14px',
                        }}
                      >
                        (최초 예약일 : 2022-09-17 08:11:27)
                      </span>
                    </p>
                    <p
                      style={{
                        color: '#808386',
                        textAlign: 'left',
                        fontSize: '14px',
                      }}
                    >
                      본 예약 확정서는 알라모렌터카 한국 총판
                      ㈜투어마케팅코리아의 예약 대행 서비스에 대한 예약
                      확정서입니다. 고객님의 렌터카 사용에 대한 모든 이용 약관과
                      규정 및 조건, 보험 사항 등은 렌탈 계약서의 내용에 준함으로
                      반드시 계약서 내용을 숙지하시고 작성하시기 바랍니다.
                    </p>
                  </div>
                  <div
                    style={{
                      width: '80px',
                      height: '1px',
                      background: '#005DAA',
                      margin: '50px auto',
                    }}
                  ></div>

                  {/* <!-- 내용 --> */}
                  <div
                    style={{
                      background: '#005daa',
                      color: '#fff',
                      textAlign: 'center',
                      padding: '20px',
                      borderRadius: '10px',
                    }}
                  >
                    <div style={{ fontSize: '14px' }}>
                      <span>예약일시 :</span>
                      <span>22-09-13 11:11</span>
                    </div>
                    <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
                      <span>예약번호(confirmation) :</span>
                      <span>1123455667</span>
                    </div>
                  </div>

                  {/* <!-- form --> */}
                  <div style={{ marginTop: '30px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                      운전자 정보
                    </div>
                    <div
                      style={{
                        borderRadius: '10px',
                        boxShadow: '2px 2px 8px rgba(0,0,0,.1)',
                        padding: '20px',
                      }}
                    >
                      <table
                        style={{
                          width: '100%',
                          margin: '0 auto',
                          borderSpacing: '0px',
                          background: '#fff',
                        }}
                      >
                        <tbody>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              영문명 (Driver name)
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              GILDONG/HONG
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              예약 상태 (Booking Status)
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              예약(Booked)
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              차량등급 (Vehicle Type)
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              중소형(Compact)
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              요금제 (Rate code){' '}
                              <span style={{ fontSize: '12px' }}>
                                ex. 기본할인요금 (9H)
                              </span>
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              기본할인요금
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              도착 항공편 (Arrival Information)
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              A11133
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                color: '#808386',
                                width: '50%',
                              }}
                            >
                              항공사 마일리지 (Membership No.)
                            </td>
                            <td style={{ padding: '10px' }}>1234</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div style={{ marginTop: '30px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                      Pick up &amp; Drop off Information
                    </div>
                    <div
                      style={{
                        borderRadius: '10px',
                        boxShadow: '2px 2px 8px rgba(0,0,0,.1)',
                        padding: '20px',
                      }}
                    >
                      <table
                        style={{
                          width: '100%',
                          wordBreak: 'keep-all',
                          borderSpacing: '0px',
                          backgroundColor: '#fff',
                          fontSize: '14px',
                          border: '1px solid #E4E7EA',
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              rowSpan={4}
                              style={{
                                padding: '10px',
                                backgroundColor: '#F8FBFE',
                                borderRight: '1px solid #E4E7EA',
                                textAlign: 'center',
                                width: '65px',
                              }}
                            >
                              Pick up
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                color: '#808386',
                              }}
                            >
                              Location
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              LOS ANGELES INTL ARPT(LAXT71)
                              <button
                                type="button"
                                style={{
                                  borderRadius: '5px',
                                  width: '90px',
                                  height: '20px',
                                  border: '1px solid #005DAA',
                                  color: '#005DAA',
                                  backgroundColor: '#fff',
                                  fontSize: '10px',
                                  cursor: 'pointer',
                                }}
                                onClick={() => (window.location.href = '#')}
                              >
                                지점 상세 보기 &gt;
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                color: '#808386',
                              }}
                            >
                              Date & Time
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              2022-11-09T15:30:00
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                color: '#808386',
                              }}
                            >
                              Address
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              9020 AVIATION BLVD INGLEWOOD CA 90301 US
                            </td>
                          </tr>
                          <tr>
                            <td style={{ padding: '10px', color: '#808386' }}>
                              Arrival Information
                            </td>
                            <td style={{ padding: '10px' }}>888-826-6893</td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        style={{
                          width: '100%',
                          wordBreak: 'keep-all',
                          borderSpacing: '0px',
                          background: '#fff',
                          fontSize: '14px',
                          border: '1px solid #E4E7EA',
                          marginTop: '5px',
                        }}
                      >
                        <tbody>
                          <tr>
                            <td
                              rowSpan={4}
                              style={{
                                padding: '10px',
                                backgroundColor: '#F8FBFE',
                                borderRight: '1px solid #E4E7EA',
                                textAlign: 'center',
                                width: '65px',
                              }}
                            >
                              Drop off
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                color: '#808386',
                              }}
                            >
                              Location
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              LOS ANGELES INTL ARPT(LAXT71)
                              <button
                                type="button"
                                style={{
                                  borderRadius: '5px',
                                  width: '90px',
                                  height: '20px',
                                  border: '1px solid #005DAA',
                                  color: '#005DAA',
                                  background: '#fff',
                                  fontSize: '10px',
                                  cursor: 'pointer',
                                }}
                                onClick={() => (location.href = '#')}
                              >
                                지점 상세 보기 &gt;
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="summary"
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                color: '#808386',
                              }}
                            >
                              Date & Time
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              2022-11-09T15:30:00
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="summary"
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                color: '#808386',
                              }}
                            >
                              Address
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              9020 AVIATION BLVD INGLEWOOD CA 90301 US
                            </td>
                          </tr>
                          <tr>
                            <td
                              className="summary"
                              style={{ padding: '10px', color: '#808386' }}
                            >
                              Arrival Information
                            </td>
                            <td style={{ padding: '10px' }}>888-826-6893</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div style={{ marginTop: '30px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                      Base Rate
                    </div>
                    <div
                      style={{
                        borderRadius: '10px',
                        boxShadow: '2px 2px 8px rgba(0,0,0,.1)',
                        padding: '20px',
                      }}
                    >
                      <table
                        style={{
                          width: '100%',
                          margin: '0 auto',
                          borderSpacing: '0px',
                          background: '#fff',
                        }}
                      >
                        <tbody>
                          <tr
                            style={{
                              textAlign: 'left',
                              fontSize: '14px',
                              background: '#F8FBFE',
                            }}
                          >
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              Rental Rate[USD143.00 Per Rental]
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            >
                              USD 140.00
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              Rate Code : 9H
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            ></td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              Drop Charge
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            >
                              USD 0
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              Inclusive Rate Items : UNLIMITED MILE
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            >
                              included
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                              }}
                            >
                              COLLISION DAMAGE WAIVER FULL
                            </td>
                            <td style={{ padding: '10px', textAlign: 'right' }}>
                              included
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        style={{
                          width: '100%',
                          margin: '0 auto',
                          borderSpacing: '0px',
                          background: '#fff',
                          marginTop: '10px',
                        }}
                      >
                        <tbody>
                          <tr
                            style={{
                              textAlign: 'left',
                              fontSize: '14px',
                              background: '#F8FBFE',
                            }}
                          >
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              Taxes, Surcharges and Fees
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            ></td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              AIRPORT CONCESSION FEE 11.11 PCT
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            >
                              USD 15.13
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              CUSTOMER FACILITY CHARGE 9.00/DAY
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            >
                              USD 9.00
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              TOURISM COMMISSION REC 3.50 PCT
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            >
                              USD 3.00
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                                borderBottom: '1px solid #E4E7EA',
                              }}
                            >
                              VEHICLE LICENSE RECOVERY FEE
                            </td>
                            <td
                              style={{
                                padding: '10px',
                                borderBottom: '1px solid #E4E7EA',
                                textAlign: 'right',
                              }}
                            >
                              USD 2.16
                            </td>
                          </tr>
                          <tr style={{ textAlign: 'left', fontSize: '14px' }}>
                            <td
                              style={{
                                padding: '10px',
                                boxSizing: 'border-box',
                                color: '#808386',
                                width: '50%',
                              }}
                            >
                              SALES TAX
                            </td>
                            <td style={{ padding: '10px', textAlign: 'right' }}>
                              USD 15.01
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          background: '#E4E7EA',
                          fontWeight: 'bold',
                          padding: '20px 10px',
                          marginTop: '10px',
                        }}
                      >
                        <span>Estimated Total</span>
                        <span>USD 149.30</span>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '30px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                      온라인 체크인(Online Check in)
                    </div>
                    <div
                      style={{
                        borderRadius: '10px',
                        boxShadow: '2px 2px 8px rgba(0,0,0,.1)',
                        padding: '20px',
                      }}
                    >
                      <ul
                        style={{ fontSize: '14px', paddingInlineStart: '20px' }}
                      >
                        <li>
                          온라인 체크인은 운전면허증 정보와 현지에서 필요한 옵션
                          및 도착 정보를 사전에 입력하여 카운터에서의 시간을
                          절약할 수 있는 시스템 입니다.
                        </li>
                        <li>
                          온라인 체크인을 완료 하시더라도 필수 서류인
                          예약확정서, 국내 면허증, 국제 면허증, 여권, 주운전자
                          명의 해외신용카드를 시 지참해 주시기 바랍니다.
                        </li>
                      </ul>
                      <div
                        style={{
                          width: '295px',
                          margin: '0 auto',
                          marginTop: '20px',
                        }}
                      >
                        <button
                          type="button"
                          style={{
                            width: '100%',
                            height: '36px',
                            background: '#005DAA',
                            color: '#fff',
                            border: '0',
                            borderRadius: '5px',
                            fontSize: '14px',
                          }}
                        >
                          온라인 체크인 이용 가이드 다운로드
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '30px' }}>
                    <div style={{ fontWeight: 'bold', marginBottom: '10px' }}>
                      차량인수 안내(PICK-UP Information)
                    </div>
                    <div
                      style={{
                        borderRadius: '10px',
                        boxShadow: '2px 2px 8px rgba(0,0,0,.1)',
                        padding: '20px',
                        fontSize: '14px',
                      }}
                    >
                      <ul style={{ paddingInlineStart: '20px' }}>
                        <li
                          style={{
                            listStyle: 'none',
                            marginLeft: '-5px',
                            textIndent: '-15px',
                            wordBreak: 'keep-all',
                          }}
                        >
                          1. 수화물 찾는 곳 외부에 위치한 퍼플 스탑(purple
                          stop)으로 이동하시어, 상시 운행중인 알라모 셔틀버스에
                          탑승하여 지점까지 이동하여 주시기 바랍니다
                        </li>
                        <li
                          style={{
                            listStyle: 'none',
                            marginLeft: '-5px',
                            textIndent: '-15px',
                            wordBreak: 'keep-all',
                          }}
                        >
                          2. 모든 렌터카 이용 고객은 알라모 공항 지점으로 이동해
                          주셔야 합니다.
                        </li>
                        <li
                          style={{
                            listStyle: 'none',
                            marginLeft: '-5px',
                            textIndent: '-15px',
                            wordBreak: 'keep-all',
                          }}
                        >
                          3. 엘에이 국제공항은 시내로부터 남서쪽으로 10마일 정도
                          떨어지 곳에 위치하고 있습니다.
                        </li>
                        <li
                          style={{
                            listStyle: 'none',
                            marginLeft: '-5px',
                            textIndent: '-15px',
                            wordBreak: 'keep-all',
                          }}
                        >
                          4. 알라모 엘에이 국제공항 지점은 공항으로 부터 3마일
                          정도 떨어진 곳에 위치하고 있으며, 센츄리
                          블루버드(Century Boulevard)로부터는 북쪽, 멘체스터
                          블루버드(Manchester Boulevard)로부터는 남쪽에 위치하고
                          있습니다.
                        </li>
                      </ul>
                      <p>
                        Upon arrival to the facility, please proceed to the
                        Alamo counter to obtain your rental agreement and
                        vehicle keys.
                      </p>
                    </div>
                  </div>

                  <div style={{ marginTop: '30px' }}>
                    <div
                      style={{
                        borderRadius: '10px',
                        boxShadow: '2px 2px 8px rgba(0,0,0,.1)',
                        padding: '20px',
                        fontSize: '14px',
                      }}
                    >
                      <div
                        style={{
                          borderRadius: '10px',
                          boxShadow: '2px 2px 8px rgba(0,0,0,.1)',
                          padding: '20px',
                          fontSize: '14px',
                        }}
                      >
                        <ul style={{ paddingInlineStart: '20px' }}>
                          <li>
                            알라모렌터카 한국 총판(www.alamo.co.kr) 에서는 본사
                            예약시스템을 기반으로 한 실시간 예약 서비스를 통해
                            예약을 대행해 드리고 있습니다.
                          </li>
                          <li>
                            차량 예약 시 결제가 이루어지지 않으며 알라모렌터카
                            한국 총판(www.alamo.co.kr) 에서 확정 받은 요금은
                            현지 지점에서 차량 픽업 시 결제됩니다.
                          </li>
                        </ul>

                        <ul
                          style={{
                            paddingInlineStart: '20px',
                            marginTop: '25px',
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '-20px',
                              marginBottom: '5px',
                            }}
                          >
                            필수 지참 사항
                          </div>
                          <li>
                            필요 서류 : 주 운전자 명의의 한국여권, 신용카드,
                            국내 운전 면허증, 국제 운전 면허증, 예약 확정서
                            (하와이 지역의 경우 국제 운전 면허증은 필수 옵션이
                            아니므로 국내 운전 면허증만으로 차량 대여가
                            가능합니다.)
                          </li>
                        </ul>

                        <ul
                          style={{
                            paddingInlineStart: '20px',
                            marginTop: '25px',
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '-20px',
                              marginBottom: '5px',
                            }}
                          >
                            대여 안내
                          </div>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                            }}
                          >
                            1. 렌탈 가능 연령 : 만 25세 이상부터 대여 가능 하며,
                            만 21세~24세 이하의 경우 추가 비용(Under age Charge)
                            지불 시 이용가능 합니다.
                            <br />
                            (만 21세~24세 운전자는 이용가능 한 차량등급이 제한될
                            수 있습니다.) *뉴욕과 미시간주에서는 만18세 이상부터
                            렌터카 이용이 가능하며, 추가 비용 및 이용 가능한
                            차량 등급도타 주와 상이합니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            2. 렌탈 계약서 작성 시 유의사항: 차량 픽업 시
                            지점에서 계약서를 작성하며 응급출동서비스(RAP),유아
                            카시트 등 추가 옵션을 구매할 수 있습니다.
                            <br />
                            렌탈 계약서에 서명을 한 이후에는 추가로 발생한
                            비용에 대해 환불이 불가하오니 서명 전 계약서 내용을
                            반드시 확인하시기 바랍니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            3. 차량 인수 지점과 반납 지점이 다를 경우,
                            편도비용(Drop Charge)이 발생되며, 예약 마지막 단계의
                            Drop charge 항목에서 확인 가능합니다. 최종 예상
                            요금(Estimated Total)에 편도 비용이 합산되어
                            반영됩니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            4. 30일 이상 렌터카 픽업 시하는 장기렌탈건은
                            알라모렌터카 정책에 의해 30일 단위로 결제가 나뉘어
                            진행됨에 따라 계약서 및 인보이스도 나뉘어
                            발급됩니다. <br />
                            예를 들어, 90일 이용건의 경우 30일 단위로 총 3번의
                            결제로 나누어 진행하시게 됩니다.
                            <br />
                            또한 대여 기간 동안 차량 점검등의 이유로 지점의
                            요청에 의해 방문이 필요하실 수 있으니 현지 지점의
                            안내에 따라 주시기 바랍니다.
                          </li>
                        </ul>

                        <ul
                          style={{
                            paddingInlineStart: '20px',
                            marginTop: '25px',
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '-20px',
                              marginBottom: '5px',
                            }}
                          >
                            비용 지불
                          </div>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                            }}
                          >
                            1. 결제 방법: 렌터카 픽업 시 주 운전자 본인 명의의
                            신용카드로 차량 이용금액의 약1~1.5배에 해당하는
                            금액이 보증금으로 가승인 처리가 됩니다.
                            <br />
                            차량 반납 시, 보증금은 자동 해지되며 실제 이용한
                            차량 요금은 보증금을 가승인 했던 신용카드로 자동
                            결제됩니다.
                            <br />
                            보증금은 신용카드 대금 결제일 이전까지 정상 승인이
                            되어 있더라도 실 청구는 되지 않습니다
                            <br />
                            미국 이용가능 신용카드: American Express®,
                            MasterCard®, VISA®, Discover® Network, JCB
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            2. 체크카드 이용 규정: 일부 지점에 한해 체크/데빗
                            카드 사용이 가능합니다. (MasterCard®, VISA®)
                            체크/데빗 카드 이용을 원하시는 경우 사전에
                            알라모렌터카 (02-739-3110)를 통해 이용 가능 여부를
                            확인하시기 바랍니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            3. 법인카드 이용 규정: 운전자 본인 명의의 법인카드만
                            사용이 가능하며 무기명 법인카드는 사용이 불가합니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                              color: '#D83028',
                            }}
                          >
                            {' '}
                            * 현금 결제는 불가합니다.
                          </li>
                        </ul>

                        <ul
                          style={{
                            paddingInlineStart: '20px',
                            marginTop: '25px',
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '-20px',
                              marginBottom: '5px',
                            }}
                          >
                            예약 변경 및 취소
                          </div>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                            }}
                          >
                            1. 예약변경
                            <ul>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                1) 차량 픽업 전: 차량 수급이 원활한 경우에 한해
                                알라모렌터카 한국 총판(www.alamo.co.kr) 에서
                                대여 시간 기준 24시간 전까지 변경이 가능합니다.
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                2) 차량 픽업 시: 현지 지점에서 계약서 작성 시
                                차량 등급, 렌탈 기간 등을 변경하실 수 있으며
                                이때 변경되는 사항에 대해서는 알라모렌터카 한국
                                총판 (www.alamo.co.kr) 요금이 아닌 현지 요금으로
                                책정됩니다.
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                3) 차량 픽업 후: 렌트기간 및 반납 지점 변경을
                                원하시는 경우 픽업지점으로 연락하시어 변경 가능
                                여부를 확인해야 합니다. 추가 금액은 현지 요금
                                기준으로 책정됩니다.
                              </li>
                            </ul>
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            2. 추가 이용 시간 요금 : 요금은 대여시간 기준 24시간
                            단위로 책정되며, 예정된 반납 시간보다 29분 이상 지연
                            시 하루 요금 단위로 추가 금액이 발생합니다.
                            <br />
                            추가 금액은 현지 요금 기준으로 책정됩니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            3. 사전 반납 : 예약한 반납일보다 하루 이상 먼저 반납
                            할 경우 이용 금액은 실제 이용한 일수로 계산되나,
                            예정보다 일찍 반납하신 것에 대해 Early Return Fee
                            금액이 패널티로 부과되며 패널티 금액은 지점마다
                            상이합니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            4. 영업시간 외 반납 : 지점 영업시간 종료 후에도 차량
                            반납이 가능한 지점에 한해 영업시간 외 반납이
                            가능합니다. 차량 계약서 작성 시 지점 직원과 영업시간
                            외 반납 가능 여부에 대해 재확인하시기 바랍니다.
                            <br />* 영업 시간외 차량 반납 시, 지정된 구역에 주차
                            후, 차량 열쇠와 렌탈 자켓(Rental Jacket)의
                            마지막장을 작성해 키 드랍 박스(Key Drop Box)에
                            넣으시면 됩니다.
                            <br />
                            차량 이용 요금은 차량픽업 시 사용 하셨던 신용카드로
                            자동 청구 되며 다음날 지점 직원이 차량 상태를 점검한
                            이후 렌탈 계약이 최종적으로 종료 됩니다.
                            <br />
                            지점 직원에 의해 반납 절차가 완료되기 전까지 차량이
                            손상되거나, 주유가 되지 않은 경우, 고객님의
                            신용카드로 추가 요금이 자동 청구됩니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            5. 예약 취소 : 스케쥴 변경 및 기타 사유로 인해
                            렌터카 이용이 불가능 하실 경우, 픽업일 기준 최소 1일
                            전까지 취소해 주시기 바랍니다.
                            <br />
                            예약한 시간보다 늦게 방문하실 경우 예약이 자동
                            취소될 수 있습니다. 예약 시간보다 늦게 지점에
                            도착하시는 경우 현지 지점으로 미리 고지해주시길
                            바랍니다.
                          </li>
                        </ul>

                        <ul
                          style={{
                            paddingInlineStart: '20px',
                            marginTop: '25px',
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '-20px',
                              marginBottom: '5px',
                            }}
                          >
                            추가 옵션 사항
                          </div>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            추가 옵션 항목(네비게이션, 유아 카시트 등)은 제한된
                            수량으로 인해 사전에 신청이 완료된 경우에라도 현지
                            지점의 상황에 따라 대여가 불가능할 수 있습니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            1. 온라인 예약 시 추가 가능한 옵션
                            <ul>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                1) 네비게이션 (GPS, USD12.99+세금/Day) : 한국어
                                언어 설정 시 한국어로 음성 안내를 받을 수
                                있으며, 경로 설정은 영어로만 지원이 가능합니다.
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                2) 유아 카시트 : 알라모렌터카 한국
                                총판(www.alamo.co.kr) 를 통해 예약 시 1개당
                                USD6.99+세금/Day, 현지 대여 시
                                1개당USD10.99+세금/Day) 미국 대부분의 주에서는
                                법적으로 몸무게가 약 36.29kg 이하의 아동은 유아
                                보호 좌석을 이용하도록 규정하고 있습니다.
                              </li>
                            </ul>
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            2. 현지에서 추가 가능한 옵션 :
                            <ul>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                - 현지에서 추가하신 옵션은 추가 옵션 비용에 대한
                                세금이 별도로 부과되며, 정확한 세금은 현지
                                지점에서 계약서 작성 시 확인할 수 있습니다.
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                - 렌탈 계약서에 서명을 한 이후에는 추가로 발생한
                                비용에 대해 환불이 불가하오니 서명 전 계약서
                                내용을 반드시 확인하시기 바랍니다.
                              </li>
                            </ul>
                            <ul>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                1) 보험사항:
                                <ul>
                                  <li
                                    style={{
                                      listStyle: 'none',
                                      marginLeft: '0px',
                                      textIndent: '0px',
                                      wordBreak: 'keep-all',
                                      marginTop: '5px',
                                    }}
                                  >
                                    1-1) 대인/대물(EP ; Extended Protection) :
                                    알라모렌터카 한국총판 (www.alamo.co.kr)을
                                    통해 예약하신 경우, 자차보험(CDW)은
                                    기본적으로 포함이 되어있으나, 요금제에 따라
                                    대인/대물이 포함되어있지 않은 요금제도
                                    있습니다.
                                    <br />
                                    *요금제에 대인/대물보험이 포함되어 있지 않아
                                    현지에서 구매하시는 경우, SLP(Supplemental
                                    Liability Protection)의 구매가 가능하며,
                                    해당 보험의 단일보상한도는 USD300,000이며,
                                    무보험 차량 보험(UM/UIM)은 커버되지
                                    않습니다. (단, 무보험 차량보험이 필수인 주의
                                    경우 커버가 가능하며 단일 보상한도는
                                    USD300,000 입니다.)
                                  </li>
                                  <li
                                    style={{
                                      listStyle: 'none',
                                      marginLeft: '0px',
                                      textIndent: '0px',
                                      wordBreak: 'keep-all',
                                      marginTop: '5px',
                                    }}
                                  >
                                    1-2) 긴급차량출동서비스(Roadside Plus
                                    /USD4.99~USD5.99 + 세금/Day) : 알라모렌터카
                                    한국 총판(www.alamo.co.kr) 을 통해 베이직
                                    플러스 요금제를 예약하신 경우에 한해서만
                                    긴급 출동서비스가 포함 되어 있으며, 베이직
                                    플러스 요금제를 제외한 다른 요금제에는
                                    긴급출동 서비스가 포함되어 있지 않으며, 현지
                                    지점에서 구매가 가능합니다.
                                  </li>
                                  <li
                                    style={{
                                      listStyle: 'none',
                                      marginLeft: '0px',
                                      textIndent: '0px',
                                      wordBreak: 'keep-all',
                                      marginTop: '5px',
                                    }}
                                  >
                                    1-3) 자손 보험(PAI/PEC ; Personal Accident
                                    Insurance, USD6.50+세금/Day) : 알라모렌터카
                                    한국 총판(www.alamo.co.kr) 에서 제공하는
                                    요금제에 포함되어 있지 않으며, 현지 지점에서
                                    구매가 가능합니다.
                                    <br />* 알래스카의 경우 현지 법 규정에 의해
                                    렌터카사의 자손보험 판매가 불가 합니다.
                                  </li>
                                </ul>
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                2) 추가운전자 등록 (Additional Driver / 1인당
                                USD15+세금/Day) : <br />주 운전자와 함께 현지
                                지점으로 방문하여 등록 해주셔야 하며, 주
                                운전자와 동일한 필수 지참 서류를 제시해야
                                합니다.추가운전자로 등록한 운전자만 렌터카를
                                운전할 수 있으며, 추가운전자 등록 후 이름 변경
                                및 교체는 허용되지 않습니다.*추가 운전자가
                                배우자일 경우 영문가족증명서를 지참하시면 추가
                                운전자 등록 비용이 면제 됩니다.
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                3) 연료 (FSO ; Upfront Fuel Service ) : <br />
                                기본적으로 차량 픽업 시, 연료가 가득 채워진
                                상태로 제공되며, 반납시 연료를 가득 채워서
                                반납하여야 합니다.(연료비는 개인 부담
                                항목입니다.)
                                <br />
                                연료가 가득 채워지지 않은 상태로 받으신 경우,
                                차량 인수 시 지점 직원에게 이 부분을 고지하신 후
                                차량 반납시 문제되지 않도록 지점 직원의 확인을
                                받으시길 바랍니다.
                                <br />
                                현지 지점을 통해 FSO 항목을 구입하거나 예약한
                                요금제에 포함되어 있을 경우 반납 시 연료를
                                채우지 않고 반납할 수 있습니다.
                                <br />* 뉴욕 맨하탄 지역에서 픽업하시는 경우,
                                베이직플러스 요금제 연료 1탱크 옵션 포함사항이
                                적용되지 않습니다.
                                <br />
                                FSO 옵션을 현지 지점에서 별도 구매하시면, 처음
                                계약서 작성 시, 이용 차량 등급의 평균 연료
                                탱크를 기준으로 금액이 책정되며 반납시 실제
                                이용하신 차량의 연료탱크를 기준으로 요금이 다시
                                책정됩니다.
                                <br />
                                이때 사용하지 않고 남은 연료에 대해서는 환불되지
                                않습니다.
                              </li>

                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                4) 차량 등급 변경/업그레이드 비용 (CAR CLASS
                                CHANGE) : <br />
                                현지에서 예약하신 등급이 아닌 다른 등급 차량으로
                                변경하실 경우, 현지 요금 기준으로 추가 요금이
                                부과됩니다.
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <ul
                          style={{
                            paddingInlineStart: '20px',
                            marginTop: '25px',
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 'bold',
                              marginLeft: '-20px',
                              marginBottom: '5px',
                            }}
                          >
                            주의사항
                          </div>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            1. 사고 시에는 경찰 진술서(Police report)를 꼭 발급
                            받으셔야 하며, 즉시 차량을 인수받은 알라모 현지
                            지점으로 알려주셔야 합니다.
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            2. 알라모렌터카에서는 응급상황을 대비하여 24시간
                            긴급 전화 서비스를 제공하고 있습니다.
                            <br />
                            한국어 통역서비스 역시 24시간 제공되므로 Korean
                            Speaker 혹은 Korean interpreter를 요청하시면
                            통역서비스를 받으실 수 있습니다.
                            <br />
                            단, 로밍폰으로 이용 시 통화료가 부과되며 비용은 본인
                            부담입니다.
                            <br />☎ 미국 : 1-800-803-4444
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            3. 렌탈 기간 중 교통 법규 위반 및 유료 도로 통행료
                            등을 납부하지 않은 경우:
                            <ul>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                - 대납이 가능한 경우: 카메라에 찍힌 톨비, 교통
                                법규 위반과 같은 경우, 차량 반납 후에
                                알라모렌터카를 통해 별도의 행정수수료 비용과
                                함께 대납이 이루어집니다. 이때 고객님의 렌탈
                                정보를 해당 범칙금 발부 업체로 이관하는 데에
                                따른 행정수수료비 USD10~25이 범칙금외에 별도로
                                부과됩니다.
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                - 대납이 불가능한 경우: 직접 발부 받은 범칙금
                                티켓의 경우 대납이 불가하며, 고객님께서 직접
                                납부를 해주셔야 합니다.
                                <br />* 범칙금/유료도로 납부는 범칙금/유료도로
                                발부 업체 및 알라모렌터카 본사 규정에 따르며,
                                납부 방식은 사전 고지 없이 변경될 수 있습니다.
                              </li>
                            </ul>
                          </li>
                          <li
                            style={{
                              listStyle: 'none',
                              marginLeft: '-5px',
                              textIndent: '-15px',
                              wordBreak: 'keep-all',
                              marginTop: '10px',
                            }}
                          >
                            4. 차량 반납 시, 대여하신 장비(차량 키/GPS
                            네비게이션/카시트 등)를 반납하지 않고 한국에 가지고
                            오시거나 분실 하실 경우 패널티가 청구되며, 패널티
                            비용은 각 장비 및 해당 지점의 규정에 따라 상이
                            합니다.
                            <ul>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                * 보험, 추가 옵션 등 비용이 발생 되는 모든
                                요금은 본사 정책에 따라 변동될 수 있습니다.
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                * 기타 문의사항은 예약하신 여행사나 알라모렌터카
                                (02-739-3110)로 연락 주시기 바랍니다.
                              </li>
                              <li
                                style={{
                                  listStyle: 'none',
                                  marginLeft: '0px',
                                  textIndent: '0px',
                                  wordBreak: 'keep-all',
                                  marginTop: '5px',
                                }}
                              >
                                * 이 외 자세한 내용은 하기 ‘알라모 서비스-이용
                                가이드북’ 혹은 홈페이지 상단 ‘이용가이드’ 를
                                통해서 확인 가능합니다.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: '50px',
                      }}
                    >
                      <button
                        type="button"
                        style={{
                          width: '200px',
                          height: '50px',
                          cursor: 'pointer',
                          borderRadius: '5px',
                          border: 'none',
                          fontSize: '16px',
                          fontWeight: 'bold',
                          background: '#005DAA',
                          color: '#fff',
                        }}
                      >
                        인쇄하기
                      </button>
                    </div> */}
                  </div>
                </div>

                {/* <!-- FOOTER --> */}
                {/* <div
                  style={{
                    position: 'relative',
                    textAlign: 'center',
                    fontSize: '14px',
                  }}
                >
                  <div
                    style={{
                      padding: '20px 0',
                      background: '#E4E7EA',
                      color: 'rgba(51,51,51,.7)',
                    }}
                  >
                    <p>
                      본 메일은 서비스 이용 및 의무 고지사항 안내를 위한
                      발신전용 메일이므로 회신이 되지 않습니다.
                      <br />그 외 궁금하신 점이나 불편한 사항은{' '}
                      <a href="" style={{ color: 'rgba(51,51,51,.7)' }}>
                        [1:1문의]
                      </a>
                      를 이용해 주시기 바랍니다.
                    </p>
                  </div>
                  <div
                    style={{
                      padding: '20px 0',
                      backgroundColor: '#414B5F',
                      color: 'rgba(255,255,255,.7)',
                    }}
                  >
                    <p>
                      서울특별시 종로구 인사동5길 25 하나로 빌딩 701호
                      (주)투어마케팅코리아 (110-794)
                      <br />
                      COPYRIGHTⓒ 1998~ ALAMO RENT A CAR GENERAL SALES AGENCY ALL
                      RIGHTS RESERVED
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-8 text-center">
            <Button
              variant="primary"
              className="w-24"
              type="button"
              onClick={() => {
                props.setReservation(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* BEGIN: Modal 여행사 상세/수정 */}
      <Dialog
        open={props.Travelagency}
        onClose={() => {
          props.setTravelagency(false)
        }}
        size="xl"
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">여행사 상세/수정 </h2>
            <Button
              className="btn btn-rounded-secondary hidden rounded-full p-1 sm:flex"
              type="button"
              onClick={() => {
                props.setTravelagency(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </Button>
          </Dialog.Title>
          <Dialog.Description>
            <div
              style={{
                height: '600px',
                overflowY: 'scroll',
              }}
            >
              <div className="intro-y box">
                <div className="flex flex-row items-center border-b border-slate-200/60 pb-5">
                  <h2 className="mr-auto text-base font-medium">여행사 정보</h2>
                </div>
                <div className="overflow-x-auto p-5">
                  <table className="table-bordered table w-full">
                    <tbody>
                      <tr>
                        <td className="w-40 bg-slate-100 text-center font-semibold">
                          여행사번호
                        </td>
                        <td colSpan={3}>
                          <input
                            id="member_id"
                            type="number"
                            className="form-control"
                            placeholder="11223"
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
                            placeholder="111-11-1111"
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
                            placeholder="투어여행사"
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
                            placeholder="홍길동"
                          />
                        </td>
                        <td className="w-40 bg-slate-100 text-center font-semibold">
                          대표연락처
                        </td>
                        <td>
                          <input
                            id="id"
                            type="number"
                            className="form-control"
                            placeholder="010-0000-0000"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-40 bg-slate-100 text-center font-semibold">
                          사업자등록증 증빙
                        </td>
                        <td colSpan={3}>
                          <label
                            htmlFor="fileadd"
                            className="btn btn-sm btn-secondary w-16"
                          >
                            파일 찾기
                          </label>
                          <input
                            type="file"
                            name="fileadd"
                            id="fileadd"
                            className="hidden"
                            multiple
                          />
                          <span className="ml-3 text-xs text-sky-600">
                            ※ JPG, PNG, SVG, PDF, DOC, HWP 만 가능 / 최대 2개
                          </span>
                          <div className="mt-3">
                            <span className="relative mr-2">
                              <Lucide
                                icon="XCircle"
                                className="absolute right-[-7px] top-[-7px] ml-4 h-5 w-5 cursor-pointer fill-black text-white"
                                onClick={props.FileDeleteHandle}
                              ></Lucide>
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
                                <Lucide
                                  icon="FileText"
                                  className="inline-block h-6 w-6"
                                />
                              </Tippy>
                            </span>
                            <span className="relative mr-2">
                              <Lucide
                                icon="XCircle"
                                className="absolute right-[-7px] top-[-7px] ml-4 h-5 w-5 cursor-pointer fill-black text-white"
                                onClick={props.FileDeleteHandle}
                              ></Lucide>
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
                                <Lucide
                                  icon="FileText"
                                  className="inline-block h-6 w-6"
                                />
                              </Tippy>
                            </span>
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
                            type="number"
                            className="form-control mr-2 w-24"
                            placeholder="5"
                          />
                          %
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="intro-y box mt-5">
                <div className="flex flex-row items-center border-b border-slate-200/60 p-5">
                  <h2 className="mr-auto text-base font-medium">부서 정보</h2>
                </div>
                <div className="overflow-x-auto p-5">
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
                                id="tax_invoice-2"
                                className="form-check-input"
                                type="radio"
                                name="tax_invoice"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="tax_invoice-2"
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
                            placeholder="abc@email.com"
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
                            placeholder="계좌명"
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
                            type="number"
                            className="form-control"
                            placeholder="111111-11-111111"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="w-40 bg-slate-100 text-center font-semibold">
                          계좌서류 증빙
                        </td>
                        <td colSpan={3}>
                          <label
                            htmlFor="fileadd"
                            className="btn btn-sm btn-secondary w-16"
                          >
                            파일 찾기
                          </label>
                          <input
                            type="file"
                            name="fileadd"
                            id="fileadd"
                            className="hidden"
                            multiple
                          />
                          <span className="ml-3 text-xs text-sky-600">
                            ※ JPG, PNG, SVG, PDF, DOC, HWP 만 가능 / 최대 2개
                          </span>
                          <div className="mt-3">
                            <span className="relative mr-2">
                              <Lucide
                                icon="XCircle"
                                className="absolute right-[-7px] top-[-7px] ml-4 h-5 w-5 cursor-pointer fill-black text-white"
                                onClick={props.FileDeleteHandle}
                              ></Lucide>
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
                                <Lucide
                                  icon="FileText"
                                  className="inline-block h-6 w-6"
                                />
                              </Tippy>
                            </span>
                            <span className="relative mr-2">
                              <Lucide
                                icon="XCircle"
                                className="absolute right-[-7px] top-[-7px] ml-4 h-5 w-5 cursor-pointer fill-black text-white"
                                onClick={props.FileDeleteHandle}
                              ></Lucide>
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
                                <Lucide
                                  icon="FileText"
                                  className="inline-block h-6 w-6"
                                />
                              </Tippy>
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="intro-y box mt-5">
                <div className="flex flex-row items-center border-b border-slate-200/60 p-5">
                  <h2 className="mr-auto text-base font-medium">담당자 정보</h2>
                </div>
                <div className="overflow-x-auto p-5">
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
                            placeholder="aaa"
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
                            onClick={() => props.setResetPassword(true)}
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
                            placeholder="나담당"
                          />
                        </td>
                        <td className="w-40 bg-slate-100 text-center font-semibold">
                          담당자 연락처
                        </td>
                        <td>
                          <input
                            id="manager_number"
                            type="number"
                            className="form-control"
                            placeholder="010-0000-0000"
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
                            placeholder="010-0000-0000"
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
                            placeholder="abc@email.com"
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
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-8 text-center">
            <Button
              variant="danger"
              type="button"
              onClick={() => {
                props.setDeletedetails(true)
              }}
              className="mr-1 w-24"
            >
              삭제
            </Button>
            <Button
              variant="outline-secondary"
              type="button"
              onClick={() => {
                props.setTravelagency(false)
              }}
              className="mr-1 w-24"
            >
              취소
            </Button>
            <Button
              variant="warning"
              type="button"
              onClick={() => {
                props.setRejected(true)
              }}
              className="mr-1 w-24"
            >
              승인거부
            </Button>
            <Button
              variant="pending"
              type="button"
              onClick={() => {
                props.setApproved(true)
              }}
              className="mr-1 w-24"
            >
              승인완료
            </Button>
            <Button
              variant="primary"
              className="w-24"
              type="button"
              onClick={() => {
                props.setCorrection(true)
              }}
            >
              수정
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 승인 거부 버튼*/}
      <Dialog
        open={props.Rejected}
        onClose={() => {
          props.setRejected(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">승인거부 사유</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setRejected(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              <select name="" id="" className="form-select">
                <option value="">선택</option>
                <option value="">세금계산서 발행</option>
                <option value="">세금계산서 미발행</option>
                <option value="">원천징수 영수증 발행</option>
              </select>
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  props.setRejected(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  props.setRejected2(true)
                }}
                className="btn btn-primary mr-2 w-28"
              >
                확인 (미선택 시)
              </button>
              <button
                type="button"
                onClick={() => {
                  props.setRejected3(true)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 승인거부 사유 미 선택 */}
      <Dialog
        open={props.Rejected2}
        onClose={() => {
          props.setRejected2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setRejected2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              승인거부 사유를 선택하세요.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  props.setRejected2(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      
      {/* 승인거부 완료 */}
      <Dialog
        open={props.Rejected3}
        onClose={() => {
          props.setRejected3(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setRejected3(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              승인거부 처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                    props.setRejected3(false)
                    props.setRejected(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 승인완료 컨펌*/}
      <Dialog
        open={props.Approved}
        onClose={() => {
          props.setApproved(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setApproved(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              승인완료 처리하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  props.setApproved(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  props.setApproved2(true)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 승인완료*/}
      <Dialog
        open={props.Approved2}
        onClose={() => {
          props.setApproved2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setApproved2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">승인완료</div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  {
                    props.setApproved(false)
                    props.setApproved2(false)
                  }
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 대쉬보드 모달 */}
      <Dialog
        size="md"
        open={props.DashboardModal}
        onClose={() => {
          props.setDashboardModal(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">대시보드 편집</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setDashboardModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <p className="font-bold">
              현재 <span className="text-red-500">7</span>개 설정 중
            </p>
            <div className='check_table'>
              <table className="table-bordered mt-3 table">
                <colgroup>
                  <col width="20%" />
                  <col width="80%" />
                </colgroup>
                <thead className="bg-slate-100 text-center">
                  <tr>
                    <th>
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input check_all"
                        checked={props.isAllChecked} onChange={props.handleCheckAll}
                        type="checkbox"
                      />
                    </th>
                    <th>구분</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={props.handleCheck}
                      />
                    </td>
                    <td>일일 예약 현황</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={props.handleCheck}
                      />
                    </td>
                    <td>당일 예약 목록</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={props.handleCheck}
                      />
                    </td>
                    <td>1:1문의 답변대기 목록</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={props.handleCheck}
                      />
                    </td>
                    <td>최근 일주일 상담 현황</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={props.handleCheck}
                      />
                    </td>
                    <td>알림 현황</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={props.handleCheck}
                      />
                    </td>
                    <td>최근 일주일 예약 현황</td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <input
                        id="checkbox-switch-1"
                        className="form-check-input"
                        type="checkbox"
                        onChange={props.handleCheck}
                      />
                    </td>
                    <td>최근 일주일 예약 추이</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Dialog.Description>
          <Dialog.Footer className='text-center'>
            <button
              type="button"
              onClick={() => {
                props.setDashboardModal(false)
              }}
              className="btn btn-outline-secondary mr-1 w-20"
            >
              취소
            </button>
            <button type="button" className="btn btn-primary w-20"
              onClick={() => {
                props.setRegistBtn(true)
              }}
            >
              등록
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 알림현황 모달 */}
      <Dialog
        size="md"
        open={props.ModifyModal}
        onClose={() => {
          props.setModifyModal(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">알림 현황</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                props.setNotifiModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <table className="table-bordered table">
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <tbody>
                <tr>
                  <td className="bg-slate-100 text-center">수신일</td>
                  <td>
                    <div className="relative inline-block w-56">
                      <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                        <Lucide icon="Calendar" className="h-4 w-4" />
                      </div>
                      <Litepicker
                        value={props.notifyrange}
                        onChange={props.setNotifyrange}
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
                        className="form-control mx-auto block w-56 pl-12"
                      />
                    </div>
                    <button className="btn btn-rounded-dark mr-1 mb-2 ml-2 w-20 p-1">
                      조회
                    </button>
                    <button className="btn btn-rounded btn-dark-soft mr-1 mb-2 w-20 p-1">
                      초기화
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <p className="mt-6 text-red-500">
              1달 전 알림은 확인 여부와 무관하게 삭제됩니다.{' '}
            </p>
            <table className="table-bordered mt-1 table">
              <colgroup>
                <col width="20%" />
                <col width="80%" />
              </colgroup>
              <thead className="bg-slate-100 text-center">
                <tr>
                  <th>알림일자</th>
                  <th>제목</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-center">2022-03-02</td>
                  <td>제목</td>
                </tr>
              </tbody>
            </table>
          </Dialog.Description>
          <Dialog.Footer>
            <button
              type="button"
              className="btn btn-primary w-20"
              onClick={() => {
                props.setNotifiModal(false)
              }}
            >
              확인
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}
export default CommonModal
