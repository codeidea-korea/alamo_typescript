import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'

import { Dialog } from '@/base-components/Headless'
import Lucide from '@/base-components/Lucide'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const SettlementDoc = () => {
  const [Pay, setPay] = useState(false)
  const [PayCancel, setPayCancel] = useState(false)

  return (
    <>
      <div className="mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">
          2022년 09월 알라모 렌터카 정산서{' '}
        </h2>
      </div>

      {/* BEGIN: Page Layout */}
      <div className="intro-y box mt-3 p-3">
        <div className="gap-22 flex justify-between">
          <table className="table-bordered table-hover table">
            <tbody>
              <tr className="text-center">
                <td className="w-40 bg-slate-100">상품</td>
                <td>알라모/내셔널/엔터프라이즈 렌터카</td>
              </tr>
              <tr className="text-center">
                <td className="w-40 bg-slate-100">정산일</td>
                <td>2022.7.31</td>
              </tr>
              <tr className="text-center">
                <td className="w-40 bg-slate-100">정산자</td>
                <td>김종숙</td>
              </tr>
            </tbody>
          </table>
          <table className="table-bordered table">
            <tbody>
              <tr className="text-center">
                <td className="w-20 bg-slate-100">담당</td>
                <td className="w-20 bg-slate-100">경영팀</td>
                <td className="w-20 bg-slate-100">팀장</td>
                <td className="w-20 bg-slate-100">이사</td>
                <td className="w-20 bg-slate-100">대표이사</td>
              </tr>
              <tr className="text-center">
                <td>정산완료</td>
                <td>
                  <button className="btn-danger btn-sm btn" onClick={() => {
                    setPayCancel(true)
                  }}>정산취소</button>
                </td>
                <td>
                  <button className="btn-primary btn-sm btn" onClick={() => {
                    setPay(true)
                  }}>결제</button>
                </td>
                <td className="text-slate-400">정산대기</td>
                <td className="text-slate-400">정산대기</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-5">
          <table className="table-bordered table">
            <tbody>
              <tr>
                <td className="w-56 bg-slate-100 text-center"></td>
                <td className="bg-slate-100 text-center">이용건수</td>
                <td className="bg-slate-100 text-center">수익</td>
                <td className="bg-slate-100 text-center">VAT 차감 수익</td>
              </tr>
              <tr className="text-right">
                <td className="bg-slate-50 text-center">현지결제</td>
                <td>280</td>
                <td>44,282,927</td>
                <td>40,257,206 </td>
              </tr>
              <tr className="text-right">
                <td className="bg-slate-50 text-center">지금결제</td>
                <td>157 </td>
                <td>19,455,001</td>
                <td>17,686,365</td>
              </tr>
              <tr className="text-right">
                <td className="bg-slate-50 text-center">오버라이딩</td>
                <td>481</td>
                <td>20,989,847</td>
                <td>19,081,679</td>
              </tr>
              <tr className="text-right">
                <td className="bg-slate-50 text-center">지급수수료</td>
                <td>N/A</td>
                <td>-1,879,469</td>
                <td>-1,879,469</td>
              </tr>
              <tr className="text-right">
                <td className="bg-slate-50 text-center">이니시스수수료</td>
                <td>N/A</td>
                <td>-3,655,054</td>
                <td>-3,655,054</td>
              </tr>
              <tr className="bg-slate-300 text-right font-bold">
                <td className="text-center">총 합계 (현지결제+지금결제)</td>
                <td>437</td>
                <td>79,193,252</td>
                <td>71,490,727</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 현지결제 커미션 수익 */}
        <div className="mt-8">
          <div className="mt-8 flex items-center">
            <h2 className="mr-auto text-lg font-bold">현지결제 커미션 수익</h2>
          </div>
          <div className="mt-3">
            <table className="table-bordered table">
              <tbody>
                <tr className="bg-slate-100 text-center">
                  <td rowSpan={2}>내역</td>
                  <td rowSpan={2}>이용건수</td>
                  <td colSpan={2}>판매가</td>
                  <td colSpan={4}>
                    커미션 원화
                    <br />
                    VAT차감 금액
                  </td>
                  <td rowSpan={2}>환율</td>
                  <td rowSpan={2}>
                    커미션 원화
                    <br />
                    VAT차감 금액
                  </td>
                  <td rowSpan={2}>
                    커미션
                    <br />
                    입금일
                  </td>
                  <td rowSpan={2}>비고</td>
                </tr>
                <tr className="bg-slate-50 text-center">
                  <td>외화($)</td>
                  <td>원화(\)</td>
                  <td>외화($)</td>
                  <td>송금수수료($)</td>
                  <td>실입금액($)</td>
                  <td>원화(\)</td>
                </tr>
                <tr className="text-right">
                  <td className="bg-slate-50 text-center">
                    6월 알라모 반납 커미션 - 상반기
                  </td>
                  <td>159</td>
                  <td>113,212.03</td>
                  <td>146,519,09</td>
                  <td>17,022.31</td>
                  <td>12.70</td>
                  <td>17,009.61</td>
                  <td>22,013,837</td>
                  <td rowSpan={2}>1,294.20</td>
                  <td>20,012,59</td>
                  <td rowSpan={2}>2022.7.4</td>
                  <td>-</td>
                </tr>
                <tr className="text-right">
                  <td className="bg-slate-50 text-center">
                    6월 내셔널 반납 커미션 - 상반기
                  </td>
                  <td>1</td>
                  <td>687.93</td>
                  <td>890,319</td>
                  <td>103.19</td>
                  <td>-</td>
                  <td>103.19</td>
                  <td>133,548</td>
                  <td>21,407</td>
                  <td>-</td>
                </tr>
                <tr className="text-right">
                  <td className="bg-slate-50 text-center">상반기 합계</td>
                  <td>160</td>
                  <td>113,899.96</td>
                  <td>147,409,38</td>
                  <td>17,125.50</td>
                  <td>12.70</td>
                  <td>17,112.80</td>
                  <td>22,147,385</td>
                  <td>-</td>
                  <td>20,133,96</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
                <tr className="text-right">
                  <td className="bg-slate-50 text-center">
                    6월 알라모 반납 커미션 - 상반기
                  </td>
                  <td>159</td>
                  <td>113,212.03</td>
                  <td>146,519,09</td>
                  <td>17,022.31</td>
                  <td>12.70</td>
                  <td>17,009.61</td>
                  <td>22,013,837</td>
                  <td rowSpan={2}>1,294.20</td>
                  <td>20,012,59</td>
                  <td rowSpan={2}>2022.7.4</td>
                  <td>-</td>
                </tr>
                <tr className="text-right">
                  <td className="bg-slate-50 text-center">
                    6월 내셔널 반납 커미션 - 상반기
                  </td>
                  <td>1</td>
                  <td>687.93</td>
                  <td>890,319</td>
                  <td>103.19</td>
                  <td>-</td>
                  <td>103.19</td>
                  <td>133,548</td>
                  <td>21,407</td>
                  <td>-</td>
                </tr>
                <tr className="bg-slate-300 text-right  font-bold">
                  <td className="text-center">총 합계</td>
                  <td>280</td>
                  <td>226,517.57</td>
                  <td>294,938,37</td>
                  <td>34,035.39</td>
                  <td>25.23</td>
                  <td>34,010.16</td>
                  <td>44,282,927</td>
                  <td>-</td>
                  <td>40,257,26</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* 지금결제 수익 */}
          <div className="mt-8">
            <div className="mt-8 flex items-center">
              <h2 className="mr-auto text-lg font-bold">지금결제 수익</h2>
            </div>
            <div className="mt-3">
              <table className="table-bordered table">
                <tbody>
                  <tr className="bg-slate-100 text-center">
                    <td rowSpan={2}>내역</td>
                    <td rowSpan={2}>이용건수</td>
                    <td colSpan={2}>판매가 [입금 파일 다운로드]</td>
                    <td colSpan={3}>넷가 [송금 파일 다운로드]</td>
                    <td rowSpan={2}>수익</td>
                    <td rowSpan={2}>VAT차감 금액</td>
                    <td rowSpan={2}>PG 수수료</td>
                    <td rowSpan={2}>비고</td>
                  </tr>
                  <tr className="bg-slate-50 text-center">
                    <td>외화($)</td>
                    <td>원화(\)</td>
                    <td>외화($)</td>
                    <td>환율</td>
                    <td>원화(\)</td>
                  </tr>
                  <tr className="text-right">
                    <td className="bg-slate-50 text-center">6월 알라모 반납</td>
                    <td className="text-center">157</td>
                    <td>120,788</td>
                    <td>153,751,865.00</td>
                    <td>102,517</td>
                    <td>1,310.00</td>
                    <td>134,296,864</td>
                    <td>19,455,001</td>
                    <td>17,686,365</td>
                    <td>3,655,054</td>
                    <td className="text-center">-</td>
                  </tr>
                  <tr className="bg-slate-300 text-center font-bold">
                    <td>총합계</td>
                    <td colSpan={10}>14,031,311 </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 오버라이딩 수익 */}
        <div className="mt-8">
          <div className="mt-8 flex items-center">
            <h2 className="mr-auto text-lg font-bold">오버라이딩 수익</h2>
          </div>
          <div className="mt-3">
            <table className="table-bordered table">
              <tbody>
                <tr className="bg-slate-100 text-center">
                  <td rowSpan={2}>내역</td>
                  <td rowSpan={2}>
                    전체
                    <br />
                    이용건수
                  </td>
                  <td rowSpan={2}>
                    TMK
                    <br />
                    이용건수
                  </td>
                  <td colSpan={4}>커미션</td>
                  <td rowSpan={2}>환율</td>
                  <td rowSpan={2}>
                    수수료 원화
                    <br />
                    VAT차감 금액
                  </td>
                  <td rowSpan={2}>
                    수수료
                    <br />
                    입금일
                  </td>
                  <td rowSpan={2}>비고</td>
                </tr>
                <tr className="bg-slate-50 text-center">
                  <td>외화($)</td>
                  <td>송금수수료($)</td>
                  <td>실입금액($)</td>
                  <td>원화(\)</td>
                </tr>
                <tr className="text-right">
                  <td className="bg-slate-50 text-center">
                    7월 알라모 오버라이딩
                  </td>
                  <td className="text-center">474</td>
                  <td className="text-center">442</td>
                  <td>15,610.12</td>
                  <td>42.67</td>
                  <td>15,567.45</td>
                  <td>20,436,948</td>
                  <td rowSpan={3} className="text-center">
                    1,312.80
                  </td>
                  <td>18,579,044</td>
                  <td rowSpan={3} className="text-center">
                    7/28/2022
                  </td>
                  <td className="text-center">-</td>
                </tr>
                <tr className="text-right">
                  <td className="bg-slate-50 text-center">
                    7월 알라모 오버라이딩
                  </td>
                  <td className="text-center">474</td>
                  <td className="text-center">442</td>
                  <td>15,610.12</td>
                  <td>42.67</td>
                  <td>15,567.45</td>
                  <td>20,436,948</td>
                  <td>18,579,044</td>
                  <td className="text-center">-</td>
                </tr>
                <tr className="text-right">
                  <td className="bg-slate-50 text-center">
                    7월 알라모 오버라이딩
                  </td>
                  <td className="text-center">474</td>
                  <td className="text-center">442</td>
                  <td>15,610.12</td>
                  <td>42.67</td>
                  <td>15,567.45</td>
                  <td>20,436,948</td>
                  <td>18,579,044</td>
                  <td className="text-center">-</td>
                </tr>
                <tr className="bg-slate-300 text-right font-bold">
                  <td className="text-center">총 합계</td>
                  <td className="text-center">481</td>
                  <td className="text-center">444</td>
                  <td>16,031.28</td>
                  <td>42.67</td>
                  <td>15,988.61</td>
                  <td>20,989,847.00</td>
                  <td>-</td>
                  <td>19,081,679</td>
                  <td>-</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 여행사 수수료 지급 내역 */}
        <div className="mt-8">
          <div className="mt-8 flex items-center">
            <h2 className="mr-auto text-lg font-bold">
              여행사 수수료 지급 내역
            </h2>
          </div>
          <div className="mt-3">
            <table className="table-bordered table">
              <tbody>
                <tr>
                  <td className="bg-slate-100">여행사 수수료 지급 건수</td>
                  <td>11</td>
                  <td className="bg-slate-100">VAT 차감 수수료</td>
                  <td>1,879,469</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 총 수익 */}
        <div className="mt-8">
          <div className="mt-8 flex items-center">
            <h2 className="mr-auto text-lg font-bold">총 수익</h2>
          </div>
          <div className="mt-3">
            <table className="table-bordered table">
              <tbody>
                <tr className="text-center">
                  <td className="w-72 bg-slate-300 font-bold">
                    총 합계
                    <br />
                    (현지결제+오버라이딩 +지금결제 -여행사 수수료)
                  </td>
                  <td className="text-right">
                    <span className="text-2xl font-bold">71,490,727</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 정산서 마지막 */}
        <div className="mt-8">
          <table className="table-bordered table">
            <tbody>
              <tr className="bg-slate-100 text-center">
                <td rowSpan={2}></td>
                <td colSpan={3}>직판+간판</td>
                <td colSpan={3}>직판</td>
                <td colSpan={3}>간판</td>
              </tr>
              <tr className="bg-slate-50 text-center">
                <td>이용 건수</td>
                <td>판매가 원화</td>
                <td>커미션 원화</td>
                <td>이용 건수</td>
                <td>판매가 원화</td>
                <td>커미션 원화</td>
                <td>이용 건수</td>
                <td>판매가 원화</td>
                <td>커미션 원화</td>
              </tr>
              <tr className="text-right">
                <td className="bg-slate-50 text-center">
                  현지결제-알라모 상반기 수익
                </td>
                <td>159</td>
                <td>146,519,009</td>
                <td>20,012,579</td>
                <td>147</td>
                <td>129,075,453</td>
                <td>17,396,046</td>
                <td>12</td>
                <td>17,443,556</td>
                <td>2,616,533</td>
              </tr>
              <tr className="text-right">
                <td className="bg-slate-50 text-center">
                  현지결제-알라모 하반기 수익
                </td>
                <td>159</td>
                <td>146,519,009</td>
                <td>20,012,579</td>
                <td>147</td>
                <td>129,075,453</td>
                <td>17,396,046</td>
                <td>12</td>
                <td>17,443,556</td>
                <td>2,616,533</td>
              </tr>
              <tr className="text-right">
                <td className="bg-slate-50 text-center">
                  지금결제-알라모 상/하반기 수익
                </td>
                <td>159</td>
                <td>146,519,009</td>
                <td>20,012,579</td>
                <td>147</td>
                <td>129,075,453</td>
                <td>17,396,046</td>
                <td>12</td>
                <td>17,443,556</td>
                <td>2,616,533</td>
              </tr>
              <tr className="bg-slate-300 text-right font-bold">
                <td className="text-center">
                  총 수익
                  <br />
                  (총 합계-수수료)
                </td>
                <td>N/A</td>
                <td>N/A</td>
                <td>71,490,727</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>65,209,541</td>
                <td>N/A</td>
                <td>N/A</td>
                <td>6,281,186</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-6 text-center">
        <button className="btn btn-dark mr-2 mb-2 inline-block w-24">
          프린트
        </button>
        <button className="btn btn-primary mb-2 w-24">PDF 다운로드</button>
      </div>
      {/* END: Page Layout */}

      {/* 결제모달 */}
      <Dialog
        open={Pay}
        onClose={() => {
          setPay(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">Confirm</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setPay(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              결제 하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setPay(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setPay(false)
                }}
                className="btn btn-primary w-24"
              >
                확인
              </button>
            </div>
          </Dialog.Footer>
        </Dialog.Panel>
      </Dialog>

      {/* 정산취소 */}
      <Dialog
        open={PayCancel}
        onClose={() => {
          setPay(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">Confirm</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setPayCancel(false)
              }}
            >
              <Lucide icon="X" className="h-4 w-4" />
            </button>
          </Dialog.Title>
          <Dialog.Description className="gap-4 gap-y-3">
            <div className="text-center text-lg font-bold">
              정산취소 하시겠습니까?
            </div>
          </Dialog.Description>
          <Dialog.Footer>
            <div className="text-center">
              <button
                type="button"
                onClick={() => {
                  setPayCancel(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setPayCancel(false)
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

export default SettlementDoc
