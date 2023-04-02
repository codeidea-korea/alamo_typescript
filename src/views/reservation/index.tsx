import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

import CreateReservationDialog from './components/CreateReservationDialog'
import ReservationList from './components/ReservationList'
import { Dialog } from '@/base-components/Headless'


const ReserveMng = () => {
  const [isCreateReservation, setIsCreateReservation] = useState(false)
  const [daterange, setDaterange] = useState('')
  const [isActive, setIsActive] = useState(false)
  const handleClick = () => {
    setIsActive((current) => !current)
  }
  const [isActive2, setIsActive2] = useState(false)
  const handleClick2 = () => {
    setIsActive2((current) => !current)
  }
  const [staticBackdropModalPreview, setStaticBackdropModalPreview] =
    useState(false)

  const [showTotalInform, setShowTotalInform] = useState(false)

  // 예약확정
  const [Reservation, setReservation] = useState(false)

  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">예약 관리</h2>
      </div>
      <div className="box mt-3 overflow-x-auto p-3">
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="w-40  whitespace-nowrap bg-slate-100">브랜드</td>
              <td colSpan={3}>
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">렌트</td>
              <td className="w-40">
                <select className="form-select w-56">
                  <option>전체</option>
                  <option>미확인</option>
                  <option>Rented</option>
                  <option>Cancelled</option>
                  <option>No show</option>
                </select>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">
                지역검색기준
              </td>
              <td className="w-40">
                <div className="flex flex-row">
                  <div className="form-check mr-2">
                  <input
                      id="switch-1"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="switch-1"
                    >
                      대여
                    </label>
                  </div>
                  <div className="form-check mr-2">
                    <input
                      id="switch-2"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="switch-2"
                    >
                      반납
                    </label>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-40  whitespace-nowrap bg-slate-100">지불방식</td>
              <td className="w-80">
                <select className="form-select w-56">
                  <option>선택</option>
                  <option>지금결제</option>
                  <option>현지결제</option>
                </select>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">예약번호</td>
              <td className="w-72">
                <select className="form-select w-56">
                  <option>선택</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">정산번호</td>
              <td className="w-40">
                <div className="flex items-center gap-2">
                  <select className="form-select w-20">
                    <option>선택</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                  <div className="">~</div>
                  <select className="form-select w-20">
                    <option>선택</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                </div>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">국가</td>
              <td className="w-40">
                <select className="form-select w-40">
                  <option>선택</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-40  whitespace-nowrap bg-slate-100">예약일자</td>
              <td colSpan={3}>
                <div className="relative w-60">
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
                    className="form-control pl-16"
                  />
                </div>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">
                지금결제상태
              </td>
              <td className="w-40">
                <select className="form-select w-56">
                  <option>선택</option>
                  <option>환불</option>
                  <option>부분환불</option>
                  <option>거래완료</option>
                  <option>환불오류</option>
                </select>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">주</td>
              <td className="w-40">
                <select className="form-select w-40">
                  <option>선택</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-40  whitespace-nowrap bg-slate-100">취소일자</td>
              <td colSpan={3}>
                <div className="relative w-60">
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
                    className="form-control pl-16"
                  />
                </div>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">회원여부</td>
              <td className="w-40">
                <div className="flex flex-row">
                  <div className="form-check mr-2">
                    <input
                      id="radio-switch-3"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-3"
                    >
                      회원
                    </label>
                  </div>
                  <div className="form-check mr-2">
                    <input
                      id="radio-switch-4"
                      className="form-check-input"
                      type="checkbox"
                      name="horizontal_checkbox_button"
                      value="horizontal-check1"
                      defaultChecked
                    />
                    <label
                      className="form-check-label"
                      htmlFor="radio-switch-4"
                    >
                      비회원
                    </label>
                  </div>
                </div>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">도시</td>
              <td className="w-40">
                <select className="form-select w-40">
                  <option>선택</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-40  whitespace-nowrap bg-slate-100">픽업일자</td>
              <td colSpan={3}>
                <div className="relative w-60">
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
                    className="form-control pl-16"
                  />
                </div>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">
                시리즈코드
              </td>
              <td className="w-40" colSpan={1}>
                <input type="text" className="form-control" />
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">지점</td>
              <td className="w-40">
                <select className="form-select w-40">
                  <option>선택</option>
                  <option>option1</option>
                  <option>option2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td className="w-40  whitespace-nowrap bg-slate-100">반납일자</td>
              <td colSpan={3}>
              <div className="relative w-60">
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
                    className="form-control pl-16"
                  />
                </div>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">
                차량코드/요금제코드
              </td>
              <td className="w-40" colSpan={3}>
                <div className="flex gap-2">
                  <select className="form-select w-40">
                    <option>전체</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                  <select className="form-select w-40">
                    <option>전체</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-40  whitespace-nowrap bg-slate-100">
                여행사/부서/담당자
              </td>
              <td colSpan={3}>
                <select className="form-select mr-2 w-40">
                  <option>선택</option>
                  <option>지금결제</option>
                  <option>현지결제</option>
                </select>
                <select className="form-select mr-2 w-40">
                  <option>선택</option>
                  <option>지금결제</option>
                  <option>현지결제</option>
                </select>
                <select className="form-select w-40">
                  <option>선택</option>
                  <option>지금결제</option>
                  <option>현지결제</option>
                </select>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">예약구분</td>
              <td className="w-40">
                <div className="flex gap-2">
                  <select className="form-select w-40">
                    <option>전체</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                  <select className="form-select w-40">
                    <option>전체</option>
                    <option>option1</option>
                    <option>option2</option>
                  </select>
                </div>
              </td>
              <td className="w-40  whitespace-nowrap bg-slate-100">예약상태</td>
              <td className="w-40">
                <div className="flex flex-row">
                  <div className="flex flex-row">
                    <div className="form-check mr-2">
                      <input
                        id="radio-switch-5"
                        className="form-check-input"
                        type="checkbox"
                        name="horizontal_checkbox_button"
                        value="horizontal-check1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-5"
                      >
                        예약
                      </label>
                    </div>
                    <div className="form-check mr-2">
                      <input
                        id="radio-switch-6"
                        className="form-check-input"
                        type="checkbox"
                        name="horizontal_checkbox_button"
                        value="horizontal-check1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="radio-switch-6"
                      >
                        취소
                      </label>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-center mt-3 flex gap-2">
        <button className="btn w-24 bg-white">초기화</button>
        <button className="btn btn-primary w-24">조회</button>
        <button
          className="btn btn-danger w-24"
          type="button"
          onClick={() => {
            setShowTotalInform(true)
          }}
        >
          합산정보
        </button>
      </div>
      <ReservationList />
      <CreateReservationDialog
        open={isCreateReservation}
        setOpen={setIsCreateReservation}
      />


      {/* 합산정보 */}
      <Dialog
        size="lg"
        open={showTotalInform}
        onClose={() => {
          setShowTotalInform(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">합산정보</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setShowTotalInform(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
          <div className="">
            <div className="box overflow-x-auto">
              <table className="table-bordered table">
                <thead className='text-center'>
                  <tr>
                    <th className="w-40  whitespace-nowrap bg-slate-100">
                      구분
                    </th>
                    <th className="w-40  whitespace-nowrap bg-slate-100">
                      건수
                    </th>
                    <th className="w-40  whitespace-nowrap bg-slate-100">
                      USD
                    </th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                  <tr>
                    <td>확정</td>
                    <td>422</td>
                    <td>193,03.00</td>
                  </tr>
                  <tr>
                    <td>취소</td>
                    <td>2</td>
                    <td>193,03.00</td>
                  </tr>
                  <tr>
                    <td>Rented</td>
                    <td>4</td>
                    <td>193,03.00</td>
                  </tr>
                  <tr>
                    <td>Cancelled</td>
                    <td>0</td>
                    <td>193,03.00</td>
                  </tr>
                  <tr>
                    <td>No Show</td>
                    <td>2</td>
                    <td>193,03.00</td>
                  </tr>
                  <tr>
                    <td>미확인</td>
                    <td>2</td>
                    <td>193,03.00</td>
                  </tr>
                  <tr>
                    <td className="whitespace-nowrap  bg-slate-100 font-bold">
                      합계
                    </td>
                    <td className="whitespace-nowrap  bg-slate-100 font-bold">
                      522
                    </td>
                    <td className="whitespace-nowrap  bg-slate-100 font-bold">
                      193,03.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          </Dialog.Description>
          <Dialog.Footer>
            <button
              type="button"
              onClick={() => {
                setShowTotalInform(false)
              }}
              className="btn btn-primary w-24"
            >
              확인
            </button>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>
      


     

    </>
  )
}
export default ReserveMng
