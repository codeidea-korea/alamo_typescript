import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Tab } from '@/base-components/Headless'
import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

import Button from '../../base-components/Button'
import { Menu, Popover } from '../../base-components/Headless'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Tax = () => {
  const [detail, setDetail] = useState(false)

  //  여행사 수수료 결재 양식 확인 팝업
  const [headerFooterModalPreview, setHeaderFooterModalPreview] =
    useState(false)

  const infoAlert = () => {
    alert('여행사를 선택해주세요.')
  }
  const mailAlert = () => {
    alert('항목을 선택해주세요.')
  }
  const [isSave, setIsSave] = useState(false)
  const [isSave2, setIsSave2] = useState(false)
  const [noSave, setNoSave] = useState(false)

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

  const [fee, setFee] = useState()
  const radioClickHandle = (e: any) => {
    setFee(e.target.value)
  }

  const [month, setMonth] = useState()
  const selectClickHandle = (e: any) => {
    setMonth(e.target.value)
  }
  const [feeModal, setFeeModal] = useState(false)
  const [feeModal2, setFeeModal2] = useState(false)
  // 저장모달
  const [Save, setSave] = useState(false)

  return (
    <>
      <div className="mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">정산 관리</h2>
      </div>

      <div className="mt-3">
        <Tab.Group>
          <Tab.List className="nav-tabs">
            <Tab className="flex-none">
              <Link to="/calculate/data">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
                  정산데이터 변환
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none	">
              <Link to="/calculate/remittance">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
                  입금일/송금일/환율 관리
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none	">
              <Link to="/calculate/tax">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-slate-200 border-b-transparent bg-white px-5 py-2.5 text-base font-bold text-slate-800 dark:border-transparent dark:border-x-darkmode-400 dark:border-t-darkmode-400 dark:border-b-darkmode-600 dark:bg-transparent dark:text-white">
                  여행사 세금계산서 요청
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none	">
              <Link to="/calculate/settlement">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
                  정산 결재
                </button>
              </Link>
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>

      <div className="intro-y box p-3">
        <div className="overflow-x-auto">
          <table className="table-bordered table whitespace-nowrap">
            <tbody>
              <tr>
                <td className="bg-slate-100 text-center">정산코드</td>
                <td colSpan={7}>
                  <select
                    className="form-select mr-1 w-32"
                    aria-label="Default select example"
                  >
                    <option>20220901</option>
                  </select>{' '}
                  ~
                  <select
                    className="form-select ml-2 w-32"
                    aria-label="Default select example"
                  >
                    <option>선택</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td className="bg-slate-100 text-center">예약번호</td>
                <td>
                  <input
                    id="regular-form-1"
                    type="number"
                    className="form-control"
                    placeholder=""
                  />
                </td>
                <td className="bg-slate-100 text-center">고객명</td>
                <td>
                  <input
                    id="regular-form-1"
                    type="text"
                    className="form-control"
                    placeholder=""
                  />
                </td>
                <td className="bg-slate-100 text-center">여행사/부서명</td>
                <td>
                  <select
                    className="form-select mr-1 w-28"
                    aria-label="Default select example"
                  >
                    <option>전체</option>
                  </select>
                  <select
                    className="form-select w-28"
                    aria-label="Default select example"
                    onClick={infoAlert}
                  >
                    <option>전체</option>
                  </select>
                </td>
                <td className="bg-slate-100 text-center">수수료지급</td>
                <td>
                  <div className="flex flex-col sm:flex-row">
                    <div className="form-check mr-3">
                      <input
                        id="checkbox-switch-3"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-3"
                      >
                        당월지급
                      </label>
                    </div>
                    <div className="form-check mr-3 sm:mt-0">
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
                        이월지급
                      </label>
                    </div>
                    <div className="form-check mr-3 sm:mt-0">
                      <input
                        id="checkbox-switch-5"
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="checkbox-switch-5"
                      >
                        미지급
                      </label>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-3 text-center">
        <button className="btn mr-2 mb-2 inline-block w-24 bg-white">
          초기화
        </button>
        <button className="btn btn-primary mb-2 w-24">조회</button>
      </div>

      <div className="intro-y box mt-6 p-3">
        <div className="flex flex-col items-center sm:flex-row">
          <div className="mr-auto text-base font-medium">
            <button
              className="btn btn-sm btn-outline-primary mr-2 w-20"
              onClick={() => {
                setSave(true)
              }}
            >
              저장
            </button>
            <Popover className="inline-block">
              {({ close }) => (
                <>
                  <Popover.Button
                    as={Button}
                    className="btn btn-sm btn-dark mr-2 py-1.5"
                  >
                    수수료지급여부 일괄처리
                  </Popover.Button>
                  <Popover.Panel placement="bottom-start">
                    <div className="flex flex-col sm:flex-row ">
                      <div className="form-check mr-3">
                        <input
                          id="radio01"
                          className="form-check-input"
                          type="radio"
                          name="radio01"
                          onClick={radioClickHandle}
                          defaultValue="당월지급"
                        />
                        <label
                          className="form-check-label text-sm"
                          htmlFor="radio01"
                        >
                          당월지급
                        </label>
                      </div>
                      <div className="form-check mr-3 sm:mt-0">
                        <input
                          id="radio02"
                          className="form-check-input"
                          type="radio"
                          name="radio01"
                          onClick={radioClickHandle}
                          defaultValue="이월지급"
                        />
                        <label
                          className="form-check-label text-sm"
                          htmlFor="radio02"
                        >
                          이월지급
                        </label>
                      </div>
                      <div className="form-check mr-3 sm:mt-0">
                        <input
                          id="radio03"
                          className="form-check-input"
                          type="radio"
                          name="radio01"
                          onClick={radioClickHandle}
                          defaultValue="미지급"
                        />
                        <label
                          className="form-check-label text-sm"
                          htmlFor="radio03"
                        >
                          미지급
                        </label>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm ml-2"
                        onClick={() => {
                          setIsSave(true)
                          handleCheckboxClick()
                        }}
                      >
                        저장
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary btn-sm ml-2"
                        onClick={() => {
                          setNoSave(true)
                          handleCheckboxClick()
                        }}
                      >
                        저장(항목미선택시)
                      </button>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>
            <Popover className="inline-block">
              {({ close }) => (
                <>
                  <Popover.Button
                    as={Button}
                    className="btn btn-sm btn-dark mr-2 py-1.5"
                  >
                    수수료지급 월 일괄처리
                  </Popover.Button>
                  <Popover.Panel placement="bottom-start">
                    <div className="flex flex-col sm:flex-row">
                      <select
                        className="form-select ml-2 w-32"
                        aria-label="Default select example"
                        onChange={selectClickHandle}
                      >
                        <option value={'0'}>선택</option>
                        <option value={'202209'}>202209</option>
                        <option value={'202210'}>202210</option>
                        <option value={'202211'}>202211</option>
                      </select>
                      <button
                        type="button"
                        onClick={() => {
                          setIsSave2(true)
                          handleCheckboxClick()
                        }}
                        className="btn btn-primary btn-sm ml-2"
                      >
                        저장
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setNoSave(true)
                          handleCheckboxClick()
                        }}
                        className="btn btn-primary btn-sm ml-2"
                      >
                        저장(항목미선택시)
                      </button>
                    </div>
                  </Popover.Panel>
                </>
              )}
            </Popover>

            <button
              type="button"
              className="btn btn-sm btn-dark mr-2"
              onClick={() => setNoSave(true)}
            >
              세금계산서 요청 메일발송 (항목미선택시)
            </button>
            <a
              href="/em/emailForm.html"
              target="_blank"
              className="btn btn-sm btn-dark mr-2"
              
            >
              세금계산서 요청 메일발송 (메일템플릿 확인용)
            </a>
            <button
              type="button"
              onClick={() => {
                setHeaderFooterModalPreview(true)
              }}
              className="btn btn-sm btn-primary mr-2"
            >
              여행사 수수료 결재 양식 확인
            </button>
            <button
              type="button"
              onClick={() => setFeeModal(true)}
              className="btn btn-sm btn-primary mr-2"
            >
              여행사 수수료 결재 양식 확인 (여부 미입력시)
            </button>
            <button
              type="button"
              onClick={() => setFeeModal2(true)}
              className="btn btn-sm btn-primary mr-2"
            >
              여행사 수수료 결재 양식 확인 (월 미입력시)
            </button>
          </div>
          <div className="form-check form-switch ml-auto">
            <button type="button" className="btn btn-primary btn-sm mr-2 w-20">
              다운로드
            </button>
            <select
              className="form-select-sm form-select"
              aria-label=".form-select-lg example"
            >
              <option>100개</option>
              <option>200개</option>
            </select>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="table-hover check_table table whitespace-nowrap">
            <thead className="table-dark text-center">
              <tr>
                <th>
                  <input
                    id="all"
                    className="form-check-input"
                    type="checkbox"
                    onClick={handleCheckboxClick}
                    onChange={handleCheckAll}
                  />
                </th>
                <th>번호</th>
                <th>여행사명</th>
                <th>부서명</th>
                <th>정산코드</th>
                <th>세금계산서 요청 메일 발송여부</th>
                <th>수수료타입</th>
                <th>수수료지급여부</th>
                <th>수수료지급 월</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr onClick={() => setDetail(true)}>
                <td>
                  <input
                    id="1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>99</td>
                <td>여행사명1</td>
                <td>부서명1</td>
                <td>ac1111</td>
                <td>발송완료</td>
                <td>세금계산서 발행</td>
                <td className="bg-blue-100">당월지급</td>
                <td className="bg-blue-100">202209</td>
              </tr>
              <tr onClick={() => setDetail(true)}>
                <td>
                  <input
                    id="1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>99</td>
                <td>여행사명1</td>
                <td>부서명1</td>
                <td>ac1111</td>
                <td>발송완료</td>
                <td>세금계산서 발행</td>
                <td className="bg-blue-100">당월지급</td>
                <td className="bg-blue-100">202209</td>
              </tr>
              <tr onClick={() => setDetail(true)}>
                <td>
                  <input
                    id="1"
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheck}
                    onClick={handleCheckboxClick}
                  />
                </td>
                <td>99</td>
                <td>여행사명1</td>
                <td>부서명1</td>
                <td>ac1111</td>
                <td>발송완료</td>
                <td>세금계산서 발행</td>
                <td className="bg-blue-100">당월지급</td>
                <td className="bg-blue-100">202209</td>
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
              className="form-control form-control-sm mr-1 w-12 text-center"
              defaultValue={1}
            />
            / 200
          </div>
        </div>
      </div>
      {detail && (
        <div className="intro-y box mt-3 p-3">
          <h4 className="mr-auto text-lg font-bold">정산/예약 정보</h4>
          <div className="mt-6 overflow-x-auto">
            <table className="table whitespace-nowrap">
              <thead className="table-dark text-center">
                <tr>
                  <th>브랜드</th>
                  <th>예약번호</th>
                  <th>고객명</th>
                  <th>렌트상태</th>
                  <th>판매가</th>
                  <th>수수료(%)</th>
                  <th>수수료($)</th>
                  <th>환율</th>
                  <th>수수료(KRW)</th>
                  <th>VAT(KRW)</th>
                  <th>지급액(KRW)</th>
                  <th>비고</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>알라모</td>
                  <td>123455(현지결제)</td>
                  <td>홍길동</td>
                  <td>Rented</td>
                  <td>300</td>
                  <td>3%</td>
                  <td>3$</td>
                  <td>1400</td>
                  <td>23,000</td>
                  <td>2,300</td>
                  <td>23,100</td>
                  <td rowSpan={2}>
                    <textarea name="" id=""></textarea>
                  </td>
                </tr>
                <tr>
                  <td>알라모</td>
                  <td>123455(현지결제)</td>
                  <td>홍길동</td>
                  <td>Rented</td>
                  <td>300</td>
                  <td>3%</td>
                  <td>3$</td>
                  <td>1400</td>
                  <td>23,000</td>
                  <td>2,300</td>
                  <td>23,100</td>
                </tr>
                <tr className="bg-slate-100 font-bold">
                  <td colSpan={10}>총 지급액</td>
                  <td>46,200</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <button
              className="btn btn-outline-dark mr-2 mb-2 inline-block w-24"
              onClick={() => setDetail(false)}
            >
              취소
            </button>
            <button
              className="btn btn-dark mb-2 w-24"
              onClick={() => {
                setSave(true)
              }}
            >
              저장
            </button>
          </div>
          <h4 className="mr-auto text-lg font-bold">여행사 정보</h4>
          <div className="mt-6 overflow-x-auto">
            <table className="table whitespace-nowrap">
              <thead className="table-dark text-center">
                <tr>
                  <th>사업자번호</th>
                  <th>세금계산서용 이메일</th>
                  <th>대표연락처</th>
                  <th>은행명</th>
                  <th>계좌명</th>
                  <th>계좌번호</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr>
                  <td>111-11-1111</td>
                  <td>222@gmail.com</td>
                  <td>02-111-1111</td>
                  <td>알라모은행</td>
                  <td>홍길동</td>
                  <td>11111111</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 저장 모달 */}
      <Dialog
        open={Save}
        onClose={() => {
          setSave(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setSave(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              저장 하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setSave(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setSave(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 여행사 수수료 내역 팝업 */}
      <Dialog
        size="xl"
        open={headerFooterModalPreview}
        onClose={() => {
          setHeaderFooterModalPreview(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              2022년 09월 여행사 수수료 내역
            </h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setHeaderFooterModalPreview(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="rounded-sm border border-slate-200 p-3">
              아래와 같이 2022년 8월 렌터카 반납에 대한 여행사 수수료 지급을
              요청 드립니다.
              <br />
              1) 총 KRW 471,777 (VAT KRW 42,889 포함)
            </div>
            <div className="mt-5">
              <h2 className="text-base font-medium">지급 금액</h2>
              <table className="table-bordered mt-3 table">
                <tr className="bg-dark text-center text-white">
                  <td>NO.</td>
                  <td>수수료(\)</td>
                  <td>VAT(\)</td>
                  <td>송금액(\)</td>
                  <td>예약건수</td>
                  <td>은행</td>
                  <td>계좌번호</td>
                  <td>예금주</td>
                  <td>대리점</td>
                  <td>비고</td>
                </tr>
                <tr>
                  <td colSpan={10} className="btn-warning-soft text-dark">
                    이월 지급
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="text-center">1</td>
                  <td>238,061</td>
                  <td>23,806</td>
                  <td>261,867</td>
                  <td className="text-center">4</td>
                  <td className="text-center">씨티</td>
                  <td className="text-center">108-01193-241-01</td>
                  <td className="text-center">(주)드라이브트래블</td>
                  <td className="text-center">(주)드라이브트래블</td>
                  <td className="text-left">
                    <span className="text-danger">
                      2021년 12월 수수료(11월 반납) 미발행 건 이월지급
                    </span>
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="text-center">2</td>
                  <td>24,000</td>
                  <td>2,400</td>
                  <td>26,400</td>
                  <td className="text-center">1</td>
                  <td className="text-center">국민</td>
                  <td className="text-center">009-25-0023-841</td>
                  <td className="text-center">(주)민트투어</td>
                  <td className="text-center">민트투어</td>
                  <td className="text-left">
                    <span className="text-danger">
                      2021년 10월 수수료(10월 반납) 미발행 건 이월지급
                    </span>
                  </td>
                </tr>
                <tr>
                  <td colSpan={10} className="btn-warning-soft text-dark">
                    당월 지급
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="text-center">1</td>
                  <td>238,061</td>
                  <td>23,806</td>
                  <td>261,867</td>
                  <td className="text-center">4</td>
                  <td className="text-center">씨티</td>
                  <td className="text-center">108-01193-241-01</td>
                  <td className="text-center">(주)드라이브트래블</td>
                  <td className="text-center">(주)드라이브트래블</td>
                  <td className="text-left">
                    <span className="text-danger">
                      2021년 12월 수수료(11월 반납) 미발행 건 이월지급
                    </span>
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="text-center">2</td>
                  <td>24,000</td>
                  <td>2,400</td>
                  <td>26,400</td>
                  <td className="text-center">1</td>
                  <td className="text-center">국민</td>
                  <td className="text-center">009-25-0023-841</td>
                  <td className="text-center">(주)민트투어</td>
                  <td className="text-center">민트투어</td>
                  <td className="text-left">
                    <span className="text-danger">
                      2021년 10월 수수료(10월 반납) 미발행 건 이월지급
                    </span>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2} colSpan={5} className="bg-slate-100">
                    당월 송금액 합계
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    금액
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    VAT
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    합계금액
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    428,888
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    42,889
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    471,777
                  </td>
                </tr>
              </table>

              <table className="table-bordered mt-5 table">
                <tr className="bg-dark text-center text-white">
                  <td>NO.</td>
                  <td>수수료(\)</td>
                  <td>VAT(\)</td>
                  <td>송금액(\)</td>
                  <td>예약건수</td>
                  <td>은행</td>
                  <td>계좌번호</td>
                  <td>예금주</td>
                  <td>대리점</td>
                  <td>비고</td>
                </tr>
                <tr>
                  <td colSpan={10} className="btn-warning-soft text-dark">
                    미지급
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="text-center">1</td>
                  <td>238,061</td>
                  <td>23,806</td>
                  <td>261,867</td>
                  <td className="text-center">4</td>
                  <td className="text-center">씨티</td>
                  <td className="text-center">108-01193-241-01</td>
                  <td className="text-center">(주)드라이브트래블</td>
                  <td className="text-center">(주)드라이브트래블</td>
                  <td className="text-left">
                    <span className="text-danger">
                      2021년 12월 수수료(11월 반납) 미발행 건 이월지급
                    </span>
                  </td>
                </tr>
                <tr className="text-right">
                  <td className="text-center">2</td>
                  <td>24,000</td>
                  <td>2,400</td>
                  <td>26,400</td>
                  <td className="text-center">1</td>
                  <td className="text-center">국민</td>
                  <td className="text-center">009-25-0023-841</td>
                  <td className="text-center">(주)민트투어</td>
                  <td className="text-center">민트투어</td>
                  <td className="text-left">
                    <span className="text-danger">
                      2021년 10월 수수료(10월 반납) 미발행 건 이월지급
                    </span>
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2} colSpan={5} className="bg-slate-100">
                    당월 발생 수수료
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    금액
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    VAT
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    합계금액
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    428,888
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    42,889
                  </td>
                  <td colSpan={2} className="bg-slate-50 text-center">
                    471,777
                  </td>
                </tr>
              </table>

              <div className="mt-5 rounded-sm border border-slate-200 p-3 text-center text-lg">
                <div className="border-b pb-3">
                  총 4개 대리점 수수료 KRW 471,777 중 2건 KRW 183,510 / 2건 KRW
                  288,267 세금 계산서 미발행으로 누락 / 2건 KRW 288,267
                  <br />
                  이월지급수수료 총 송금액 : 471,777
                </div>
                <div className="pt-3 text-lg">471,777</div>
              </div>
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setHeaderFooterModalPreview(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={isSave}
        onClose={() => {
          setIsSave(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              수수료지급여부 일괄처리
            </h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsSave(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              <span className="text-primary">{checkedCount}개</span>가 &#91;
              {fee}&#93; 일괄처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsSave(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      <Dialog
        open={isSave2}
        onClose={() => {
          setIsSave2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              수수료지급 월 일괄처리
            </h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setIsSave2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              <span className="text-primary">{checkedCount}개</span>가 &#91;
              {month}&#93;월로 일괄처리되었습니다.
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setIsSave2(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      <Dialog
        open={noSave}
        onClose={() => {
          setNoSave(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setNoSave(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              항목을 선택해주세요
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setNoSave(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      <Dialog
        open={feeModal}
        onClose={() => {
          setFeeModal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setFeeModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              수수료지급 여부를 택해주세요
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setFeeModal(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      <Dialog
        open={feeModal2}
        onClose={() => {
          setFeeModal2(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium"></h2>
            <button
              type="button"
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setFeeModal2(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-center text-lg font-bold">
              수수료지급 월을 택해주세요
            </div>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <Button
              type="button"
              variant="primary"
              className="ml-3 w-24"
              onClick={() => {
                setFeeModal2(false)
              }}
            >
              확인
            </Button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
    </>
  )
}

export default Tax
