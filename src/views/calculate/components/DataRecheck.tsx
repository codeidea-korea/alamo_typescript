import Dialog from '@/base-components/Headless/Dialog'
import Lucide from '@/base-components/Lucide'
import { Link } from 'react-router-dom'


interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function DataRecheck({ open, setOpen }: Props) {
  return (
    <Dialog
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
            정산데이터 보정이 필요한 경우 반드시 본사데이터를 재요청 후 데이터
            변환 처리를 해주세요!
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
                        // onClick={() => {
                        //   SetTotalModal(true)
                        // }}
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
                  <Link to="" className="underline">
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
                  <Link to="" className="underline">
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
              // SetReDatumModal(true)
            }}
          >
            저장
          </button>
        </div>
        </Dialog.Description>
      </Dialog.Panel>
    </Dialog>
  )
}
