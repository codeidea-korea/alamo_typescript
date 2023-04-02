import { useState } from 'react'
import { Link } from 'react-router-dom'

import Litepicker from '@/base-components/Litepicker'
import Lucide from '@/base-components/Lucide'

function ReservationDetails() {
  const [daterange, setDaterange] = useState('')
  const [daterange2, setDaterange2] = useState('')

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
  return (
    <>
      <div className="intro-y mt-8 flex items-center">
        <h2 className="mr-auto text-lg font-bold">예약 상세</h2>
      </div>
      {/* BEGIN: Page Layout */}
      <div className="intro-y box mt-3 p-3">
        <table className="table-bordered table">
          <tr>
            <td className="bg-slate-100">브랜드</td>
            <td colSpan={5}>
              <select name="" id="" className="form-control w-60">
                <option value="">전체</option>
                <option value="">옵션1</option>
                <option value="">옵션2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="bg-slate-100">기간 1</td>
            <td colSpan={5}>
              <div className="flex items-center">
                <div className="relative w-60">
                  <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
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
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-slate-100">기간 2</td>
            <td colSpan={5}>
              <div className="flex items-center">
                <div className="relative w-60">
                  <div className="absolute flex h-full w-10 items-center justify-center rounded-l border bg-slate-100 text-slate-500">
                    <Lucide icon="Calendar" className="h-4 w-4" />
                  </div>
                  <Litepicker
                    value={daterange2}
                    onChange={setDaterange2}
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
              </div>
            </td>
          </tr>
          <tr>
            <td className="bg-slate-100">예약상태</td>
            <td>
              <div className="flex gap-2">
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-6"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-6"
                  >
                    확정예약
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-7"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-7"
                  >
                    렌티드
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-8"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-8"
                  >
                    취소
                  </label>
                </div>
              </div>
            </td>
            <td className="w-40  whitespace-nowrap bg-slate-100">지불방식</td>
            <td>
              <div className="flex flex-row gap-2">
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-10"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-10"
                  >
                    전체
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-11"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-11"
                  >
                    현지결제
                  </label>
                </div>
                <div className="form-check">
                  <input
                    id="checkbox-display-switch-11"
                    className="form-check-input"
                    type="checkbox"
                    name="horizontal_checkbox_button"
                    value="horizontal-check1"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="checkbox-display-switch-11"
                  >
                    지금결제
                  </label>
                </div>
              </div>
            </td>
            <td className="w-40  whitespace-nowrap bg-slate-100">순위</td>
            <td>
              <select name="" id="" className="form-select">
                <option value="">10</option>
                <option value="">9</option>
              </select>
            </td>
          </tr>
          <tr>
            <td className="bg-slate-100">지역</td>
            <td colSpan={5}>
              <div className="check_table">
                <div className="flex items-center gap-3">
                  <div>
                    <input
                      id="checkbox-switch-5"
                      className="form-check-input"
                      type="checkbox"
                      checked={isAllChecked}
                      onChange={handleCheckAll}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-5"
                    >
                      전체
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-6"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-6"
                    >
                      하와이
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-7"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-7"
                    >
                      미서부
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-8"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-8"
                    >
                      미국본토(미서부제외)
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-9"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-9"
                    >
                      캐나다
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-10"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-10"
                    >
                      독일
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-11"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-11"
                    >
                      스페인
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-12"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-12"
                    >
                      아일랜드
                    </label>
                  </div>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <div>
                    <input
                      id="checkbox-switch-13"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-13"
                    >
                      스위스
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-14"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-14"
                    >
                      영국
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-15"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-15"
                    >
                      오스트리아
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-16"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-16"
                    >
                      호주
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-17"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-17"
                    >
                      뉴질랜드
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-18"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-18"
                    >
                      괌
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-19"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-19"
                    >
                      사이판
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-20"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-20"
                    >
                      필리핀
                    </label>
                  </div>
                  <div>
                    <input
                      id="checkbox-switch-21"
                      className="form-check-input"
                      type="checkbox"
                      onChange={handleCheck}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="checkbox-switch-21"
                    >
                      팔라우
                    </label>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div className="flex-center mt-3 flex gap-3">
        <button className="btn w-24 bg-white">초기화</button>
        <button className="btn btn-primary w-24">조회</button>
      </div>

      {/* 하위테이블 시작 */}
      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-6">
          <div className="box">
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <h2 className="mr-auto text-lg font-bold">
                요금제별 (하와이+미서부+괌+사이판+필리핀+팔라우)
              </h2>
            </div>
            <div className="w-full overflow-x-auto p-3">
              <table className="table-bordered table">
                <tr className="bg-slate-100 text-center">
                  <td rowSpan={2}>순위</td>
                  <td colSpan={3}>
                    (기간 1)
                    <br />
                    2021-01-01~2021-01-30
                  </td>
                  <td colSpan={3}>
                    (기간 2)
                    <br />
                    2022-01-01~2022-01-30
                  </td>
                </tr>
                <tr className="bg-slate-50 text-center">
                  <td>요금제</td>
                  <td>건수</td>
                  <td>비율</td>
                  <td>요금제</td>
                  <td>건수</td>
                  <td>비율</td>
                </tr>
                <tr className="text-center">
                  <td>1</td>
                  <td>요금제명1</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>요금제명1</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>2</td>
                  <td>요금제명1</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>요금제명1</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <h2 className="mr-auto text-lg font-bold">
                대여기간별 (하와이+미서부+괌+사이판+필리핀+팔라우)
              </h2>
            </div>
            <div className="w-full overflow-x-auto p-3">
              <table className="table-bordered table">
                <tr className="bg-slate-100 text-center">
                  <td rowSpan={2}>순위</td>
                  <td colSpan={3}>
                    (기간 1)
                    <br />
                    2021-01-01~2021-01-30
                  </td>
                  <td colSpan={3}>
                    (기간 2)
                    <br />
                    2022-01-01~2022-01-30
                  </td>
                </tr>
                <tr className="bg-slate-50 text-center">
                  <td>기간</td>
                  <td>건수</td>
                  <td>비율</td>
                  <td>기간</td>
                  <td>건수</td>
                  <td>비율</td>
                </tr>
                <tr className="text-center">
                  <td>1</td>
                  <td>3일</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>3일</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>2</td>
                  <td>6일</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>6일</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <h2 className="mr-auto text-lg font-bold">
                차량코드별 (하와이+미서부+괌+사이판+필리핀+팔라우)
              </h2>
            </div>
            <div className="w-full overflow-x-auto p-3">
              <table className="table-bordered table">
                <tr className="bg-slate-100 text-center">
                  <td rowSpan={2}>순위</td>
                  <td colSpan={3}>
                    (기간 1)
                    <br />
                    2021-01-01~2021-01-30
                  </td>
                  <td colSpan={3}>
                    (기간 2)
                    <br />
                    2022-01-01~2022-01-30
                  </td>
                </tr>
                <tr className="bg-slate-50 text-center">
                  <td>차량등급</td>
                  <td>건수</td>
                  <td>비율</td>
                  <td>차량등급</td>
                  <td>건수</td>
                  <td>비율</td>
                </tr>
                <tr className="text-center">
                  <td>1</td>
                  <td>풀사이즈</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>풀사이즈</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>2</td>
                  <td>중형</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>중형</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <h2 className="mr-auto text-lg font-bold">
                예약유형 (하와이+미서부+괌+사이판+필리핀+팔라우)
              </h2>
            </div>
            <div className="w-full overflow-x-auto p-3">
              <table className="table-bordered table">
                <tr className="bg-slate-100 text-center">
                  <td rowSpan={2}>기타구분</td>
                  <td colSpan={2}>
                    (기간 1)
                    <br />
                    2021-01-01~2021-01-30
                  </td>
                  <td colSpan={2}>
                    (기간 2)
                    <br />
                    2022-01-01~2022-01-30
                  </td>
                </tr>
                <tr className="bg-slate-50 text-center">
                  <td>건수</td>
                  <td>비율</td>
                  <td>건수</td>
                  <td>비율</td>
                </tr>
                <tr className="text-center">
                  <td>간판</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>직판</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>회원</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>비회원</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>PC</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>모바일</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <h2 className="mr-auto text-lg font-bold">
                대여지점별 (하와이+미서부+괌+사이판+필리핀+팔라우)
              </h2>
            </div>
            <div className="w-full overflow-x-auto p-3">
              <table className="table-bordered table">
                <tr className="bg-slate-100 text-center">
                  <td rowSpan={2}>순위</td>
                  <td colSpan={3}>
                    (기간 1)
                    <br />
                    2021-01-01~2021-01-30
                  </td>
                  <td colSpan={3}>
                    (기간 2)
                    <br />
                    2022-01-01~2022-01-30
                  </td>
                </tr>
                <tr className="bg-slate-50 text-center">
                  <td>차량등급</td>
                  <td>건수</td>
                  <td>비율</td>
                  <td>차량등급</td>
                  <td>건수</td>
                  <td>비율</td>
                </tr>
                <tr className="text-center">
                  <td>1</td>
                  <td>풀사이즈</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>풀사이즈</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>2</td>
                  <td>중형</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>중형</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div className="col-span-6">
          <div className="box">
            <div className="flex flex-row border-b border-slate-200/60 p-3">
              <h2 className="mr-auto text-lg font-bold">
                대여지점기간별 (하와이+미서부+괌+사이판+필리핀+팔라우)
              </h2>
            </div>
            <div className="w-full overflow-x-auto p-3">
              <table className="table-bordered table">
                <tr className="bg-slate-100 text-center">
                  <td rowSpan={2}>순위</td>
                  <td colSpan={3}>
                    (기간 1)
                    <br />
                    2021-01-01~2021-01-30
                  </td>
                  <td colSpan={3}>
                    (기간 2)
                    <br />
                    2022-01-01~2022-01-30
                  </td>
                </tr>
                <tr className="bg-slate-50 text-center">
                  <td>대여지점명</td>
                  <td>건수</td>
                  <td>비율</td>
                  <td>대여지점명</td>
                  <td>건수</td>
                  <td>비율</td>
                </tr>
                <tr className="text-center">
                  <td>1</td>
                  <td>로스엔젤레스 공항</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>로스엔젤레스 공항</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
                <tr className="text-center">
                  <td>2</td>
                  <td>코나 공항</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                  <td>코나 공항</td>
                  <td>3,423</td>
                  <td>10% (203)</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* END: Page Layout */}
    </>
  )
}

export default ReservationDetails
