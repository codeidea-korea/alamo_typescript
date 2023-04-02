import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Tab } from '@/base-components/Headless'
import { Dialog } from '@/base-components/Headless'
import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

interface Props {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const AccountMng = () => {
  const [date, setDate] = useState('')
  const [date2, setDate2] = useState('')
  const [date3, setDate3] = useState('')
  const [date4, setDate4] = useState('')
  const [save, setSave] = useState(false)

  const [Save2, setSave2] = useState(false)

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
                <button className="block cursor-pointer appearance-none rounded-t-md border border-slate-200 border-b-transparent bg-white px-5 py-2.5 text-base font-bold text-slate-800 dark:border-transparent dark:border-x-darkmode-400 dark:border-t-darkmode-400 dark:border-b-darkmode-600 dark:bg-transparent dark:text-white">
                  입금일/송금일/환율 관리
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none	">
              <Link to="/calculate/tax">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
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
        <table className="table-bordered table">
          <tbody>
            <tr>
              <td className="w-40 bg-slate-100 text-center">정산년월</td>
              <td>
                <select
                  className="form-select w-52"
                  aria-label="Default select example"
                >
                  <option>202209</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-6 text-blue-600">
          ※ 환율정보는 입금일/송금일 선택 시 하나은행 최초 고시율 매매기준율
          환율 기준으로 보여집니다.
        </p>
        <div className="mt-3 grid grid-cols-12 gap-3">
          <div className="intro-y col-span-7">
            <table className="table-bordered table-sm table">
              <colgroup>
                <col width="17%" />
                <col width="17%" />
                <col width="20%" />
                <col width="20%" />
                <col width="30%" />
              </colgroup>
              <tbody>
                <tr className="bg-slate-100 text-center">
                  <td className="bg-slate-300">구분</td>
                  <td className="bg-slate-100">정산코드</td>
                  <td className="bg-slate-100">입금일</td>
                  <td className="bg-slate-100">송금일</td>
                  <td className="bg-slate-100">정산환율(하나은행 환율 기준)</td>
                </tr>
                <tr>
                  <td className="bg-slate-300 text-center">지금결제</td>
                  <td className="text-center">20220923</td>
                  <td className="text-center">-</td>
                  <td className="text-center">
                    <div className="relative mx-auto w-36">
                      <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                        <Lucide icon="Calendar" className="h-4 w-4" />
                      </div>
                      <Litepicker
                        value={date}
                        onChange={setDate}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                        className="form-control pl-12"
                      />
                    </div>
                  </td>
                  <td>
                    {!save ? (
                      '날짜 선택 시 자동 호출됨'
                    ) : (
                      <span className="text-blue-500">USD 14,008.00</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td rowSpan={2} className="bg-slate-300 text-center">
                    현지결제
                  </td>
                  <td className="text-center">20220923</td>
                  <td className="text-center">
                    <div className="relative mx-auto w-36">
                      <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                        <Lucide icon="Calendar" className="h-4 w-4" />
                      </div>
                      <Litepicker
                        value={date2}
                        onChange={setDate2}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                        className="form-control pl-12"
                      />
                    </div>
                  </td>
                  <td className="text-center">-</td>
                  <td>
                    {!save ? (
                      '날짜 선택 시 자동 호출됨'
                    ) : (
                      <span className="text-blue-500">USD 14,008.00</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="text-center">20220923</td>
                  <td className="text-center">
                    <div className="relative mx-auto w-36">
                      <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                        <Lucide icon="Calendar" className="h-4 w-4" />
                      </div>
                      <Litepicker
                        value={date3}
                        onChange={setDate3}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                        className="form-control pl-12"
                      />
                    </div>
                  </td>
                  <td className="text-center">-</td>
                  <td>
                    {!save ? (
                      '날짜 선택 시 자동 호출됨'
                    ) : (
                      <span className="text-blue-500">USD 14,008.00</span>
                    )}
                  </td>
                </tr>
                <tr>
                  <td className="bg-slate-300 text-center">오버라이딩</td>
                  <td className="text-center">20220923</td>
                  <td className="text-center">
                    <div className="relative mx-auto w-36">
                      <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500 dark:border-darkmode-800 dark:bg-darkmode-700 dark:text-slate-400">
                        <Lucide icon="Calendar" className="h-4 w-4" />
                      </div>
                      <Litepicker
                        value={date4}
                        onChange={setDate4}
                        options={{
                          autoApply: false,
                          showWeekNumbers: true,
                          dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: true,
                            years: true,
                          },
                        }}
                        className="form-control pl-12"
                      />
                    </div>
                  </td>
                  <td className="text-center">-</td>
                  <td>
                    {!save ? (
                      '날짜 선택 시 자동 호출됨'
                    ) : (
                      <span className="text-blue-500">USD 14,008.00</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="intro-y col-span-5">
            <table className="table-bordered table-sm table">
              <colgroup>
                <col width="15%" />
                <col width="17%" />
                <col width="50%" />
              </colgroup>
              <tbody>
                <tr>
                  <td
                    rowSpan={4}
                    className="bg-blue-600 text-center text-white"
                  >
                    안내
                  </td>
                  <td className="bg-slate-100 text-center">항목명</td>
                  <td className="bg-slate-100 text-center">비고</td>
                </tr>
                <tr>
                  <td className="bg-slate-100">지금결제</td>
                  <td>
                    송금일에 판매가-커미션 밴 넷가만 송금 처리 되며 월{' '}
                    <span className="text-blue-500">1</span>회 송급됩니다.
                  </td>
                </tr>
                <tr>
                  <td className="bg-slate-100">현지결제</td>
                  <td>
                    입금일에 커미션만 입금처리 되며{' '}
                    <span className="font-bold text-primary">월 2회</span>{' '}
                    입금됩니다.
                    <br />- 최종 정산서에는 [입금액 - 은행 수수료]로 처리됩니다.
                  </td>
                </tr>
                <tr>
                  <td className="bg-slate-100">오버라이딩</td>
                  <td>
                    입금일에 TMK 예약 및 한국 국적으로 렌탈된 모든 예약 건에
                    대해 추가 5%의 커미션이 입금 처리 되며 월 1회 입금됩니다
                    <br />- 최종 정산서에는 [입금액 - 은행수수료]로 처리됩니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center">
        <button className="btn mr-2 mb-2 w-24 bg-white">취소</button>
        <button
          className="btn btn-primary mb-2 w-24"
          onClick={() => setSave2(true)}
        >
          저장
        </button>
      </div>

      {/* 저장 모달 */}
      <Dialog
        open={Save2}
        onClose={() => {
          setSave2(false)
        }}
      >
        <Dialog.Panel>
          <Dialog.Title>
            <h2 className="mr-auto text-base font-medium">Confirm</h2>
            <button
              className="btn btn-rounded-secondary hidden p-1 sm:flex"
              onClick={() => {
                setSave2(false)
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
                  setSave2(false)
                }}
                className="btn btn-white mr-2 w-24"
              >
                취소
              </button>
              <button
                type="button"
                onClick={() => {
                  setSave2(false)
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

export default AccountMng
