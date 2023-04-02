import { useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '@/base-components/Button'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'
import Tippy from '@/base-components/Tippy'

import { Disclosure } from '../../base-components/Headless'

// import {
//   Accordion,
//   AccordionGroup,
//   AccordionItem,
//   AccordionPanel,
//   Lucide,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
//   Tippy,
// } from '@/base-components'

const InquiryDetail = () => {
  // 문의구분 : normal, airline, lost
  // 답변완료 : complete
  const [InquiryDivision, setInquiryDivision] = useState('normal')

  // 파일 삭제
  const FileDeleteHandle = (e: any) => {
    const file = e.target.parentElement.parentElement
    file.remove()
  }

  // 자주사용하는 답변 등록 팝업
  const [faqRegistModal, SetFaqRegistModal] = useState(false)

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

  // 등록
  const [ConfirmRegist, setConfirmRegist] = useState(false)

  const [Confirm4, setConfirm4] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">1:1문의 상세/답변</h2>
        <button
          className="btn btn-secondary  mr-1 mb-2 inline-block border-slate-400"
          onClick={() => setInquiryDivision('normal')}
        >
          답변대기 (일반)
        </button>
        <button
          className="btn btn-secondary  mr-1 mb-2 inline-block border-slate-400"
          onClick={() => setInquiryDivision('airline')}
        >
          답변대기 (항공사 마일리지 적립)
        </button>
        <button
          className="btn btn-secondary mr-1 mb-2 inline-block border-slate-400"
          onClick={() => setInquiryDivision('lost')}
        >
          답변대기 (Lost and Found)
        </button>
        <button
          className="btn btn-pending mr-1 mb-2 inline-block"
          onClick={() => setInquiryDivision('complete')}
        >
          답변완료
        </button>
      </div>

      <div className="intro-y box mt-3 p-3">
        <div className="overflow-x-auto">
          <table className="table-bordered table whitespace-nowrap">
            <tbody>
              <tr>
                <td className="bg-slate-100 text-center">브랜드</td>
                <td colSpan={InquiryDivision !== 'normal' ? 5 : 0}>알라모</td>
                {InquiryDivision === 'normal' && (
                  <>
                    <td className="bg-slate-100 text-center">대여지점</td>
                    <td></td>
                    <td className="bg-slate-100 text-center"></td>
                    <td></td>
                  </>
                )}
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">회원/비회원</td>
                <td>
                  <div className="flex flex-col sm:flex-row">
                    <div className="form-check mr-2">
                      <input
                        id="radio-switch-1"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-radio-chris-evans"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-1"
                      >
                        회원
                      </label>
                    </div>
                    <div className="form-check mr-2 mt-2 sm:mt-0">
                      <input
                        id="radio-switch-2"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button"
                        value="horizontal-radio-liam-neeson"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-2"
                      >
                        비회원
                      </label>
                    </div>
                  </div>
                </td>
                <td className="bg-slate-100 text-center">1:1문의 구분</td>
                <td>일반</td>
                <td className="bg-slate-100 text-center">답변여부</td>
                <td>답변 완료</td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">작성자명</td>
                <td>홍길동</td>
                <td className="bg-slate-100 text-center">작성자 아이디</td>
                <td>A1</td>
                <td className="bg-slate-100 text-center">작성자 이메일</td>
                <td>a1@a.co.kr</td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">제목</td>
                <td colSpan={3}>
                  제휴 항공자 마일리지 적립이 정상적으로 되었나요??
                </td>
                <td className="bg-slate-100 text-center">첨부파일</td>
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
                    <Lucide icon="FileText" className="inline-block h-6 w-6" />
                  </Tippy>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">예약번호</td>
                <td>
                  1111{' '}
                  <Link
                    to="/statistics/reservationDetails"
                    target={'_blank'}
                    className="btn btn-sm btn-secondary ml-2"
                  >
                    예약상세
                  </Link>
                </td>
                <td className="bg-slate-100 text-center">픽업일자</td>
                <td>-</td>
                <td className="bg-slate-100 text-center">휴대폰번호</td>
                <td></td>
              </tr>
              {InquiryDivision === 'airline' && (
                <tr>
                  <td className="bg-slate-100 text-center">항공사</td>
                  <td>아시아나</td>
                  <td className="bg-slate-100 text-center">멤버십 번호</td>
                  <td colSpan={3}>A0111</td>
                </tr>
              )}
              {InquiryDivision === 'lost' && (
                <tr>
                  <td className="bg-slate-100 text-center">분실물</td>
                  <td colSpan={5}>블라블라</td>
                </tr>
              )}
              <tr>
                <td className="bg-slate-100 text-center">내용</td>
                <td colSpan={5}>블라블라</td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">등록일시</td>
                <td>2022-11-11 11:11:11</td>
                <td className="bg-slate-100 text-center">노출여부</td>
                <td colSpan={3}>
                  <div className="flex flex-col sm:flex-row">
                    <div className="form-check mr-2">
                      <input
                        id="radio-switch-3"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button2"
                        value="horizontal-radio-chris-evans"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-3"
                      >
                        Y
                      </label>
                    </div>
                    <div className="form-check mr-2 mt-2 sm:mt-0">
                      <input
                        id="radio-switch-4"
                        className="form-check-input"
                        type="radio"
                        name="horizontal_radio_button2"
                        value="horizontal-radio-liam-neeson"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-4"
                      >
                        N
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="intro-y box mt-8 p-3">
        <h2 className="mr-auto text-base font-bold">답변 등록</h2>
        {InquiryDivision !== 'complete' ? (
          <>
            <div className="mt-3 overflow-x-auto">
              <table className="table-bordered table whitespace-nowrap">
                <tbody>
                  <tr>
                    <td className="bg-slate-100 text-center">상담 유형</td>
                    <td>
                      {InquiryDivision === 'normal' && (
                        <select
                          className="form-select sm:mr-2"
                          aria-label="Default select example"
                        >
                          <option>선택</option>
                          <option>견적문의</option>
                          <option>예약 확인/변경/취소</option>
                          <option>일반문의</option>
                          <option>사후처리</option>
                          <option>제휴항공사 마일리지</option>
                          <option>컴플레인</option>
                          <option>LOST AND FOUND</option>
                          <option>타사이트 예약</option>
                        </select>
                      )}
                      {InquiryDivision === 'airline' && (
                        <select
                          className="form-select sm:mr-2"
                          aria-label="Default select example"
                        >
                          <option>제휴항공사 마일리지</option>
                        </select>
                      )}
                      {InquiryDivision === 'lost' && (
                        <select
                          className="form-select sm:mr-2"
                          aria-label="Default select example"
                        >
                          <option>LOST AND FOUND</option>
                        </select>
                      )}
                    </td>
                    <td className="bg-slate-100 text-center">답변상태</td>
                    <td>
                      <div className="flex flex-col sm:flex-row">
                        <div className="form-check mr-2">
                          <input
                            id="radio-switch-5"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button3"
                            value="horizontal-radio-chris-evans"
                            defaultChecked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-5"
                          >
                            답변완료
                          </label>
                        </div>
                        <div className="form-check mr-2 mt-2 sm:mt-0">
                          <input
                            id="radio-switch-6"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button3"
                            value="horizontal-radio-liam-neeson"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-6"
                          >
                            답변중
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="bg-slate-100 text-center">답변자</td>
                    <td>홍길동</td>
                  </tr>
                  <tr>
                    <td className="bg-slate-100 text-center">첨부파일</td>
                    <td colSpan={5}>
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
                            onClick={FileDeleteHandle}
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
                            onClick={FileDeleteHandle}
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
                    <td className="bg-slate-100 text-center">
                      자주 사용하는 답변
                    </td>
                    <td colSpan={5}>
                      <select
                        className="form-select w-36 sm:mr-2"
                        aria-label="Default select example"
                      >
                        <option>선택</option>
                      </select>
                      <select
                        className="form-select w-36 sm:mr-2"
                        aria-label="Default select example"
                      >
                        <option>선택</option>
                      </select>
                      <input
                        id="regular-form-1"
                        type="text"
                        className="form-control w-96"
                        placeholder=""
                      />
                      <button
                        className="btn btn-primary ml-2"
                        onClick={() => {
                          SetFaqRegistModal(true)
                        }}
                      >
                        자주 사용하는 답변 관리
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-slate-100 text-center">답변내용 1</td>
                    <td colSpan={5}>
                      <textarea
                        name=""
                        id=""
                        className="form-control h-40 resize-y"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <div className="mt-3 w-2/6">
              <table className="table-bordered table">
                <tbody>
                  <tr>
                    <td className="bg-slate-100 text-center">여행사</td>
                    <td>홍길동(하나투어)</td>
                  </tr>
                </tbody>
              </table>
            </div> */}

            <Disclosure.Group className="accordion-boxed collapse_none mt-6 ml-6">
              <Disclosure>
                <Disclosure.Button>
                  <div className="text-slate-400">[2022-09-11]</div>
                  <div className="font-bold">
                    4륜 구동 차량을 예약하고 싶습니다. 어떻게 하면 될까요?
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  <div className="border-b p-2">
                    현지에서 계약서 작성 시 고객님께서 추가/변경하는 부분이
                    없다면, 예약 확정서 상의 최종 예상 요금 이외에 별도의 비용이
                    발생하지 않습니다. 서명된 부분에 대해서는 추후 환불이
                    불가하오니 금액 추가를 원치 않는 경우, 렌탈 계약서 상 포함된
                    항목이 없는지 꼼꼼히 확인하신 후 서명해주시길
                    바랍니다.일반적으로 현지 지점 직원이 권유하는 추가 옵션은
                    다음과 같습니다.
                  </div>
                  <div className="pt-2 pl-2 text-slate-400">
                    [답변일 2022-09-13]
                  </div>
                  <div className="pl-2">
                    현지에서 계약서 작성 시 고객님께서 추가/변경하는 부분이
                    없다면, 예약 확정서 상의 최종 예상 요금 이외에 별도의 비용이
                    발생하지 않습니다. 서명된 부분에 대해서는 추후 환불이
                    불가하오니 금액 추가를 원치 않는 경우, 렌탈 계약서 상 포함된
                    항목이 없는지 꼼꼼히 확인하신 후 서명해주시길
                    바랍니다.일반적으로 현지 지점 직원이 권유하는 추가 옵션은
                    다음과 같습니다.
                  </div>
                </Disclosure.Panel>
              </Disclosure>
              <Disclosure>
                <Disclosure.Button>
                  <div className="text-slate-400">[2022-09-11]</div>
                  <div className="font-bold">
                    4륜 구동 차량을 예약하고 싶습니다. 어떻게 하면 될까요?
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="leading-relaxed text-slate-600 dark:text-slate-500">
                  현지에서 계약서 작성 시 고객님께서 추가/변경하는 부분이
                  없다면, 예약 확정서 상의 최종 예상 요금 이외에 별도의 비용이
                  발생하지 않습니다. 서명된 부분에 대해서는 추후 환불이
                  불가하오니 금액 추가를 원치 않는 경우, 렌탈 계약서 상 포함된
                  항목이 없는지 꼼꼼히 확인하신 후 서명해주시길
                  바랍니다.일반적으로 현지 지점 직원이 권유하는 추가 옵션은
                  다음과 같습니다.
                </Disclosure.Panel>
              </Disclosure>
            </Disclosure.Group>

            <div className="mt-3 text-center">
              <Link to="/cscenter/inquiry">
                <button className="btn btn-outline-secondary mr-2 mb-2 inline-block w-24">
                  취소
                </button>
              </Link>

              <button
                className="btn btn-primary mb-2 w-24"
                onClick={() => setConfirmRegist(true)}
              >
                등록
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="mt-3 overflow-x-auto">
              <table className="table-bordered table whitespace-nowrap">
                <tbody>
                  <tr>
                    <td className="bg-slate-100 text-center">상담 유형</td>
                    <td>
                      <select
                        className="form-select sm:mr-2"
                        aria-label="Default select example"
                      >
                        <option>선택</option>
                        <option>견적문의</option>
                        <option>예약 확인/변경/취소</option>
                        <option>일반문의</option>
                        <option>사후처리</option>
                        <option>제휴항공사 마일리지</option>
                        <option>컴플레인</option>
                        <option>LOST AND FOUND</option>
                        <option>타사이트 예약</option>
                      </select>
                    </td>
                    <td className="bg-slate-100 text-center">답변상태</td>
                    <td>
                      <div className="flex flex-col sm:flex-row">
                        <div className="form-check mr-2">
                          <input
                            id="radio-switch-7"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button3"
                            value="horizontal-radio-chris-evans"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-7"
                          >
                            답변완료
                          </label>
                        </div>
                        <div className="form-check mr-2 mt-2 sm:mt-0">
                          <input
                            id="radio-switch-8"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button3"
                            value="horizontal-radio-liam-neeson"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-8"
                          >
                            답변중
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="bg-slate-100 text-center">답변자</td>
                    <td>홍길동</td>
                    <td className="bg-slate-100 text-center">답변일시</td>
                    <td>2022-11-11 11:11:11</td>
                  </tr>
                  <tr>
                    <td className="bg-slate-100 text-center">첨부파일</td>
                    <td colSpan={7}>
                      <div className="mt-0">
                        <span className="relative mr-2">
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
                    <td className="bg-slate-100 text-center">답변내용 1</td>
                    <td colSpan={7}>내용이 있습니다.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-center">
              <Link to="/cscenter/inquiry">
                <button className="btn btn-primary mb-2 w-24">확인</button>
              </Link>
            </div>

            {/* 답변중의 경우 추가 답변을 달 수 있도록 1개 더 생성되어있음 / FE에도 답변중으로 나옴 */}
            <div className="mt-3 overflow-x-auto">
              <table className="table-bordered table whitespace-nowrap">
                <tbody>
                  <tr>
                    <td className="bg-slate-100 text-center">상담 유형</td>
                    <td>
                      <select
                        className="form-select sm:mr-2"
                        aria-label="Default select example"
                      >
                        <option>선택</option>
                        <option>견적문의</option>
                        <option>예약 확인/변경/취소</option>
                        <option>일반문의</option>
                        <option>사후처리</option>
                        <option>제휴항공사 마일리지</option>
                        <option>컴플레인</option>
                        <option>LOST AND FOUND</option>
                        <option>타사이트 예약</option>
                      </select>
                    </td>
                    <td className="bg-slate-100 text-center">답변상태</td>
                    <td>
                      <div className="flex flex-col sm:flex-row">
                        <div className="form-check mr-2">
                          <input
                            id="radio-switch-9"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button4"
                            value="horizontal-radio-chris-evans"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-9"
                          >
                            답변완료
                          </label>
                        </div>
                        <div className="form-check mr-2 mt-2 sm:mt-0">
                          <input
                            id="radio-switch-10"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button4"
                            value="horizontal-radio-liam-neeson"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-10"
                          >
                            답변중
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="bg-slate-100 text-center">답변자</td>
                    <td>홍길동</td>
                    <td className="bg-slate-100 text-center">답변일시</td>
                    <td>2022-11-11 11:11:11</td>
                  </tr>
                  <tr>
                    <td className="bg-slate-100 text-center">첨부파일 1</td>
                    <td colSpan={7}>
                      <div className="mt-0">
                        <span className="relative mr-2">
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
                    <td className="bg-slate-100 text-center">답변내용 1</td>
                    <td colSpan={7}>내용이 있습니다.</td>
                  </tr>
                  <tr>
                    <td className="bg-slate-100 text-center">첨부파일 2</td>
                    <td colSpan={7}>
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
                            onClick={FileDeleteHandle}
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
                            onClick={FileDeleteHandle}
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
                    <td className="bg-slate-100 text-center">답변내용 2</td>
                    <td colSpan={7}>
                      <textarea
                        name=""
                        id=""
                        className="form-control h-40 resize-y"
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-center">
              <Link to="/cscenter/inquiry">
                <button className="btn btn-outline-secondary mr-2 mb-2 inline-block w-24">
                  취소
                </button>
              </Link>
              <button
                className="btn btn-primary mb-2 w-24"
                onClick={() => setConfirmRegist(true)}
              >
                등록
              </button>
            </div>

            {/* 답변이 2개 달린 경우 / FE 답변일은 각각 노출됨 */}
            <div className="mt-3 overflow-x-auto">
              <table className="table-bordered table whitespace-nowrap">
                <tbody>
                  <tr>
                    <td className="bg-slate-100 text-center">상담 유형</td>
                    <td>
                      <select
                        className="form-select sm:mr-2"
                        aria-label="Default select example"
                      >
                        <option>선택</option>
                        <option>견적문의</option>
                        <option>예약 확인/변경/취소</option>
                        <option>일반문의</option>
                        <option>사후처리</option>
                        <option>제휴항공사 마일리지</option>
                        <option>컴플레인</option>
                        <option>LOST AND FOUND</option>
                        <option>타사이트 예약</option>
                      </select>
                    </td>
                    <td className="bg-slate-100 text-center">답변상태</td>
                    <td>
                      <div className="flex flex-col sm:flex-row">
                        <div className="form-check mr-2">
                          <input
                            id="radio-switch-11"
                            className="form-check-input"
                            type="radio"
                            name="horizontal_radio_button5"
                            value="horizontal-radio-chris-evans"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="radio-switch-11"
                          >
                            답변완료
                          </label>
                        </div>
                      </div>
                    </td>
                    <td className="bg-slate-100 text-center">답변자</td>
                    <td>홍길동</td>
                    <td className="bg-slate-100 text-center">답변일시</td>
                    <td>
                      <p>2022-11-11 11:11:11</p>
                      <p>2022-11-11 11:11:11</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="bg-slate-100 text-center">첨부파일 1</td>
                    <td colSpan={7}>
                      <div className="mt-0">
                        <span className="relative mr-2">
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
                    <td className="bg-slate-100 text-center">답변내용 1</td>
                    <td colSpan={7}>내용이 있습니다.</td>
                  </tr>
                  <tr>
                    <td className="bg-slate-100 text-center">첨부파일 2</td>
                    <td colSpan={7}>
                      <div className="mt-0">
                        <span className="relative mr-2">
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
                    <td className="bg-slate-100 text-center">답변내용 2</td>
                    <td colSpan={7}>내용이 있습니다.</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 text-center">
              <Link to="/cscenter/inquiry">
                <button className="btn btn-primary mb-2 w-24">확인</button>
              </Link>
            </div>
          </>
        )}
      </div>

      {/* 자주 사용하는 답변 등록 팝업 */}
      <Dialog
        open={faqRegistModal}
        onClose={() => {
          SetFaqRegistModal(false)
        }}
        size="xl"
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-bold">
              자주 사용하는 답변 등록
            </h2>
            <Button
              className="btn btn-rounded-secondary hidden rounded-full p-1 sm:flex"
              type="button"
              onClick={() => {
                SetFaqRegistModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </Button>
          </Dialog.Title>
          <Dialog.Description>
            <table className="table-bordered table">
              <tbody>
                <tr>
                  <td className="w-40 bg-slate-100">구분</td>
                  <td>
                    <select
                      className="form-select w-36"
                      aria-label="Default select example"
                    >
                      <option>선택</option>
                      <option>견적문의</option>
                      <option>예약 확인/변경/취소</option>
                      <option>일반문의</option>
                      <option>사후처리</option>
                      <option>제휴항공사 마일리지</option>
                      <option>컴플레인</option>
                      <option>LOST AND FOUND</option>
                      <option>타사이트 예약</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td className="w-40 bg-slate-100">제목</td>
                  <td>
                    <input
                      id="horizontal-form-2"
                      type="text"
                      className="form-control"
                    />
                  </td>
                </tr>
                <tr>
                  <td className="w-40 bg-slate-100">답변</td>
                  <td>
                    <textarea
                      name=""
                      id=""
                      className="form-control h-40 resize-y"
                    ></textarea>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 text-center">
              <button
                type="button"
                className="btn btn-outline-dark mr-2 mb-2 inline-block w-24"
                onClick={() => {
                  SetFaqRegistModal(false)
                }}
              >
                취소
              </button>
              <button type="button" className="btn btn-dark mb-2 w-24"
                onClick={() => 
                  setConfirm4(true)
                }
              >
                저장
              </button>
            </div>

            <h2 className="mr-auto mt-6 text-base font-bold">
              자주 사용하는 답변 목록
            </h2>
            <table className="table-bordered mt-3 table">
              <tbody>
                <tr>
                  <td className="bg-slate-100 ">구분</td>
                  <td>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option>선택</option>
                      <option>견적문의</option>
                      <option>예약 확인/변경/취소</option>
                      <option>일반문의</option>
                      <option>사후처리</option>
                      <option>제휴항공사 마일리지</option>
                      <option>컴플레인</option>
                      <option>LOST AND FOUND</option>
                      <option>타사이트 예약</option>
                    </select>
                  </td>
                  <td className="bg-slate-100 ">제목/내용</td>
                  <td>
                    <input
                      id="horizontal-form-2"
                      type="text"
                      className="form-control"
                    />
                  </td>
                  <td className="bg-slate-100 ">사용여부</td>
                  <td>
                    <div className="flex flex-col sm:flex-row">
                      <div className="form-check mr-2">
                        <input
                          id="checkbox-switch-2"
                          className="form-check-input"
                          type="checkbox"
                          defaultChecked
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox-switch-2"
                        >
                          Y
                        </label>
                      </div>
                      <div className="form-check mr-2 mt-2 sm:mt-0">
                        <input
                          id="checkbox-switch-3"
                          className="form-check-input"
                          type="checkbox"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkbox-switch-3"
                        >
                          N
                        </label>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="mt-6 text-center">
              <button
                type="button"
                className="btn btn-outline-primary mr-2 mb-2 inline-block w-24"
              >
                초기화
              </button>
              <button type="button" className="btn btn-primary mb-2 w-24">
                조회
              </button>
            </div>
            <div className="flex flex-col items-center sm:flex-row">
              <div className="mr-auto text-base font-medium">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-danger mr-2 w-20"
                  onClick={() => {
                    setdeleteConfirm(true)
                    handleCheckboxClick()
                  }}
                >
                  삭제
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-dark mr-2 w-20"
                  onClick={() => {
                    setConfirm(true)
                    handleCheckboxClick()
                  }}
                >
                  미사용
                </button>
              </div>
              <div className="form-check form-switch mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto">
                <select
                  className="form-select-sm form-select"
                  aria-label=".form-select-lg example"
                >
                  <option>100개</option>
                  <option>200개</option>
                </select>
              </div>
            </div>
            <div className="check_table mt-6 overflow-x-auto">
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
                    <th>구분</th>
                    <th>제목</th>
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
                    <td>견적 문의</td>
                    <td>
                      <Link to="" className="underline">
                        내셔널 미국사이트와 한국사이트 예약의 차이가 있나요?
                      </Link>
                    </td>
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
                    <td>견적 문의</td>
                    <td>
                      <Link to="" className="underline">
                        내셔널 미국사이트와 한국사이트 예약의 차이가 있나요?
                      </Link>
                    </td>
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
                    <td>견적 문의</td>
                    <td>
                      <Link to="" className="underline">
                        내셔널 미국사이트와 한국사이트 예약의 차이가 있나요?
                      </Link>
                    </td>
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
                    <td>견적 문의</td>
                    <td>
                      <Link to="" className="underline">
                        내셔널 미국사이트와 한국사이트 예약의 차이가 있나요?
                      </Link>
                    </td>
                    <td>홍길동</td>
                    <td>2022-11-11 11:11:11</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="btn btn-sm btn-secondary-soft w-24">
                총 30,000건
              </span>
              <div>
                <input
                  id="regular-form-1"
                  type="text"
                  className="form-control mr-1 w-12 text-center"
                  defaultValue={1}
                />
                / 200
              </div>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>

      {/* 등록 모달 */}
      <Dialog
        open={ConfirmRegist}
        onClose={() => {
          setConfirmRegist(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirmRegist(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정상적으로 등록되었습니다.
              {/* 항목 미입력 시 */}
              {/* &#123;항목명 &#125;을 확인해주세요. */}
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <Link to="/cscenter/inquiry">
                <button
                  type="button"
                  onClick={() => {
                    setConfirmRegist(false)
                  }}
                  className="btn btn-primary w-24"
                >
                  확인
                </button>
              </Link>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

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

      {/* 자주 사용하는 답변 저장 */}

      <Dialog
        open={Confirm4}
        onClose={() => {
          setConfirm4(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setConfirm4(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정상적으로 저장되었습니다
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setConfirm4(false)
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
    </>
  )
}

export default InquiryDetail
