import { Link } from 'react-router-dom'

import { Tab } from '@/base-components/Headless'

const Calculate = () => {
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
                <button className="block cursor-pointer appearance-none rounded-t-md border border-transparent px-5 py-2.5 text-base font-bold text-slate-700 hover:bg-slate-100 dark:border-transparent dark:text-slate-400 dark:hover:border-transparent dark:hover:bg-darkmode-400">
                  여행사 세금계산서 요청
                </button>
              </Link>
            </Tab>
            <Tab className="flex-none	">
              <Link to="/calculate/settlement">
                <button className="block cursor-pointer appearance-none rounded-t-md border border-slate-200 border-b-transparent bg-white px-5 py-2.5 text-base font-bold text-slate-800 dark:border-transparent dark:border-x-darkmode-400 dark:border-t-darkmode-400 dark:border-b-darkmode-600 dark:bg-transparent dark:text-white">
                  정산 결재
                </button>
              </Link>
            </Tab>
          </Tab.List>
        </Tab.Group>
      </div>

      {/* BEGIN: Page Layout */}
      <div className="intro-y box p-3">
        <div className="overflow-x-auto">
          <table className="table-bordered table-hover table">
            <thead className="text-center">
              <tr className="bg-slate-100">
                <th rowSpan={2}>번호</th>
                <th rowSpan={2}>정산서 명</th>
                <th colSpan={5}>정산 결재 진행 상태</th>
                <th rowSpan={2}>최초정산자</th>
              </tr>
              <tr className="bg-slate-50">
                <th>담당</th>
                <th>경영팀</th>
                <th>팀장</th>
                <th>이사</th>
                <th>대표이사</th>
              </tr>
            </thead>
            <tbody className="text-center">
              <tr>
                <td>133</td>
                <td>
                  <Link
                    to="/calculate/settlement/detail"
                    className="text-primary underline"
                  >
                    2022년 01월 렌터카 정산서
                  </Link>
                </td>
                <td>정산완료</td>
                <td>정산완료</td>
                <td className="text-danger">정산중</td>
                <td className="text-primary">정산취소</td>
                <td className="text-primary">정산대기</td>
                <td>홍길동1</td>
              </tr>
              <tr>
                <td>133</td>
                <td>
                  <Link
                    to="/calculate/settlement/detail"
                    className="text-primary underline"
                  >
                    2022년 01월 렌터카 정산서
                  </Link>
                </td>
                <td>정산완료</td>
                <td>정산완료</td>
                <td className="text-danger">정산중</td>
                <td className="text-primary">정산취소</td>
                <td className="text-primary">정산대기</td>
                <td>홍길동1</td>
              </tr>
              <tr>
                <td>133</td>
                <td>
                  <Link
                    to="/calculate/settlement/detail"
                    className="text-primary underline"
                  >
                    2022년 01월 렌터카 정산서
                  </Link>
                </td>
                <td>정산완료</td>
                <td>정산완료</td>
                <td className="text-danger">정산중</td>
                <td className="text-primary">정산취소</td>
                <td className="text-primary">정산대기</td>
                <td>홍길동1</td>
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
      {/* END: Page Layout */}
    </>
  )
}

export default Calculate
