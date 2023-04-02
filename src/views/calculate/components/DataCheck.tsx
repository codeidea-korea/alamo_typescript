import { useState } from 'react'
import { Link } from 'react-router-dom'

import Dialog from '@/base-components/Headless/Dialog'
import Lucide from '@/base-components/Lucide'
import Button from '@/base-components/Button'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DataCheck({ open, setOpen }: Props) {
  // 기존 정산데이터 재확인 팝업
  const [redatumModal, SetReDatumModal] = useState(false)
  const [totalModal, SetTotalModal] = useState(false)

  // 예약확정
  const [Reservation, setReservation] = useState(false)
  File
  return (
    <>
      <Dialog
        size="xxl"
        open={open}
        onClose={() => {
          setOpen(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-bold">
              정산데이터 확인{' '}
              <span className="ml-2 bg-blue-700 p-2 text-xs text-white">
                정산데이터 보정이 필요한 경우 반드시 본사데이터를 재요청 후
                데이터 변환 처리를 해주세요!
              </span>
            </h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setOpen(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-7">
                <div className="overflow-x-auto">
                  <table className="table-bordered table-sm mt-3 table">
                    <thead className="bg-slate-100 text-center font-bold">
                      <tr>
                        <th colSpan={6}>통화별 합산금액</th>
                      </tr>
                      <tr>
                        <th>통화</th>
                        <th>이용건수 (예약건수)</th>
                        <th>판매가(USD)</th>
                        <th>넷가(USD)</th>
                        <th>커미션(USD)</th>
                        <th>적용 환율(USD)</th>
                      </tr>
                    </thead>
                    <tbody className="text-right">
                      <tr>
                        <td className="text-center">USD</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr>
                        <td className="text-center">EUR</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr>
                        <td className="text-center">CAD</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr>
                        <td className="text-center">CBP</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>

                      <tr className="bg-slate-300 font-bold">
                        <td className="text-center">Total</td>
                        <td className="text-center">93(225)</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-5">
                <div className="overflow-x-auto">
                  <table className="table-bordered table-sm mt-3 table ">
                    <thead className="bg-slate-100 text-center font-bold">
                      <tr>
                        <th colSpan={5}>
                          정산코드별 합산금액
                          <span className="text-red-500">
                            / 예약코드 월별 합산으로 오차 발생 가능 / 월 총합
                            일치해야 함
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th>정산코드</th>
                        <th>이용건수 (예약건수)</th>
                        <th>판매가(USD)</th>
                        <th>넷가(USD)</th>
                        <th>커미션(USD)</th>
                      </tr>
                    </thead>
                    <tbody className="text-right">
                      <tr>
                        <td className="text-center">20220801</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr>
                        <td className="text-center">20220801</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr className="bg-slate-300 font-bold">
                        <td className="text-center">Total</td>
                        <td className="text-center">93(225)</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                      </tr>
                      <tr className="bg-slate-300 font-bold">
                        <td className="text-center">Total(중복제외)</td>
                        <td className="text-center">
                          <Link
                            to=""
                            className="text-blue-700 underline"
                            onClick={() => {
                              SetTotalModal(true)
                            }}
                          >
                            93(225)
                          </Link>
                        </td>
                        <td colSpan={3}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="mt-6 w-1/2">
              <table className="table-bordered table">
                <tbody>
                  <tr>
                    <td className="bg-slate-100 text-center">예약번호</td>
                    <td>
                      <input
                        id="regular-form-1"
                        type="number"
                        className="form-control mr-2 inline-block w-40"
                        placeholder=""
                      />
                      <button className="btn btn-outline-primary mr-2 inline-block w-24">
                        초기화
                      </button>
                      <button className="btn btn-primary w-24 ">조회</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 overflow-x-auto">
              <table className="table-hover table whitespace-nowrap">
                <thead className="table-dark text-center">
                  <tr>
                    <th>정산코드</th>
                    <th>브랜드</th>
                    <th>
                      예약번호
                      <br />
                      (RES)
                    </th>
                    <th>바우처번호</th>
                    <th>
                      계약번호
                      <br />
                      (RA)
                    </th>
                    <th>성</th>
                    <th>이름</th>
                    <th>픽업일</th>
                    <th>반납일</th>
                    <th>픽업지점</th>
                    <th>반납지점</th>
                    <th>Contract ID</th>
                    <th>Product Code</th>
                    <th>차량등급</th>
                    <th>정산상태</th>
                    <th>기존정산이력</th>
                    <th>
                      판매가
                      <br />
                      (현지통화)
                    </th>
                    <th>
                      판매가
                      <br />
                      (USD)
                    </th>
                    <th>
                      넷가
                      <br />
                      (USD)
                    </th>
                    <th>
                      커미션
                      <br />
                      (USD)
                    </th>
                    <th>통화</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>20220801</td>
                    <td>99</td>
                    <td>
                      <Link to="" className="underline"
                        onClick={() =>
                          setReservation(true)
                        }
                      >
                        10801294748
                      </Link>
                    </td>
                    <td>-</td>
                    <td>-</td>
                    <td>KIM</td>
                    <td>GILDONG</td>
                    <td className="text-left">
                      2022-11-11 11:11:11
                      <br />
                      <span className="text-red-500">2011-12-30</span>
                    </td>
                    <td className="text-left">
                      2022-11-11 11:11:11
                      <br />
                      <span className="text-red-500">2011-12-30</span>
                    </td>
                    <td className="text-left">
                      HNL071
                      <br />
                      <span className="text-red-500">HNL072</span>
                    </td>
                    <td className="text-left">
                      HNL071
                      <br />
                      <span className="text-red-500">-</span>
                    </td>
                    <td></td>
                    <td>200083</td>
                    <td>3F</td>
                    <td>
                      PRAR
                      <br />-
                    </td>
                    <td>Rented</td>
                    <td>Y</td>
                    <td>
                      33,3999
                      <br />
                      <span className="text-red-500">33,2000</span>
                    </td>
                    <td>3039,000</td>
                    <td>393,330</td>
                    <td>USD</td>
                  </tr>
                  <tr>
                    <td>20220801</td>
                    <td>99</td>
                    <td>
                      <Link to="" className="underline"
                         onClick={() =>
                          setReservation(true)
                        }
                      >
                        10801294748
                      </Link>
                    </td>
                    <td>-</td>
                    <td>-</td>
                    <td>KIM</td>
                    <td>GILDONG</td>
                    <td className="text-left">
                      2022-11-11 11:11:11
                      <br />
                      <span className="text-red-500">2011-12-30</span>
                    </td>
                    <td className="text-left">
                      2022-11-11 11:11:11
                      <br />
                      <span className="text-red-500">2011-12-30</span>
                    </td>
                    <td className="text-left">
                      HNL071
                      <br />
                      <span className="text-red-500">HNL072</span>
                    </td>
                    <td className="text-left">
                      HNL071
                      <br />
                      <span className="text-red-500">-</span>
                    </td>
                    <td></td>
                    <td>200083</td>
                    <td>3F</td>
                    <td>
                      PRAR
                      <br />-
                    </td>
                    <td>Rented</td>
                    <td>Y</td>
                    <td>
                      33,3999
                      <br />
                      <span className="text-red-500">33,2000</span>
                    </td>
                    <td>3039,000</td>
                    <td>393,330</td>
                    <td>USD</td>
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
            <div className="mt-6 text-center">
              <button
                className="btn btn-outline-dark mr-2 mb-2 inline-block w-24"
                onClick={() => {
                  setOpen(false)
                }}
              >
                취소
              </button>
              <button
                className="btn btn-primary mb-2 w-24"
                onClick={() => {
                  setOpen(false)
                  SetReDatumModal(true)
                }}
              >
                저장
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>

      {/* 기존 정산데이터 확인 팝업 */}
      <Dialog
        size="xxl"
        open={redatumModal}
        onClose={() => {
          SetReDatumModal(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-bold">
              정산데이터 확인{' '}
              <span className="ml-2 bg-red-700 p-2 text-xs text-white">
                정산데이터가 정상적으로 저장되었습니다. 수정이 필요할 경우 기존
                데이터 삭제 후 변환데이터 재등록해주세요.
              </span>
            </h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                SetReDatumModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-7">
                <div className="overflow-x-auto">
                  <table className="table-bordered table-sm mt-3 table whitespace-nowrap">
                    <thead className="bg-slate-100 text-center font-bold">
                      <tr>
                        <th colSpan={6}>통화별 합산금액</th>
                      </tr>
                      <tr>
                        <th>통화</th>
                        <th>이용건수 (예약건수)</th>
                        <th>판매가(USD)</th>
                        <th>넷가(USD)</th>
                        <th>커미션(USD)</th>
                        <th>현재 고시 환율(USD)</th>
                      </tr>
                    </thead>
                    <tbody className="text-right">
                      <tr>
                        <td className="text-center">USD</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr>
                        <td className="text-center">EUR</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr>
                        <td className="text-center">CAD</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr>
                        <td className="text-center">CBP</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>

                      <tr className="bg-slate-300 font-bold">
                        <td className="text-center">Total</td>
                        <td className="text-center">93(225)</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-span-5">
                <div className="overflow-x-auto">
                  <table className="table-bordered table-sm mt-3 table whitespace-nowrap">
                    <thead className="bg-slate-100 text-center font-bold">
                      <tr>
                        <th colSpan={5}>
                          정산코드별 합산금액
                          <span className="text-red-500">
                            / 예약코드 월별 합산으로 오차 발생 가능 / 월 총합
                            일치해야 함
                          </span>
                        </th>
                      </tr>
                      <tr>
                        <th>정산코드</th>
                        <th>이용건수 (예약건수)</th>
                        <th>판매가(USD)</th>
                        <th>넷가(USD)</th>
                        <th>커미션(USD)</th>
                      </tr>
                    </thead>
                    <tbody className="text-right">
                      <tr>
                        <td className="text-center">20220801</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr>
                        <td className="text-center">20220801</td>
                        <td className="text-center">90(214)</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                        <td>9,4340.04</td>
                      </tr>
                      <tr className="bg-slate-300 font-bold">
                        <td className="text-center">Total</td>
                        <td className="text-center">93(225)</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                        <td>10,2245.08</td>
                      </tr>
                      <tr className="bg-slate-300 font-bold">
                        <td className="text-center">Total(중복제외)</td>
                        <td className="text-center">93(225)</td>
                        <td colSpan={3}></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="mt-6 w-1/2">
              <table className="table-bordered table">
                <tbody>
                  <tr>
                    <td className="bg-slate-100 text-center">예약번호</td>
                    <td>
                      <input
                        id="regular-form-1"
                        type="number"
                        className="form-control mr-2 inline-block w-40"
                        placeholder=""
                      />
                      <button className="btn btn-outline-primary mr-2 inline-block w-24">
                        초기화
                      </button>
                      <button className="btn btn-primary w-24 ">조회</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-3 overflow-x-auto">
              <table className="table-hover table whitespace-nowrap">
                <thead className="table-dark text-center">
                  <tr>
                    <th>정산코드</th>
                    <th>브랜드</th>
                    <th>예약번호(RES)</th>
                    <th>바우처번호</th>
                    <th>계약번호(RA)</th>
                    <th>성</th>
                    <th>이름</th>
                    <th>픽업일</th>
                    <th>반납일</th>
                    <th>픽업지점</th>
                    <th>반납지점</th>
                    <th>Contract ID</th>
                    <th>Product Code</th>
                    <th>차량등급</th>
                    <th>정산상태</th>
                    <th>기존정산이력</th>
                    <th>
                      판매가
                      <br />
                      (현지통화)
                    </th>
                    <th>판매가(USD)</th>
                    <th>넷가(USD)</th>
                    <th>커미션(USD)</th>
                    <th>통화</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr>
                    <td>20220801</td>
                    <td>99</td>
                    <td>10801294748</td>
                    <td>-</td>
                    <td>-</td>
                    <td>KIM</td>
                    <td>GILDONG</td>
                    <td className="text-left">
                      2022-11-11 11:11:11
                      <br />
                      <span className="text-red-500">2011-12-30</span>
                    </td>
                    <td className="text-left">
                      2022-11-11 11:11:11
                      <br />
                      <span className="text-red-500">2011-12-30</span>
                    </td>
                    <td className="text-left">
                      HNL071
                      <br />
                      <span className="text-red-500">HNL072</span>
                    </td>
                    <td className="text-left">
                      HNL071
                      <br />
                      <span className="text-red-500">-</span>
                    </td>
                    <td></td>
                    <td>200083</td>
                    <td>3F</td>
                    <td>
                      PRAR
                      <br />-
                    </td>
                    <td>Rented</td>
                    <td>Y</td>
                    <td>
                      33,3999
                      <br />
                      <span className="text-red-500">33,2000</span>
                    </td>
                    <td>3039,000</td>
                    <td>393,330</td>
                    <td>USD</td>
                  </tr>
                  <tr>
                    <td>20220801</td>
                    <td>99</td>
                    <td>10801294748</td>
                    <td>-</td>
                    <td>-</td>
                    <td>KIM</td>
                    <td>GILDONG</td>
                    <td className="text-left">
                      2022-11-11 11:11:11
                      <br />
                      <span className="text-red-500">2011-12-30</span>
                    </td>
                    <td className="text-left">
                      2022-11-11 11:11:11
                      <br />
                      <span className="text-red-500">2011-12-30</span>
                    </td>
                    <td className="text-left">
                      HNL071
                      <br />
                      <span className="text-red-500">HNL072</span>
                    </td>
                    <td className="text-left">
                      HNL071
                      <br />
                      <span className="text-red-500">-</span>
                    </td>
                    <td></td>
                    <td>200083</td>
                    <td>3F</td>
                    <td>
                      PRAR
                      <br />-
                    </td>
                    <td>Rented</td>
                    <td>Y</td>
                    <td>
                      33,3999
                      <br />
                      <span className="text-red-500">33,2000</span>
                    </td>
                    <td>3039,000</td>
                    <td>393,330</td>
                    <td>USD</td>
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
            <div className="mt-6 text-center">
              <button
                className="btn btn-primary mb-2 w-24"
                onClick={() => {
                  SetReDatumModal(false)
                }}
              >
                확인
              </button>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>

      <Dialog
        open={totalModal}
        onClose={() => {
          SetTotalModal(false)
        }}
      >
        <Dialog.Panel as="form">
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">
              중복예약번호/정산코드
            </h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                SetTotalModal(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description>
            <table className="table-bordered table-sm table">
              <tbody className="text-center">
                <tr className="bg-slate-100">
                  <td>정산코드</td>
                  <td>예약번호(RES)</td>
                </tr>
                <tr className="bg-slate-300">
                  <td>20220801</td>
                  <td>10293758329</td>
                </tr>
              </tbody>
            </table>
          </Dialog.Description>
          <Dialog.Footer className="px-5 pb-3 text-center">
            <span
              className="btn btn-primary ml-3 w-24"
              onClick={() => {
                SetTotalModal(false)
              }}
            >
              확인
            </span>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* BEGIN: Modal 예약확정 */}
      <Dialog
        open={Reservation}
        onClose={() => {
          setReservation(false)
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
                setReservation(false)
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
                    src="https://design06.codeidea.io/tourmarketing/em/em_img/alamo-logo.png"
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
                setReservation(false)
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
